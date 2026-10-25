import {
  ChartNoAxesColumnIncreasing,
  ListChecks,
  type LucideIcon,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Container, Eyebrow } from "@/components/modules/landing/decor";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/modules/landing/motion";

const VALUES: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Student-centered tracking",
    body: "Students can find their submissions and follow their project status in one place.",
    icon: UserRound,
  },
  {
    title: "Clear review decisions",
    body: "Administrators can review submitted projects and record an approval or rejection.",
    icon: ListChecks,
  },
  {
    title: "Access by role",
    body: "Student and administrator roles support the different project workflows each needs.",
    icon: ShieldCheck,
  },
  {
    title: "Visibility for admins",
    body: "Dashboard statistics, including daily project trends, help administrators monitor activity.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

/** ProjectDesk principles, as four cards. */
export default function OurValues() {
  return (
    <section
      aria-labelledby="about-values-heading"
      className="bg-brand py-20 text-white sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow tone="onDark">What we stand for</Eyebrow>
            <h2
              id="about-values-heading"
              className="mt-4 font-heading text-4xl leading-[1.02] font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl"
            >
              A workflow built
              <br />
              <span className="text-brand-orange">
                around project progress.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-brand-muted">
              ProjectDesk keeps project submissions organized, review actions
              clear, and project activity visible.
            </p>
          </div>
        </Reveal>

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          interval={0.1}
        >
          {VALUES.map(({ title, body, icon: Icon }) => (
            <RevealItem key={title}>
              <article className="h-full rounded-3xl bg-brand-card p-6 ring-1 ring-white/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(2,6,23,0.6)] hover:ring-brand-orange/30">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-orange text-brand-ink">
                  <Icon aria-hidden className="size-5.5" strokeWidth={2.25} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold tracking-tight">
                  {title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-brand-muted">
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
