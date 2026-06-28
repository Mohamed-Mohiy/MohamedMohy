// ── DATA ──
const services = [
  { icon: '📘', en: { name: 'Facebook Ads', desc: 'Full-funnel Facebook campaigns targeting the right audience at every stage.', outcome: 'Higher reach, lower CPM' }, ar: { name: 'إعلانات فيسبوك', desc: 'حملات فيسبوك متكاملة تستهدف الجمهور المناسب في كل مرحلة.', outcome: 'وصول أوسع، تكلفة ظهور أقل' } },
  { icon: '📸', en: { name: 'Instagram Ads', desc: 'Visually stunning Instagram campaigns that stop the scroll and convert.', outcome: 'Increased engagement & sales' }, ar: { name: 'إعلانات إنستغرام', desc: 'حملات إنستغرام بصرية مذهلة تستوقف المتمرر وتحوله إلى عميل.', outcome: 'تفاعل أعلى ومبيعات أكثر' } },
  { icon: '⚙️', en: { name: 'Meta Advertising', desc: 'Holistic Meta Ads strategy across all placements, formats, and objectives.', outcome: 'Unified cross-platform presence' }, ar: { name: 'إعلانات Meta', desc: 'استراتيجية Meta متكاملة عبر جميع المواضع والصيغ والأهداف.', outcome: 'حضور موحد عبر المنصات' } },
  { icon: '🎯', en: { name: 'Conversion Optimization', desc: 'Systematic A/B testing of creatives, copy, audiences, and landing pages.', outcome: 'Lower CPA, higher CVR' }, ar: { name: 'تحسين التحويل', desc: 'اختبار منهجي A/B للإبداعات والنصوص والجماهير والصفحات.', outcome: 'تكلفة تحويل أقل، معدل تحويل أعلى' } },
  { icon: '🔄', en: { name: 'Funnel Strategy', desc: 'TOFU → MOFU → BOFU funnel architecture engineered for maximum ROAS.', outcome: 'Predictable customer journeys' }, ar: { name: 'استراتيجية القمع', desc: 'بنية قمع التسويق المُهندسة لتحقيق أقصى عائد على الإنفاق.', outcome: 'رحلات عملاء قابلة للتنبؤ' } },
  { icon: '🧪', en: { name: 'Creative Testing', desc: 'Data-driven creative iterations to find winning ad creatives fast.', outcome: 'Scalable winning creatives' }, ar: { name: 'اختبار الإبداعات', desc: 'تكرارات إبداعية مبنية على البيانات للعثور على الإعلانات الرابحة بسرعة.', outcome: 'إبداعات رابحة قابلة للتوسع' } },
  { icon: '📈', en: { name: 'Campaign Scaling', desc: 'Strategic budget scaling that maintains ROAS while multiplying revenue.', outcome: '3–10x revenue growth' }, ar: { name: 'توسيع الحملات', desc: 'توسيع ميزانية استراتيجي يحافظ على العائد مع مضاعفة الإيرادات.', outcome: 'نمو الإيرادات 3-10 أضعاف' } },
  { icon: '🛒', en: { name: 'E-Commerce Marketing', desc: 'Product catalog ads, dynamic retargeting, and DPA campaigns for online stores.', outcome: 'Higher cart value & repeat purchases' }, ar: { name: 'تسويق التجارة الإلكترونية', desc: 'إعلانات كتالوج المنتجات والاستهداف الديناميكي للمتاجر الإلكترونية.', outcome: 'قيمة سلة أعلى وعمليات شراء متكررة' } },
  { icon: '🏥', en: { name: 'Lead Generation', desc: 'High-quality lead generation campaigns for clinics, doctors, and service businesses.', outcome: 'Lower CPL, higher patient quality' }, ar: { name: 'توليد العملاء المحتملين', desc: 'حملات توليد عملاء محتملين عالية الجودة للعيادات والأطباء والأعمال الخدمية.', outcome: 'تكلفة عميل أقل، جودة مرضى أعلى' } },
  { icon: '💬', en: { name: 'Marketing Consultation', desc: 'Strategy sessions to audit your current ads, identify gaps, and build a roadmap.', outcome: 'Clear growth roadmap' }, ar: { name: 'استشارات التسويق', desc: 'جلسات استراتيجية لتدقيق إعلاناتك الحالية وتحديد الفجوات وبناء خارطة طريق.', outcome: 'خارطة طريق نمو واضحة' } },
];

