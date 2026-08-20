import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckSquare2, FileText, FolderKanban, Sparkles } from "lucide-react";
import { DemoBadge, MetricCard, SectionCard } from "../features/workbench/WorkbenchShell";

export const Route = createFileRoute("/workbench/")({ component: WorkbenchHome });

const todos = [
	["个人工作台交互原型", "工作台首页视觉稿", "调整项目进展区的字体层级与留白", "待执行", "blue"],
	["知识库体系升级", "知识库标签体系设计", "补充标签定义文档并完善示例", "待执行", "green"],
	["自动化报告模板", "周报模板结构优化", "完善图表模块的配置说明", "待确认", "orange"],
];

const projects = [
	["个人工作台交互原型", "工作台首页视觉稿", "调整项目进展区的字体层级与留白", "进行中", "green", "今天 15:40"],
	["知识库体系升级", "知识库标签体系设计", "标签体系方案已通过评审，正在补充示例。", "进行中", "green", "今天 11:25"],
	["自动化报告模板", "周报模板结构优化", "行业周报框架已确定，请确认核心指标说明。", "待确认", "orange", "昨天 17:30"],
];

function WorkbenchHome() {
	return (
		<div className="wb-page">
			<div className="wb-page-heading"><h1>工作台</h1></div>
			<div className="wb-metric-grid">
				<MetricCard icon={FileText} tone="red" label="项目总数" value="8" />
				<MetricCard icon={FolderKanban} tone="blue" label="进行中项目" value="3" />
				<MetricCard icon={CheckSquare2} tone="green" label="今日待办" value="5" />
				<MetricCard icon={Sparkles} tone="orange" label="Token 消耗量" value="128.4k" detail="累计　昨日 6.8k" note="演示数据 · 仅统计受管任务" />
			</div>
			<div className="wb-two-column">
				<SectionCard title="今日待办" count="5">
					<button className="wb-ai-suggestion" type="button"><Sparkles size={15} /> AI 建议（2）<span>⌄</span></button>
					<div className="wb-list">
						{todos.map(([project, task, action, state, tone]) => (
							<button className="wb-todo" key={task} type="button">
								<span className={`wb-list-icon wb-icon-${tone}`}><CheckSquare2 size={17} /></span>
								<span className="wb-todo-copy"><strong>{project} <em>· {task}</em></strong><small>{action}</small></span>
								<DemoBadge tone={tone}>{state}</DemoBadge>
							</button>
						))}
					</div>
				</SectionCard>
				<SectionCard title="项目进展">
					<button className="wb-import-notice" type="button"><span>☷</span><strong>待导入 Codex 对话</strong><small>有 2 个对话待导入</small><b>前往导入 <ArrowRight size={15} /></b></button>
					<div className="wb-project-stack">
						{projects.map(([name, task, progress, state, tone, updated]) => (
							<button className="wb-project-progress" key={name} type="button">
								<span><strong>{name} <em>· {task}</em></strong><small>{progress}</small></span>
								<aside><DemoBadge tone={tone}>{state}</DemoBadge><time>更新于 {updated}</time></aside>
							</button>
						))}
					</div>
				</SectionCard>
			</div>
			<SectionCard title="工作回顾" className="wb-review-links">
				<button type="button"><span className="wb-list-icon wb-icon-blue">□</span><span><strong>今日回顾</strong><small>今日 20:30</small></span><b>查看</b></button>
				<button type="button"><span className="wb-list-icon wb-icon-green">□</span><span><strong>本周回顾</strong><small>周日 20:30</small></span><b>查看</b></button>
			</SectionCard>
		</div>
	);
}
