import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center px-4 py-16 sm:px-6">
      <div className="card w-full max-w-lg bg-base-100 shadow-sm">
        <div className="card-body items-center gap-0 px-6 py-12 text-center">
          <p className="text-7xl font-extrabold tracking-tight text-primary sm:text-8xl">
            4<span className="text-secondary">0</span>4
          </p>

          <span className="badge mt-5 h-6 border-0 bg-accent px-3 text-xs font-normal uppercase text-neutral">
            Page not found
          </span>

          <h1 className="mt-5 text-2xl font-bold tracking-tight text-neutral">
            This connection seems to have drifted away
          </h1>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-base-content/60">
            The page you’re looking for doesn’t exist or may have been moved. Let’s get you
            back to the friends who matter most.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn btn-primary btn-sm gap-2 rounded-md font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}