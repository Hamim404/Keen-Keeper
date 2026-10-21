import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-content">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-16 pb-8 text-center sm:px-6">
        <h2 className="text-5xl tracking-tight sm:text-6xl">
          <span className="font-extrabold">Keen</span>
          <span className="font-semibold">Keeper</span>
        </h2>

        <p className="mt-5 max-w-md text-xs text-white/70">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        <h3 className="mt-8 text-sm font-medium">Social Links</h3>
        <div className="mt-3 flex items-center gap-3">
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="btn btn-circle btn-sm border-0 bg-white text-primary hover:bg-white/90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="btn btn-circle btn-sm border-0 bg-white text-primary hover:bg-white/90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.2C16.7 2.2 15.7 2 14.6 2 12.2 2 10.5 3.5 10.5 6.2v2.3H8v3.5h2.5V22H14v-10h2.7l.4-3.5H14Z" />
            </svg>
          </a>
          {/* X */}
          <a href="#" aria-label="X" className="btn btn-circle btn-sm border-0 bg-white text-primary hover:bg-white/90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.1L5.9 22H3l7-8L2.5 2h6.1l4.2 5.6L18.2 2Zm-1 18h1.6L7.9 3.9H6.2L17.2 20Z" />
            </svg>
          </a>
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}