const projects = [
  {
    brand: 'HealthCare Clinic',
    name: { en: 'Patient Acquisition Campaign', ar: 'حملة اكتساب المرضى' },
    industry: { en: 'Healthcare', ar: 'رعاية صحية' },
    objective: { en: 'Generate qualified patient leads for a private clinic in Cairo', ar: 'توليد عملاء محتملين مؤهلين لعيادة خاصة في القاهرة' },
    strategy: { en: 'Multi-stage funnel with awareness content → retargeting → lead form ads. Audience built around health-conscious demographics + lookalike expansion.', ar: 'قمع متعدد المراحل بمحتوى التوعية ← إعادة الاستهداف ← إعلانات نموذج العملاء المحتملين. جمهور مبني حول الفئات الديموغرافية المهتمة بالصحة.' },
    budget: '$1,500/mo',
    roas: '6.2x',
    revenue: '$9,300',
    leads: '340',
  },
  {
    brand: 'Beauty Brand',
    name: { en: 'E-Commerce Scaling Campaign', ar: 'حملة توسيع التجارة الإلكترونية' },
    industry: { en: 'Beauty & Skincare', ar: 'الجمال والعناية بالبشرة' },
    objective: { en: 'Scale online sales while maintaining profitability', ar: 'توسيع المبيعات الإلكترونية مع الحفاظ على الربحية' },
    strategy: { en: 'Dynamic catalog ads + Advantage+ Shopping campaigns. Creative testing across 15 ad sets to find winning hooks.', ar: 'إعلانات كتالوج ديناميكية + حملات Advantage+ للتسوق. اختبار إبداعي عبر 15 مجموعة إعلانات.' },
    budget: '$3,000/mo',
    roas: '4.8x',
    revenue: '$14,400',
    leads: '820',
  },
  {
    brand: 'Real Estate Agency',
    name: { en: 'Lead Generation Drive', ar: 'حملة توليد العملاء المحتملين' },
    industry: { en: 'Real Estate', ar: 'العقارات' },
    objective: { en: 'Attract qualified property buyers and investors', ar: 'جذب مشترين مؤهلين للعقارات والمستثمرين' },
    strategy: { en: 'Hyper-targeted campaigns by income bracket and location interest. Instant form ads with pre-qualification questions.', ar: 'حملات مُستهدفة بدقة حسب شريحة الدخل والاهتمام بالموقع. إعلانات نماذج فورية مع أسئلة تأهيل مسبق.' },
    budget: '$2,000/mo',
    roas: '8.1x',
    revenue: '$16,200',
    leads: '215',
  },
];

const kpis = [
  { label: { en: 'Average ROAS', ar: 'متوسط العائد' }, value: '5.4x', change: '↑ 12% this month' },
  { label: { en: 'Average CTR', ar: 'متوسط نسبة النقر' }, value: '3.8%', change: '↑ 0.4%' },
  { label: { en: 'Average CPM', ar: 'متوسط تكلفة الألف' }, value: '$4.20', change: '↓ 8% (better)' },
  { label: { en: 'Average CPA', ar: 'متوسط تكلفة الاكتساب' }, value: '$12.40', change: '↓ 15%' },
  { label: { en: 'Total Revenue', ar: 'إجمالي الإيرادات' }, value: '$180K+', change: '↑ across all campaigns' },
  { label: { en: 'Conversion Rate', ar: 'معدل التحويل' }, value: '4.2%', change: '↑ from 3.1%' },
];

const chartData = [
  { month: 'Jan', val: 12000 }, { month: 'Feb', val: 18500 }, { month: 'Mar', val: 15200 },
  { month: 'Apr', val: 22000 }, { month: 'May', val: 28400 }, { month: 'Jun', val: 35000 },
  { month: 'Jul', val: 31000 }, { month: 'Aug', val: 42000 }, { month: 'Sep', val: 38500 },
  { month: 'Oct', val: 51000 }, { month: 'Nov', val: 47000 }, { month: 'Dec', val: 62000 },
];

