import Reveal from "../components/Reveal";
import { content } from "../content";

const fmt = (d: Date) =>
  d.toLocaleDateString("en-IN", { month: "short", year: "numeric" });

const Certificates = () => (
  <section id="certificates" className="relative px-5 py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
      <Reveal>
        <p className="pf-section-label">05 — Certificates</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight">
          {content.certificates.heading}
        </h2>
        <p className="pf-muted mt-3 md:text-lg">
          {content.certificates.subheading}
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {content.certificates.certiList.map((c, i) => (
          <Reveal key={c.certiTitle} delay={i * 120}>
            <a
              href={c.certiImg}
              target="_blank"
              rel="noreferrer"
              className="pf-card block overflow-hidden group hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={c.certiImg}
                  alt={c.certiTitle}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex items-center justify-between gap-3">
                <p className="font-bold">{c.certiTitle}</p>
                <span className="pf-chip whitespace-nowrap">
                  {fmt(c.certidate)}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
