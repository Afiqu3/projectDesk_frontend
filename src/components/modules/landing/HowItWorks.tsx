import { cn } from "@/lib/utils";
import { Container, Eyebrow } from "./decor";
import { Reveal, RevealGroup, RevealItem } from "./motion";

const STEPS = [
  {
    title: "Create your account",
    body: "Register as a student to access your own project workspace.",
  },
  {
    title: "Submit a project",
    body: "Add your project details and submit them for administrator review.",
  },
  {
    title: "Follow its progress",
    body: "Check your project list to see the latest status of each submission.",
  },
  {
    title: "Review and decide",
    body: "Administrators review submitted projects and approve or reject them.",
  },
];

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-16 bg-accent py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2
              id="how-it-works-heading"
              className="mt-4 max-w-md font-heading text-4xl leading-[1.02] font-bold tracking-[-0.04em] text-secondary sm:text-5xl"
            >
              From student submission to admin decision.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-[17px] leading-relaxed text-secondary/70 md:pb-1">
              A straightforward workflow keeps student projects organized and
              makes review progress easy to follow.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <RevealItem key={step.title} className="h-full">
                <article
                  className={cn(
                    "group h-full rounded-3xl p-6 ring-1 ring-transparent transition-[transform,box-shadow] duration-300 hover:-translate-y-1 lg:min-h-72",
                    isLast
                      ? "bg-brand text-white shadow-[0_24px_48px_-24px_rgba(15,32,86,0.7)] ring-white/10 dark:bg-card dark:text-card-foreground dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)]"
                      : "bg-white text-secondary ring-secondary/10 hover:shadow-[0_24px_48px_-28px_rgba(15,32,86,0.35)] dark:bg-card dark:text-card-foreground dark:ring-white/10 dark:hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.8)]",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-2xl font-heading text-lg font-bold transition-transform duration-300 group-hover:-rotate-6",
                      isLast
                        ? "bg-brand-orange text-brand-ink"
                        : "bg-brand text-brand-orange",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-[15px] leading-relaxed",
                      isLast
                        ? "text-brand-muted dark:text-card-foreground/70"
                        : "text-secondary/70 dark:text-card-foreground/70",
                    )}
                  >
                    {step.body}
                  </p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
