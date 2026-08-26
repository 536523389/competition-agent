# Competition Agent Real Project Demo

这个 Demo 使用 2025 全国大学生数学建模竞赛 C 题的真实执行结果，展示 Competition Agent 如何完成：

`Goal → Plan → Execute → Judge → Improve → Deliver`

## 本地运行

在本目录启动任意静态文件服务器：

```powershell
python -m http.server 4173
```

然后访问 `http://localhost:4173`。

页面不依赖后端，核心流程可离线运行；Google Fonts 无网络时会回退到本机中文字体。

## Demo 操作

1. 点击“运行 Agent”，观看六阶段自动推进。
2. 点击“暂停”或直接选择左侧阶段，讲解具体节点。
3. 点击证据卡片，查看模型与交付详情。
4. 用“重置”恢复到演示初始状态。

## 数据来源

- `../competitions/cumcm-2025-c/outputs/final/final_summary.json`
- `../competitions/cumcm-2025-c/final-judge-report.md`
- `../competitions/cumcm-2025-c/NIPT检测时点优化与胎儿异常判定-数学建模论文-最终稿.docx`

