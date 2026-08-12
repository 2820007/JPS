export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 sm:flex-row">
        <span className="text-sm font-bold text-white">JPS</span>
        <span>© {new Date().getFullYear()} JPS. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white/70">
            Privacy
          </a>
          <a href="#" className="hover:text-white/70">
            Terms
          </a>
          <a href="#" className="hover:text-white/70">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}