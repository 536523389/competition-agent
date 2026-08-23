# 演示视频脚本

目标时长：3 到 5 分钟

## 0:00 - 0:20 开场

大家好，这是 Competition Agent，一个以竞赛结果为导向的竞赛项目总控 Agent。

它的核心理念是：

> Human decides; Agent executes.

用户只负责目标、想法和关键决策，Agent 负责规划、执行、验收、评审和迭代。

## 0:20 - 0:50 问题

普通 AI 通常是任务驱动：

```text
Ask -> Answer -> Stop
```

但竞赛项目不是一次问答就能完成。用户还需要理解规则、拆任务、维护进度、判断成果质量、准备材料，并持续决定下一步。

Competition Agent 要解决的是这个持续推进问题。

## 0:50 - 1:30 核心机制

Competition Agent 的工作循环是：

```text
Goal -> Plan -> Execute -> Judge -> Improve -> Deliver
```

它会先解析比赛规则和评分导向，然后建立项目状态，生成 Roadmap，自动执行 Agent Task，并用 DoD 验收成果。

完成阶段性成果后，它会模拟 Judge，找出最大竞争力缺口，并生成 Next Best Action。

## 1:30 - 2:50 Demo

现在演示 Competition Agent 的第一个项目：完成它自己的参赛。

输入目标：

```text
我要参加一场项目制比赛，项目是 Competition Agent。
```

Agent 自动完成：

- 建立项目定义
- 读取比赛规则和交付要求
- 生成 Roadmap
- 产出 Skill 说明
- 产出 Demo 说明
- 进行 Judge
- 找到最大缺口
- 给出下一步任务

重点展示：

- `project-state.md`
- `roadmap.md`
- `competition-agent-skill-spec.md`
- `judge-report.md`

## 2:50 - 3:40 差异化

Competition Agent 和普通 AI 的区别是：

- 普通 AI 等待用户下一个任务。
- Competition Agent 主动维护状态并判断下一步。
- 普通项目管理关注做完。
- Competition Agent 关注是否提高竞赛表现。
- 普通材料生成停在初稿。
- Competition Agent 会 Judge 并继续改进。

## 3:40 - 4:20 落地价值

短期，它帮助大学生完成竞赛项目从目标到提交的过程。

长期，它可以扩展成高校创新创业竞赛辅导平台，支持多比赛、多项目、成果复用和项目持续进化。

## 4:20 - 4:40 收尾

Competition Agent 的第一个用户就是我们自己。

大家现在看到的 Competition Agent 本身，就是 Competition Agent 管理并推进完成的第一个竞赛项目。
