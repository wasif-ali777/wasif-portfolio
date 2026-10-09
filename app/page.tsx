import type { ReactNode } from 'react';

const skills = [
  { group: 'Languages', items: ['Python', 'C++', 'C#', 'HTML', 'CSS', 'JavaScript', 'Next.js', 'React.js', 'MySQL'] },
  { group: 'Data & analysis', items: ['Pandas', 'NumPy','Matplotlib', 'Data Analysis', 'Problem Solving', 'Supabase'] },
  { group: 'Tools & interests', items: ['Visual Studio', 'Unity (basic)', 'Software Development', 'AI / Machine Learning', 'NLP', 'LLM', 'Microsoft Azure'] },
];

const projects = [
  {
    number: '01',
    title: 'SkillBridge_AI',
    type: 'Final-year project · AI-supported assessment platform',
    description:
      'A web-based skills assessment project designed to help learners assess their skills and receive domain recommendations. Built around a Next.js and Supabase stack.',
    tags: ['Next.js', 'Supabase', 'AI / ML concept'],
    status: 'Final-year project',
    href: 'https://github.com/wasif-ali777',
  },
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function Mark({ children }: { children: ReactNode }) {
  return <span className="mark">{children}</span>;
}

export default function Home() {
  return (
    <main>
      <div className="site-shell">
        <header className="nav-wrap">
          <a className="brand" href="#home" aria-label="Wasif Ali home"><span className="brand-symbol">W</span><span>wasif<span className="mint">.dev</span></span></a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
          </nav>
          <a className="nav-cta" href="https://www.linkedin.com/in/sheikhwasif" target="_blank" rel="noreferrer">Let&apos;s connect <ArrowUpRight /></a>
        </header>

        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE · SOFTWARE · AI</div>
            <h1>Building thoughtful<br />software for a <span className="gradient-text">smarter world.</span></h1>
            <p className="hero-intro">I&apos;m <strong>Wasif Ali</strong> — a Computer Science professional-in-training interested in software engineering, AI/ML, and turning practical problems into useful digital solutions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight /></a>
              <a className="button button-quiet" href="https://www.linkedin.com/in/sheikhwasif" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/wasif-ali777" target="_blank" rel="noreferrer"><Mark>GH</Mark> GitHub</a>
              <span className="social-separator">/</span>
              <a href="https://www.linkedin.com/in/sheikhwasif" target="_blank" rel="noreferrer"><Mark>in</Mark> LinkedIn</a>
              <span className="social-separator">/</span>
              <a href="#contact"><Mark>@</Mark> Contact</a>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative code illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="glow-ball" />
            <div className="code-card">
              <div className="code-top"><div className="window-dots"><i /><i /><i /></div><span>wasif.py</span><span className="code-lock">●</span></div>
              <div className="code-body">
                <div><span className="line-number">01</span><span className="code-purple">class</span> <span className="code-mint">Engineer</span>:</div>
                <div><span className="line-number">02</span>  <span className="code-purple">def</span> <span className="code-blue">build</span>(self):</div>
                <div><span className="line-number">03</span>    skills = [</div>
                <div><span className="line-number">04</span>      <span className="code-orange">&quot;software&quot;</span>,</div>
                <div><span className="line-number">05</span>      <span className="code-orange">&quot;AI / ML&quot;</span>,</div>
                <div><span className="line-number">06</span>      <span className="code-orange">&quot;curiosity&quot;</span></div>
                <div><span className="line-number">07</span>    ]</div>
                <div><span className="line-number">08</span>    <span className="code-purple">return</span> <span className="code-mint">impact</span></div>
                <div className="cursor-line"><span className="line-number">09</span><span className="typing-cursor" /></div>
              </div>
              <div className="code-footer"><span><span className="tiny-pulse" /> Available for opportunities</span><span>UTF-8</span></div>
            </div>
            <div className="float-chip chip-ai"><span className="chip-icon">✳</span><span><b>AI / ML</b><small>Curious by design</small></span></div>
            <div className="float-chip chip-code"><span className="chip-icon">&lt;/&gt;</span><span><b>Clean code</b><small>Built with purpose</small></span></div>
            <div className="art-caption">IDEAS <span>→</span> CODE <span>→</span> IMPACT</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <div className="ticker" aria-label="Areas of interest"><div className="ticker-track"><span>SOFTWARE ENGINEERING</span><b>✳</b><span>ARTIFICIAL INTELLIGENCE</span><b>✳</b><span>DATA-DRIVEN THINKING</span><b>✳</b><span>CONTINUOUS LEARNING</span><b>✳</b><span>SOFTWARE ENGINEERING</span><b>✳</b><span>ARTIFICIAL INTELLIGENCE</span><b>✳</b></div></div>

        <section className="section about-section" id="about">
          <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Curious mind.<br /><span className="muted-heading">Builder&apos;s mindset.</span></h2></div>
          <div className="about-content">
            <p className="lead">I enjoy learning how technology works and using that knowledge to create practical, user-focused solutions.</p>
            <p>I&apos;m studying Computer Science at the University of Management &amp; Technology (UMT), with interests spanning software development, data analysis, and AI/ML. I value clear thinking, steady improvement, and building a strong foundation through hands-on projects.</p>
            <div className="about-facts">
              <div><span className="fact-icon">⌘</span><span><b>Problem solving</b><small>Break down complex ideas</small></span></div>
              <div><span className="fact-icon">◈</span><span><b>Continuous learning</b><small>Grow through building</small></span></div>
              <div><span className="fact-icon">✳</span><span><b>AI-minded</b><small>Explore intelligent systems</small></span></div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading"><span className="section-index">02 / TOOLKIT</span><h2>Skills I&apos;m <span className="muted-heading">building on.</span></h2><p className="section-subtitle">A snapshot of my current technical toolkit and areas of interest.</p></div>
          <div className="skills-grid">{skills.map((skill, index) => <article className="skill-card" key={skill.group}><div className="skill-card-top"><span className="skill-number">0{index + 1}</span><span className="skill-spark">✳</span></div><h3>{skill.group}</h3><div className="skill-tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
          <p className="note-line"><span className="note-dot" /> Skills reflect my current background and learning areas; proficiency varies by tool.</p>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading projects-heading"><div><span className="section-index">03 / SELECTED WORK</span><h2>Learning by <span className="muted-heading">building.</span></h2></div><a className="text-link" href="https://github.com/wasif-ali777" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight /></a></div>
          <article className="project-card">
            <div className="project-visual"><div className="project-window"><div className="project-window-head"><div className="window-dots"><i /><i /><i /></div><span>skillbridge_ai</span><span className="project-live-dot" /></div><div className="project-ui"><div className="project-ui-sidebar"><span className="sidebar-mark">S</span><i /><i /><i /><i /></div><div className="project-ui-main"><div className="ui-greeting">YOUR SKILL JOURNEY</div><div className="ui-title">Assessment overview</div><div className="ui-cards"><span /><span /><span /></div><div className="ui-chart"><div className="chart-label">Skills snapshot</div><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /><i /></div></div><div className="ui-bottom"><span /><span /></div></div></div></div><div className="visual-label">CONCEPTUAL PROJECT PREVIEW</div></div>
            <div className="project-info"><div className="project-meta"><span className="project-count">{projects[0].number} — FEATURED PROJECT</span><span className="project-status"><i /> {projects[0].status}</span></div><h3>{projects[0].title}</h3><p className="project-type">{projects[0].type}</p><p className="project-description">{projects[0].description}</p><div className="project-tags">{projects[0].tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={projects[0].href} target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight /></a><p className="project-disclaimer">The preview is illustrative, not a live product screenshot. Project details can be expanded as the implementation evolves.</p></div>
          </article>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading"><span className="section-index">04 / BACKGROUND</span><h2>Learning with <span className="muted-heading">purpose.</span></h2></div>
          <div className="timeline">
            <article className="timeline-item"><div className="timeline-marker"><span /></div><div className="timeline-content"><div className="timeline-top"><span className="timeline-label">EDUCATION</span><span className="timeline-date">Computer Science</span></div><h3>University of Management &amp; Technology</h3><p>BS Computer Science (BSCS)</p><span className="timeline-detail">Building a foundation in programming, problem solving, and computing.</span></div></article>
            <article className="timeline-item"><div className="timeline-marker"><span /></div><div className="timeline-content"><div className="timeline-top"><span className="timeline-label">CERTIFICATION</span><span className="timeline-date">DevOps</span></div><h3>NAVTTC · Corvit Institute</h3><p>DevOps Certificate</p><span className="timeline-detail">Certificate completed.</span></div></article>
          </div>
        </section>

        <section className="contact-section" id="contact"><div className="contact-orb orb-a" /><div className="contact-orb orb-b" /><div className="contact-content"><span className="section-index">05 / GET IN TOUCH</span><h2>Have an interesting<br />problem to <span className="gradient-text">solve?</span></h2><p>I&apos;m open to connecting with people working in software, AI/ML, and technology. Let&apos;s connect.</p><div className="contact-actions"><a className="button button-primary" href="https://www.linkedin.com/in/sheikhwasif" target="_blank" rel="noreferrer">Message me on LinkedIn <ArrowUpRight /></a><a className="button button-quiet" href="https://github.com/wasif-ali777" target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight /></a></div></div><div className="contact-watermark">LET&apos;S BUILD</div></section>

        <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-symbol">W</span><span>wasif<span className="mint">.dev</span></span></a><span className="footer-copy">Designed &amp; built with curiosity.</span><div className="footer-links"><a href="https://github.com/wasif-ali777" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a><a href="https://www.linkedin.com/in/sheikhwasif" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a></div><span className="copyright">© {new Date().getFullYear()} Wasif Ali</span></footer>
      </div>
    </main>
  );
}
