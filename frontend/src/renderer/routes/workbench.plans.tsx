import { createFileRoute } from "@tanstack/react-router";
import { FolderKanban, Sparkles, UserRound } from "lucide-react";

export const Route = createFileRoute("/workbench/plans")({ component: PlansPage });

const drafts: Array<[name: string, group: string, tasks: string[]]> = [["个人工作台交互原型", "项目详情页设计", ["整理项目详情页结构", "优化任务详情交互", "确认页面视觉规范"]], ["计划与 TODO 页面", "页面设计与交互", ["梳理页面信息架构", "设计计划草案确认态", "整理复盘页面需求"]]];

function PlansPage() {
	return <div className="wb-page"><div className="wb-page-heading"><h1>计划与 TODO</h1></div><section className="wb-plan-workspace"><h2>计划工作区</h2><div className="wb-plan-message"><UserRound size={18}/><span>未来 5 天完成个人工作台项目详情页设计；　10 天内完成计划与 TODO 页面和工作回顾页面方案。</span></div><div className="wb-plan-message wb-ai"><Sparkles size={18}/><span>已生成可确认的新项目草案。</span></div><div className="wb-plan-input"><input placeholder="继续调整计划，例如：将第二个目标拆成两个项目"/><button type="button">发送调整</button></div></section><h2 className="wb-section-heading">新项目草案</h2><div className="wb-draft-grid">{drafts.map(([name, group, tasks]) => <article key={name}><header><FolderKanban size={22}/><strong>{name}</strong></header><section><b>{group}</b>{tasks.map((task) => <span key={task}>{task}</span>)}</section></article>)}</div><footer className="wb-ready-bar"><Sparkles size={22}/><span><strong>草案已就绪</strong><small>确认后将创建新项目，并自动生成任务。</small></span><button type="button">确认创建</button></footer></div>;
}
