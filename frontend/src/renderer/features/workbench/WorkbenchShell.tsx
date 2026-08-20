import { Link, useRouterState } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { CheckSquare2, FolderKanban, Home, Plus, Search, Settings, Sparkles, StickyNote } from "lucide-react";
import type { PropsWithChildren } from "react";
import "./workbench.css";

const navigation = [
	{ to: "/workbench", label: "工作台", icon: Home },
	{ to: "/workbench/projects", label: "项目", icon: FolderKanban },
	{ to: "/workbench/plans", label: "计划与 TODO", icon: CheckSquare2 },
	{ to: "/workbench/reviews", label: "工作回顾", icon: StickyNote },
] as const;

export function WorkbenchShell({ children }: PropsWithChildren) {
	const path = useRouterState({ select: (state) => state.location.pathname });
	return <main className="personal-workbench"><aside className="wb-sidebar"><div className="wb-brand"><Sparkles size={21}/></div><nav>{navigation.map(({ to, label, icon: Icon }) => { const isHome = to === "/workbench"; const active = isHome ? path === to || path === `${to}/` : path.startsWith(to); return <Link activeOptions={{ exact: isHome }} className={active ? "is-active" : ""} key={to} to={to}><Icon size={20}/><span>{label}</span></Link>; })}</nav><button className="wb-settings" type="button"><Settings size={20}/><span>设置</span></button></aside><section className="wb-app"><header className="wb-topbar"><label><Search size={19}/><input placeholder="搜索（⌘ + K）"/></label><Link aria-label="输入计划或待办" className="wb-new-button" to="/workbench/plans"><Plus size={22}/></Link><button aria-label="切换主题" className="wb-theme-button" type="button">☼</button></header>{children}</section></main>;
}

export function DemoBadge({ tone, children }: PropsWithChildren<{ tone: string }>) { return <span className={`wb-badge wb-badge-${tone}`}>{children}</span>; }

export function MetricCard({ icon: Icon, tone, label, value, detail, note }: { icon: LucideIcon; tone: string; label: string; value: string; detail?: string; note?: string }) { return <article className={`wb-metric wb-metric-${tone}`}><span className="wb-metric-icon"><Icon size={25}/></span><div><small>{label}</small><strong>{value}</strong>{detail ? <em>{detail}</em> : null}</div>{note ? <p>{note}</p> : null}</article>; }

export function SectionCard({ title, count, children, className = "" }: PropsWithChildren<{ title: string; count?: string; className?: string }>) { return <section className={`wb-section-card ${className}`}><header><h2>{title}</h2>{count ? <span>{count}</span> : null}</header>{children}</section>; }
