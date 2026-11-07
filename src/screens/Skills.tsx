import Reveal from "../components/Reveal";
import { content } from "../content";
import { useInView } from "../hooks/useportfolio";

const Group = ({ group, index }: any) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in" : ""} pf-card p-6`}
      style={{ ["--d" as any]: `${index * 100}ms` }}
    >
      <h3 className="font-bold text-lg mb-5">{group.title}</h3>
      <div className="space-y-4">
        {group.items.map((it: any, i: number) => (
          <div key={it.name}>
            <div className="flex items-center justify-between text-sm mb-1.5">
              <span className="flex items-center gap-2 font-semibold">
                <img src={it.logo} alt="" className="w-5 h-5 object-contain" />
                {it.name}
              </span>
              <span className="pf-muted">{it.pct}%</span>
            </div>
            <div className={`pf-bar ${inView ? "in" : ""}`}>
              <i
                style={{
                  ["--w" as any]: `${it.pct}%`,
                  ["--d" as any]: `${i * 80}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const all = content.skills.groups.flatMap((g) => g.items);
  const loop = [...all, ...all];

  return (
    <section id="skills" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="pf-section-label">02 — Skills</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight">
            {content.skills.heading}
          </h2>
          <p className="pf-muted mt-3 md:text-lg">
            {content.skills.subheading}
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="pf-marquee py-2">
            <div className="pf-marquee-track">
              {loop.map((s, i) => (
                <div
                  key={i}
                  className="pf-card flex items-center gap-3 px-5 py-3 whitespace-nowrap"
                >
                  <img src={s.logo} alt="" className="w-7 h-7 object-contain" />
                  <span className="font-semibold text-sm">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {content.skills.groups.map((g, i) => (
            <Group key={g.title} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
