# Project State

项目：Competition Agent

当前版本：V1

当前阶段：定义已收敛，进入可提交作品落地阶段。

## 项目定位

Competition Agent 是一个以竞赛成绩为导向，自主规划、执行、评审和迭代大学生竞赛项目的总控 Agent。

## 当前母项目

- 母项目名称：Competition Agent
- 首个目标比赛：OPC 智能体大赛
- 首个作品形态：remio Skill 优先，aApp 作为可选包装
- 首个 Demo 叙事：Competition Agent builds Competition Agent

## 当前关键假设

- 用户不是只需要一次性问答，而是需要长期竞赛推进。
- 当前比赛更看重可运行智能体作品、工具调用、自主性、Demo 完成度和落地潜力。
- V1 用项目文件作为长期状态，不依赖复杂数据库。
- V1 先做 Skill 本体，再考虑 aApp 壳。

## 已确定原则

- Human decides; Agent executes.
- Agent First, Human Last.
- Goal -> Plan -> Execute -> Judge -> Improve -> Deliver.
- 不做伪精确分数和获奖概率。
- Winning Profile 宁缺毋滥。

## 当前风险

- 作品定义强，但实际 remio Skill 能否表现出“自主执行”需要验证。
- 官方评分细则未完全公开，只能基于公开页面和作品要求进行对齐。
- 如果 Demo 只展示文档生成，容易被看成普通 ChatGPT 包装。
- 如果 V1 范围过大，可能导致提交前没有稳定闭环。

## Next Best Action

当前最重要任务：

> 将 `artifacts/remio-skill-content.md` 迁移到 remio，创建 Competition Agent Skill，并用真实输入跑一次最小 Demo 闭环。
