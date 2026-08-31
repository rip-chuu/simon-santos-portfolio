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

const tools = [
  { name: "OpenLearning", descriptor: "LMS Development", logo: "/images/toolkit/openlearning-logo.svg", logoShape: "wide" },
  { name: "Canva", descriptor: "Visual Design", logo: "/images/toolkit/canva-seeklogo.svg" },
  { name: "PowerPoint", descriptor: "Learning Decks", logo: "/images/toolkit/microsoft-powerpoint-icon.svg" },
  { name: "ChatGPT", descriptor: "AI-Assisted Design", logo: "/images/toolkit/chatgpt-icon.svg" },
  { name: "DaVinci Resolve", descriptor: "Video Editing", logo: "/images/toolkit/DaVinci_Resolve_17_logo.svg" },
  { name: "Audacity", descriptor: "Audio Editing", logo: "/images/toolkit/audacity-icon.svg" },
  { name: "Google Workspace", descriptor: "Collaboration", logo: "/images/toolkit/google-workspace-logo.svg", logoShape: "wide" },
];

const heroCategories = ["Higher Education", "Organizational Learning", "Performance Support", "Digital Learning"];

export default function Home() {
  const projects = getFeaturedProjects();
  const higherEducationProjects = projects.filter((project) => project.domain === "Higher Education");
  const organizationalProjects = projects.filter((project) => project.domain === "Organizational Learning & Performance");
  const prototypeProjects = projects.filter((project) => project.domain === "Digital Learning Prototypes");

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero hero-editorial shell">
          <div className="hero-copy hero-editorial-copy">
            <span className="hero-accent hero-accent-plus" aria-hidden="true">+</span>
            <span className="hero-accent hero-accent-dot" aria-hidden="true" />
            <p className="eyebrow"><span className="status-dot" /> Simon Santos · Instructional Designer / LXD</p>
            <h1>Making learning <em>human.</em></h1>
            <p className="hero-lede">
              I design learner-centered experiences that transform complex ideas into meaningful, engaging learning.
            </p>
            <ul className="hero-categories" aria-label="Project categories">
              {heroCategories.map((category) => <li key={category}>{category}</li>)}
            </ul>
            <p className="hero-disciplines">Psychology <span>×</span> Instructional Design <span>×</span> Creative Technology</p>
            <div className="button-row">
              <a className="button button-primary hero-primary-cta" href="#projects">View Projects <span aria-hidden="true">→</span></a>
              <a className="button button-secondary" href="/storyboards">View Storyboards <span aria-hidden="true">→</span></a>
              <a className="button button-secondary" href="#about">About Simon <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <ul className="hero-proof" aria-label="Selected portfolio production highlights">
            <li><strong>35</strong><span>Lessons created</span></li>
            <li><strong>2</strong><span>University courses</span></li>
            <li><strong>40+</strong><span>Learning activities</span></li>
            <li><strong>OL</strong><span>OpenLearning development</span></li>
          </ul>
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
            <SectionIntro index="02" label="Projects" title="Systems that help people learn and perform better." copy="Artifact-led work across asynchronous course development, interactive practice, and performance support." />
            <div className="project-domain-group">
              <header><span>Domain A</span><h3>Higher Education</h3><p>Asynchronous learning and interactive practice designed for independent university learners.</p></header>
              <div className="project-grid">{higherEducationProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
            </div>
            <div className="project-domain-group">
              <header><span>Domain B</span><h3>Organizational Learning &amp; Performance</h3><p>Workshop pathways and digital resources that help people act inside authentic systems.</p></header>
              <div className="project-grid">{organizationalProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index + higherEducationProjects.length} />)}</div>
            </div>
            <div className="project-domain-group">
              <header><span>Domain C</span><h3>Digital Learning Prototypes</h3><p>Focused interactive learning built to make a specific decision easier to understand and practise.</p></header>
              <div className="project-grid">{prototypeProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index + higherEducationProjects.length + organizationalProjects.length} />)}</div>
            </div>
            <div className="section-action"><a className="text-link" href="/projects">View all learning solutions <span aria-hidden="true">→</span></a></div>
            <aside className="storyboard-home-feature" aria-label="Articulate Storyboards capability">
              <span>Capability extension</span>
              <div><h3>Articulate Storyboards</h3><p>Scenario-based eLearning concepts, branching interactions, and developer-ready learning design documentation.</p></div>
              <a href="/storyboards">Explore storyboards <span aria-hidden="true">→</span></a>
            </aside>
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
            <ul className="tool-cloud" aria-label="Design and learning technology toolkit">
              {tools.map((tool) => (
                <li key={tool.name}>
                  <span className={`tool-logo${tool.logoShape === "wide" ? " tool-logo-wide" : ""}`}>
                    <Image src={tool.logo} alt="" width={88} height={88} />
                  </span>
                  <strong className="tool-name">{tool.name}</strong>
                  <span className="tool-descriptor">{tool.descriptor}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="shell about-grid">
            <div className="about-portrait-card">
              <span className="about-portrait-label">The person behind the work</span>
              <div className="about-portrait-frame">
                <Image
                  className="portrait-image"
                  src="/images/profile/simon-santos-portrait.jpg"
                  alt="Portrait of Simon Santos"
                  fill
                  sizes="(max-width: 920px) 85vw, 34vw"
                />
                <div className="portrait-intro">
                  <strong>Simon Santos</strong>
                  <span>Instructional Designer / LXD</span>
                </div>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">04 · About me</p>
              <h2>Psychology taught me to look beneath the content.</h2>
              <p className="about-lede">I’m Simon—a Psychology graduate who found a natural home in Instructional Design and Learning Experience Design.</p>
              <p>Psychology taught me to stay curious about how people think, what motivates them, and why context changes the way learning feels. I bring that human lens into the experiences I design, balancing structure with empathy, clarity, and a little creative play.</p>
              <div className="about-signoff"><span>Learning, made human.</span><span aria-hidden="true">↗</span></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