let testimonials = [
  { name: 'Dr. Sarah Hassan', role: { en: 'Medical Clinic Owner, Cairo', ar: 'مالكة عيادة طبية، القاهرة' }, text: { en: '"Mohamed transformed our clinic\'s patient acquisition. We went from 20 leads a month to over 150. His understanding of the healthcare space is unmatched."', ar: '"غيّر محمد طريقة استقطاب مرضانا. انتقلنا من 20 عميلاً محتملاً شهرياً إلى أكثر من 150. فهمه لقطاع الرعاية الصحية لا مثيل له."' }, rating: 5, initials: 'SH' },
  { name: 'Karim Mostafa', role: { en: 'E-Commerce Brand Owner', ar: 'مالك علامة تجارية إلكترونية' }, text: { en: '"Our ROAS was 1.8x before Mohamed. Six weeks later, we\'re at 5.2x with the same budget. The creative testing approach alone was worth every penny."', ar: '"كان عائدنا على الإنفاق 1.8 قبل محمد. بعد ستة أسابيع، وصلنا إلى 5.2 بنفس الميزانية. نهج اختبار الإبداعات وحده كان يستحق كل قرش."' }, rating: 5, initials: 'KM' },
  { name: 'Nour Al-Amin', role: { en: 'Beauty Brand Founder, Dubai', ar: 'مؤسسة علامة تجارية للجمال، دبي' }, text: { en: '"Professional, data-obsessed, and delivers results. Mohamed is our long-term ads partner and I wouldn\'t trust anyone else with our Meta budget."', ar: '"محترف، مهووس بالبيانات، ويُحقق النتائج. محمد هو شريكنا الإعلاني على المدى البعيد ولن أثق بأحد غيره في ميزانية Meta الخاصة بنا."' }, rating: 5, initials: 'NA' },
];

const tools = [
  { icon: '📘', name: 'Meta Ads', prof: 98 },
  { icon: '📊', name: 'Google Analytics', prof: 80 },
  { icon: '🛒', name: 'Shopify', prof: 75 },
  { icon: '🌐', name: 'WordPress', prof: 70 },
  { icon: '🏷', name: 'Google Tag Manager', prof: 78 },
  { icon: '🎨', name: 'Canva', prof: 85 },
  { icon: '📋', name: 'Excel', prof: 82 },
  { icon: '📉', name: 'Looker Studio', prof: 72 },
  { icon: '🤖', name: 'ChatGPT', prof: 90 },
  { icon: '📝', name: 'Notion', prof: 88 },
];

// ── LANGUAGE ──
let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-ar').classList.toggle('active', lang === 'ar');
  document.querySelectorAll('[data-en]').forEach(el => {
    const key = 'data-' + lang;
    if (el.hasAttribute(key)) el.textContent = el.getAttribute(key);
  });
  document.querySelectorAll('[data-en-placeholder]').forEach(el => {
    const key = `data-${lang}-placeholder`;
    if (el.hasAttribute(key)) el.placeholder = el.getAttribute(key);
  });
  renderAll();
}

document.getElementById('btn-en').onclick = () => setLang('en');
document.getElementById('btn-ar').onclick = () => setLang('ar');

// ── RENDER SERVICES ──
function renderServices() {
  const grid = document.getElementById('services-grid');
  grid.innerHTML = services.map(s => {
    const d = s[currentLang];
    return `<div class="service-card reveal">
      <div class="service-icon">${s.icon}</div>
      <h3>${d.name}</h3>
      <p>${d.desc}</p>
      <span class="service-outcome">${d.outcome}</span>
    </div>`;
  }).join('');
  observeReveal();
}

// ── RENDER PORTFOLIO ──
function renderPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  grid.innerHTML = projects.map((p, i) => `
    <div class="project-card reveal" onclick="openModal(${i})">
      <div class="project-thumb">
        <div class="project-thumb-inner">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          <p>Campaign Screenshot</p>
        </div>
        <span class="project-industry">${p.industry[currentLang]}</span>
      </div>
      <div class="project-body">
        <div class="project-brand">${p.brand}</div>
        <div class="project-name">${p.name[currentLang]}</div>
        <div class="project-desc">${p.objective[currentLang]}</div>
        <div class="project-metrics">
          <div class="metric-mini"><strong>${p.roas}</strong><span>ROAS</span></div>
          <div class="metric-mini"><strong>${p.revenue}</strong><span>${currentLang === 'ar' ? 'إيرادات' : 'Revenue'}</span></div>
          <div class="metric-mini"><strong>${p.leads}</strong><span>${currentLang === 'ar' ? 'عملاء محتملون' : 'Leads'}</span></div>
        </div>
      </div>
    </div>`).join('');
  observeReveal();
}

