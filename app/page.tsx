import Image from "next/image";
import { ProjectCard } from "../components/ProjectCard";
import { SectionIntro } from "../components/SectionIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getFeaturedProjects } from "../content/projects";

const principles = [
  {
    number: "01",
    title: "Understand the learner",
    copy: "Start with learner needs, context, motivation, and existing knowledge.",
    prompt: "Who are they?",
  },
  {
    number: "02",
    title: "Design with purpose",
    copy: "Every content element, interaction, and assessment supports a clear learning outcome.",
    prompt: "Why this?",
  },
  {
    number: "03",
    title: "Make learning active",
    copy: "Use reflection, application, exploration, and interaction—not passive delivery.",
    prompt: "Let them do.",
  },
];

const capabilities = [
  {
    title: "Instructional Design",
    items: ["Needs Analysis", "Curriculum Development", "Learning Objectives", "Assessment Design", "Learner-Centered Design"],
  },
  {
    title: "Learning & Development",
    items: ["Facilitation", "SME Collaboration", "Organizational Learning", "Training Evaluation"],
  },
  {
    title: "Digital Learning Production",
    items: ["LMS Development", "Interactive Learning Activities", "Visual Learning Design", "Multimedia Production"],
  },
];

const tools = ["OpenLearning", "Canva", "PowerPoint", "ChatGPT", "DaVinci Resolve", "Audacity", "Google Workspace"];

export default function Home() {
  const projects = getFeaturedProjects();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Simon Santos · Instructional Designer / LXD</p>
            <h1>Making learning <em>human.</em></h1>
            <p className="hero-lede">
              I design learner-centered digital learning experiences that combine psychology, instructional design, and creative technology to make complex ideas easier to understand, apply, and engage with.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="#projects">View Projects <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="#about">About Me <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-label">Simon Santos / Instructional Designer</div>
            <div className="visual-stage">
              <span className="burst-word">HUMAN</span>
              <span className="pixel-cross cross-one" aria-hidden="true">+</span>
              <span className="pixel-cross cross-two" aria-hidden="true">+</span>
              <div className="portrait-frame">
                <Image
                  className="portrait-image"
                  src="/images/profile/simon-santos-portrait.jpg"
                  alt="Portrait of Simon Santos"
                  fill
                  priority
                  sizes="(max-width: 920px) 80vw, 34vw"
                />
              </div>
              <span className="arrow-note" aria-hidden="true">↖ learning, made human</span>
            </div>
          </div>
          <div className="hero-ticker" aria-hidden="true">
            <span>LEARNER-CENTERED</span><i>✦</i><span>PRACTICAL</span><i>✦</i><span>INTERACTIVE</span><i>✦</i><span>RELATABLE</span>
          </div>
        </section>

        <section className="philosophy section-pad">
          <div className="shell">
            <SectionIntro index="01" label="Learning philosophy" title="Good learning starts with people—not content." copy="Three principles guide the choices I make from first analysis to final experience." />
            <div className="principle-grid">
              {principles.map((principle) => (
                <article className="principle-card" key={principle.number}>
                  <div className="principle-head"><span>{principle.number}</span><span aria-hidden="true">→</span></div>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                  <strong>{principle.prompt}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section-pad" id="projects">
          <div className="shell">
            <SectionIntro index="02" label="Featured projects" title="Learning experiences built for real humans." copy="Selected work across higher education, organizational learning, and performance support." />
            <div className="project-grid">
              {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} expandable />)}
            </div>
            <div className="section-action"><a className="text-link" href="/projects">View all case studies <span aria-hidden="true">→</span></a></div>
          </div>
        </section>

        <section className="capabilities section-pad">
          <div className="shell">
            <SectionIntro index="03" label="Capabilities" title="From messy source material to meaningful action." copy="I work across analysis, experience design, production, and evaluation—with the learning need as the anchor." />
            <div className="capability-list">
              {capabilities.map((capability, index) => (
                <article className="capability-row" key={capability.title}>
                  <span className="cap-number">0{index + 1}</span>
                  <h3>{capability.title}</h3>
                  <ul>{capability.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tools-section">
          <div className="shell tools-layout">
            <div><p className="eyebrow">Tools in service of the idea</p><h2>The toolkit changes.<br />The thinking stays.</h2></div>
            <ul className="tool-cloud">{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="shell about-grid">
            <div className="about-marker" aria-hidden="true"><span>PSY</span><strong>×</strong><span>LXD</span></div>
            <div>
              <p className="eyebrow">04 · About me</p>
              <h2>Psychology taught me to look beneath the content.</h2>
              <p className="about-lede">My background in Psychology shaped how I approach learning: not simply as information delivery, but as an experience influenced by motivation, context, behavior, and human connection.</p>
              <p>I bring that lens to digital courses, assessments, workshops, and performance support—always asking what will help a learner understand, care, and act.</p>
              <div className="future-note"><span>Next up</span><p>Education and selected experience can be added here as the portfolio grows.</p></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
