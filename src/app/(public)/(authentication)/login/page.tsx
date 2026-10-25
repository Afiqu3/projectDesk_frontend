import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Logo from "@/assets/svg/Logo";
import LoginForm from "@/components/form/login-form";
import LeftSide from "@/components/modules/authentication/LeftSide";
import LoginFallback from "@/components/modules/authentication/LoginFallback";

export const metadata: Metadata = {
  title: "Login-ProjectDesk",
};

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-5">
      <div className="lg:block bg-brand p-6 md:p-10 hidden col-span-2">
        <LeftSide
          headingTextOne="Project work,"
          headingTextTwo="in one place."
          descriptionText="A shared workspace for students to submit projects and administrators to review them."
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 bg-accent col-span-3 px-0 py-10 sm:py-12">
        <div className="flex justify-start w-full ml-8">
          <Link
            href="/"
            className="lg:hidden flex items-center gap-2 mt-10 font-medium group text-start"
          >
            <span className="flex size-9 items-center justify-center rounded-xl text-primary-foreground transition-transform duration-300 group-hover:-rotate-6">
              <Logo />
            </span>
            <span className="font-heading text-lg font-bold tracking-tight text-secondary">
              Project<span className="text-chart-2">Desk</span>
            </span>
          </Link>
        </div>

        <div className="w-full max-w-sm px-5 sm:px-0 lg:max-w-sm">
          <Suspense fallback={<LoginFallback />}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
