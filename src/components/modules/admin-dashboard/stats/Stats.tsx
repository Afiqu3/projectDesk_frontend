"use client";

import {
  Activity,
  ArrowUpRight,
  FolderKanban,
  GraduationCap,
  type LucideIcon,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import { MotionConfig, motion } from "motion/react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAdminStats } from "@/hooks";
import type { Projects as DailyProjectTrend } from "@/types";
import { parseBackendDate } from "@/utils";

const numberFormat = new Intl.NumberFormat("en");

function formatTrendDate(rawDate: string) {
  const date = parseBackendDate(rawDate);
  if (!date) return rawDate;
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(date);
}

export default function Stats() {
  const { data, isPending, isError, error, refetch, isFetching } =
    useAdminStats();

  const trendData =
    data?.trends.projects.map((item: DailyProjectTrend) => ({
      ...item,
      label: formatTrendDate(item.date),
    })) ?? [];

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="min-w-0">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 font-heading text-[11px] font-bold tracking-[0.14em] text-white uppercase">
              <Activity
                aria-hidden="true"
                className="size-3.5 text-brand-orange"
                strokeWidth={2.5}
              />
              Admin overview
            </p>
            <h1 className="mt-2.5 font-heading text-2xl font-extrabold tracking-tight text-balance text-secondary sm:text-[28px]">
              Project statistics
            </h1>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-secondary/65 sm:text-base">
              Monitor student participation and submitted projects over time.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => refetch()}
            disabled={isFetching}
            className="h-10 w-fit shrink-0 rounded-xl border-secondary/15 bg-card px-4 font-heading text-sm font-bold text-secondary hover:border-brand-orange/40 hover:bg-brand-orange/5"
          >
            <RefreshCw
              aria-hidden="true"
              className={`size-4 ${isFetching ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
        </motion.header>

        {isPending ? (
          <StatsLoading />
        ) : isError || !data ? (
          <div
            role="alert"
            className="flex flex-col items-start gap-4 rounded-2xl border border-destructive/20 bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
          >
            <div>
              <h2 className="font-heading font-bold text-secondary">
                Couldn&apos;t load dashboard statistics
              </h2>
              <p className="mt-1 text-sm text-secondary/65">
                {error instanceof Error
                  ? error.message
                  : "Something went wrong. Please try again."}
              </p>
            </div>
            <Button
              type="button"
              onClick={() => refetch()}
              disabled={isFetching}
              className="h-10 shrink-0 rounded-xl bg-brand-orange px-4 font-heading font-bold text-brand-ink hover:brightness-110"
            >
              <RefreshCw
                aria-hidden="true"
                className={`size-4 ${isFetching ? "animate-spin" : ""}`}
              />
              Try again
            </Button>
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard
                title="Total students"
                value={data.overview.totalStudents}
                description="Registered student accounts"
                icon={GraduationCap}
                index={0}
              />
              <StatCard
                title="Total projects"
                value={data.overview.totalProjects}
                description="Projects submitted on ProjectDesk"
                icon={FolderKanban}
                index={1}
              />
            </div>

            <motion.section
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
              aria-labelledby="project-trends-heading"
              className="min-w-0 rounded-2xl border border-secondary/10 bg-card p-4 shadow-sm sm:p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2
                    id="project-trends-heading"
                    className="font-heading text-lg font-extrabold tracking-tight text-secondary sm:text-xl"
                  >
                    Daily project trends
                  </h2>
                  <p className="mt-1 text-sm text-secondary/60">
                    Number of projects submitted by date
                  </p>
                </div>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-orange/10 px-3 py-1.5 text-xs font-semibold text-brand-orange-ink dark:text-brand-orange">
                  <TrendingUp aria-hidden="true" className="size-3.5" />
                  Project activity
                </span>
              </div>

              {trendData.length > 0 ? (
                <div
                  role="img"
                  aria-label="Area chart showing the number of projects submitted each day"
                  className="mt-6 h-64 w-full sm:h-80"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={trendData}
                      margin={{ top: 8, right: 8, bottom: 0, left: -18 }}
                    >
                      <defs>
                        <linearGradient
                          id="projectTrendFill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="var(--color-brand-orange)"
                            stopOpacity={0.32}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--color-brand-orange)"
                            stopOpacity={0.02}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        stroke="var(--color-border)"
                        strokeDasharray="4 4"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="label"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                          fill: "var(--color-muted-foreground)",
                          fontSize: 12,
                        }}
                        minTickGap={20}
                        tickMargin={10}
                      />
                      <YAxis
                        allowDecimals={false}
                        tickLine={false}
                        axisLine={false}
                        tick={{
                          fill: "var(--color-muted-foreground)",
                          fontSize: 12,
                        }}
                        tickMargin={8}
                        width={42}
                      />
                      <Tooltip
                        cursor={{
                          stroke: "var(--color-brand-orange)",
                          strokeDasharray: "4 4",
                        }}
                        contentStyle={{
                          background: "var(--color-popover)",
                          border: "1px solid var(--color-border)",
                          borderRadius: "12px",
                          color: "var(--color-popover-foreground)",
                          boxShadow: "0 12px 32px -16px rgb(0 0 0 / 0.35)",
                        }}
                        labelStyle={{
                          color: "var(--color-muted-foreground)",
                          marginBottom: 4,
                        }}
                        formatter={(value) => [
                          numberFormat.format(Number(value)),
                          "Projects",
                        ]}
                      />
                      <Area
                        type="monotone"
                        dataKey="count"
                        name="Projects"
                        stroke="var(--color-brand-orange)"
                        strokeWidth={3}
                        fill="url(#projectTrendFill)"
                        activeDot={{
                          r: 5,
                          fill: "var(--color-brand-orange)",
                          stroke: "var(--color-card)",
                          strokeWidth: 2,
                        }}
                        animationDuration={700}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="mt-6 flex min-h-56 flex-col items-center justify-center rounded-xl border border-dashed border-secondary/15 bg-background/50 px-5 text-center">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand/8 text-brand dark:bg-brand-orange/10 dark:text-brand-orange">
                    <FolderKanban aria-hidden="true" className="size-5" />
                  </span>
                  <p className="mt-3 font-heading text-sm font-bold text-secondary">
                    No project activity yet
                  </p>
                  <p className="mt-1 text-sm text-secondary/60">
                    Daily submission trends will appear here.
                  </p>
                </div>
              )}
            </motion.section>

            <p className="inline-flex items-center gap-1.5 text-xs text-secondary/50">
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
              Statistics are based on the latest available project data.
            </p>
          </>
        )}
      </div>
    </MotionConfig>
  );
}

function StatCard({
  title,
  value,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  value: number;
  description: string;
  icon: LucideIcon;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="rounded-2xl border border-secondary/10 bg-card p-5 shadow-sm transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-brand-orange/30 hover:shadow-md sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-heading text-sm font-semibold text-secondary/65">
            {title}
          </p>
          <p className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            {numberFormat.format(value)}
          </p>
          <p className="mt-1.5 text-sm text-secondary/55">{description}</p>
        </div>
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-orange/12 text-brand-orange-ink ring-1 ring-brand-orange/15 dark:text-brand-orange">
          <Icon aria-hidden="true" className="size-5" strokeWidth={2.2} />
        </span>
      </div>
    </motion.article>
  );
}

function StatsLoading() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {["students", "projects"].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-secondary/10 bg-card p-5 sm:p-6"
          >
            <Skeleton className="h-4 w-32" />
            <Skeleton className="mt-4 h-10 w-24" />
            <Skeleton className="mt-3 h-4 w-48" />
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-secondary/10 bg-card p-5 sm:p-6">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="mt-2 h-4 w-64 max-w-full" />
        <Skeleton className="mt-6 h-64 w-full rounded-xl sm:h-80" />
      </div>
      <span className="sr-only">Loading administrator statistics…</span>
    </div>
  );
}
