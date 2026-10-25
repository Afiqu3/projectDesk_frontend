import { getMe } from "@/api/auth.api";
import { toast } from "sonner";

/**
 * Read `mustChangePassword` from a login / OAuth response, tolerating
 * envelope variations (`data.user`, `data`, or a top-level `user`).
 * Returns `undefined` when the flag is absent so callers can fall back
 * to a fresh `/auth/me` read.
 */
export function extractMustChangePassword(res: unknown): boolean | undefined {
    if (!res || typeof res !== "object") return undefined;
    const root = res as Record<string, unknown>;
    const data =
        root.data && typeof root.data === "object"
            ? (root.data as Record<string, unknown>)
            : root;
    const user =
        data.user && typeof data.user === "object"
            ? (data.user as Record<string, unknown>)
            : data;
    return typeof user.mustChangePassword === "boolean"
        ? user.mustChangePassword
        : undefined;
}

/**
 * Safe post-login destination from `?next=`. Same-origin paths only —
 * rejects absolute URLs, protocol-relative URLs and backslashes, so a
 * crafted login link can never bounce users off-site (open-redirect guard).
 */
export function resolveNextPath(next: string | null, fallback = "/"): string {
    if (
        !next ||
        !next.startsWith("/") ||
        next.startsWith("//") ||
        next.includes("\\")
    ) {
        return fallback;
    }
    return next;
}

export async function extractRole(res: unknown): Promise<string | boolean> {
    const direct = extractMustChangePassword(res);
    if (direct !== undefined) return direct;
    try {
        const me = await getMe();
        return me?.data?.role;
    } catch {
        return false;
    }
}

export async function completePasswordLogin(opts: {
    push: (url: string) => void;
    next: string;
}): Promise<void> {
    toast.success("Login Success", {
        description: "Welcome back",
    });
    opts.push(opts.next);
}
