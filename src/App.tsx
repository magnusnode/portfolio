import { useMemo, useState } from 'react';
import { ArrowRight, Github, Mail, Workflow, Globe2, FileCode2, Settings2, Layers3 } from 'lucide-react';

type Lang = 'pl' | 'en';

const copy = {
  pl: {
    nav: ['Usługi', 'Portfolio', 'O mnie', 'CV', 'Proces', 'Kontakt'],
    badge: 'Wybrane projekty freelancerskie',
    hero: 'Projektuję i wdrażam praktyczne systemy AI, automatyzacje i rozwiązania webowe.',
    sub: 'Łączę narzędzia AI, uporządkowane workflow, dokumentację i implementację techniczną, aby zamieniać niejasne pomysły w konkretne, testowalne rozwiązania.',
    primary: 'Porozmawiajmy o projekcie', secondary: 'Zobacz realizacje',
    servicesTitle: 'Usługi zaprojektowane wokół rezultatu',
    aboutTitle: 'Systemowe podejście do realizacji',
    about: 'Pracuję na styku AI, automatyzacji, web developmentu, operacji IT i dokumentacji technicznej. Skupiam się na prostym stacku, mierzalnym zakresie, walidacji i czytelnym przekazaniu rozwiązania.',
    projectsTitle: 'Wybrane systemy i projekty',
    processTitle: 'Proces dostarczenia',
    contactTitle: 'Masz projekt do uporządkowania lub wdrożenia?',
    contact: 'Opisz cel, ograniczenia i oczekiwany rezultat. Odpowiem propozycją zakresu i najprostszej ścieżki realizacji.',
    cv: 'Pobierz CV',
  },
  en: {
    nav: ['Services', 'Portfolio', 'About', 'CV', 'Process', 'Contact'],
    badge: 'Selected freelance projects',
    hero: 'I design and deliver practical AI systems, automations and web solutions.',
    sub: 'I combine AI tooling, structured workflows, technical documentation and implementation to turn ambiguous ideas into clear, testable deliverables.',
    primary: 'Discuss a project', secondary: 'View work',
    servicesTitle: 'Services designed around outcomes',
    aboutTitle: 'A systems approach to delivery',
    about: 'I work across AI tooling, automation, web implementation, IT operations and technical documentation. I focus on a simple stack, measurable scope, validation and maintainable handover.',
    projectsTitle: 'Selected systems and projects',
    processTitle: 'Delivery process',
    contactTitle: 'Have a project to structure or deliver?',
    contact: 'Share the goal, constraints and expected outcome. I will respond with a proposed scope and the most practical delivery path.',
    cv: 'Download CV',
  },
} as const;

const services = [
  [Workflow, 'AI & Workflow Automation', 'Integracje API, routing danych, powiadomienia, human-in-the-loop i dokumentacja operacyjna.'],
  [Globe2, 'Websites & Landing Pages', 'Responsywne strony, portfolio i landing pages z naciskiem na szybkość, UX i techniczne SEO.'],
  [FileCode2, 'GitHub & Documentation', 'Struktura repo, README, branch/PR workflow, onboarding, release notes i knowledge base.'],
  [Settings2, 'IT Setup & Operations', 'Środowiska Windows, tooling, backup, terminal, troubleshooting i powtarzalne runbooki.'],
  [Layers3, 'MVP & Systems Planning', 'Zakres, dobór stacku, architektura, roadmapa, ryzyka, koszty i redukcja zbędnej złożoności.'],
];

const projects = [
  ['MAGIKA.PRO™', 'active', 'System produkcji i dokumentowania produktów AI/digital z workflow opartym o GitHub.'],
  ['MarAI.PRO™', 'prototype', 'Eksperymentalny AI Governance OS z rozdzieleniem kernela governance i warstwy lore.'],
  ['𝔐𝔞𝔤𝔫𝔲𝔰OS™', 'active', 'Prywatne środowisko operacyjne łączące ChatGPT, GitHub, Obsidian i terminal.'],
  ['Owlyzer', 'experimental', 'Repozytorium eksperymentalne w trakcie przeglądu i dalszej walidacji.'],
];

