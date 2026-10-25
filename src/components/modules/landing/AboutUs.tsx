import {
  ChartNoAxesColumnIncreasing,
  FilePlus2,
  type LucideIcon,
  SearchCheck,
} from "lucide-react";
import { Container, Eyebrow } from "./decor";
import { Reveal, RevealGroup, RevealItem } from "./motion";

const FEATURES: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Simple student submissions",
    body: "Students can create projects and keep track of their own submissions in one place.",
    icon: FilePlus2,
  },
  {
    title: "A clear review workflow",
    body: "Administrators can review submitted projects and approve or reject them.",
    icon: SearchCheck,
  },
  {
    title: "Useful project insights",
    body: "Dashboard statistics help administrators follow project activity and daily submission trends.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

export default function AboutUs() {
  return (
    <section
      aria-labelledby="about-heading"
      className="scroll-mt-16 bg-brand text-white py-20 sm:py-24 lg:py-28"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal amount={0.3}>
          <div className="group relative">
            <div className="overflow-hidden rounded-3xl shadow-[0_24px_48px_-28px_rgba(2,6,23,0.5)] ring-1 ring-white/10">
              {/* biome-ignore lint/performance/noImgElement: static export (output: "export") has no image optimizer; explicit width/height keeps CLS at zero. */}
              <img
                src="/assets/banner-1.jpg"
                alt=""
                width={6240}
                height={4160}
                loading="lazy"
                decoding="async"
                className="aspect-3/2 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            {/* Floating caption pinned over the photo's bottom edge */}
            <div
              aria-hidden
              className="absolute -bottom-6 left-5 flex items-center gap-3 rounded-2xl bg-brand-card py-3 pr-5 pl-3 shadow-[0_20px_45px_-24px_rgba(2,6,23,0.85)] ring-1 ring-white/10 sm:left-7"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-orange text-brand-ink">
                <FilePlus2 className="size-5" strokeWidth={2.25} />
              </span>
              <span>
                <span className="block font-heading text-sm font-bold text-white">
                  From submission to decision
                </span>
                <span className="block text-xs text-brand-muted">
                  One organized workflow
                </span>
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow tone="onDark">About us</Eyebrow>
            <h2
              id="about-heading"
              className="mt-4 max-w-lg font-heading text-4xl leading-[1.02] font-bold tracking-[-0.04em] sm:text-5xl"
            >
              Project reviews, made clear.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-brand-muted">
              ProjectDesk brings student project submissions and administrator
              reviews into one place. Students can follow their projects, while
              administrators manage decisions and monitor daily submission
              activity.
            </p>
          </Reveal>

          <RevealGroup className="mt-9 grid gap-6" interval={0.1}>
            {FEATURES.map(({ title, body, icon: Icon }) => (
              <RevealItem key={title}>
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-orange text-brand-ink">
                    <Icon aria-hidden className="size-5" strokeWidth={2.25} />
                  </span>
                  <div>
                    <h3 className="font-heading text-[17px] font-bold tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-brand-muted">
                      {body}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
