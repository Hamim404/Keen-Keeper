"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  // Helper to dynamically set classes based on the current active page
  const getLinkClass = (path) => {
    const baseClass = "btn btn-sm border-none gap-2 rounded-md font-medium";
    const activeClass = pathName === path ? "btn-primary text-white" : "btn-ghost text-base-content/70";
    return `${baseClass} ${activeClass}`;
  };

  return (
    <header className="bg-base-100 border-b border-base-300 w-full">
      <div className="navbar mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Left Side: Logo & Mobile Hamburger Menu */}
        <div className="navbar-start gap-2">
          {/* Mobile Dropdown (Visible only on mobile/tablet) */}
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border border-base-200 gap-1">
              <li>
                <Link href="/" className={pathName === "/" ? "active" : ""}>Home</Link>
              </li>
              <li>
                <Link href="/timeline" className={pathName === "/timeline" ? "active" : ""}>Timeline</Link>
              </li>
              <li>
                <Link href="/stats" className={pathName === "/stats" ? "active" : ""}>Stats</Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="text-lg tracking-tight text-primary flex items-center">
            <Image 
              src="/assets/logo.png" 
              width={120} 
              height={100} 
              alt="Keen-Keeper logo" 
              priority
            />
          </Link>
        </div>

        {/* Right Side: Desktop Navigation Links (Hidden on mobile) */}
        <nav className="navbar-end gap-1 hidden md:flex">
          {/* Home Link */}
          <Link href="/" className={getLinkClass("/")}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
            </svg>
            Home
          </Link>

          {/* Timeline Link */}
          <Link href="/timeline" className={getLinkClass("/timeline")}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
            </svg>
            Timeline
          </Link>

          {/* Stats Link */}
          <Link href="/stats" className={getLinkClass("/stats")}>
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
