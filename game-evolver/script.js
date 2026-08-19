const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const languageButton = document.querySelector('.lang-toggle');

const copy = {
  en: {
    pageTitle: 'Game-Evolver | Better games through better orchestration',
    metaDescription: 'Game-Evolver: dual-loop evolution for end-to-end game orchestration.',
    menu: 'Menu',
    navEvidence: 'Evidence',
    navLoop: 'The loop',
    navDemo: 'Demo',
    navPaper: 'Paper',
    heroEyebrow: '<span class="pulse-dot"></span> Research project / 2026',
    heroTitle: 'Better games<br><em>through better orchestration.</em>',
    heroLede: 'Game-Evolver co-evolves the agent that builds a game and the harness that teaches it how to build better.',
    seeEvolution: 'See the evolution <span aria-hidden="true">&#8595;</span>',
    readPaper: 'Read the paper <span aria-hidden="true">&#8599;</span>',
    openGithub: 'Open GitHub <span aria-hidden="true">&#8599;</span>',
    artifact: 'artifact',
    harness: 'harness',
    goa: 'game orchestration<br>agent',
    hpa: 'harness proposal<br>agent',
    systemLabel: 'dual-loop system',
    marquee: '<span>BUILD</span><b>*</b><span>RUN</span><b>*</b><span>OBSERVE</span><b>*</b><span>EVOLVE</span><b>*</b><span>BUILD</span><b>*</b><span>RUN</span><b>*</b><span>OBSERVE</span><b>*</b><span>EVOLVE</span>',
    evidenceEyebrow: '01 / Evidence',
    evidenceTitle: 'The result is not a prettier prompt.<br><em>It is a more reliable game.</em>',
    relativeGain: 'relative overall gain<br><span class="muted">20.06 &rarr; 24.45</span>',
    relativeGainV: 'relative overall gain<br><span class="muted">37.60 &rarr; 48.45</span>',
    scoreLift: 'overall score lift<br><span class="muted">46.19 &rarr; 56.39</span>',
    sourceNote: 'Reported overall scores from the Game-Evolver paper. Relative gains are calculated from the published baseline and evolved scores.',
    loopEyebrow: '02 / The loop',
    loopTitle: 'Two loops. One<br><em>observable outcome.</em>',
    innerLoop: 'INNER LOOP',
    innerTitle: 'Make the game run.',
    innerBody: 'The game orchestration agent edits a project, launches the runtime, probes meaningful states, and repairs what the player can actually see.',
    innerSteps: '<span>01&nbsp; edit</span><span>02&nbsp; launch</span><span>03&nbsp; replay</span>',
    outerLoop: 'OUTER LOOP',
    outerTitle: 'Make the harness learn.',
    outerBody: 'The harness proposal agent turns recurring failures into reusable guidance, then keeps, revises, merges, or retires those skills.',
    outerSteps: '<span>01&nbsp; diagnose</span><span>02&nbsp; propose</span><span>03&nbsp; admit</span>',
    loopCaption: 'Quality appears when intention survives execution.',
    demoEyebrow: '03 / Before &amp; after',
    demoTitle: 'Watch the harness<br><em>change the artifact.</em>',
    actionTitle: 'Richer visual and action design.',
    racingSource: 'Cases from GameCraft-Bench (<a href="https://github.com/FreedomIntelligence/gamecraft-bench" target="_blank" rel="noreferrer">project repository</a>).',
    spaceSource: 'Cases from V-GameGym (<a href="https://github.com/alibaba/SKYLENAGE-GameCodeGym/tree/main" target="_blank" rel="noreferrer">project repository</a>).',
    engineeringTitle: 'Better engineering development.',
    engineeringLabel: 'Task 0015 / Fog and LUT grading',
    engineeringSource: 'Cases from GameDevBench (<a href="https://github.com/waynchi/gamedevbench" target="_blank" rel="noreferrer">project repository</a>).',
    narrativeTitle: 'Richer narrative and character orchestration.',
    narrativeSource: 'Case from <a href="https://github.com/fleetingheart/ksre" target="_blank" rel="noreferrer">Katawa Shoujo: Re-Engineered</a>.',
    harnessKicker: 'Harness control flow',
    harnessDirection: 'baseline <span aria-hidden="true">&#8594;</span> evolved',
    baselineFlow: 'Baseline control flow',
    evolvedFlow: 'Evolved control flow',
    baseline: 'Baseline',
    evolved: 'Evolved',
    snowOldSmall: 'single pass replay',
    snowNewSmall: 'branched run validation',
    snowBaselineSmall: 'Menu-heavy shallow run',
    snowEvolvedSmall: 'Playable downhill state',
    spaceOldSmall: 'linear edit / run / evaluate',
    spaceNewSmall: 'probe, repair, replay',
    spaceBaselineSmall: 'Simple visual language',
    spaceEvolvedSmall: 'Richer enemies and action',
    engineeringOldSmall: 'single scene edit',
    engineeringNewSmall: 'fog, volume, LUT validation',
    engineeringBaselineSmall: 'Settings barely visible',
    engineeringEvolvedSmall: 'Scene setup becomes inspectable',
    narrativeOldSmall: 'one candidate / one smoke route',
    narrativeNewSmall: 'state, branches, route validation',
    narrativeBaselineSmall: 'Minimal runtime path',
    narrativeEvolvedSmall: 'More complete playable flow',
    quote: 'A game is not successful because its code compiles. It is successful when the intended experience survives contact with the runtime.',
    quoteAttribution: '&mdash; Game-Evolver, research premise',
    paperEyebrow: '04 / Read the work',
    paperTitle: 'From game generation<br>to <em>game improvement.</em>',
    paperBody: 'Across four game benchmarks and six backbone models, Game-Evolver improves every baseline. The framework also transfers to Terminal-Bench and &#964;2-Bench, where execution feedback exposes the same gap between intention and outcome.',
    openFullPaper: 'Open the full paper <span aria-hidden="true">&#8599;</span>',
    paperBenchmarks: 'Benchmarks',
    paperLoops: 'Nested loops',
    paperEval: 'Evaluation',
    runtimeFirst: 'Runtime-first',
    footer: 'Dual-loop evolution for end-to-end game orchestration.',
    github: 'GitHub <span aria-hidden="true">&#8599;</span>',
    toggle: '中文'
  },
  zh: {
    pageTitle: 'Game-Evolver | 通过更好的编排生成更好的游戏',
    metaDescription: 'Game-Evolver：面向端到端游戏编排的双环演化框架。',
    menu: '菜单',
    navEvidence: '结果',
    navLoop: '双环',
    navDemo: '演示',
    navPaper: '论文',
    heroEyebrow: '<span class="pulse-dot"></span> 研究项目 / 2026',
    heroTitle: '更好的游戏<br><em>来自更好的编排。</em>',
    heroLede: 'Game-Evolver 同时演化负责制作游戏的 agent，以及教会 agent 更好完成任务的 harness。',
    seeEvolution: '查看演化效果 <span aria-hidden="true">&#8595;</span>',
    readPaper: '阅读论文 <span aria-hidden="true">&#8599;</span>',
    openGithub: '打开 GitHub <span aria-hidden="true">&#8599;</span>',
    artifact: '产物',
    harness: 'harness',
    goa: '游戏编排<br>agent',
    hpa: 'harness 提案<br>agent',
    systemLabel: '双环系统',
    marquee: '<span>构建</span><b>*</b><span>运行</span><b>*</b><span>观察</span><b>*</b><span>演化</span><b>*</b><span>构建</span><b>*</b><span>运行</span><b>*</b><span>观察</span><b>*</b><span>演化</span>',
    evidenceEyebrow: '01 / 结果',
    evidenceTitle: '结果不是更漂亮的 prompt。<br><em>而是更可靠的游戏。</em>',
    relativeGain: '总体相对提升<br><span class="muted">20.06 &rarr; 24.45</span>',
    relativeGainV: '总体相对提升<br><span class="muted">37.60 &rarr; 48.45</span>',
    scoreLift: '总体分数提升<br><span class="muted">46.19 &rarr; 56.39</span>',
    sourceNote: '总体分数来自 Game-Evolver 论文；相对提升由论文中的 baseline 与 evolved 分数计算得到。',
    loopEyebrow: '02 / 双环',
    loopTitle: '两个循环。一个<br><em>可观察的结果。</em>',
    innerLoop: '内环',
    innerTitle: '让游戏真正跑起来。',
    innerBody: '游戏编排 agent 会编辑项目、启动运行时、探测关键状态，并修复玩家实际能够看到的问题。',
    innerSteps: '<span>01&nbsp; 编辑</span><span>02&nbsp; 启动</span><span>03&nbsp; 回放</span>',
    outerLoop: '外环',
    outerTitle: '让 harness 学会改进。',
    outerBody: 'harness proposal agent 将反复出现的失败转化为可复用的指导，并决定保留、修订、合并或淘汰这些技能。',
    outerSteps: '<span>01&nbsp; 诊断</span><span>02&nbsp; 提案</span><span>03&nbsp; 接收</span>',
    loopCaption: '当意图经得起运行时检验，质量才真正出现。',
    demoEyebrow: '03 / 前后对比',
    demoTitle: '看 harness 如何<br><em>改变最终产物。</em>',
    actionTitle: '更丰富的视觉与动作设计。',
    racingSource: '案例来自 GameCraft-Bench（<a href="https://github.com/FreedomIntelligence/gamecraft-bench" target="_blank" rel="noreferrer">项目仓库</a>）。',
    spaceSource: '案例来自 V-GameGym（<a href="https://github.com/alibaba/SKYLENAGE-GameCodeGym/tree/main" target="_blank" rel="noreferrer">项目仓库</a>）。',
    engineeringTitle: '更可靠的工程开发。',
    engineeringLabel: 'Task 0015 / 雾效与 LUT 调色',
    engineeringSource: '案例来自 GameDevBench（<a href="https://github.com/waynchi/gamedevbench" target="_blank" rel="noreferrer">项目仓库</a>）。',
    narrativeTitle: '更丰富的叙事与角色编排。',
    narrativeSource: '案例来自 <a href="https://github.com/fleetingheart/ksre" target="_blank" rel="noreferrer">Katawa Shoujo: Re-Engineered</a>。',
    harnessKicker: 'Harness 控制流',
    harnessDirection: '基线 <span aria-hidden="true">&#8594;</span> 演化后',
    baselineFlow: '基线控制流',
    evolvedFlow: '演化后控制流',
    baseline: '基线',
    evolved: '演化后',
    snowOldSmall: '单次回放检查',
    snowNewSmall: '分支式运行验证',
    snowBaselineSmall: '停留在浅层菜单',
    snowEvolvedSmall: '可玩的下坡状态',
    spaceOldSmall: '线性编辑 / 运行 / 评估',
    spaceNewSmall: '探测、修复、回放',
    spaceBaselineSmall: '视觉语言较简单',
    spaceEvolvedSmall: '敌人与动作更丰富',
    engineeringOldSmall: '单次场景编辑',
    engineeringNewSmall: '雾效、体积雾、LUT 验证',
    engineeringBaselineSmall: '设置几乎不可见',
    engineeringEvolvedSmall: '场景配置可被检查',
    narrativeOldSmall: '单候选 / 单路线冒烟',
    narrativeNewSmall: '状态、分支、路线验证',
    narrativeBaselineSmall: '最小运行路径',
    narrativeEvolvedSmall: '更完整的可玩流程',
    quote: '游戏不是因为代码能编译就算成功。只有当预期体验经受住运行时检验时，它才真正成功。',
    quoteAttribution: '&mdash; Game-Evolver，研究前提',
    paperEyebrow: '04 / 阅读论文',
    paperTitle: '从游戏生成<br>走向 <em>游戏改进。</em>',
    paperBody: '在四个游戏 benchmark 和六个基础模型上，Game-Evolver 都提升了 baseline。该框架还迁移到 Terminal-Bench 和 &#964;2-Bench，说明执行反馈能揭示意图与结果之间的同类差距。',
    openFullPaper: '打开完整论文 <span aria-hidden="true">&#8599;</span>',
    paperBenchmarks: 'Benchmark',
    paperLoops: '嵌套循环',
    paperEval: '评估',
    runtimeFirst: '运行时优先',
    footer: '面向端到端游戏编排的双环演化。',
    github: 'GitHub <span aria-hidden="true">&#8599;</span>',
    toggle: 'EN'
  }
};

