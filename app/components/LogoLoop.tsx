"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
  type ReactNode,
  type CSSProperties,
  type DependencyList,
} from "react";

export type LogoItem =
  | {
      node: ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === "number" ? `${value}px` : value ?? undefined;

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

/** ✅ Resize observer hook (cross-browser safe) */
const useResizeObserver = (
  callback: () => void,
  elements: Array<RefObject<Element | null>>,
  dependencies: DependencyList
) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

// Only run this effect in the browser
if (typeof window === 'undefined') {
  return;
}

// Check safely if ResizeObserver exists
if (typeof (window as Window & typeof globalThis).ResizeObserver === 'undefined') {
  const handleResize = () => callback();
  window.addEventListener('resize', handleResize);
  callback();
  return () => window.removeEventListener('resize', handleResize);
}

    const observers = elements
      .map((ref) => {
        if (!ref.current) return null;
        const observer = new ResizeObserver(callback);
        observer.observe(ref.current);
        return observer;
      })
      .filter(Boolean);

    callback();

    return () => {
      observers.forEach((observer) =>
        (observer as ResizeObserver).disconnect()
      );
    };
  }, dependencies);
};

/** ✅ Image loader hook (waits for all logos to load before measuring) */
const useImageLoader = (
  seqRef: RefObject<HTMLUListElement | null>,
  onLoad: () => void,
  dependencies: DependencyList
) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll("img") ?? [];
    if (images.length === 0) {
      onLoad();
      return;
    }

    let remaining = images.length;

    const handleLoad = () => {
      remaining -= 1;
      if (remaining === 0) onLoad();
    };

    images.forEach((img) => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        handleLoad();
      } else {
        htmlImg.addEventListener("load", handleLoad, { once: true });
        htmlImg.addEventListener("error", handleLoad, { once: true });
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleLoad);
      });
    };
  }, dependencies);
};

/** ✅ Infinite scroll animation */
const useAnimationLoop = (
  trackRef: RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  isHovered: boolean,
  pauseOnHover: boolean
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestamp = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      track.style.transform = "translate3d(0,0,0)";
      return;
    }

    const animate = (time: number) => {
      if (lastTimestamp.current === null) lastTimestamp.current = time;
      const dt = Math.max(0, time - lastTimestamp.current) / 1000;
      lastTimestamp.current = time;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const easing = 1 - Math.exp(-dt / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easing;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * dt;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;
        track.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimestamp.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover]);
};

export const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 120,
    direction = "left",
    width = "100%",
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = "Partner logos",
    className,
    style,
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLUListElement>(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setHovered] = useState(false);

    const targetVelocity = useMemo(() => {
      const base = Math.abs(speed);
      const dir = direction === "left" ? 1 : -1;
      const sign = speed < 0 ? -1 : 1;
      return base * dir * sign;
    }, [speed, direction]);

const updateDimensions = useCallback(() => {
  const containerW = containerRef.current?.clientWidth ?? 0;
  const seqW = seqRef.current?.getBoundingClientRect?.().width ?? 0;

  if (seqW > 0 && containerW > 0) {
    const raw = Math.ceil(containerW / seqW) + ANIMATION_CONFIG.COPY_HEADROOM;

    // ✅ Always a number
    const copies: number = Math.max(
      ANIMATION_CONFIG.MIN_COPIES,
      isFinite(raw) && raw > 0 ? raw : ANIMATION_CONFIG.MIN_COPIES
    );

    setSeqWidth(Math.ceil(seqW));
    // ✅ Make sure setter is recognized as Dispatch<SetStateAction<number>>
    (setCopyCount as React.Dispatch<React.SetStateAction<number>>)(copies);
  }
}, []);
    useResizeObserver(
      updateDimensions,
      [containerRef, seqRef],
      [logos, gap, logoHeight]
    );
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
    useAnimationLoop(
      trackRef,
      targetVelocity,
      seqWidth,
      isHovered,
      pauseOnHover
    );

    const cssVars = useMemo(
      () =>
        ({
          "--logoloop-gap": `${gap}px`,
          "--logoloop-logoHeight": `${logoHeight}px`,
          ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
        } as CSSProperties),
      [gap, logoHeight, fadeOutColor]
    );

    const rootClass = useMemo(
      () =>
        cx(
          "relative overflow-x-hidden group",
          "[--logoloop-gap:32px]",
          "[--logoloop-logoHeight:28px]",
          "[--logoloop-fadeColorAuto:#ffffff]",
          "dark:[--logoloop-fadeColorAuto:#0b0b0b]",
          scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]",
          className
        ),
      [scaleOnHover, className]
    );

    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        const isNode = "node" in item;

        const content = isNode ? (
          <span
            className={cx(
              "inline-flex items-center",
              scaleOnHover &&
                "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-110"
            )}
          >
            {item.node}
          </span>
        ) : (
          <img
            className={cx(
              "h-[var(--logoloop-logoHeight)] w-auto block object-contain",
              "pointer-events-none select-none",
              scaleOnHover &&
                "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-110"
            )}
            src={item.src}
            alt={item.alt ?? ""}
            width={item.width}
            height={item.height}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        );

        const label = isNode
          ? item.ariaLabel ?? item.title
          : item.alt ?? item.title;
        const wrapper = item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label || "logo link"}
            className="inline-flex items-center no-underline hover:opacity-80 focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2"
          >
            {content}
          </a>
        ) : (
          content
        );

        return (
          <li
            key={key}
            role="listitem"
            className={cx(
              "flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]",
              scaleOnHover && "overflow-visible group/item"
            )}
          >
            {wrapper}
          </li>
        );
      },
      [scaleOnHover]
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, i) => (
          <ul
            key={`copy-${i}`}
            className="flex items-center"
            aria-hidden={i > 0}
            ref={i === 0 ? seqRef : undefined}
          >
            {logos.map((logo, j) => renderLogoItem(logo, `${i}-${j}`))}
          </ul>
        )),
      [copyCount, logos, renderLogoItem]
    );

    return (
      <div
        ref={containerRef}
        className={rootClass}
        style={{ width: toCssLength(width) ?? "100%", ...cssVars, ...style }}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={() => pauseOnHover && setHovered(true)}
        onMouseLeave={() => pauseOnHover && setHovered(false)}
      >
        {fadeOut && (
          <>
            <div
              aria-hidden
              className={cx(
                "pointer-events-none absolute inset-y-0 left-0 z-[1]",
                "w-[clamp(24px,8%,120px)]",
                "bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
              )}
            />
            <div
              aria-hidden
              className={cx(
                "pointer-events-none absolute inset-y-0 right-0 z-[1]",
                "w-[clamp(24px,8%,120px)]",
                "bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
              )}
            />
          </>
        )}

        <div
          ref={trackRef}
          className="flex w-max will-change-transform select-none motion-reduce:transform-none"
        >
          {logoLists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = "LogoLoop";

export default LogoLoop;
