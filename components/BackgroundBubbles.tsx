// app/components/BackgroundBubbles.tsx
export default function BackgroundBubbles() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Top-left pink glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#D30082] rounded-full blur-[120px] opacity-90" />

      {/* Center-right magenta/purple mix */}
      <div className="absolute top-[20%] right-[-15%] w-[50vw] h-[50vw] bg-[#6B0B5E] rounded-full blur-[160px] opacity-60" />

      {/* Bottom-left softer bubble */}
      <div className="absolute bottom-[-10%] left-[10%] w-[45vw] h-[45vw] bg-[#FF66C4] rounded-full blur-[180px] opacity-40" />
    </div>
  );
}