const localizedNodes = [
  ['.menu-toggle', 'menu'],
  ['.site-nav a[href="#evidence"]', 'navEvidence'],
  ['.site-nav a[href="#loop"]', 'navLoop'],
  ['.site-nav a[href="#demo"]', 'navDemo'],
  ['.site-nav a[href="#paper"]', 'navPaper'],
  ['.hero .eyebrow', 'heroEyebrow'],
  ['.hero h1', 'heroTitle'],
  ['.hero-lede', 'heroLede'],
  ['.hero-actions .button-dark', 'seeEvolution'],
  ['.hero-actions .text-link[href$=".pdf"]', 'readPaper'],
  ['.hero-actions .text-link[href*="github.com"]', 'openGithub'],
  ['.orbit-label-top', 'artifact'],
  ['.orbit-label-bottom', 'harness'],
  ['.hero-core-goa small', 'goa'],
  ['.hero-core-hpa small', 'hpa'],
  ['.hero-system-label', 'systemLabel'],
  ['.marquee-track', 'marquee'],
  ['#evidence .eyebrow', 'evidenceEyebrow'],
  ['#evidence h2', 'evidenceTitle'],
  ['.metric-card:nth-child(1) p:last-child', 'relativeGain'],
  ['.metric-card:nth-child(2) p:last-child', 'relativeGainV'],
  ['.metric-card:nth-child(3) p:last-child', 'scoreLift'],
  ['.source-note', 'sourceNote'],
  ['#loop .eyebrow', 'loopEyebrow'],
  ['#loop h2', 'loopTitle'],
  ['.loop-column-inner .loop-index', 'innerLoop'],
  ['.loop-column-inner h3', 'innerTitle'],
  ['.loop-column-inner p', 'innerBody'],
  ['.loop-column-inner .step-list', 'innerSteps'],
  ['.loop-column-outer .loop-index', 'outerLoop'],
  ['.loop-column-outer h3', 'outerTitle'],
  ['.loop-column-outer p', 'outerBody'],
  ['.loop-column-outer .step-list', 'outerSteps'],
  ['.loop-caption span:last-child', 'loopCaption'],
  ['#demo .demo-heading .eyebrow', 'demoEyebrow'],
  ['#demo .demo-heading h2', 'demoTitle'],
  ['.demo-case-action > .demo-note p', 'actionTitle'],
  ['.action-showcase .action-pair:nth-child(1) .case-source', 'racingSource'],
  ['.action-showcase .action-pair:nth-child(2) .case-source', 'spaceSource'],
  ['.demo-case-engineering .demo-note p', 'engineeringTitle'],
  ['.engineering-pair .action-pair-label', 'engineeringLabel'],
  ['.engineering-pair .case-source', 'engineeringSource'],
  ['.demo-case-narrative .demo-note p', 'narrativeTitle'],
  ['.demo-case-narrative > .case-source', 'narrativeSource'],
  ['.quote-section blockquote', 'quote'],
  ['.quote-attribution', 'quoteAttribution'],
  ['#paper .eyebrow', 'paperEyebrow'],
  ['#paper h2', 'paperTitle'],
  ['.paper-copy > p:not(.eyebrow)', 'paperBody'],
  ['.paper-copy .button-outline', 'openFullPaper'],
  ['.paper-index div:nth-child(1) span', 'paperBenchmarks'],
  ['.paper-index div:nth-child(2) span', 'paperLoops'],
  ['.paper-index div:nth-child(3) span', 'paperEval'],
  ['.paper-index div:nth-child(3) strong', 'runtimeFirst'],
  ['.site-footer p', 'footer'],
  ['.site-footer a', 'github']
];

