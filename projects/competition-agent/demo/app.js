const stages = [
  {
    key: "goal",
    name: "Goal",
    title: "锁定目标与交付边界",
    body: "用户只做关键选择：参加 2025 全国大学生数学建模竞赛，并选择 C 题。",
    lines: ["[INPUT] 赛题：NIPT 的时点选择与胎儿异常判定", "[BOUNDARY] 终点：形成可提交论文与复现材料"]
  },
  {
    key: "plan",
    name: "Plan",
    title: "编译赛题，生成可验收 Roadmap",
    body: "Agent 解析四个问题、数据字段和论文要求，为每项任务绑定产出物与 Definition of Done。",
    lines: ["[TASK 01] 数据审计 → cleaned dataset", "[TASK 02] Q1–Q4 建模 → tables + figures", "[TASK 03] 论文生成 → final DOCX"]
  },
  {
    key: "execute",
    name: "Execute",
    title: "运行分析，不停在建议层",
    body: "Agent 清洗数据、拟合混合模型、处理删失时点、进行患者级验证，并自动生成图表和论文。",
    lines: ["[MODEL] Random-intercept mixed model · converged", "[TIMING] 267 个体完成删失结构建模", "[OUTPUT] 11 tables · 6 figures · reproducible scripts"]
  },
  {
    key: "judge",
    name: "Judge",
    title: "按评审逻辑主动找缺口",
    body: "Judge 不给伪精确获奖概率，而是检查模型假设、验证方式、论文闭环和风险披露。",
    lines: ["[PASS] 四问完整且可复现", "[GAP] 高 BMI 组样本仅 49 人", "[GAP] 女胎异常样本仅 65 条"]
  },
  {
    key: "improve",
    name: "Improve",
    title: "拒绝无效复杂度，补上关键验证",
    body: "多因素模型性能不升反降，Agent 保留 BMI 基线；异常判定补充嵌套交叉验证、校准和 Bootstrap 区间。",
    lines: ["[DECISION] multifactor ROC-AUC 0.670 < BMI-only 0.732", "[FIX] nested group CV + calibration + bootstrap", "[RESULT] ROC-AUC 0.800 · 95% CI 0.731–0.864"]
  },
  {
    key: "deliver",
    name: "Deliver",
    title: "交付可提交、可检查、可复现的成果包",
    body: "终点不是一句“完成了”，而是论文、源代码、数据结果、图表和 Judge 报告共同组成的成果包。",
    lines: ["[DOCX] 数学建模论文最终稿 · 11 pages", "[CODE] solve_c.py + final_analysis.py", "[STATUS] DELIVERABLE READY"]
  }
];

const artifacts = {
  model: {
    label: "ARTIFACT 01 / MODEL",
    title: "混合效应模型证据",
    html: "<p>同一孕妇可能多次检测，观测值不独立。最终模型设置孕妇随机截距，随机截距方差为 <b>8.210</b>，残差方差为 <b>2.834</b>，ICC 为 <b>0.743</b>，且模型收敛。</p>"
  },
  timing: {
    label: "ARTIFACT 02 / TIMING",
    title: "删失结构与检测时点",
    html: "<p>首次达标不能被简单当作普通回归标签：218 人在首次观测时已达标，40 人在两次检测之间达标，9 人观测结束仍未达标。Agent 明确区分左、区间和右删失，并报告高 BMI 组的不确定性。</p>"
  },
  judge: {
    label: "ARTIFACT 03 / JUDGE",
    title: "复杂不等于更好",
    html: "<p>患者级分组交叉验证显示：BMI-only 模型 ROC-AUC 为 <b>0.732</b>，多因素模型为 <b>0.670</b>。Agent 没有为了包装而保留复杂模型，而是选择更稳健、可解释的基线。</p>"
  },
  classification: {
    label: "ARTIFACT 04 / VALIDATION",
    title: "异常判定验证闭环",
    html: "<p>嵌套分组交叉验证 ROC-AUC 为 <b>0.800</b>，PR-AUC 为 <b>0.437</b>，灵敏度为 <b>0.585</b>，特异度为 <b>0.843</b>。Bootstrap 95% CI 同步报告，避免只展示单点指标。</p>"
  },
  delivery: {
    label: "ARTIFACT 05 / DELIVER",
    title: "最终交付清单",
    html: "<ul><li>NIPT检测时点优化与胎儿异常判定-数学建模论文-最终稿.docx</li><li>analysis/solve_c.py</li><li>analysis/final_analysis.py</li><li>outputs/final/ 模型表格与全部图表</li><li>final-judge-report.md</li><li>C题完整成果.zip</li></ul>"
  }
};

