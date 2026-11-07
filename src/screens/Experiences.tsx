import Reveal from "../components/Reveal";
import { content } from "../content";

const Experience = () => (
  <section id="experience" className="relative px-5 py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
      <Reveal>
        <p className="pf-section-label">03 — Experience</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight">
          {content.experiences.heading}
        </h2>
        <p className="pf-muted mt-3 md:text-lg">
          {content.experiences.subheading}
        </p>
      </Reveal>

      <div className="pf-timeline mt-12 space-y-8">
        {content.experiences.list.map((job, i) => (
          <div key={i} className="relative pl-12">
            <span className="pf-dot" />
            <Reveal delay={i * 120}>
              <div className="pf-card p-6 md:p-8 hover:-translate-y-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <p className="font-semibold" style={{ color: "var(--a2)" }}>
                      {job.company}
                    </p>
                  </div>
                  <span className="pf-chip">{job.period}</span>
                </div>
                <ul className="mt-4 space-y-2 pf-muted list-disc pl-5">
                  {job.points.map((p, k) => (
                    <li key={k}>{p}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="pf-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
