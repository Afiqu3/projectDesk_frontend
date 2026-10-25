import { ArrowRightLeft } from "lucide-react";
import { Container, Eyebrow } from "@/components/modules/landing/decor";
import { Reveal } from "@/components/modules/landing/motion";

/** How ProjectDesk brings student projects and reviews together. */
export default function OurStory() {
  return (
    <section
      aria-labelledby="about-story-heading"
      className="bg-accent py-20 sm:py-24 lg:py-28"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal amount={0.3}>
          <div className="group relative">
            <div className="overflow-hidden rounded-3xl shadow-[0_28px_56px_-32px_rgba(15,32,86,0.5)] ring-1 ring-secondary/10 dark:ring-white/10 dark:shadow-[0_28px_56px_-32px_rgba(0,0,0,0.85)]">
              {/* biome-ignore lint/performance/noImgElement: static export (output: "export") has no image optimizer; explicit width/height keeps CLS at zero. */}
              <img
                src="/assets/banner-1.jpg"
                alt=""
                width={6240}
                height={4160}
                loading="lazy"
                decoding="async"
                className="aspect-3/2 w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]"
              />
            </div>

            {/* Floating badge pinned over the image's bottom edge */}
            <div
              aria-hidden
              className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white py-3 pr-5 pl-3 shadow-[0_20px_45px_-24px_rgba(15,32,86,0.55)] ring-1 ring-secondary/10 sm:left-7 dark:bg-card dark:ring-white/10 dark:shadow-[0_20px_45px_-24px_rgba(0,0,0,0.85)]"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-orange text-brand-ink">
                <ArrowRightLeft className="size-5" strokeWidth={2.25} />
              </span>
              <span>
                <span className="block font-heading text-sm font-bold text-secondary">
                  One shared workflow
                </span>
                <span className="block text-xs text-secondary/60">
                  For students and admins
                </span>
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>How it fits together</Eyebrow>
            <h2
              id="about-story-heading"
              className="mt-4 max-w-lg font-heading text-4xl leading-[1.02] font-bold tracking-[-0.04em] text-secondary sm:text-5xl"
            >
              From student idea to reviewed project.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 grid max-w-lg gap-4 text-[17px] leading-relaxed text-secondary/70">
              <p>
                ProjectDesk is designed to make project submissions easier to
                manage. Students can create projects and keep track of their own
                submissions in one place, without losing sight of where each one
                stands.
              </p>
              <p>
                Administrators get a central view of submitted projects so they
                can review work, approve or reject submissions, and follow daily
                project activity through dashboard statistics.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <blockquote className="mt-8 max-w-lg rounded-2xl border-l-4 border-brand-orange bg-white p-5 ring-1 ring-secondary/10 dark:bg-card dark:ring-white/10">
              <p className="font-heading text-[17px] font-bold tracking-tight text-secondary">
                “Make every project submission easier to follow.”
              </p>
              <footer className="mt-2 text-sm text-secondary/60">
                The ProjectDesk workflow
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
