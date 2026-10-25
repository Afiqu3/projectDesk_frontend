import {
  BadgeCheck,
  ChartNoAxesColumnIncreasing,
  FilePlus2,
  FolderKanban,
  ListChecks,
  type LucideIcon,
  ShieldCheck,
} from "lucide-react";
import { Container, Eyebrow } from "./decor";
import { Reveal, RevealGroup, RevealItem } from "./motion";

const FEATURES: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Student accounts",
    body: "Students can register, sign in, and access their own project workspace.",
    icon: ShieldCheck,
  },
  {
    title: "Project submissions",
    body: "Create and submit project details through a dedicated student workflow.",
    icon: FilePlus2,
  },
  {
    title: "Personal project list",
    body: "Keep track of your own submitted projects and their review status.",
    icon: FolderKanban,
  },
  {
    title: "Administrator review",
    body: "Admins can browse submitted projects and make approval or rejection decisions.",
    icon: ListChecks,
  },
  {
    title: "Role-based access",
    body: "Student and administrator roles have access to the workflows they need.",
    icon: BadgeCheck,
  },
  {
    title: "Daily project trends",
    body: "Dashboard statistics give administrators a view of daily project activity.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

export default function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="scroll-mt-16 bg-brand py-20 text-white sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <Eyebrow tone="onDark">Features</Eyebrow>
          <h2
            id="features-heading"
            className="mt-4 max-w-2xl font-heading text-4xl leading-[1.02] font-bold tracking-[-0.04em] sm:text-5xl"
          >
            Built for merchants who ship every day.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {FEATURES.map(({ title, body, icon: Icon }) => (
            <RevealItem key={title} className="h-full">
              <article className="group h-full rounded-3xl bg-brand-card p-7 ring-1 ring-white/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(2,6,23,0.8)] hover:ring-brand-orange/30">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-orange text-brand-ink transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon className="size-5" strokeWidth={2.25} />
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-brand-muted">
                  {body}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
