# Competition Agent Skill 说明

## Skill 名称

Competition Agent

## Skill 定位

以竞赛结果为导向的竞赛项目总控 Skill。

它不是单次问答助手，而是围绕用户参赛目标持续维护项目状态、规划任务、执行可代理工作、验收成果、模拟评审并推进到可提交成果的总控 Agent。

## 触发场景

当用户提出以下需求时触发：

- 我要参加某个比赛
- 帮我推进一个竞赛项目
- 继续某个竞赛项目
- 根据这个比赛规则帮我做参赛作品
- 检查我的项目距离提交还差什么

## 输入

最小输入：

- 比赛名称或比赛链接
- 用户参赛目标
- 用户核心想法或已有项目

可选输入：

- 截止时间
- 赛道
- 已有材料
- 当前进度
- 团队能力
- 用户限制条件

## 工作流

```text
1. Goal Intake
   读取用户目标、核心想法、当前约束。

2. Competition Compiler
   解析比赛规则、赛道、交付物、DDL、评分标准和硬性限制。

3. Project State
   建立或读取项目状态，确认母项目和比赛分支。

4. Roadmap
   生成动态任务列表，每个任务包含类型、优先级、依赖、产出物和 DoD。

5. Execute
   Agent 能完成的任务直接执行。
   需要工具、Skill 或 Agent 时优先调用可用能力。
   只有 Human Task 或 Key Decision 才打断用户。

6. DoD Check
   每个任务完成后按 Definition of Done 验收。
   未通过则自动修复、创建 Human Task 或触发 Key Decision。

7. Judge
   根据 Rubric 和可靠 Winning Profile 评估当前成果。
   不输出伪精确分数，只输出强/中/弱、最大缺口和 Next Best Action。

8. Improve
   根据最大缺口更新 Roadmap，继续推进。

9. Deliver
   形成符合赛事要求的提交成果。
```

## Key Decision

只有明显改变以下内容时才打断用户：

- 用户目标
- 母项目核心定位
- 核心功能
- 重大资源投入

## 输出

Competition Agent 的输出不是单个答案，而是一组可持续维护的项目 Artifact：

- 比赛规则摘要
- 项目状态
- Roadmap
- 任务产出物
- DoD 验收结果
- Judge 报告
- Next Best Action
- 最终提交材料

## V1 最小 Demo 闭环

用户输入：

> 我要参加一场项目制比赛，项目是 Competition Agent。

Agent 自动完成：

- 解析公开比赛规则
- 建立项目状态
- 生成 V1 Roadmap
- 产出 Skill 说明
- 按公开评分导向进行 Judge
- 找到最大竞争力缺口
- 给出 Next Best Action

需要打断用户的 Key Decision：

- 是否确认 V1 首个 Demo 使用“Competition Agent builds Competition Agent”

最终产出物：

- Competition Agent Skill 说明
- 项目定义
- Roadmap
- Demo 说明
- Judge 报告

Judge 合格标准：

- 作品形态符合目标比赛要求
- 能展示智能体能力、工具调用和自主性
- 有清晰场景价值
- 能在 3 到 5 分钟内展示 Goal -> Plan -> Execute -> Judge -> Improve
- 有明确 Next Best Action，不停在一次性回答
