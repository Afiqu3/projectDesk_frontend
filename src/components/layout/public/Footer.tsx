import Link from "next/link";
import { SOCIAL_ICONS } from "@/assets/svg/SocialIcons";
import BrandMark from "@/components/shared/BrandMark";
import { ROUTES, SOCIAL_LINKS, SUPPORT } from "@/constants";

const LINK_GROUPS = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: ROUTES.home },
      { label: "About ProjectDesk", href: `${ROUTES.home}#about-heading` },
      {
        label: "How it works",
        href: `${ROUTES.home}#how-it-works-heading`,
      },
      { label: "Features", href: `${ROUTES.home}#features-heading` },
      { label: "FAQs", href: `${ROUTES.home}#faq-heading` },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Create a student account", href: ROUTES.register },
      { label: "Sign in", href: ROUTES.login },
    ],
  },
];

const linkClass =
  "rounded-sm text-[15px] text-brand-muted outline-none transition-colors hover:text-white focus-visible:ring-3 focus-visible:ring-brand-orange/50";

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-brand-muted">
      <div className="mx-auto w-full max-w-6xl px-5 pt-16 pb-8 sm:px-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-10">
          <div>
            <BrandMark />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed">
              A shared workspace for student project submissions and
              administrator reviews.
            </p>
            <address className="mt-5 flex flex-col items-start gap-1 not-italic">
              <span className="mb-1 font-heading text-xs font-bold tracking-[0.16em] text-white uppercase">
                Contact
              </span>
              <a href={`mailto:${SUPPORT.email}`} className={linkClass}>
                {SUPPORT.email}
              </a>
              <a href={`tel:${SUPPORT.phone}`} className={linkClass}>
                {SUPPORT.phone}
              </a>
            </address>

            <ul
              aria-label="ProjectDesk on social media"
              className="mt-7 flex flex-wrap gap-2.5"
            >
              {SOCIAL_LINKS.map(({ platform, label, href }) => {
                const Icon = SOCIAL_ICONS[platform];
                return (
                  <li key={platform}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (opens in a new tab)`}
                      title={label}
                      className="grid size-10 place-items-center rounded-full bg-white/5 text-brand-muted ring-1 ring-white/10 outline-none transition-[background-color,color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-brand-orange hover:text-brand-ink hover:ring-brand-orange focus-visible:ring-3 focus-visible:ring-brand-orange/60"
                    >
                      <Icon className="size-4.5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            {LINK_GROUPS.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="font-heading text-[13px] font-bold tracking-[0.2em] text-white uppercase">
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-col items-start gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ProjectDesk. All rights reserved.</p>
          <p>Submit, review, and track projects in one place.</p>
        </div>
      </div>
    </footer>
  );
}
