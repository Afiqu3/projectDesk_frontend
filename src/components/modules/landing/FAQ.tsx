"use client";

import {
  ChartNoAxesColumnIncreasing,
  CheckCircle2,
  ChevronDown,
  FilePlus2,
  MessageCircle,
  Users,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Container, Eyebrow } from "./decor";
import { Reveal, RevealGroup, RevealItem } from "./motion";

const FAQ_ITEMS = [
  {
    question: "Who can use ProjectDesk?",
    answer:
      "ProjectDesk supports students and administrators. Students can submit and track their projects, while administrators can review submissions and manage decisions.",
  },
  {
    question: "How does a student submit a project?",
    answer:
      "Create a student account, sign in, and use the project submission workflow to add and submit your project for review.",
  },
  {
    question: "Can students see the status of their submissions?",
    answer:
      "Yes. Students can view their own project list and follow the status of their submissions.",
  },
  {
    question: "What can administrators do?",
    answer:
      "Administrators can view submitted projects, review them, and approve or reject each submission.",
  },
  {
    question: "What does the admin dashboard show?",
    answer:
      "The dashboard provides project statistics, including daily project trends, to help administrators monitor activity.",
  },
  {
    question: "Are student and administrator accounts different?",
    answer:
      "Yes. ProjectDesk uses role-based access so students and administrators can use the project workflows intended for their roles.",
  },
];

const METRICS = [
  { value: "2", label: "User roles", icon: Users },
  { value: "1", label: "Project workflow", icon: FilePlus2 },
  {
    value: "Daily",
    label: "Project trends",
    icon: ChartNoAxesColumnIncreasing,
  },
  { value: "Role-based", label: "Access control", icon: CheckCircle2 },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="scroll-mt-16 bg-accent py-20 sm:py-24 lg:py-28"
    >
      <Container>
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Frequently asked</Eyebrow>
            <h2
              id="faq-heading"
              className="mt-4 font-heading text-4xl leading-[1.02] font-bold tracking-[-0.04em] text-secondary sm:text-5xl lg:text-6xl"
            >
              Questions?
              <br />
              <span className="text-brand-orange">We've got answers.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-secondary/70">
              Learn how students submit projects, how administrators review
              them, and what the dashboard helps track.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:items-start lg:gap-14">
          {/* Visual + trust metrics */}
          <div>
            <Reveal amount={0.25}>
              <div className="group relative">
                <div className="overflow-hidden rounded-3xl shadow-[0_28px_56px_-32px_rgba(15,32,86,0.5)] ring-1 ring-secondary/10 dark:ring-white/10 dark:shadow-[0_28px_56px_-32px_rgba(0,0,0,0.85)]">
                  {/* biome-ignore lint/performance/noImgElement: static export (output: "export") has no image optimizer; explicit width/height keeps CLS at zero. */}
                  <img
                    src="/assets/faq.jpg"
                    alt="Illustration for frequently asked questions"
                    width={3840}
                    height={2160}
                    loading="lazy"
                    decoding="async"
                    className="aspect-video w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]"
                  />
                </div>

                {/* Floating support chip */}
                <div
                  aria-hidden
                  className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white py-3 pr-5 pl-3 shadow-[0_20px_45px_-24px_rgba(15,32,86,0.55)] ring-1 ring-secondary/10 sm:left-7 dark:bg-card dark:ring-white/10 dark:shadow-[0_20px_45px_-24px_rgba(0,0,0,0.85)]"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-orange text-brand-ink">
                    <MessageCircle className="size-5" strokeWidth={2.25} />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-bold text-secondary">
                      Project guidance
                    </span>
                    <span className="block text-xs text-secondary/60">
                      For students and administrators
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>

            <RevealGroup
              className="mt-11 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-2"
              interval={0.07}
            >
              {METRICS.map(({ value, label, icon: Icon }) => (
                <RevealItem key={label}>
                  <div className="flex h-full items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-secondary/10 dark:bg-card dark:ring-white/10">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-orange/15 text-brand-orange">
                      <Icon aria-hidden className="size-5" strokeWidth={2.25} />
                    </span>
                    <span>
                      <span className="block font-heading text-xl font-extrabold tracking-tight text-secondary">
                        {value}
                      </span>
                      <span className="block text-xs leading-snug text-secondary/60">
                        {label}
                      </span>
                    </span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Accordion */}
          <RevealGroup
            className="grid max-w-3xl gap-3 sm:gap-4 lg:max-w-none"
            interval={0.08}
          >
            {FAQ_ITEMS.map(({ question, answer }, index) => {
              const isOpen = openIndex === index;

              return (
                <RevealItem key={question}>
                  <div className="rounded-2xl bg-white ring-1 ring-secondary/10 transition-[box-shadow,transform] duration-300 has-[button:focus-visible]:ring-2 has-[button:focus-visible]:ring-brand-orange/60 hover:shadow-[0_24px_48px_-24px_rgba(15,32,86,0.35)] hover:ring-brand-orange/30 dark:bg-card dark:ring-white/10 dark:hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)]">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() =>
                          setOpenIndex((prev) =>
                            prev === index ? null : index,
                          )
                        }
                        className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left outline-none sm:p-6"
                      >
                        <span className="font-heading text-[16px] font-bold tracking-tight text-secondary sm:text-[17px]">
                          {question}
                        </span>
                        <span
                          className={cn(
                            "grid size-9 shrink-0 place-items-center rounded-full bg-accent text-secondary/60 transition-colors duration-300",
                            isOpen && "bg-brand-orange text-brand-ink",
                          )}
                        >
                          <ChevronDown
                            aria-hidden
                            strokeWidth={2.5}
                            className={cn(
                              "size-4 transition-transform duration-300 ease-out",
                              isOpen && "rotate-180",
                            )}
                          />
                        </span>
                      </button>
                    </h3>

                    {/*
                      Expand/collapse animates `grid-template-rows` between 0fr and
                      1fr. The grid item itself must clip its overflow (or set
                      min-height: 0) — otherwise its automatic minimum height keeps
                      the row expanded at content size and every answer stays visible.
                    */}
                    <section
                      aria-hidden={!isOpen}
                      className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div
                          className={cn(
                            "px-5 pb-5 leading-relaxed text-secondary/70 transition-[opacity,transform,translate] duration-300 ease-out motion-reduce:transition-none sm:px-6 sm:pb-6",
                            isOpen
                              ? "translate-y-0 opacity-100"
                              : "-translate-y-1 opacity-0",
                          )}
                        >
                          <p>{answer}</p>
                        </div>
                      </div>
                    </section>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
