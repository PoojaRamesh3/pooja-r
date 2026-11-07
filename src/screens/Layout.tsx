import { useEffect, useRef, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { content } from "../content";
import "../styles/Portfolio.css";
import Navbar from "../components/Navbar";
import Experience from "./Experiences";
import Hero from "../components/Hero";

const Layout = () => {
  const theme = useSelector((state: any) => state.theme);
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    // Write to the small elements directly (not to a CSS variable on the root),
    // so scrolling never forces the whole page to recalculate styles.
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current)
        progressRef.current.style.transform = `scaleX(${p})`;
      setShowTop(window.scrollY > 500);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    // Cursor glow only on devices with a real mouse.
    const hasMouse = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    let mx = 0;
    let my = 0;
    let moving = false;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!moving) {
        moving = true;
        requestAnimationFrame(() => {
          moving = false;
          if (glowRef.current)
            glowRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
        });
      }
    };

    // Smooth-scroll for in-page links WITHOUT adding "#section" to the URL.
    const cleanUrl = () =>
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      e.preventDefault();
      if (!id || id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
      else
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      cleanUrl();
    };
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView();
        cleanUrl();
      }, 100);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (hasMouse)
      window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div
      className="pf-root min-h-screen"
      data-theme={theme === "light" ? "light" : "dark"}
    >
      <div ref={progressRef} className="pf-progress" />
      <div ref={glowRef} className="pf-glow hidden md:block" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Certificates /> */}
        <Contact />
      </main>
      <footer
        className="relative z-10 py-8 text-center text-sm pf-muted"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {content.footer.conclusion}
      </footer>
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-6 bottom-6 z-40 w-11 h-11 rounded-full pf-border flex items-center justify-center text-2xl transition-all duration-300 ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ background: "var(--card-hover)" }}
      >
        <BiUpArrowAlt />
      </button>
    </div>
  );
};

export default Layout;
