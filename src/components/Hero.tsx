import { FiArrowRight, FiDownload } from "react-icons/fi";
import { content } from "../content";
import { useCountUp, useInView, useTyper } from "../hooks/useportfolio";

const Stat = ({ value, suffix, label, start }: any) => {
  const n = useCountUp(value, start);
  return (
    <div className="text-center md:text-left">
      <div className="text-3xl md:text-4xl font-black">
        {n}
        <span className="pf-grad-text">{suffix}</span>
      </div>
      <div className="pf-muted text-sm mt-1">{label}</div>
    </div>
  );
};

const Hero = () => {
  const role = useTyper(content.hero.roles);
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-5 overflow-hidden"
    >
      <div className="pf-grid-bg" />
      <div className="pf-blob pf-blob-1" />
      <div className="pf-blob pf-blob-2" />
      <div className="pf-blob pf-blob-3" />

      <div className="relative z-10 mx-auto max-w-5xl w-full">
        <div
          className="pf-fade-up inline-flex items-center gap-2 pf-chip"
          style={{ ["--d" as any]: "100ms" }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "#22c55e", boxShadow: "0 0 10px #22c55e" }}
          />
          {content.hero.eyebrow}
        </div>

        <p
          className="pf-fade-up mt-8 text-lg md:text-xl pf-muted font-semibold"
          style={{ ["--d" as any]: "250ms" }}
        >
          {content.hero.greeting}
        </p>

        <h1 className="mt-3 text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
          {content.hero.lines.map((line, i) => (
            <span className="pf-line" key={i}>
              <span
                className={
                  i === content.hero.lines.length - 1 ? "pf-grad-text" : ""
                }
                style={{ ["--d" as any]: `${400 + i * 160}ms` }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p
          className="pf-fade-up mt-6 text-xl md:text-2xl font-semibold h-9"
          style={{ ["--d" as any]: "950ms" }}
        >
          <span style={{ color: "var(--a2)" }}>{role}</span>
          <span className="pf-caret" />
        </p>

        <p
          className="pf-fade-up mt-5 max-w-2xl pf-muted text-base md:text-lg"
          style={{ ["--d" as any]: "1100ms" }}
        >
          {content.hero.sub}
        </p>

        <div
          className="pf-fade-up mt-9 flex flex-wrap gap-4"
          style={{ ["--d" as any]: "1250ms" }}
        >
          <a href="#projects" className="pf-btn pf-btn-primary">
            View my work <FiArrowRight />
          </a>
          <a href="#contact" className="pf-btn pf-btn-ghost">
            Get in touch
          </a>
          <a
            href={content.contact.resumeUrl}
            download
            className="pf-btn pf-btn-ghost"
          >
            <FiDownload /> Resume
          </a>
        </div>

        <div
          ref={ref}
          className="pf-fade-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8"
          style={{
            ["--d" as any]: "1400ms",
            borderTop: "1px solid var(--border)",
          }}
        >
          {content.stats.map((s) => (
            <Stat key={s.label} {...s} start={inView} />
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full pf-border justify-center pt-2"
      >
        <span
          className="pf-scroll-dot w-1 h-2 rounded-full"
          style={{ background: "var(--a2)" }}
        />
      </a>
    </section>
  );
};

export default Hero;
