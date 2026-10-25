export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "",
};
export type DemoRole = "STUDENT" | "ADMIN";

export interface DemoAccount {
  role: DemoRole;
  label: string;
  email: string;
  password: string;
}

function demoAccount(
  role: DemoRole,
  label: string,
  email: string | undefined,
  password: string | undefined,
): DemoAccount | null {
  if (!email || !password) return null;
  return { role, label, email, password };
}

/**
 * Demo login accounts from env. Roles with incomplete credentials are
 * skipped, so the demo block simply hides where nothing is configured
 * (e.g. production without demo vars).
 */
export const demoAccounts: DemoAccount[] = [
  demoAccount(
    "STUDENT",
    "Student",
    process.env.NEXT_PUBLIC_STUDENT_EMAIL,
    process.env.NEXT_PUBLIC_STUDENT_PASSWORD,
  ),
  demoAccount(
    "ADMIN",
    "Admin",
    process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
  ),
].filter((account): account is DemoAccount => account !== null);