const repeatedNodes = [
  ['.harness-kicker', 'harnessKicker'],
  ['.harness-direction', 'harnessDirection'],
  ['.harness-card:not(.harness-card-new) figcaption span', 'baselineFlow'],
  ['.harness-card-new figcaption span', 'evolvedFlow'],
  ['.demo-card:not(.demo-card-new) figcaption span', 'baseline'],
  ['.demo-card-new figcaption span', 'evolved']
];

const smallCaptionNodes = [
  ['.action-showcase .action-pair:nth-child(1) .harness-card:nth-child(1) figcaption small', 'snowOldSmall'],
  ['.action-showcase .action-pair:nth-child(1) .harness-card:nth-child(2) figcaption small', 'snowNewSmall'],
  ['.action-showcase .action-pair:nth-child(1) .demo-card:nth-child(1) figcaption small', 'snowBaselineSmall'],
  ['.action-showcase .action-pair:nth-child(1) .demo-card:nth-child(2) figcaption small', 'snowEvolvedSmall'],
  ['.action-showcase .action-pair:nth-child(2) .harness-card:nth-child(1) figcaption small', 'spaceOldSmall'],
  ['.action-showcase .action-pair:nth-child(2) .harness-card:nth-child(2) figcaption small', 'spaceNewSmall'],
  ['.action-showcase .action-pair:nth-child(2) .demo-card:nth-child(1) figcaption small', 'spaceBaselineSmall'],
  ['.action-showcase .action-pair:nth-child(2) .demo-card:nth-child(2) figcaption small', 'spaceEvolvedSmall'],
  ['.engineering-pair .harness-card:nth-child(1) figcaption small', 'engineeringOldSmall'],
  ['.engineering-pair .harness-card:nth-child(2) figcaption small', 'engineeringNewSmall'],
  ['.engineering-pair .demo-card:nth-child(1) figcaption small', 'engineeringBaselineSmall'],
  ['.engineering-pair .demo-card:nth-child(2) figcaption small', 'engineeringEvolvedSmall'],
  ['.demo-case-narrative .harness-card:nth-child(1) figcaption small', 'narrativeOldSmall'],
  ['.demo-case-narrative .harness-card:nth-child(2) figcaption small', 'narrativeNewSmall'],
  ['.demo-case-narrative .demo-card:nth-child(1) figcaption small', 'narrativeBaselineSmall'],
  ['.demo-case-narrative .demo-card:nth-child(2) figcaption small', 'narrativeEvolvedSmall']
];

