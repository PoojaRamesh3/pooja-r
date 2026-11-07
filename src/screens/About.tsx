import Reveal from "../components/Reveal";
import { content } from "../content";

const About = () => (
  <section id="about" className="relative px-5 py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
      <Reveal>
        <p className="pf-section-label">01 — About</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight">
          {content.about.heading}
        </h2>
      </Reveal>

      <div className="mt-10 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-5">
          {content.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 120} from="left">
              <p className="pf-muted text-base md:text-lg leading-relaxed">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {content.about.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 100} from="right">
              <div className="pf-card p-5 hover:-translate-y-1">
                <h3 className="font-bold">
                  <span className="pf-grad-text">{h.title}</span>
                </h3>
                <p className="pf-muted text-sm mt-1">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
