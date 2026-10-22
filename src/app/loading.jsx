export default function LoadingPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      {/* Logo */}
      <h2 className="animate-pulse text-4xl tracking-tight text-primary sm:text-5xl">
        <span className="font-extrabold">Keen</span>
        <span className="font-semibold">Keeper</span>
      </h2>

      {/* Bouncing dots */}
      <div className="mt-6 flex items-center gap-2">
        <span className="h-3 w-3 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></span>
        <span className="h-3 w-3 animate-bounce rounded-full bg-secondary [animation-delay:-0.15s]"></span>
        <span className="h-3 w-3 animate-bounce rounded-full bg-accent"></span>
      </div>

      <p className="mt-5 text-xs text-base-content/60">
        Gathering your meaningful connections…
      </p>

      {/* Skeleton cards */}
      <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="card bg-base-100 shadow-sm">
            <div className="card-body items-center gap-3 px-4 py-6">
              <div className="skeleton h-[72px] w-[72px] shrink-0 rounded-full"></div>
              <div className="skeleton h-4 w-24"></div>
              <div className="skeleton h-3 w-14"></div>
              <div className="skeleton h-5 w-16 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}