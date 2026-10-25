# ProjectDesk

ProjectDesk is a project submission and review platform for students and administrators. Students can submit projects and follow their review status. Administrators can review submissions, approve or reject them, and monitor project activity from a dashboard.

**Live application:** [projectdesk-zeta.vercel.app](https://projectdesk-zeta.vercel.app)

## Core features

- Student registration, login, logout, token refresh, and profile lookup.
- Role-based access for students and administrators.
- Student project creation and personal project listings.
- Project details, including descriptions, source repositories, and live demos.
- Admin project listing with approval and rejection workflow.
- Required review notes for rejected projects and optional notes for approvals.
- Admin dashboard statistics for total students, projects, and daily project trends.
- Responsive light/dark themes and accessible, reduced-motion-aware animations.

## Technologies

- [Next.js 16](https://nextjs.org/) App Router and static export
- [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) with shadcn/ui and Radix UI
- [TanStack Query](https://tanstack.com/query/latest) for server state and API caching
- [TanStack Form](https://tanstack.com/form/latest) and [Zod](https://zod.dev/) for forms and validation
- [Recharts](https://recharts.org/) for dashboard charts
- [Motion](https://motion.dev/) for animations
- [Lucide](https://lucide.dev/) icons and [Swiper](https://swiperjs.com/) for the landing page banner
- [Biome](https://biomejs.dev/) for linting and formatting

## Dependencies

Application dependencies are managed with npm and pinned in `package-lock.json`.

**Runtime dependencies:** `@tanstack/react-form`, `@tanstack/react-query`, `class-variance-authority`, `cn`, `input-otp`, `lucide-react`, `motion`, `next`, `next-themes`, `ofetch`, `postcss`, `radix-ui`, `react`, `react-dom`, `recharts`, `shadcn`, `sonner`, `swiper`, and `zod`.

**Development dependencies:** `@biomejs/biome`, `@tailwindcss/postcss`, `@types/node`, `@types/react`, `@types/react-dom`, `babel-plugin-react-compiler`, `tailwindcss`, `tw-animate-css`, and `typescript`.

## Run locally

### Prerequisites

- Node.js compatible with the installed Next.js version (Node.js 20 or later recommended).
- npm.
- Access to a ProjectDesk backend API, or the deployed API endpoint.

### Setup

1. Clone the frontend repository and enter its directory:

   ```sh
   git clone https://github.com/Afiqu3/projectDesk_frontend.git
   cd projectDesk_frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a local environment file from the example:

   **Windows PowerShell**

   ```powershell
   Copy-Item .env.example .env.local
   ```

   **macOS/Linux**

   ```sh
   cp .env.example .env.local
   ```

4. Set the variables in `.env.local`:

   ```dotenv
   NEXT_PUBLIC_API_BASE_URL=https://project-desk-backend.vercel.app/api/v1

   # Optional demo-login defaults. Leave blank if you do not use demo logins.
   NEXT_PUBLIC_ADMIN_EMAIL=
   NEXT_PUBLIC_ADMIN_PASSWORD=
   NEXT_PUBLIC_STUDENT_EMAIL=
   NEXT_PUBLIC_STUDENT_PASSWORD=
   ```

   Replace the API URL if you are using a different backend. The `NEXT_PUBLIC_` prefix means values can be included in client-side code. Use only dedicated demo/test-account credentials for the optional demo-login fields—never put private or production credentials there.

5. Start the development server:

   ```sh
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

Useful commands:

```sh
npm run lint
npm run build
```

The project is configured for static export. A successful production build generates the static site output for deployment.

## Main routes

- `/` — ProjectDesk overview and features
- `/about` — About ProjectDesk and the review workflow
- `/login` — Sign in
- `/register` — Student registration
- `/dashboard/my-projects` — Student project list
- `/dashboard/my-projects/new` — Submit a project
- `/admin-dashboard` — Admin statistics
- `/admin-dashboard/projects` — Admin project review

Dashboard routes require the appropriate authenticated role.

## Resources

- **Live frontend:** [https://projectdesk-zeta.vercel.app](https://projectdesk-zeta.vercel.app)
- **Frontend repository:** [Afiqu3/projectDesk_frontend](https://github.com/Afiqu3/projectDesk_frontend)
- **Backend repository:** [Afiqu3/projectDesk_backend](https://github.com/Afiqu3/projectDesk_backend)
- **Next.js documentation:** [nextjs.org/docs](https://nextjs.org/docs)