// ── MODAL ──
function openModal(i) {
  const p = projects[i];
  const L = currentLang;
  document.getElementById('modal-body').innerHTML = `
    <div class="modal-header-meta">
      <div class="modal-eyebrow">${p.brand}</div>
      <h2 class="modal-title">${p.name[L]}</h2>
      <span class="modal-industry-badge">${p.industry[L]}</span>
    </div>
    <div class="modal-metrics-row">
      <div class="modal-metric"><strong>${p.roas}</strong><span>ROAS</span></div>
      <div class="modal-metric"><strong>${p.revenue}</strong><span>${L === 'ar' ? 'إيرادات' : 'Revenue'}</span></div>
      <div class="modal-metric"><strong>${p.leads}</strong><span>${L === 'ar' ? 'عملاء' : 'Leads'}</span></div>
      <div class="modal-metric"><strong>${p.budget}</strong><span>${L === 'ar' ? 'الميزانية' : 'Budget'}</span></div>
    </div>
    <div class="modal-section"><h4>${L === 'ar' ? 'الهدف' : 'Objective'}</h4><p>${p.objective[L]}</p></div>
    <div class="modal-section"><h4>${L === 'ar' ? 'الاستراتيجية' : 'Strategy'}</h4><p>${p.strategy[L]}</p></div>
    <div class="modal-section">
      <h4>${L === 'ar' ? 'لقطات الشاشة' : 'Campaign Screenshots'}</h4>
      <div class="screenshot-upload-area" onclick="document.getElementById('ss-upload-${i}').click()">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        <p>${L === 'ar' ? 'انقر لرفع لقطات إعلانات Meta، Shopify، أو شهادات العملاء' : 'Click to upload Meta Ads screenshots, Shopify dashboards, or client testimonials'}</p>
        <input type="file" id="ss-upload-${i}" accept="image/*" multiple style="display:none" onchange="handleScreenshots(this,${i})">
      </div>
      <div id="ss-gallery-${i}" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;margin-top:16px;"></div>
    </div>`;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function handleScreenshots(input, idx) {
  const gallery = document.getElementById('ss-gallery-' + idx);
  Array.from(input.files).forEach(f => {
    const url = URL.createObjectURL(f);
    const img = document.createElement('img');
    img.src = url; img.style.cssText = 'width:100%;border-radius:10px;border:1px solid #eee;';
    gallery.appendChild(img);
  });
}

document.getElementById('modal-close').onclick = closeModal;
document.getElementById('modal-overlay').onclick = function(e) { if (e.target === this) closeModal(); };
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── KPI GRID ──
function renderKPIs() {
  document.getElementById('kpi-grid').innerHTML = kpis.map(k => `
    <div class="kpi-card reveal">
      <div class="kpi-label">${k.label[currentLang]}</div>
      <div class="kpi-value">${k.value}</div>
      <div class="kpi-change">${k.change}</div>
    </div>`).join('');
  observeReveal();
}

// ── BAR CHART ──
function renderChart() {
  const max = Math.max(...chartData.map(d => d.val));
  document.getElementById('bar-chart').innerHTML = chartData.map(d => `
    <div class="bar-wrap">
      <div class="bar-val">$${(d.val/1000).toFixed(0)}k</div>
      <div class="bar" style="height:${(d.val/max*100).toFixed(1)}%"></div>
      <div class="bar-label">${d.month}</div>
    </div>`).join('');
}

// ── TESTIMONIALS ──
function renderTestimonials() {
  document.getElementById('testimonials-grid').innerHTML = testimonials.map((t, i) => `
    <div class="testimonial-card reveal">
      <div class="stars">${'★'.repeat(t.rating)}</div>
      <p class="testimonial-text">${typeof t.text === 'object' ? t.text[currentLang] : t.text}</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.img ? `<img src="${t.img}" alt="">` : t.initials}</div>
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-role">${typeof t.role === 'object' ? t.role[currentLang] : t.role}</div>
        </div>
      </div>
    </div>`).join('');
  observeReveal();
}

// ── ADD TESTIMONIAL ──
document.getElementById('add-testimonial-btn').onclick = function() {
  const name = prompt('Client name:');
  if (!name) return;
  const role = prompt('Role / Company:');
  const text = prompt('Testimonial text:');
  if (text) {
    testimonials.push({ name, role: { en: role, ar: role }, text: { en: text, ar: text }, rating: 5, initials: name.slice(0,2).toUpperCase() });
    renderTestimonials();
  }
};

// ── TOOLS ──
function renderTools() {
  document.getElementById('tools-grid').innerHTML = tools.map(t => `
    <div class="tool-card reveal">
      <span class="tool-icon">${t.icon}</span>
      <div class="tool-name">${t.name}</div>
      <div class="proficiency"><div class="proficiency-bar" style="width:${t.prof}%"></div></div>
    </div>`).join('');
  observeReveal();
}

// ── HERO COUNTERS ──
function animateCounter(el, target, suffix, prefix='') {
  const num = parseFloat(target.replace(/[^0-9.]/g,''));
  const isDecimal = target.includes('.');
  let start = 0; const dur = 2000; const startTime = performance.now();
  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / dur, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const cur = num * ease;
    el.textContent = prefix + (isDecimal ? cur.toFixed(1) : Math.floor(cur)) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

let countersRan = false;
function runCounters() {
  if (countersRan) return; countersRan = true;
  const spend = document.getElementById('edit-spend')?.value || '$2.5M';
  const roas = document.getElementById('edit-roas')?.value || '4.8';
  const clients = document.getElementById('edit-clients')?.value || '47';
  const campaigns = document.getElementById('edit-campaigns')?.value || '120';
  document.getElementById('stat-spend').textContent = spend;
  animateCounter(document.getElementById('stat-roas'), roas.replace('x',''), 'x');
  animateCounter(document.getElementById('stat-clients'), clients.replace('+',''), '+');
  animateCounter(document.getElementById('stat-campaigns'), campaigns.replace('+',''), '+');
}

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.1 });

function observeReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

// Hero counter trigger
const heroObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) runCounters();
}, { threshold: 0.3 });
heroObserver.observe(document.getElementById('hero'));

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 20);
  const sections = ['hero','about','services','portfolio','results','testimonials','tools','contact'];
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 100) current = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ── MOBILE MENU ──
document.getElementById('hamburger').onclick = function() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
};
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.onclick = () => document.getElementById('mobile-menu').classList.remove('open');
});

// ── EDIT PANEL ──
document.getElementById('edit-btn').onclick = () => document.getElementById('edit-panel').classList.add('open');
document.getElementById('edit-panel-close').onclick = () => document.getElementById('edit-panel').classList.remove('open');

function saveEdits() {
  const spend = document.getElementById('edit-spend').value;
  const roas = document.getElementById('edit-roas').value;
  const clients = document.getElementById('edit-clients').value;
  const campaigns = document.getElementById('edit-campaigns').value;
  if (spend) document.getElementById('stat-spend').textContent = spend;
  if (roas) document.getElementById('stat-roas').textContent = roas;
  if (clients) document.getElementById('stat-clients').textContent = clients;
  if (campaigns) document.getElementById('stat-campaigns').textContent = campaigns;

  const email = document.getElementById('edit-email').value;
  if (email) document.getElementById('contact-email').textContent = email;

  const brand = document.getElementById('new-brand').value;
  if (brand) {
    projects.push({
      brand,
      name: { en: brand + ' Campaign', ar: 'حملة ' + brand },
      industry: { en: document.getElementById('new-industry').value || 'General', ar: document.getElementById('new-industry').value || 'عام' },
      objective: { en: document.getElementById('new-objective').value || '', ar: document.getElementById('new-objective').value || '' },
      strategy: { en: 'Custom strategy tailored for this client.', ar: 'استراتيجية مخصصة لهذا العميل.' },
      budget: document.getElementById('new-budget').value || '',
      roas: document.getElementById('new-roas').value || '',
      revenue: document.getElementById('new-revenue').value || '',
      leads: '—',
    });
    renderPortfolio();
    ['new-brand','new-industry','new-objective','new-roas','new-budget','new-revenue'].forEach(id => document.getElementById(id).value = '');
  }

  showToast(currentLang === 'ar' ? 'تم الحفظ ✓' : 'Changes saved ✓');
  document.getElementById('edit-panel').classList.remove('open');
}

// Profile photo upload
document.getElementById('profile-upload').onchange = function() {
  if (!this.files[0]) return;
  const url = URL.createObjectURL(this.files[0]);
  document.getElementById('hero-photo-placeholder').style.display = 'none';
  const img = document.getElementById('hero-photo-img');
  img.src = url; img.style.display = 'block';
};
document.getElementById('hero-photo-frame').onclick = function() {
  document.getElementById('profile-upload').click();
};

// ── CERT UPLOAD ──
document.getElementById('cert-upload').onchange = function() {
  if (!this.files[0]) return;
  const url = URL.createObjectURL(this.files[0]);
  const grid = document.getElementById('certs-grid');
  const div = document.createElement('div');
  div.className = 'cert-card filled';
  div.innerHTML = `<img src="${url}" alt="Certificate" style="width:100%;height:100%;object-fit:cover;"><div class="cert-overlay"><span>${currentLang === 'ar' ? 'عرض' : 'View'}</span></div>`;
  grid.insertBefore(div, grid.lastElementChild);
};

// ── CONTACT FORM ──
function handleFormSubmit(e) {
  e.preventDefault();
  showToast(currentLang === 'ar' ? 'تم إرسال رسالتك! سأتواصل معك قريباً.' : 'Message sent! I\'ll be in touch soon.');
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── RENDER ALL ──
function renderAll() {
  renderServices();
  renderPortfolio();
  renderKPIs();
  renderChart();
  renderTestimonials();
  renderTools();
  observeReveal();
}

renderAll();
countersRan = false;
