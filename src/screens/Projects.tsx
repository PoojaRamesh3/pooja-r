import { MouseEvent } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { content } from "../content";
import Reveal from "../components/Reveal";

const onMove = (e: MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  el.classList.remove("leave");
  el.style.setProperty("--ry", `${(x / r.width - 0.5) * 8}deg`);
  el.style.setProperty("--rx", `${(0.5 - y / r.height) * 8}deg`);
  el.style.setProperty("--sx", `${x}px`);
  el.style.setProperty("--sy", `${y}px`);
};
const onLeave = (e: MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  el.classList.add("leave");
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
};

const Projects = () => (
  <section id="projects" className="relative px-5 py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
      <Reveal>
        <p className="pf-section-label">04 — Projects</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight">
          {content.projects.heading}
        </h2>
        <p className="pf-muted mt-3 md:text-lg">
          {content.projects.subheading}
        </p>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.projects.projectslist.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
            <div
              className="pf-card pf-tilt relative overflow-hidden h-full flex flex-col"
              onMouseMove={onMove}
              onMouseLeave={onLeave}
            >
              <span className="pf-spot" />
              <a
                href={p.prolink}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={p.proimg}
                  alt={p.name}
                  className="w-full h-48 object-cover object-top transition-transform duration-700 hover:scale-110"
                />
              </a>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="pf-muted text-sm mt-2 flex-1">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="pf-chip">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-4 text-sm font-semibold">
                  <a
                    href={p.prolink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:underline"
                    style={{ color: "var(--a2)" }}
                  >
                    Live <FiExternalLink />
                  </a>
                  <a
                    href={p.gitlink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:underline"
                  >
                    Code <BsGithub />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