export default function App() {
  const [lang, setLang] = useState<Lang>('pl');
  const t = copy[lang];
  const process = useMemo(() => ['Discovery', 'Scope', 'Architecture', 'Build', 'Validate', 'Document', 'Handover'], []);

  return <div className="site-shell">
    <header className="header container">
      <a className="brand" href="#top"><span className="brand-mark">M</span><span>MagnusNode</span></a>
      <nav>{t.nav.map((item, i) => <a key={item} href={`#${['services','portfolio','about','cv','process','contact'][i]}`}>{item}</a>)}</nav>
      <button className="lang" onClick={() => setLang(lang === 'pl' ? 'en' : 'pl')}>{lang === 'pl' ? 'EN' : 'PL'}</button>
    </header>

    <main id="top">
      <section className="hero container">
        <div className="hero-copy">
          <div className="badge"><span />{t.badge}</div>
          <h1>{t.hero}</h1>
          <p>{t.sub}</p>
          <div className="actions"><a className="btn primary" href="#contact">{t.primary}<ArrowRight size={18}/></a><a className="btn ghost" href="#portfolio">{t.secondary}</a></div>
        </div>
        <div className="visual" aria-label="Miejsce na logo i zdjęcie">
          <div className="portrait-card"><div className="portrait-fallback">MN</div><span>portraitUrl</span></div>
          <div className="metric-card one"><small>WORKFLOW</small><strong>Scope → Build → Validate</strong></div>
          <div className="metric-card two"><small>SOURCE OF TRUTH</small><strong>GitHub / main</strong></div>
          <div className="metric-card three"><small>DELIVERY</small><strong>Documented handover</strong></div>
        </div>
      </section>

      <section id="services" className="section container"><div className="eyebrow">SERVICES</div><h2>{t.servicesTitle}</h2><div className="grid services">{services.map(([Icon, title, text]) => <article className="card" key={String(title)}><Icon size={24}/><h3>{String(title)}</h3><p>{String(text)}</p><a href="#contact">Zakres i wycena <ArrowRight size={16}/></a></article>)}</div></section>

      <section id="portfolio" className="section container"><div className="eyebrow">PORTFOLIO</div><h2>{t.projectsTitle}</h2><div className="grid projects">{projects.map(([name,status,desc]) => <article className="project" key={name}><div><span className={`status ${status}`}>{status}</span><h3>{name}</h3><p>{desc}</p></div><a href="https://github.com/magnusnode" target="_blank" rel="noreferrer"><Github size={18}/> Evidence</a></article>)}</div></section>

      <section id="about" className="section split container"><div><div className="eyebrow">ABOUT</div><h2>{t.aboutTitle}</h2></div><div><p className="lead">{t.about}</p><div className="chips">{['Git & GitHub','AI workflows','WordPress','HTML/CSS','Python basics','REST/JSON','Docker fundamentals','Technical documentation'].map(x => <span key={x}>{x}</span>)}</div></div></section>

      <section id="cv" className="section container cv"><div><div className="eyebrow">CV</div><h2>AI/IT Systems Operator · Automation · Web · Documentation</h2><p>PL/EN profile, selected systems, operational toolkit, applied knowledge and development roadmap.</p></div><button className="btn primary" onClick={() => window.print()}>{t.cv}</button></section>

      <section id="process" className="section container"><div className="eyebrow">PROCESS</div><h2>{t.processTitle}</h2><div className="process">{process.map((step,i) => <div key={step}><span>{String(i+1).padStart(2,'0')}</span><strong>{step}</strong></div>)}</div></section>

      <section id="contact" className="contact container"><div><div className="eyebrow">CONTACT</div><h2>{t.contactTitle}</h2><p>{t.contact}</p></div><div className="contact-actions"><a className="btn primary" href="mailto:kontakt@example.com"><Mail size={18}/> kontakt@example.com</a><a className="btn ghost" href="https://github.com/magnusnode"><Github size={18}/> GitHub</a></div></section>
    </main>

    <footer className="container">© 2026 MagnusNode. All rights reserved. <span>Logo: brand.logoUrl · Photo: profile.portraitUrl</span></footer>
  </div>;
}
