# V1 Demo 说明

## Demo 名称

Competition Agent builds Competition Agent

## Demo 目标

证明 Competition Agent 不是普通问答助手，而是可以围绕竞赛目标持续推进项目的总控 Skill。

## Demo 时长

3 到 5 分钟。

## Demo 输入

```text
我要参加一场项目制比赛。
我的项目是 Competition Agent。
目标是提交一个 GitHub 项目链接，展示它能管理并推进竞赛项目。
```

## Demo 展示链路

```text
Goal
用户给出参赛目标。

Plan
Agent 读取比赛规则和项目状态，生成 Roadmap。

Execute
Agent 自动产出 Skill 说明、项目定义和 Demo 方案。

Judge
Agent 按公开评分导向检查当前成果。

Improve
Agent 找到最大竞争力缺口，并更新 Next Best Action。

Deliver
Agent 汇总可提交成果包。
```

## 必须展示的关键点

- Agent 不是只回答问题，而是维护项目状态。
- Roadmap 中每个任务都有产出物和 DoD。
- Agent 默认执行可完成任务。
- Judge 会主动找缺口，不做伪精确分数。
- 最终成果能对齐比赛提交形态。

## Demo 中避免展示的内容

- 不展示复杂 Dashboard。
- 不展示多比赛调度。
- 不展示精确获奖概率。
- 不展示未验证的大型获奖案例库。

## Demo 说明重点

演示中需要讲清楚：Competition Agent 先接收参赛目标，再将规则、任务、成果和评审串成一个可持续推进的闭环。
