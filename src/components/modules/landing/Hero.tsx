"use client";

import { ROUTES } from "@/constants";
import {
    ArrowRight,
    Check,
    Clock3,
    FilePlus2,
    SearchCheck,
} from "lucide-react";
import { motion, stagger, useReducedMotion, type Variants } from "motion/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CtaLink from "./CtaLink";
import { Container, PulseDot } from "./decor";
import { EASE_OUT } from "./motion";

const HERO_BACKGROUNDS = [
    "/assets/banner-1.jpg",
    "/assets/banner-2.jpg",
    "/assets/banner-3.jpg",
];

const HEADLINE = [
    { text: "Submit your project.", accent: false },
    { text: "Track its progress.", accent: true },
];

const container: Variants = {
    hidden: {},
    visible: {
        transition: { delayChildren: stagger(0.09, { startDelay: 0.05 }) },
    },
};

const fade: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: EASE_OUT },
    },
};

// Headline lines slide up from behind a mask.
const line: Variants = {
    hidden: { y: "105%" },
    visible: { y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

const workflow: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: EASE_OUT },
    },
};

const workflowSteps = [
    { label: "Draft", icon: FilePlus2, state: "complete" },
    { label: "Submitted", icon: SearchCheck, state: "active" },
    { label: "Decision", icon: Check, state: "upcoming" },
] as const;

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="relative overflow-hidden bg-brand text-white">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    className="h-full w-full"
                    autoplay={
                        shouldReduceMotion
                            ? false
                            : {
                                  delay: 5000,
                                  disableOnInteraction: false,
                                  pauseOnMouseEnter: true,
                              }
                    }
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    loop
                    speed={1000}
                    allowTouchMove={false}
                >
                    {HERO_BACKGROUNDS.map((image) => (
                        <SwiperSlide key={image}>
                            <div
                                className="size-full bg-cover bg-center"
                                style={{ backgroundImage: `url("${image}")` }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10"
                style={{ backgroundColor: "var(--brand)", opacity: 0.55 }}
            />
            <Container className="relative z-20 grid items-center gap-14 pt-12 pb-20 sm:pt-16 lg:grid-cols-[1.12fr_1fr] lg:gap-8 lg:pt-16 lg:pb-20">
                <motion.div
                    className="relative z-10"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p
                        variants={fade}
                        className="inline-flex items-center gap-2.5 rounded-full bg-brand-card px-3.5 py-1.5 font-heading text-[13px] font-semibold text-brand-cream ring-1 ring-white/5"
                    >
                        <PulseDot />A clearer way to submit and review projects
                    </motion.p>

                    <h1 className="mt-6 font-heading text-[3.4rem] leading-[0.92] font-bold tracking-tighter sm:text-7xl lg:text-[5.4rem]">
                        {HEADLINE.map((l) => (
                            <span
                                key={l.text}
                                className="mb-[-0.08em] block overflow-hidden pb-[0.08em]"
                            >
                                <motion.span
                                    variants={line}
                                    className={
                                        l.accent
                                            ? "block text-brand-orange"
                                            : "block"
                                    }
                                >
                                    {l.text}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    <motion.p
                        variants={fade}
                        className="mt-7 max-w-120 text-[17px] leading-relaxed text-brand-muted"
                    >
                        ProjectDesk gives students one place to submit and
                        follow their work, while administrators can review.
                    </motion.p>

                    <motion.div
                        variants={fade}
                        className="mt-8 flex flex-col gap-3 sm:flex-row"
                    >
                        <CtaLink href={ROUTES.register} arrow>
                            Create a student account
                        </CtaLink>
                        <CtaLink
                            href={ROUTES.login}
                            variant="outline"
                            className="w-full sm:w-auto"
                        >
                            Admin sign in
                        </CtaLink>
                    </motion.div>
                </motion.div>

                <div className="relative z-10 mx-auto w-full max-w-104 pr-3.5 pb-3.5 lg:mr-0">
                    <motion.div
                        aria-label="Preview of a project moving through review"
                        role="img"
                        className="relative mx-auto w-full max-w-lg lg:max-w-none"
                        variants={workflow}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="absolute -inset-4 rounded-[2rem] bg-brand-orange/10 blur-2xl sm:-inset-7" />
                        <div className="relative rounded-3xl border border-white/12 bg-[#101d49]/90 p-5 shadow-2xl shadow-black/25 backdrop-blur sm:p-7 z-10">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="font-heading text-xs font-bold tracking-[0.16em] text-brand-muted uppercase">
                                        Project workspace
                                    </p>
                                    <h2 className="mt-2 font-heading text-lg font-bold sm:text-xl">
                                        A clear path to review
                                    </h2>
                                </div>
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange">
                                    <FilePlus2 aria-hidden className="size-5" />
                                </span>
                            </div>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-white/4 p-4 sm:p-5">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="min-w-0">
                                        <p className="text-xs font-medium text-brand-muted">
                                            PROJECT SUBMISSION
                                        </p>
                                        <p className="mt-1 font-heading text-base font-semibold sm:text-lg">
                                            Campus Innovation Project
                                        </p>
                                    </div>
                                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-orange/15 px-2.5 py-1 text-xs font-semibold text-brand-orange">
                                        <Clock3
                                            aria-hidden
                                            className="size-3.5"
                                        />
                                        In review
                                    </span>
                                </div>

                                <div className="mt-6 grid grid-cols-3">
                                    {workflowSteps.map((step, index) => {
                                        const Icon = step.icon;
                                        const isComplete =
                                            step.state === "complete";
                                        const isActive =
                                            step.state === "active";

                                        return (
                                            <div
                                                key={step.label}
                                                className="relative flex flex-col items-center text-center"
                                            >
                                                {index <
                                                workflowSteps.length - 1 ? (
                                                    <span
                                                        aria-hidden="true"
                                                        className={`absolute top-4 left-[calc(50%+1.25rem)] h-px w-[calc(100%-2.5rem)] ${
                                                            isComplete
                                                                ? "bg-brand-orange"
                                                                : "bg-white/15"
                                                        }`}
                                                    />
                                                ) : null}
                                                <span
                                                    className={`relative z-10 flex size-8 items-center justify-center rounded-full ring-4 ring-[#101d49] ${
                                                        isComplete
                                                            ? "bg-brand-orange text-brand-ink"
                                                            : isActive
                                                              ? "bg-brand-orange/20 text-brand-orange outline outline-brand-orange/60"
                                                              : "bg-white/10 text-brand-muted"
                                                    }`}
                                                >
                                                    <Icon
                                                        aria-hidden
                                                        className="size-4"
                                                    />
                                                </span>
                                                <span
                                                    className={`mt-2 text-[11px] font-semibold sm:text-xs ${
                                                        isActive
                                                            ? "text-white"
                                                            : "text-brand-muted"
                                                    }`}
                                                >
                                                    {step.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-brand-card/70 p-4">
                                <div className="flex min-w-0 items-center gap-3">
                                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-cream">
                                        <SearchCheck
                                            aria-hidden
                                            className="size-4"
                                        />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold">
                                            Reviewed by your admin team
                                        </p>
                                        <p className="mt-0.5 text-xs text-brand-muted">
                                            Approval or requested changes
                                        </p>
                                    </div>
                                </div>
                                <ArrowRight
                                    aria-hidden
                                    className="size-4 shrink-0 text-brand-orange"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
