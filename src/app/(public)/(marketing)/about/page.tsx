import type { Metadata } from "next";
import About from "@/components/modules/about/About";
import AtAGlance from "@/components/modules/about/AtAGlance";
import CtaLink from "@/components/modules/landing/CtaLink";
import PageHero from "@/components/shared/PageHero";
import { ROUTES } from "@/constants";

export const metadata: Metadata = {
  title: "About ProjectDesk",
  description:
    "Learn how ProjectDesk helps students submit and track projects while administrators review submissions and monitor project activity.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        headingId="about-heading"
        eyebrow="About ProjectDesk"
        lines={[
          { text: "Projects move forward" },
          { text: "with clarity.", accent: true },
        ]}
        description={
          <p>
            ProjectDesk gives students a clear way to submit and follow their
            projects, and gives administrators a central place to review
            submissions and monitor activity.
          </p>
        }
        actions={
          <>
            <CtaLink href={ROUTES.register} arrow>
              Create a student account
            </CtaLink>
            <CtaLink
              href={`${ROUTES.home}#how-it-works-heading`}
              variant="outline"
            >
              Explore the workflow
            </CtaLink>
          </>
        }
        aside={<AtAGlance />}
      />
      <About />
    </>
  );
}
