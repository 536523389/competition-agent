# 项目说明

## 项目名称

Competition Agent

## 项目定位

Competition Agent 是一个以竞赛成绩为导向，自主规划、执行、评审和迭代大学生竞赛项目的总控 Agent。

它让用户只负责目标、想法和关键决策，其余可代理工作由 Agent 执行。

## 目标用户

第一版目标用户是正在参加创新创业类、智能体类或项目制竞赛的大学生个人或小团队。

他们的问题不是单纯缺少 AI 问答工具，而是缺少一个能持续推进竞赛项目的总控系统：

- 不知道比赛规则如何转成执行任务
- 不知道下一步最该做什么
- 不知道当前成果是否符合评分导向
- 不知道哪些工作必须自己做，哪些可以交给 AI
- 缺少长期项目状态和成果沉淀

## 核心价值

普通 AI 更像任务助手：

```text
Ask -> Answer -> Stop
```

Competition Agent 是目标和状态驱动：

```text
Goal -> Plan -> Execute -> Judge -> Improve -> Deliver
```

## 核心能力

- 赛事编译：读取赛事规则、交付物、DDL、赛道限制和公开评分导向。
- 动态 Roadmap：根据比赛规则和项目状态生成任务列表。
- 自主执行：Agent 能完成的任务直接执行。
- DoD 验收：每个任务必须达到 Definition of Done。
- Judge：基于 Rubric 和可靠 Winning Profile 判断最大竞争力缺口。
- Next Best Action：持续给出下一步最有价值行动。
- Artifact 管理：维护项目定义、Roadmap、材料、Demo、Judge 报告等成果。

## 创新点

1. 竞赛结果导向，而不是普通项目完成导向。
2. Agent 默认执行，而不是默认给建议。
3. 用 DoD 和 Judge 建立项目推进闭环。
4. 通过项目文件维护长期状态。
5. 用 Competition Agent builds Competition Agent 证明自举能力。

## V1 范围

V1 使用 OPC 智能体大赛作为第一个验证场景，目标是证明 Competition Agent 能在真实赛事规则下形成可提交成果。

V1 不做复杂 Dashboard、团队分工、后台提醒、精确获奖概率预测和大型获奖案例库。

## 项目与比赛关系

Competition Agent 是独立项目，不依附于某一场比赛。OPC 智能体大赛是 V1 的第一个验证场景，用来展示它如何在真实规则、真实交付要求和真实提交入口下推进项目。

长期来看，Competition Agent 可适配创新创业、智能体、数学建模、挑战杯、互联网+ 等项目制竞赛。

## 当前作品形态

V1 当前优先使用 GitHub 仓库作为作品链接和补充材料入口。

如后续 remio 可用，可补充 Skill 或 aApp 版本，用于增强输入、流程导航和结果展示。
