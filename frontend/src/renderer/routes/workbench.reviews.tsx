import { createFileRoute } from "@tanstack/react-router";
import { Flag, Sparkles } from "lucide-react";

export const Route = createFileRoute("/workbench/reviews")({ component: ReviewsPage });

const daily = [["个人工作台交互原型", "确认项目页导入方式", "整理工作回顾结构"], ["自动化报告模板", "梳理报告结构", "补充指标口径"]];
const weekly = [["个人工作台交互原型", "完成工作台、项目与计划核心流程", "收口工作回顾页面"], ["知识库体系升级", "整理标签体系方案", "确认命名规范"], ["自动化报告模板", "梳理报告结构", "补充指标口径"], ["用户研究访谈分析", "完成访谈资料编码", "整理关键洞察"]];

function ReviewBlock({ title, date, rows }: { title: string; date: string; rows: string[][] }) {
	return <section className="wb-review-block"><header><h2>{title} <small>{date}</small></h2><button type="button">修改</button></header><h3>项目进展</h3><div className="wb-review-table"><div><span>项目</span><span>已完成</span><span>当前进展</span></div>{rows.map(([project, done, current]) => <div key={project}><span>{project}</span><span>{done}</span><span>{current}</span></div>)}</div><div className="wb-review-insights"><article className="is-warning"><Flag size={22}/><span><strong>问题与计划差异</strong><p>自动化报告模板：指标定义未补齐，相关任务受阻。</p></span></article><article><Sparkles size={22}/><span><strong>AI 回顾建议</strong><p>先确认核心指标口径，再继续完善模板配置。</p></span></article></div></section>;
}

function ReviewsPage() { return <div className="wb-page"><div className="wb-page-heading"><h1>工作回顾</h1></div><nav className="wb-review-tabs"><button className="is-active" type="button">当前回顾</button><button type="button">历史回顾</button></nav><ReviewBlock title="今日回顾" date="8月20日" rows={daily}/><ReviewBlock title="本周回顾" date="8月17日 – 8月23日" rows={weekly}/></div>; }
