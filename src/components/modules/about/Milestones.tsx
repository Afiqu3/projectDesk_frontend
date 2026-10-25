"use client";

import { motion, stagger, type Variants } from "motion/react";
import { Container, Eyebrow } from "@/components/modules/landing/decor";
import { EASE_OUT, Reveal } from "@/components/modules/landing/motion";

const MILESTONES = [
  {
    year: "01",
    title: "Student creates a project",
    body: "Students add their project details and submit their work through their account.",
  },
  {
    year: "02",
    title: "Submission enters review",
    body: "The submitted project becomes available in the administrator review workflow.",
  },
  {
    year: "03",
    title: "Administrator makes a decision",
    body: "Administrators review the project and approve or reject the submission.",
  },
  {
    year: "04",
    title: "Project status stays visible",
    body: "Students can follow their project status, and administrators can monitor daily activity.",
  },
];

const list: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: stagger(0.12, { startDelay: 0.1 }) },
  },
};

const row: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

const rail: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.5, ease: EASE_OUT, delay: 0.2 },
  },
};

/** The project review workflow, as a vertical timeline. */
export default function Milestones() {
  return (
    <section
      aria-labelledby="about-milestones-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <Eyebrow>The workflow</Eyebrow>
          <h2
            id="about-milestones-heading"
            className="mt-4 max-w-md font-heading text-4xl leading-[1.02] font-bold tracking-[-0.04em] text-secondary sm:text-5xl"
          >
            Each step has a clear place.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-secondary/70">
            From the first student submission to the admin decision, ProjectDesk
            keeps the process organized and easy to follow.
          </p>
        </Reveal>

        <motion.ol
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {MILESTONES.map((milestone, index) => {
            const isLast = index === MILESTONES.length - 1;
            return (
              <motion.li
                key={milestone.year}
                variants={row}
                className="relative flex gap-5 pb-10 last:pb-0 sm:gap-6"
              >
                {/* Joins this year to the next one, drawn downward. */}
                {!isLast ? (
                  <motion.span
                    aria-hidden
                    variants={rail}
                    className="absolute top-11 bottom-0 left-8 w-0.5 origin-top -translate-x-1/2 bg-brand-orange/40"
                  />
                ) : null}
                <span className="relative z-10 grid h-10 w-16 shrink-0 place-items-center rounded-xl bg-brand font-heading text-sm font-bold text-brand-orange">
                  {milestone.year}
                </span>
                <div className="pt-1">
                  <h3 className="font-heading text-lg font-bold text-secondary">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-secondary/70">
                    {milestone.body}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </Container>
    </section>
  );
}
