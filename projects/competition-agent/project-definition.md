# Competition Agent V1 项目定义

版本：V1 落地稿

## 一句话定义

Competition Agent 是一个以竞赛结果为导向的竞赛项目总控 Agent。

用户给出参赛目标和核心想法后，Competition Agent 读取赛事规则和评分标准，结合项目状态、竞赛 SOP 与可靠的往届获奖规律，动态规划项目、调用工具执行任务、验收成果、模拟评审并持续寻找下一最佳行动，直到形成可提交的参赛成果。

核心原则：

> Human decides; Agent executes.

核心循环：

```text
Goal -> Plan -> Execute -> Judge -> Improve -> Deliver
```

## 项目与比赛的关系

Competition Agent 是独立母项目，不依附于某一场比赛。

它的长期目标是服务多类项目制竞赛，包括创新创业、智能体、数学建模、挑战杯、互联网+ 等场景。

V1 的第一个比赛适配分支，用来证明 Competition Agent 能在真实比赛中完成从目标到提交成果的闭环。

## V1 目标

V1 不追求一次性支持所有比赛。V1 选择一场真实比赛作为验证场景。

V1 要证明：

> 给 Competition Agent 一个真实比赛和一个参赛目标，它能把用户从“我要参赛”推进到“形成可提交成果”。

## 用户与 Agent 分工

用户负责：

- Goal：参赛目标
- Idea：核心想法
- Key Decision：关键决策
- AI 无法替代的现实世界行动

Agent 负责：

- 调查比赛
- 理解规则
- 分析评分标准
- 维护项目状态
- 生成动态 Roadmap
- 拆解可执行任务
- 调用搜索、文档、PPT、代码、数据分析等能力
- 自动执行 Agent Task
- 为 Human Task 准备最小必要工作
- 生成和维护项目成果
- 根据 DoD 验收
- 模拟评审
- 找到 Next Best Action
- 必要时 Replan

## Key Decision 定义

只有明显改变以下内容时，Agent 才暂停询问用户：

- 用户目标
- 母项目核心定位
- 核心功能
- 重大资源投入

其他低风险执行决策由 Agent 自主处理。

## V1 核心理念

### Minimize Human Work

任务优先处理顺序：

1. Competition Agent 能否直接完成？
2. 若不能，是否存在可调用的 Tool / Skill / Agent？
3. 若仍不能，是否存在满足赛事目标的低成本替代方案？
4. 全部不可行时，才创建最小 Human Task。

执行原则：

> Agent First, Human Last.

## V1 架构

```text
Competition Agent
├── Competition Compiler
│   └── 赛事规则 -> 动态 Roadmap
├── Project State
│   └── 长期状态与成果管理
├── Executor
│   └── Agent Task / Tool / Skill 调用
└── Judge
    └── Rubric / Winning Profile -> Gap -> Next Best Action
```

V1 不要求真的实现四个独立 Agent，可在一个 Skill 工作流中体现四种职责。

## V1 不做

- 独立项目 Dashboard
- 复杂时间排程
- 每周工时预算
- 团队成员任务分工
- Stage Gate
- 后台主动提醒
- 大型获奖案例数据库
- 精确获奖概率预测
- 精确评分预测
- 复杂版本控制系统

## V1 Demo

Competition Agent 的第一个用户就是我们自己。

Competition Agent 的第一个验证分支，就是帮助我们完成一次真实比赛参赛。

演示链路：

```text
目标：参加一场真实项目制比赛
-> Competition Agent 读取真实规则
-> 分析评分标准
-> 建立 Competition Agent 项目
-> 生成 Roadmap
-> 自主执行 Agent Tasks
-> 产生 Demo、项目材料等 Artifact
-> 自动 Judge
-> 发现最大竞争力缺口
-> 优化 Competition Agent 自己
-> Replan
-> 形成最终可提交成果
```

核心叙事：

> 大家现在看到的 Competition Agent 本身，就是 Competition Agent 管理并推进完成的第一个竞赛项目。