const setHTML = (selector, html) => {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = html;
};

const setAllHTML = (selector, html) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.innerHTML = html;
  });
};

const applyLanguage = (language) => {
  const dictionary = copy[language] ?? copy.en;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.body.dataset.lang = language;
  document.title = dictionary.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', dictionary.metaDescription);
  localizedNodes.forEach(([selector, key]) => setHTML(selector, dictionary[key]));
  repeatedNodes.forEach(([selector, key]) => setAllHTML(selector, dictionary[key]));
  smallCaptionNodes.forEach(([selector, key]) => setHTML(selector, dictionary[key]));
  if (languageButton) {
    languageButton.textContent = dictionary.toggle;
    languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
  }
  localStorage.setItem('gameEvolverLanguage', language);
};

const storedLanguage = localStorage.getItem('gameEvolverLanguage');
let activeLanguage = storedLanguage === 'zh' ? 'zh' : 'en';
applyLanguage(activeLanguage);

languageButton?.addEventListener('click', () => {
  activeLanguage = activeLanguage === 'zh' ? 'en' : 'zh';
  applyLanguage(activeLanguage);
});

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const countObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const counter = entry.target;
    const target = Number(counter.dataset.target);
    const start = performance.now();
    const duration = 1100;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = (target * eased).toFixed(1);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    observer.unobserve(counter);
  });
}, { threshold: 0.7 });

document.querySelectorAll('.count').forEach((counter) => countObserver.observe(counter));
