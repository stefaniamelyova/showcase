export default function Page() {
  return (
    <main className="bg-black">
      <div className="absolute -top-30 -left-30 bg-pink-500 text-white p-2 rounded-br-lg h-96 w-96 opacity-90 blur-[150px]"></div>
      <div className="overflow-hidden overscroll-none">
        <div className="absolute -bottom-30 -right-30 bg-pink-500 text-white p-2 rounded-br-lg h-96 w-96 opacity-90 blur-[150px]"></div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1>Test Page</h1>
        <h1>Test Page</h1>
        <h1>Test Page</h1>
        <h1>Test Page</h1>
        <h1>Test Page</h1>
        <h1>Test Page</h1>
      </div>
    </main>
  );
}
