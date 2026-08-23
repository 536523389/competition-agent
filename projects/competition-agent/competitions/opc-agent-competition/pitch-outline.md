# 路演提纲

## 1. 开场

大学生竞赛项目最大的问题不是不会问 AI，而是不知道下一步该做什么，也不知道当前成果离获奖要求差在哪里。

## 2. 问题

普通 AI 是任务驱动：

```text
Ask -> Answer -> Stop
```

用户仍然需要：

- 自己理解规则
- 自己维护项目状态
- 自己持续发任务
- 自己判断成果够不够好
- 自己决定下一步

## 3. 解决方案

Competition Agent 是竞赛结果导向的总控 Agent。

```text
Goal -> Plan -> Execute -> Judge -> Improve -> Deliver
```

核心原则：

> Human decides; Agent executes.

## 4. 核心能力

- 赛事编译：读取规则、交付物、限制和评分导向。
- 动态 Roadmap：根据目标和状态生成任务。
- 自主执行：Agent 能做的直接做，只有关键决策打断用户。
- DoD 验收：任务达到标准才算完成。
- Judge：按评分导向找最大竞争力缺口。
- Next Best Action：持续推进到可提交成果。

## 5. Demo

Competition Agent 的第一个用户就是我们自己。

我们用 Competition Agent 来完成 Competition Agent 自己的参赛。

## 6. 创新点

- 从任务驱动变成目标和状态驱动。
- 从一次性生成变成持续推进。
- 从普通项目管理变成竞赛结果导向。
- 从人工判断下一步变成 Agent 主动寻找 Next Best Action。

## 7. 落地价值

短期：

- 帮助学生完成竞赛项目规划、材料、Demo 和评审优化。

长期：

- 可扩展到高校创新创业辅导平台。
- 可沉淀多项目、多比赛和成果复用能力。

