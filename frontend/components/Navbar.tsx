const NAV_LINKS = ["Home", "Jobs", "About", "Blog"];

export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-lg font-bold tracking-tight text-white">JPS</span>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-white/70 hover:text-white">
            Login
          </a>
          <a
            href="#"
            className="rounded-md border border-white/30 px-4 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}