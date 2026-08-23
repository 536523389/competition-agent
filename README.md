# Competition Agent

以竞赛结果为导向的竞赛项目总控 Agent。

Competition Agent 让用户只负责目标、想法和关键决策，Agent 负责竞赛项目从规划到可提交成果的管理、执行、检查与迭代。

```text
Goal -> Plan -> Execute -> Judge -> Improve -> Deliver
```

## 项目定位

Competition Agent 不是普通问答助手，也不是单纯材料生成器。

它面向参加创新创业、智能体、数学建模等项目制竞赛的大学生个人或小团队，解决通用 AI 只能完成单次任务、无法持续维护项目状态和判断下一步的问题。

核心原则：

```text
Human decides; Agent executes.
Agent First, Human Last.
```

## V1 目标

V1 使用一场真实项目制比赛作为验证场景。

目标不是绑定某一场比赛，而是证明：

```text
给 Competition Agent 一个真实比赛和参赛目标，
它能把用户从“我要参赛”推进到“形成可提交成果”。
```

## 核心能力

- 赛事编译：读取赛事规则、交付物、DDL、赛道限制和公开评分导向。
- 动态 Roadmap：根据比赛规则和项目状态生成任务列表。
- 自主执行：Agent 能完成的任务默认直接执行。
- Human Task 最小化：只有现实世界动作才交给用户。
- Key Decision 判断：只有改变目标、核心定位、核心功能或重大资源投入时才打断用户。
- DoD 验收：每个任务必须达到 Definition of Done。
- Judge：基于评分标准判断最大竞争力缺口，不输出伪精确获奖概率。
- Next Best Action：持续给出下一步最有价值行动。
- Artifact 管理：维护项目定义、Roadmap、Demo、Judge 报告和提交材料。

## Demo 叙事

Competition Agent 的第一个用户就是我们自己。

Competition Agent 的第一个项目，就是帮助我们完成 Competition Agent 自己的参赛。

```text
Competition Agent builds Competition Agent.
```

## 仓库结构

```text
projects/
└── competition-agent/
    ├── project-definition.md
    ├── project-state.md
    ├── roadmap.md
    ├── artifacts/
    │   ├── competition-agent-skill-spec.md
    │   ├── skill-content.md
    │   ├── project-description.md
    │   ├── demo-spec.md
    │   ├── video-script.md
    │   └── submission-checklist.md
    └── competitions/
        └── example-competition/
            ├── rules.md
            ├── branch-state.md
            ├── judge-report.md
            └── pitch-outline.md
```

## 关键文件

- [项目定义](projects/competition-agent/project-definition.md)
- [项目状态](projects/competition-agent/project-state.md)
- [动态 Roadmap](projects/competition-agent/roadmap.md)
- [Skill 说明](projects/competition-agent/artifacts/competition-agent-skill-spec.md)
- [Skill 内容草案](projects/competition-agent/artifacts/skill-content.md)
- [Demo 说明](projects/competition-agent/artifacts/demo-spec.md)
- [Judge 报告](projects/competition-agent/competitions/example-competition/judge-report.md)
- [演示视频脚本](projects/competition-agent/artifacts/video-script.md)
- [提交清单](projects/competition-agent/artifacts/submission-checklist.md)

## 作品说明

本仓库展示 Competition Agent 的项目定义、Skill 工作流、Demo 方案、Judge 机制和比赛适配分支。比赛分支用于说明 Competition Agent 如何在真实规则下形成可提交成果；母项目本身保持独立，可继续适配更多比赛。
