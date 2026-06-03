import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5">
      <Link to="/" className="flex items-center gap-2.5 text-foreground text-xl font-semibold tracking-tight">
        <img src="/aicxagent.png" alt="AI CX Agent" className="h-9 w-9 rounded-lg object-contain" />
        AI CX Agent
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className={`text-sm uppercase tracking-widest transition-colors ${
              pathname === to
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      <a
        href="https://aibpo.vercel.app/dashboard"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center rounded-lg bg-nav-button hover:bg-nav-button/80 active:scale-[0.97] transition-all text-foreground uppercase text-xs tracking-widest px-6 py-2.5 font-medium"
      >
        Login
      </a>
    </nav>
  );
}
