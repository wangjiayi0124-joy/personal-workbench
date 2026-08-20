import { createFileRoute } from "@tanstack/react-router";
import { Download, Filter, Search } from "lucide-react";
import { DemoBadge } from "../features/workbench/WorkbenchShell";

export const Route = createFileRoute("/workbench/projects")({ component: ProjectsPage });

const rows = [
	["个人工作台交互原型", "待确认", "orange", "已确认工作台首页方案，正在收敛项目列表字段。", "整理项目总览页面方案", "今天 15:40"],
	["知识库体系升级", "进行中", "green", "标签体系方案通过评审，正在补充标签定义文档与示例。", "补充标签定义文档与示例", "今天 11:25"],
	["自动化报告模板", "待确认", "orange", "周报模板结构已优化，完善图表模块的配置说明。", "完善图表模块配置说明", "昨天 17:30"],
	["用户研究访谈分析", "已阻塞", "red", "访谈资料已整理完成，受限于参与者反馈未收齐。", "跟进参与者反馈收集", "昨天 10:18"],
	["年度规划与路线图", "已归档", "gray", "已完成年度目标与里程碑规划，文档已归档。", "归档项目资料", "5月20日 16:45"],
];

function ProjectsPage() {
	return <div className="wb-page">
		<div className="wb-page-heading wb-heading-actions"><h1>项目</h1><button className="wb-secondary-button" type="button"><Download size={17} />导入 Codex 对话</button></div>
		<div className="wb-project-toolbar"><label><Search size={18}/><input placeholder="搜索项目名称或目标" /></label><nav>{["全部 8", "进行中 3", "待确认 2", "已阻塞 1", "已归档 2"].map((item, index) => <button className={index === 0 ? "is-active" : ""} key={item} type="button">{item}</button>)}</nav><button className="wb-filter-button" type="button"><Filter size={17}/>筛选</button></div>
		<div className="wb-project-table" role="table"><div className="wb-project-table-head"><span>项目</span><span>最新进展</span><span>下一步</span><span>更新</span></div>{rows.map(([name, state, tone, progress, next, updated]) => <button className="wb-project-row" key={name} type="button"><span><strong>{name}</strong><DemoBadge tone={tone}>{state}</DemoBadge></span><p>{progress}</p><p>{next}</p><time>{updated}<b>›</b></time></button>)}</div>
	</div>;
}
