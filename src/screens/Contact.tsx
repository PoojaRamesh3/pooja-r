import { FormEvent, useState } from "react";
import { FiArrowUpRight, FiDownload, FiSend } from "react-icons/fi";
import { content } from "../content";
import Reveal from "../components/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const { email, formEndpoint, resumeUrl } = content.contact;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot: bots fill this in

    const name = String(data.get("name") || "");
    const from = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    if (!formEndpoint) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="pf-card relative overflow-hidden px-6 py-12 md:px-12 md:py-16">
            <div className="pf-blob pf-blob-1" style={{ opacity: 0.2 }} />
            <div className="pf-blob pf-blob-2" style={{ opacity: 0.2 }} />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="pf-section-label">05 — Contact</p>
                <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight">
                  <span className="pf-grad-text">
                    {content.contact.heading}
                  </span>
                </h2>
                <p className="pf-muted mt-5 md:text-lg">
                  {content.contact.text}
                </p>

                <a
                  href={`mailto:${email}`}
                  className="pf-btn pf-btn-primary mt-8"
                >
                  {email} <FiArrowUpRight />
                </a>
                <a
                  href={resumeUrl}
                  download
                  className="pf-btn pf-btn-ghost mt-8 ml-0 sm:ml-3"
                >
                  <FiDownload /> Download resume
                </a>

                <div className="mt-10 flex gap-4">
                  {content.contact.socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.name}
                      title={s.name}
                      className="w-12 h-12 rounded-full pf-border flex items-center justify-center transition hover:-translate-y-1 hover:scale-110"
                      style={{ background: "var(--card)" }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="pf-input"
                  autoComplete="name"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="pf-input"
                  autoComplete="email"
                />
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="How can I help?"
                  className="pf-input resize-none"
                />
                <input
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="pf-hp"
                  aria-hidden="true"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="pf-btn pf-btn-primary w-full justify-center disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}{" "}
                  <FiSend />
                </button>

                <p role="status" className="text-sm min-h-[1.25rem]">
                  {status === "sent" && (
                    <span style={{ color: "#22c55e" }}>
                      Thanks! Your message is on its way.
                    </span>
                  )}
                  {status === "error" && (
                    <span style={{ color: "#ef4444" }}>
                      Something went wrong. Please email me directly at {email}.
                    </span>
                  )}
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
