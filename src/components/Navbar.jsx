import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-base-100 border-b border-base-300">
      <div className="navbar mx-auto max-w-6xl px-4 sm:px-6">
        <div className="navbar-start">
          <Link href="/" className="text-lg tracking-tight text-primary">
            <span className="font-extrabold">Keen</span>
            <span className="font-semibold">Keeper</span>
          </Link>
        </div>

        <nav className="navbar-end gap-1">
          {/* Active */}
          <Link href="/" className="btn btn-primary btn-sm gap-2 rounded-md font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
            </svg>
            Home
          </Link>

          <Link href="/timeline" className="btn btn-ghost btn-sm gap-2 rounded-md font-medium text-base-content/70">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
            </svg>
            Timeline
          </Link>

          <Link href="/stats" className="btn btn-ghost btn-sm gap-2 rounded-md font-medium text-base-content/70">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m7 15 4-4 3 3 5-6" />
            </svg>
            Stats
          </Link>
        </nav>
      </div>
    </header>
  );
}