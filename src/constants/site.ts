export const ROUTES = {
    home: "/",
    login: "/login",
    register: "/register",
    about: "/about",
    studentDashboard: "/dashboard/profile",
    adminDashboard: "/admin-dashboard",
} as const;

export const SUPPORT = {
    email: "afiquehossain84@gmail.com",
    phone: "+880 1703560778",
} as const;

export type SocialPlatform = "facebook" | "linkedin";

export const SOCIAL_LINKS: {
    platform: SocialPlatform;
    label: string;
    href: string;
}[] = [
    {
        platform: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/afique.hossain.J",
    },
    {
        platform: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/md-afique-hossain",
    },
];
