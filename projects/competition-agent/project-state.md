# Project State

项目：Competition Agent

版本：V1

## 项目定位

Competition Agent 是一个以竞赛成绩为导向，自主规划、执行、评审和迭代大学生竞赛项目的总控 Agent。

## 母项目

- 母项目名称：Competition Agent
- 项目属性：独立母项目
- 目标场景：多类项目制竞赛
- 验证方式：真实项目制比赛适配分支
- 作品载体：GitHub 项目链接
- Demo 叙事：Competition Agent builds Competition Agent

## 关键假设

- 用户不是只需要一次性问答，而是需要长期竞赛推进。
- Competition Agent 的母项目价值独立于任何单一比赛。
- 比赛分支用于验证真实规则、交付要求和评分导向下的项目推进能力。
- V1 用项目文件作为长期状态，不依赖复杂数据库。
- V1 用 GitHub 仓库呈现完整作品材料和可复用工作流。

## 已确定原则

- Human decides; Agent executes.
- Agent First, Human Last.
- Goal -> Plan -> Execute -> Judge -> Improve -> Deliver.
- 不做伪精确分数和获奖概率。
- Winning Profile 宁缺毋滥。

## 状态文件用途

该文件用于说明 Competition Agent 的长期项目状态模型。实际使用时，Agent 可读取本文件恢复母项目定位、验证方式、核心原则和工作边界。
