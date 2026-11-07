import { useEffect, useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateColor, updateTheme } from "../redux/action";
import { content } from "../content";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = content.navbar.map((n) => n.url.slice(1));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    dispatch(updateColor(next));
    dispatch(updateTheme(next));
  };

  const ThemeBtn = (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-full pf-border flex items-center justify-center transition hover:rotate-12 hover:scale-110"
      style={{ background: "var(--card)" }}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav
        className="mx-auto max-w-5xl flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500"
        style={{
          background: scrolled
            ? "color-mix(in srgb, var(--bg) 70%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          border: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        }}
      >
        <a href="#top" className="text-xl font-black tracking-tight">
          {content.brandname}
          <span className="pf-grad-text">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {content.navbar.map((item) => {
            const on = active === item.url.slice(1);
            return (
              <li key={item.url}>
                <a
                  href={item.url}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                  style={{
                    background: on ? "var(--card-hover)" : "transparent",
                    color: on ? "var(--fg)" : "var(--muted)",
                  }}
                >
                  {item.listname}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={content.contact.resumeUrl}
            download
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold pf-border transition hover:-translate-y-0.5"
            style={{ background: "var(--card)" }}
          >
            Resume
          </a>
          {ThemeBtn}
          <button
            className="md:hidden text-2xl"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <CgClose /> : <CgMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="md:hidden mx-auto max-w-5xl mt-2 rounded-3xl p-3 pf-border"
          style={{
            background: "color-mix(in srgb, var(--bg) 92%, transparent)",
            backdropFilter: "blur(16px)",
          }}
        >
          {content.navbar.map((item) => (
            <a
              key={item.url}
              href={item.url}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-2xl font-semibold"
            >
              {item.listname}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
