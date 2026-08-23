# Roadmap

Roadmap 由 Competition Agent 母项目目标、V1 范围和当前比赛适配分支共同生成。

## Task 1：固化项目定义

- 类型：Agent Task
- 优先级：P0
- 状态：DONE
- 目标：把项目从 CompetitionOS 泛概念收敛为 Competition Agent V1。
- 产出物：`project-definition.md`
- DoD：能用一句话、核心循环、V1 边界和 Demo 叙事解释项目。

## Task 2：整理比赛规则

- 类型：Agent Task
- 优先级：P0
- 状态：DONE
- 目标：建立当前比赛分支的规则文件。
- 产出物：`competitions/example-competition/rules.md`
- DoD：记录作品形态、赛道要求、公开评审导向和已知限制。

## Task 2.5：明确母项目与比赛适配分支边界

- 类型：Agent Task
- 优先级：P0
- 状态：DONE
- 目标：明确 Competition Agent 是独立项目，具体比赛只是 V1 验证分支。
- 产出物：README、project-definition、project-state。
- DoD：根层文件表达通用项目定位，比赛目录表达具体赛事适配。

## Task 3：编写 Competition Agent Skill 说明

- 类型：Agent Task
- 优先级：P0
- 状态：DONE
- 目标：把 Competition Agent 的总控逻辑写成可迁移到不同平台的 Skill 说明。
- 产出物：`artifacts/competition-agent-skill-spec.md`
- DoD：包含触发条件、输入、工作流、输出、Key Decision、DoD 验收、Judge 规则。

## Task 4：跑通最小 Demo 闭环

- 类型：Agent Task
- 优先级：P0
- 状态：DONE
- 目标：证明 Competition Agent 能从目标出发，生成 Roadmap、执行一个任务、验收、Judge、给出 Next Best Action。
- 产出物：`artifacts/demo-spec.md`
- DoD：3 到 5 分钟内能讲清楚并展示完整闭环。

## Task 5：生成提交材料初稿

- 类型：Agent Task
- 优先级：P1
- 状态：DONE
- 目标：准备比赛提交所需说明材料。
- 产出物：项目说明、Demo 说明、演示视频脚本、补充材料。
- DoD：评委无需额外解释即可理解作品价值、使用方式和落地路径。

## Task 6：Judge 并 Replan

- 类型：Agent Task
- 优先级：P1
- 状态：DONE
- 目标：按公开评分导向评估当前成果，找出最大竞争力缺口。
- 产出物：`competitions/example-competition/judge-report.md`
- DoD：输出强/中/弱差距判断、最大缺口和 Next Best Action。

## Task 7：发布 GitHub 项目链接

- 类型：Human Task + Agent Task
- 优先级：P0
- 状态：DONE
- 目标：将完整项目材料推送到 GitHub，并作为作品链接提交。
- 产出物：`https://github.com/536523389/competition-agent`
- DoD：GitHub 默认分支能看到 README 和完整 `projects/competition-agent` 目录。
