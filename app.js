const esc = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const profileProse = () => portfolio.profile.paragraphs.map(value => {
  let text = esc(value);
  for (const phrase of portfolio.profile.emphasis) text = text.replace(esc(phrase), `<strong>${esc(phrase)}</strong>`);
  return `<p>${text}</p>`;
}).join('');
for (const element of document.querySelectorAll('[data-profile-keywords]')) element.innerHTML = portfolio.profile.keywords.map((value, index) => `<span>${index === 0 ? '研究方向：' : ''}${esc(value)}</span>`).join('');
for (const element of document.querySelectorAll('[data-profile-identity]')) element.textContent = portfolio.profile.identity;
for (const element of document.querySelectorAll('[data-profile-prose]')) element.innerHTML = profileProse();
const tags = values => `<div class="skill-words" aria-label="领域与能力关键词">${values.map(value => `<span>${esc(value)}</span>`).join('')}</div>`;
const figure = (src, alt, caption) => `<figure class="detail-image"><img src="${esc(src)}" alt="${esc(alt)}"><figcaption>${esc(caption)}</figcaption></figure>`;
const sourceLinks = links => `<div class="source-links">${links.map(([label,url]) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`).join('')}</div>`;
const projectResources = (project, key) => {
  const links = [...(project.repository ? [['项目地址 GitHub ↗', project.repository]] : []), ...(project.links || [])];
  const figureCount = key ? Object.keys(project.figures || {}).length : 0;
  const figureSection = project.detailSections?.find(section=>section.figureIds?.length)?.id;
  return links.length || figureCount ? `<div class="project-resources" role="group" aria-label="${esc(project.title)}相关链接">${links.length ? sourceLinks(links) : ''}${figureCount ? `<button type="button" class="project-gallery-link" data-project="${esc(key)}" data-project-section="${esc(figureSection || '')}">${esc(project.galleryLabel || `查看 ${figureCount} 幅研究图 ↗`)}</button>` : ''}</div>` : '';
};
const projectKeys = ['celllore', 'piseq', 'tagforge', 'structure'];
const sectionMarks = {
  research: '<path d="M28 16h16M31 16v17L19 53a4 4 0 0 0 3.4 6h27.2a4 4 0 0 0 3.4-6L41 33V16M25 43h22" stroke-width="3.2"/>',
  biology: '<path d="M55 24c8 12 3 29-9 34S19 56 14 43s0-24 12-28 22-2 29 9Z"/><circle cx="34" cy="35" r="9"/><path d="m31 33 5 4M47 24l3 3M21 42l3 3M44 48l4-2"/>',
  judgment: '<circle cx="31" cy="30" r="16"/><path d="m43 42 14 15M23 31l6 6 11-13"/>',
  award: '<path d="m18 15 18 10 18-10-2 22-16 10-16-10-2-22Z"/><path d="m25 44-3 14 14-7 14 7-3-14"/>',
  publication: '<path d="M36 22c-7-6-16-6-24-3v32c8-3 17-3 24 3 7-6 16-6 24-3V19c-8-3-17-3-24 3Zm0 0v32M20 28l9 1M20 36l9 1M43 29l9-1M43 37l9-1"/>',
  education: '<path d="M12 28 36 15l24 13-24 13L12 28Z"/><path d="M20 33v13l16 8 16-8V33M60 28v18"/>',
  experience: '<rect x="14" y="24" width="44" height="32" rx="3"/><path d="M27 24v-8h18v8M14 37c14 8 30 8 44 0M32 38h8v8h-8Z"/>'
};
const sectionIcon = name => `<svg class="section-badge" viewBox="0 0 72 72" aria-hidden="true" focusable="false"><circle class="badge-bg" cx="36" cy="36" r="34"/><g class="badge-mark">${sectionMarks[name]}</g></svg>`;
for (const element of document.querySelectorAll('[data-section-icon]')) element.innerHTML = sectionIcon(element.dataset.sectionIcon);

for (const list of document.querySelectorAll('[data-project-list]')) {
  list.innerHTML = projectKeys.map((key, index) => {
    const project = portfolio.projects[key];
    return `<article class="project-entry academic-project" data-project-key="${key}">
      <div class="project-entry-head"><span class="project-number">${String(index + 1).padStart(2,'0')}</span><span class="project-status">${esc(project.status)}</span></div>
      <div class="project-heading"><h3><button type="button" class="project-title-button" data-project="${key}">${esc(project.title)} <span aria-hidden="true">↗</span></button></h3><p class="project-subtitle">${esc(project.subtitle)}</p>${tags(project.tags)}</div>
      <figure class="project-preview"><button type="button" class="preview-open" data-preview="${key}" aria-label="放大查看${esc(project.title)}精选图片"><img src="${esc(project.image)}" alt="${esc(project.alt)}" loading="lazy" decoding="async" style="object-fit:${esc(project.previewFit || 'contain')};object-position:${esc(project.previewPosition || 'center')}"><span class="preview-expand">放大查看 ↗</span></button><figcaption>${esc(project.previewCaption || project.caption)}</figcaption></figure>
      <div class="project-copy"><p class="project-description">${esc(project.short)}</p>${projectResources(project,key)}</div>
    </article>`;
  }).join('');
}

const sectionHead = (iconName, eyebrow, title, description = '') => `<div class="section-heading"><div><div class="eyebrow">${esc(eyebrow)}</div><h2 class="section-title">${sectionIcon(iconName)}${esc(title)}</h2></div>${description ? `<p>${esc(description)}</p>` : ''}</div>`;
const caseSteps = steps => `<dl class="evidence-chain">${steps.map(([label,description]) => `<div><dt>${esc(label)}</dt><dd>${esc(description)}</dd></div>`).join('')}</dl>`;
const caseOverviewSteps = item => `<dl class="analysis-steps">${[0,1,3].map(index => `<div><dt>${esc(item.steps[index][0])}</dt><dd>${esc(item.steps[index][1])}</dd></div>`).join('')}</dl>`;
const honorDate = item => {
  const time = value => `<time datetime="${esc(value.replace('.', '-'))}">${esc(value)}</time>`;
  if (item.dates) return item.dates.map(time).join('<span class="honor-date-separator"> / </span>');
  return time(item.date) + (item.endDate ? `–${time(item.endDate)}` : '');
};
const publicationAuthors = authors => {
  const visible = authors.slice(0, Math.max(3, authors.indexOf('Yuan Fu') + 1));
  return visible.map(author => author === 'Yuan Fu' ? `<strong>${esc(author)}</strong>` : esc(author)).join(', ') + (visible.length < authors.length ? ', et al.' : '');
};
const educationPeriod = item => `<time datetime="${esc(item.start.replace('.', '-'))}">${esc(item.start)}</time>–<time datetime="${esc(item.end.replace('.', '-'))}">${esc(item.end)}</time>`;
const internshipSummary = item => {
  let text = esc(item.summary);
  for (const phrase of item.emphasis || []) text = text.replace(esc(phrase), `<strong>${esc(phrase)}</strong>`);
  return text;
};
const educationOverview = (headingLevel = 3) => {
  const schoolHeading = `h${headingLevel}`;
  const degreeHeading = `h${headingLevel + 1}`;
  return `<div class="education-overview"><${schoolHeading} class="education-school-title">${esc(portfolio.education.university)}</${schoolHeading}>
    <ol class="education-timeline">${portfolio.education.programs.map(item => `<li class="education-step">
      <div class="education-period"><span>${educationPeriod(item)}</span>${item.expected ? '<span class="education-expected">预计毕业</span>' : ''}</div>
      <div class="education-step-content"><div class="education-degree-row"><${degreeHeading} class="education-degree-title">${esc(item.degree)}</${degreeHeading}>${item.status ? `<span class="education-status">${esc(item.status)}</span>` : ''}</div>
        <p class="education-department">${esc(item.department)}${item.note ? `<span class="education-track"> · ${esc(item.note)}</span>` : ''}</p>
        ${item.secondary ? `<div class="education-secondary"><p><strong>${esc(item.secondary.degree)}</strong><span>${esc(item.secondary.department)}</span></p><span class="education-secondary-period">${educationPeriod(item.secondary)}</span></div>` : ''}
      </div></li>`).join('')}</ol></div>`;
};
const researchSectionId = (key, id) => `research-${key}-${id}`;
const researchTable = table => `<details class="research-table-disclosure"${table.open ? ' open' : ''}><summary>${esc(table.title)}</summary><div class="research-table-wrap"><table aria-label="${esc(table.title)}"><thead><tr>${table.columns.map(title=>`<th scope="col">${esc(title)}</th>`).join('')}</tr></thead><tbody>${table.rows.map(row=>`<tr>${row.map((value,index)=>index===0?`<th scope="row">${esc(value)}</th>`:`<td>${esc(value)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></details>`;
const brochureCaption = (brochure, index) => `第 ${index + 1} / ${brochure.pages.length} 页 · ${brochure.pages[index].title}`;
function brochureReader(project, key) {
  const brochure = project.brochure;
  if (!brochure) return '';
  const index = Math.max(0, Math.min(brochure.pages.length - 1, (brochure.initialPage || 1) - 1));
  const page = brochure.pages[index];
  return `<section class="research-section" id="${researchSectionId(key,'brochure')}"><h3>完整宣传册</h3><p>全部 ${brochure.pages.length} 页原稿均可查看，包含项目介绍、团队、数据策展、数据覆盖、Peak Tokenizer、模型架构与评估。</p>
    <div class="brochure-reader" data-brochure-reader="${esc(key)}" data-page-index="${index}"><div class="brochure-toolbar"><span>${brochure.pages.length} 页原稿</span><a href="${esc(brochure.pdf)}" download="${esc(brochure.filename)}">下载完整宣传册 PDF ↗</a></div>
      <div class="brochure-controls"><button type="button" data-brochure-direction="-1"${index===0?' disabled':''}>上一页</button><select data-brochure-select aria-label="选择宣传册页码">${brochure.pages.map((item,pageIndex)=>`<option value="${pageIndex}"${pageIndex===index?' selected':''}>${esc(brochureCaption(brochure,pageIndex))}</option>`).join('')}</select><button type="button" data-brochure-direction="1"${index===brochure.pages.length-1?' disabled':''}>下一页</button></div>
      <figure class="brochure-page"><img data-brochure-image src="${esc(page.src)}" alt="${esc(brochureCaption(brochure,index))}" width="${page.width}" height="${page.height}" loading="lazy" decoding="async"><figcaption data-brochure-caption>${esc(brochureCaption(brochure,index))}</figcaption></figure>
    </div></section>`;
}
function researchFigure(item, key, figureId) {
  const entry = item.figures?.[figureId];
  if (!entry) return '';
  const src = entry.src || item[entry.srcRef];
  const viewportId = `research-image-${key}-${figureId}`;
  return `<figure class="detail-image research-figure"><div class="research-figure-topline"><strong>${esc(entry.title)}</strong><button type="button" data-figure-zoom aria-pressed="false" aria-controls="${viewportId}">放大查看细节 ↗</button></div><div class="research-image-window" id="${viewportId}" role="region" aria-label="${esc(entry.title)}，放大后可滚动查看" tabindex="0" style="--research-zoom-width:${Math.min(entry.width,2400)}px"><img src="${esc(src)}" alt="${esc(entry.alt)}" width="${entry.width}" height="${entry.height}" loading="lazy" decoding="async"></div><figcaption>${esc(entry.caption)}</figcaption></figure>`;
}
const researchVideoElement = entry => `<video controls playsinline preload="none" poster="${esc(entry.poster)}" width="${entry.width}" height="${entry.height}" aria-label="${esc(entry.title)}"><source src="${esc(entry.src)}" type="video/mp4">当前浏览器不支持视频播放。</video>`;
function researchVideo(item, videoId) {
  const entry = item.videos?.[videoId];
  if (!entry) return '';
  return `<figure class="detail-image research-video"><div class="research-figure-topline"><strong>${esc(entry.title)}</strong></div>${researchVideoElement(entry)}<figcaption>${esc(entry.caption)}</figcaption></figure>`;
}
function researchContents(item, key) {
  if (!item.detailSections) return '';
  const toc = `<nav class="research-toc" aria-label="${esc(item.title)}详情目录">${item.detailSections.map(section=>`<button type="button" data-detail-target="${researchSectionId(key,section.id)}">${esc(section.navTitle || section.title.split('：')[0])}</button>`).join('')}${item.brochure?`<button type="button" data-detail-target="${researchSectionId(key,'brochure')}">完整宣传册 · ${item.brochure.pages.length} 页</button>`:''}</nav>`;
  const metrics = item.detailMetrics ? `<dl class="research-metrics">${item.detailMetrics.map(([value,label])=>`<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>${item.detailMetricNote?`<p class="research-metric-note">${esc(item.detailMetricNote)}</p>`:''}` : '';
  const sections = item.detailSections.map(section=>{
    const image = section.figureRef && item[section.figureRef];
    const isSecondary = section.figureRef === 'secondaryImage';
    const page = section.sourcePage && item.brochure?.pages[section.sourcePage-1];
    const figures = (section.figureIds||[]).map(figureId=>researchFigure(item,key,figureId)).join('');
    const downloads = section.downloads?.length ? `<div class="source-links research-downloads" role="group" aria-label="补充说明下载">${section.downloads.map(entry=>`<a href="${esc(entry.src)}" download="${esc(entry.filename)}">${esc(entry.label)} ↗</a>`).join('')}</div>` : '';
    return `<section class="research-section" id="${researchSectionId(key,section.id)}"><h3>${esc(section.title)}</h3>${(section.paragraphs||[]).map(text=>`<p>${esc(text)}</p>`).join('')}${section.points?`<dl class="research-points">${section.points.map(([label,text])=>`<div><dt>${esc(label)}</dt><dd>${esc(text)}</dd></div>`).join('')}</dl>`:''}${section.bullets?`<ul class="research-bullets">${section.bullets.map(text=>`<li>${esc(text)}</li>`).join('')}</ul>`:''}${(section.tables||[]).map(researchTable).join('')}${section.figureLayout==='columns'?`<div class="research-figure-grid">${figures}</div>`:figures}${(section.videoIds||[]).map(videoId=>researchVideo(item,videoId)).join('')}${image?figure(image,(isSecondary?item.secondaryAlt:item.alt)||`${item.title}研究图`,(isSecondary?item.secondaryCaption:item.caption)||''):''}${page?`<details class="research-figure-disclosure"><summary>查看原图 · 宣传册第 ${section.sourcePage} 页</summary><figure><img src="${esc(page.src)}" alt="${esc(page.title)}" width="${page.width}" height="${page.height}" loading="lazy" decoding="async"><figcaption>${esc(page.title)}</figcaption></figure></details>`:''}${downloads}</section>`;
  }).join('');
  return `${toc}${metrics}<div class="research-sections">${sections}${brochureReader(item,key)}</div>`;
}
function updateBrochure(reader, requestedIndex) {
  const brochure = portfolio.projects[reader.dataset.brochureReader]?.brochure;
  if (!brochure) return;
  const index = Math.max(0, Math.min(brochure.pages.length - 1, requestedIndex));
  const page = brochure.pages[index];
  reader.dataset.pageIndex = String(index);
  const image = reader.querySelector('[data-brochure-image]');
  image.src = page.src;
  image.alt = brochureCaption(brochure,index);
  image.width = page.width;
  image.height = page.height;
  reader.querySelector('[data-brochure-caption]').textContent = brochureCaption(brochure,index);
  reader.querySelector('[data-brochure-select]').value = String(index);
  reader.querySelector('[data-brochure-direction="-1"]').disabled = index === 0;
  reader.querySelector('[data-brochure-direction="1"]').disabled = index === brochure.pages.length - 1;
  reader.querySelector('.brochure-page').scrollIntoView({block:'start',behavior:'auto'});
}
const sections = {
  biology: () => `${sectionHead('biology', 'BIOLOGICAL CONTEXT / 02', '生物学与疾病研究', '结合疾病背景、细胞状态与多组学证据解释数据。')}
    <div class="biology-grid">${portfolio.biology.map(item => `<article class="biology-entry"><div class="biology-label">${item.number} / ${esc(item.label)}</div><h3>${esc(item.title)}</h3>${tags(item.tags)}<p class="biology-question">${esc(item.question)}</p><p>${esc(item.work)}</p><p class="biology-insight"><span>分析重点</span>${esc(item.insight)}</p><button type="button" class="text-button" data-project="${item.key}">研究内容与分析示例 ↗</button></article>`).join('')}</div>`,
  cases: () => {
    const featured = portfolio.cases.qc;
    return `${sectionHead('judgment', 'ANALYTICAL JUDGMENT / 03', '生物学洞察与分析判断', '以细胞特征解释异常，用独立证据支撑判断。')}
      <article class="analysis-feature" data-case-key="qc">
        <div class="analysis-feature-top"><div class="analysis-feature-copy"><div class="analysis-label"><span>01</span>${esc(featured.subtitle)}</div><h3>${esc(featured.title)}</h3><p class="analysis-verdict"><span>关键判断</span>${esc(featured.takeaway)}</p>${tags(featured.tags)}</div>
          <figure class="analysis-preview"><button type="button" class="analysis-preview-open" data-project="qc" aria-label="查看中性粒细胞案例及完整证据图"><img src="${esc(featured.image)}" alt="细胞类型注释与 CD66b 表面蛋白信号的对照图" width="1382" height="514" loading="lazy" decoding="async"><span>查看证据图 ↗</span></button><figcaption>${esc(featured.caption)}</figcaption></figure>
        </div>${caseOverviewSteps(featured)}<button type="button" class="text-button analysis-read" data-project="qc">查看完整分析 ↗</button>
      </article>
      <div class="analysis-secondary">${['identity','labels'].map((key,index) => {const item=portfolio.cases[key];return `<article class="analysis-card" data-case-key="${key}"><div class="analysis-label"><span>${String(index+2).padStart(2,'0')}</span>${esc(item.subtitle)}</div><h3>${esc(item.title)}</h3><p class="analysis-card-insight">${esc(item.takeaway)}</p><dl class="analysis-facts"><div><dt>依据</dt><dd>${esc(item.steps[1][1])}</dd></div><div><dt>推进</dt><dd>${esc(item.steps[3][1])}</dd></div></dl><button type="button" class="text-button analysis-read" data-project="${key}">查看判断过程 ↗</button></article>`;}).join('')}</div>`;
  },
  awards: () => `${sectionHead('award', 'HONORS & AWARDS / 04', '荣誉与奖励', 'AI for Science 竞赛与学业荣誉。')}
    <div class="honor-groups">${[['distinction','荣誉称号'],['scholarship','奖金与资助计划']].map(([category,title])=>`<section class="honor-group honor-group--${category}" aria-label="${title}"><h3>${title}</h3><ul class="honor-list">${portfolio.awards.filter(item=>item.category===category).map(item=>`<li class="honor-entry${item.featured?' honor-entry--featured':''}"><span class="honor-date${item.dates?' honor-date--multiple':''}">${honorDate(item)}</span><div class="honor-copy"><strong>${esc(item.title)}</strong>${item.note?`<span class="honor-note${item.note.includes('人')?' selective':''}">（${esc(item.note)}）</span>`:''}</div>${item.amount?`<span class="honor-amount">${esc(item.amount)}</span>`:''}</li>`).join('')}</ul></section>`).join('')}</div>`,
  education: () => `${sectionHead('education', 'EDUCATION / 06', '教育经历')}${educationOverview()}<button type="button" class="text-button" data-project="profile">完整背景与简历 ↗</button>`,
  internships: () => `${sectionHead('experience', 'INTERNSHIP / 07', '实习经历')}<div class="internship-list">${portfolio.internships.map(item => `<article class="internship-entry"><div class="internship-date">${educationPeriod(item)}</div><div class="internship-copy"><h3>${esc(item.company)}<span lang="en">${esc(item.companyEnglish)}</span></h3><p class="internship-role">${esc(item.role)}</p><p class="internship-department">${esc(item.department)}</p>${item.summary?`<p class="internship-summary">${internshipSummary(item)}</p>`:''}</div></article>`).join('')}</div>`,
  publications: () => `${sectionHead('publication', 'RELATED PUBLICATIONS / 05', '相关论文')}
    <p class="preparation-note"><strong>PI-seq</strong> 研究论文正在准备中，<strong>预计于 2026 年底投稿</strong>，期待与大家分享这项工作。</p>${portfolio.publications.map(item => `<article class="publication" data-pmid="${esc(item.pmid)}"><span>${esc(item.year)}</span><div><h3><a href="https://pubmed.ncbi.nlm.nih.gov/${esc(item.pmid)}/" target="_blank" rel="noopener noreferrer">${esc(item.title)}</a></h3><p class="publication-authors">${publicationAuthors(item.authors)}</p><em>${esc(item.journal)}</em><div class="publication-links"><a href="https://pubmed.ncbi.nlm.nih.gov/${esc(item.pmid)}/" target="_blank" rel="noopener noreferrer">PMID: ${esc(item.pmid)} ↗</a><a href="https://doi.org/${esc(item.doi)}" target="_blank" rel="noopener noreferrer" aria-label="DOI: ${esc(item.doi)}">DOI ↗</a></div></div></article>`).join('')}`
};
for (const element of document.querySelectorAll('[data-content]')) {
  element.innerHTML = sections[element.dataset.content]();
}

const sectionNavigation = document.querySelector('.section-nav');
const sectionLinks = [...sectionNavigation.querySelectorAll('a')];
const navigationTargets = sectionLinks.map(link => document.querySelector(link.hash));
let navigationFrame;
function updateSectionNavigation() {
  navigationFrame = undefined;
  const offset = matchMedia('(max-width:760px)').matches ? sectionNavigation.offsetHeight + 40 : 60;
  let current = -1;
  navigationTargets.forEach((section,index) => {
    if (section.getBoundingClientRect().top <= offset) current = index;
  });
  sectionLinks.forEach((link,index) => {
    if (index === current) link.setAttribute('aria-current','location');
    else link.removeAttribute('aria-current');
  });
}
function scheduleNavigationUpdate() {
  if (navigationFrame === undefined) navigationFrame = requestAnimationFrame(updateSectionNavigation);
}
window.addEventListener('scroll',scheduleNavigationUpdate,{passive:true});
window.addEventListener('resize',scheduleNavigationUpdate);
scheduleNavigationUpdate();

const dialog=document.getElementById('project-dialog');
const content=document.getElementById('dialog-content');
let dialogTrigger;
function openProject(key,trigger) {
  dialog.classList.remove('image-dialog');
  let body;
  if (key==='profile') {
    body=`<div class="eyebrow">BIOINFORMATICS / FUDAN UNIVERSITY</div><h2 id="dialog-title">符源 / Yuan Fu</h2><p class="dialog-subtitle">计算生物学与 AI for Science</p><p>${esc(portfolio.profile.identity)}</p>${tags(portfolio.profile.keywords)}<div class="profile-prose">${profileProse()}</div><div class="profile-education"><h3>教育经历</h3>${educationOverview(4)}</div><div class="profile-education"><h3>研究与工程能力</h3><p>单细胞 RNA、ATAC 与表面蛋白；蛋白邻近网络；表观遗传分析<br>Python、R、PyTorch、Docker；Django、MySQL、JavaScript<br>数据策展 Agent、多模态表征与基础模型<br>抗体序列建模、结构预测、表位分析与分子动力学模拟</p></div><div class="profile-education"><h3>生物学与疾病背景</h3><p>SLE 与免疫细胞状态、肝脏衰老与炎症微环境、IPA 与 B 细胞发育；药学与肿瘤免疫相关研究背景。</p></div><div class="source-links"><a href="assets/yuan-fu-cv.pdf" target="_blank" rel="noopener">查看简历 PDF ↗</a><a href="mailto:yfu_fudan@163.com">yfu_fudan@163.com ↗</a></div>`;
  } else if (portfolio.projects[key]) {
    const item=portfolio.projects[key];
    body=`<div class="eyebrow">${esc(item.category)}</div><h2 id="dialog-title">${esc(item.title)}</h2><p class="dialog-subtitle">${esc(item.subtitle)}</p>${tags(item.tags)}<div class="dialog-status">${esc(item.status)}</div><div class="project-narrative">${item.details.map(text=>`<p>${esc(text)}</p>`).join('')}</div>${researchContents(item,key)}${!item.detailSections&&item.image ? figure(item.image,item.alt,item.caption):''}${!item.detailSections&&item.secondaryImage ? figure(item.secondaryImage,item.secondaryAlt,item.secondaryCaption):''}${item.repository || item.links?.length ? `<div class="research-links"><h3>相关链接</h3>${projectResources(item)}</div>`:''}`;
  } else if (portfolio.cases[key]) {
    const item=portfolio.cases[key];
    body=`<div class="eyebrow">ANALYTICAL JUDGMENT / CASE STUDY</div><h2 id="dialog-title">${esc(item.title)}</h2><p class="dialog-subtitle">${esc(item.subtitle)}</p>${tags(item.tags)}<p class="analysis-verdict"><span>关键判断</span>${esc(item.takeaway)}</p>${caseSteps(item.steps)}${item.image ? figure(item.image,item.title,item.caption):''}${item.note ? `<p class="dialog-status">${esc(item.note)}</p>`:''}`;
  } else {
    const item=portfolio.biology.find(item=>item.key===key);
    if (!item) return;
    body=`<div class="eyebrow">BIOLOGICAL CONTEXT / ${esc(item.label)}</div><h2 id="dialog-title">${esc(item.title)}</h2><p class="dialog-subtitle">${esc(item.question)}</p>${tags(item.tags)}<div class="project-narrative"><p>${esc(item.detail)}</p></div>${researchContents(item,key)}${item.note ? `<p class="dialog-status">${esc(item.note)}</p>`:''}`;
  }
  dialogTrigger=trigger;
  content.innerHTML=`<div class="dialog-body">${body}</div>`;
  document.body.classList.add('modal-open');
  dialog.showModal();
  dialog.scrollTop=0;
  if(trigger?.dataset?.projectSection) document.getElementById(researchSectionId(key,trigger.dataset.projectSection))?.scrollIntoView({block:'start'});
}
function openPreview(key,trigger) {
  const project=portfolio.projects[key];
  if (!project?.image) return;
  dialogTrigger=trigger;
  dialog.classList.add('image-dialog');
  content.innerHTML=`<div class="dialog-body image-dialog-body"><h2 id="dialog-title">${esc(project.title)}</h2><figure class="enlarged-preview"><img src="${esc(project.image)}" alt="${esc(project.alt)}"><figcaption>${esc(project.caption)}</figcaption></figure></div>`;
  document.body.classList.add('modal-open');
  dialog.showModal();
  dialog.scrollTop=0;
}
document.addEventListener('click',event=>{
  const zoom=event.target.closest('[data-figure-zoom]');
  if(zoom){
    const figure=zoom.closest('.research-figure');
    const expanded=zoom.getAttribute('aria-pressed')!=='true';
    figure.classList.toggle('is-zoomed',expanded);
    zoom.setAttribute('aria-pressed',String(expanded));
    zoom.textContent=expanded?'收起放大':'放大查看细节 ↗';
    const viewport=figure.querySelector('.research-image-window');
    viewport.scrollLeft=0;viewport.scrollTop=0;
    return;
  }
  const jump=event.target.closest('[data-detail-target]');
  if(jump){document.getElementById(jump.dataset.detailTarget)?.scrollIntoView({block:'start',behavior:'smooth'});return;}
  const pageTurn=event.target.closest('[data-brochure-direction]');
  if(pageTurn){const reader=pageTurn.closest('[data-brochure-reader]');updateBrochure(reader,Number(reader.dataset.pageIndex)+Number(pageTurn.dataset.brochureDirection));return;}
  const preview=event.target.closest('[data-preview]');
  if(preview){openPreview(preview.dataset.preview,preview);return;}
  const trigger=event.target.closest('[data-project]');
  if(trigger)openProject(trigger.dataset.project,trigger);
});
document.addEventListener('change',event=>{
  const select=event.target.closest('[data-brochure-select]');
  if(select)updateBrochure(select.closest('[data-brochure-reader]'),Number(select.value));
});
document.getElementById('dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();});
dialog.addEventListener('close',()=>{for(const video of content.querySelectorAll('video'))video.pause();document.body.classList.remove('modal-open');dialog.classList.remove('image-dialog');content.replaceChildren();dialogTrigger?.focus({preventScroll:true});});
