import { FormEvent, useMemo, useState } from 'react';
import { ArrowRight, Code2, Download, Mail, Menu, X } from 'lucide-react';
import { projects, services } from './content';

type Lang = 'pl' | 'en';

type BriefState = {
  name: string;
  email: string;
  service: string;
  goal: string;
  deadline: string;
};

const initialBrief: BriefState = {
  name: '',
  email: '',
  service: 'AI Workflow Audit',
  goal: '',
  deadline: '14 dni / days',
};

export default function App() {
  const [lang, setLang] = useState<Lang>('pl');
  const [filter, setFilter] = useState('ALL');
  const [open, setOpen] = useState(false);
  const [brief, setBrief] = useState(initialBrief);
  const [generatedBrief, setGeneratedBrief] = useState('');

  const list = useMemo(
    () => services.filter((service) => filter === 'ALL' || service.group === filter),
    [filter],
  );
  const t = (pl: string, en: string) => (lang === 'pl' ? pl : en);

  function submitBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGeneratedBrief(`PROJECT BRIEF\nNAME: ${brief.name || '[name]'}\nEMAIL: ${brief.email || '[email]'}\nSERVICE: ${brief.service}\nGOAL: ${brief.goal || '[goal]'}\nDEADLINE: ${brief.deadline}\nCONTACT MODEL: written-first`);
  }

  return (
    <div className="site">
      <header>
        <a className="brand" href="#top">
          <img src="/assets/logo-ls.svg" alt="" />
          <span><b>Łukasz Sojka</b><small>aka 𝔐𝔞𝔤𝔫𝔲𝔰</small></span>
        </a>
        <button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'open' : ''}>
          <a href="#offer">{t('Oferta', 'Services')}</a>
          <a href="#personal-ai-os">Personal AI OS</a>
          <a href="#projects">{t('Projekty', 'Projects')}</a>
          <a href="#about">{t('O mnie', 'About')}</a>
          <a href="#contact">{t('Kontakt', 'Contact')}</a>
          <a href="/cv/CV_Lukasz_Sojka_IT_AI_PL.pdf">CV</a>
          <button onClick={() => setLang(lang === 'pl' ? 'en' : 'pl')}>{lang === 'pl' ? 'EN' : 'PL'}</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <p className="eyebrow">AI / IT / CYBER INTELLIGENCE / ONLINE SERVICES</p>
            <h1>{t(
              'AI, systemy i cyfrowe operacje - od chaosu do działającego workflow.',
              'AI, systems and digital operations - from ambiguity to an operational workflow.',
            )}</h1>
            <p className="lead">{t(
              'Łączę AI, GitHub, Obsidian, automatyzację, web i defensywny OSINT w usługi gotowe do realizacji solo i zdalnie.',
              'I combine AI, GitHub, Obsidian, automation, web and defensive OSINT into services designed for solo remote delivery.',
            )}</p>
            <div className="actions">
              <a className="btn primary" href="#contact">{t('Wyślij brief', 'Send a brief')}<ArrowRight /></a>
              <a className="btn" href="#offer">{t('Zobacz ofertę', 'View services')}</a>
            </div>
          </div>
          <div className="portrait">
            <img src="/assets/lukasz-sojka.webp" alt="Łukasz Sojka" />
            <span>ŁUKASZ SOJKA / AI & IT SYSTEMS OPERATOR</span>
          </div>
        </section>

        <section id="offer" className="section">
          <p className="eyebrow">OFFER ARCHITECTURE</p>
          <h2>{t('Jedna oferta. Trzy wyraźne obszary.', 'One offer. Three clear domains.')}</h2>
          <p className="sectionLead">{t(
            '50% AI i IT, 25% defensywne Cyber Intelligence/OSINT, 25% dokumentacja, research i produkty cyfrowe.',
            '50% AI and IT, 25% defensive Cyber Intelligence/OSINT, 25% documentation, research and digital products.',
          )}</p>
          <div className="filters">
            {[['ALL', 'ALL'], ['AI_IT', 'AI / IT 50%'], ['CYBER', 'CYBER 25%'], ['OTHER', 'OTHER 25%']].map(([value, label]) => (
              <button className={filter === value ? 'active' : ''} onClick={() => setFilter(value)} key={value}>{label}</button>
            ))}
          </div>
          <div className="serviceGrid">
            {list.map((service) => (
              <article key={service.id}>
                <small>{service.id} / {service.group}</small>
                <h3>{lang === 'pl' ? service.pl : service.en}</h3>
                <p>{lang === 'pl' ? service.pl_desc : service.en_desc}</p>
                <footer><b>{service.price}</b><span>{service.delivery}</span></footer>
              </article>
            ))}
          </div>
        </section>

        <section id="personal-ai-os" className="section flagship">
          <div>
            <p className="eyebrow">FLAGSHIP / ASYNCHRONOUS</p>
            <h2>Personal AI OS</h2>
            <p className="lead">{t(
              'Po ankiecie otrzymujesz spersonalizowany system: dashboard WWW, handbook PDF/DOCX, Markdown, Obsidian, Notion/CSV, arkusze, prompt pack i plan 30 dni.',
              'After an asynchronous questionnaire you receive a personalised system: web dashboard, PDF/DOCX handbook, Markdown, Obsidian, Notion/CSV, sheets, prompt pack and a 30-day plan.',
            )}</p>
          </div>
          <div className="flagshipPackages">
            <article><small>LITE</small><b>990-1 490 PLN</b><p>Prompt + handbook + Markdown + plan.</p></article>
            <article><small>PRO</small><b>2 490-3 990 PLN</b><p>Vault + templates + dashboard + revision.</p></article>
            <article><small>SOVEREIGN</small><b>3 990-5 990 PLN</b><p>Repo + documentation + handover package.</p></article>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">PROOF OF WORK</p>
          <h2>{t('Systemy i repozytoria. Bez fikcyjnych klientów.', 'Systems and repositories. No fabricated clients.')}</h2>
          <div className="projects">
            {projects.map((project) => (
              <article key={project.name}>
                <small>{project.status}</small>
                <h3>{project.name}</h3>
                <p>{lang === 'pl' ? project.pl : project.en}</p>
                <a href="https://github.com/magnusnode"><Code2 />Evidence</a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <div><p className="eyebrow">ABOUT</p><h2>Łukasz Sojka</h2><p>Polska / remote</p></div>
          <div>
            <p className="lead">{t(
              'AI & IT Systems Operator rozwijający się w AI Operations, repository stewardship, knowledge systems, automatyzacji i web. Doświadczenie jako dowódca zmiany w ochronie wzmacnia podejście do procedur, incydentów i odpowiedzialności.',
              'AI & IT Systems Operator developing in AI Operations, repository stewardship, knowledge systems, automation and web. Experience as a security shift commander strengthens an operational approach to procedures, incidents and responsibility.',
            )}</p>
            <div className="downloadLinks">
              <a className="btn" href="/cv/CV_Lukasz_Sojka_IT_AI_PL.pdf"><Download />CV IT/AI PL</a>
              <a className="btn" href="/cv/CV_Lukasz_Sojka_GENERAL_PL.pdf"><Download />CV General PL</a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div>
            <p className="eyebrow">WRITTEN-FIRST CONTACT</p>
            <h2>{t('Najpierw brief. Rozmowa tylko, gdy jest potrzebna.', 'Brief first. A call only when it adds value.')}</h2>
            <p>{t('Formularz generuje tekst lokalnie i nie wysyła danych do serwera.', 'The form generates text locally and does not submit data to a server.')}</p>
          </div>
          <form onSubmit={submitBrief} className="reactBrief">
            <label>{t('Imię', 'Name')}<input value={brief.name} onChange={(e) => setBrief({...brief, name:e.target.value})} /></label>
            <label>Email<input type="email" value={brief.email} onChange={(e) => setBrief({...brief, email:e.target.value})} /></label>
            <label>{t('Usługa', 'Service')}<select value={brief.service} onChange={(e) => setBrief({...brief, service:e.target.value})}>{services.map((s) => <option key={s.id}>{lang === 'pl' ? s.pl : s.en}</option>)}</select></label>
            <label>{t('Cel', 'Goal')}<textarea rows={4} value={brief.goal} onChange={(e) => setBrief({...brief, goal:e.target.value})} /></label>
            <label>{t('Termin', 'Deadline')}<select value={brief.deadline} onChange={(e) => setBrief({...brief, deadline:e.target.value})}><option>7 dni / days</option><option>14 dni / days</option><option>30 dni / days</option><option>{t('Elastyczny', 'Flexible')}</option></select></label>
            <button className="btn primary" type="submit">{t('Generuj brief', 'Generate brief')}</button>
            {generatedBrief && <pre>{generatedBrief}</pre>}
            {generatedBrief && <a className="btn" href={`mailto:[EMAIL_DO_PODMIANY]?subject=${encodeURIComponent('Project brief')}&body=${encodeURIComponent(generatedBrief)}`}><Mail />{t('Otwórz email', 'Open email')}</a>}
          </form>
        </section>
      </main>

      <footer>
        <span>© 2026-2027 Łukasz Sojka.</span>
        <span>Code MIT; content, photo and identity All Rights Reserved.</span>
        <a href="/legal/privacy.html">Privacy</a>
      </footer>
    </div>
  );
}