const stageList = document.querySelector("#stageList");
const detailType = document.querySelector("#detailType");
const detailTitle = document.querySelector("#detailTitle");
const detailBody = document.querySelector("#detailBody");
const outputBox = document.querySelector("#outputBox");
const runButton = document.querySelector("#runButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const runStatus = document.querySelector("#runStatus");
const statusLamp = document.querySelector("#statusLamp");

let current = -1;
let timer = null;
let running = false;

stages.forEach((stage, index) => {
  const item = document.createElement("li");
  item.className = "stage-item";
  item.innerHTML = `<button type="button" aria-label="查看 ${stage.name} 阶段"><span class="stage-num">0${index + 1}</span><span class="stage-name">${stage.name}</span></button>`;
  item.querySelector("button").addEventListener("click", () => showStage(index, false));
  stageList.appendChild(item);
});

function showStage(index, fromRun = true) {
  current = index;
  const stage = stages[index];
  document.querySelectorAll(".stage-item").forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === index);
    item.classList.toggle("done", itemIndex < index || (index === stages.length - 1 && !running));
  });
  detailType.textContent = stage.name.toUpperCase();
  detailTitle.textContent = stage.title;
  detailBody.textContent = stage.body;
  outputBox.replaceChildren();
  stage.lines.forEach((line, lineIndex) => {
    const span = document.createElement("span");
    span.textContent = line;
    span.style.animationDelay = `${lineIndex * 100}ms`;
    outputBox.appendChild(span);
  });
  progressText.textContent = `${index + 1} / ${stages.length}`;
  progressBar.style.width = `${((index + 1) / stages.length) * 100}%`;
  if (!fromRun) pauseRun();
}

function advance() {
  if (current >= stages.length - 1) {
    finishRun();
    return;
  }
  showStage(current + 1);
  timer = window.setTimeout(advance, 2200);
}

function startRun() {
  if (current >= stages.length - 1) resetRun();
  running = true;
  runButton.disabled = true;
  pauseButton.disabled = false;
  pauseButton.textContent = "暂停";
  runStatus.textContent = "Agent 执行中";
  statusLamp.className = "status-lamp running";
  advance();
}

function pauseRun() {
  window.clearTimeout(timer);
  timer = null;
  if (running) {
    running = false;
    runButton.disabled = false;
    runButton.textContent = "继续运行";
    pauseButton.disabled = true;
    runStatus.textContent = "已暂停";
    statusLamp.className = "status-lamp";
  }
}

function finishRun() {
  running = false;
  timer = null;
  document.querySelectorAll(".stage-item").forEach(item => item.classList.add("done"));
  runButton.disabled = false;
  runButton.textContent = "重新运行";
  pauseButton.disabled = true;
  runStatus.textContent = "成果包已就绪";
  statusLamp.className = "status-lamp done";
}

function resetRun() {
  window.clearTimeout(timer);
  timer = null;
  running = false;
  current = -1;
  document.querySelectorAll(".stage-item").forEach(item => item.className = "stage-item");
  detailType.textContent = "READY";
  detailTitle.textContent = "一次点击，观看完整闭环";
  detailBody.textContent = "Demo 将按真实项目过程依次运行。每一步都对应可检查的文件、数据或判断。";
  outputBox.innerHTML = "<span>等待 Agent 输出...</span>";
  progressText.textContent = "0 / 6";
  progressBar.style.width = "0";
  runStatus.textContent = "等待启动";
  statusLamp.className = "status-lamp";
  runButton.disabled = false;
  runButton.textContent = "运行 Agent";
  pauseButton.disabled = true;
}

runButton.addEventListener("click", startRun);
pauseButton.addEventListener("click", pauseRun);
resetButton.addEventListener("click", resetRun);

const dialog = document.querySelector("#artifactDialog");
const modalLabel = document.querySelector("#modalLabel");
const modalTitle = document.querySelector("#modalTitle");
const modalBody = document.querySelector("#modalBody");

function openArtifact(key) {
  const artifact = artifacts[key];
  if (!artifact) return;
  modalLabel.textContent = artifact.label;
  modalTitle.textContent = artifact.title;
  modalBody.innerHTML = artifact.html;
  dialog.showModal();
}

document.querySelectorAll("[data-artifact]").forEach(card => {
  card.addEventListener("click", event => {
    if (!event.target.closest("button")) openArtifact(card.dataset.artifact);
  });
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openArtifact(card.dataset.artifact);
    }
  });
});
document.querySelectorAll("[data-open-artifact]").forEach(button => button.addEventListener("click", event => {
  event.stopPropagation();
  openArtifact(button.dataset.openArtifact);
}));
document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

let spotlightFrame = null;
document.querySelectorAll(".spotlight").forEach(card => {
  card.addEventListener("pointermove", event => {
    if (spotlightFrame) return;
    spotlightFrame = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
      spotlightFrame = null;
    });
  });
});

window.addEventListener("scroll", () => {
  document.querySelector("#siteNav").classList.toggle("compact", window.scrollY > 40);
}, { passive: true });

function updateClock() {
  document.querySelector("#clock").textContent = new Date().toLocaleTimeString("zh-CN", { hour12: false });
}
updateClock();
window.setInterval(updateClock, 1000);
