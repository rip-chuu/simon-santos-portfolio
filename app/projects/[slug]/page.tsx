import type { Metadata } from "next";
import { ArtifactCarousel } from "../../../components/ArtifactCarousel";
import { ArtifactFigure } from "../../../components/ArtifactFigure";
import { KnifeMicrolearningCaseStudy } from "../../../components/KnifeMicrolearningCaseStudy";
import { ProposalCoachExperienceGallery } from "../../../components/ProposalCoachExperienceGallery";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { getProject, getVisibleProjects, type Project } from "../../../content/projects";

type PageProps = { params: Promise<{ slug: string }> };

const selfAssetBase = "/images/projects/understanding-the-self";
const mathAssetBase = "/images/projects/mathematics-in-the-modern-world";
const buildingAssetBase = "/images/projects/building-blocks";
const coachAssetBase = "/images/projects/project-proposal-coach";

const selfKeyExperiences = [
  {
    skill: "Course architecture",
    imageSrc: `${selfAssetBase}/course-architecture.png`,
    alt: "OpenLearning course structure showing the Understanding the Self modules and lesson cards",
    title: "A visible path through 14 lessons",
    purpose: "The module view gives learners a clear sense of sequence, progress, and what comes next across the asynchronous course.",
    decision: "Translate the prescribed module structure into a clear, navigable course path.",
    why: "Learners needed to understand their progression without continuous lecturer guidance.",
  },
  {
    skill: "Concept learning · Supplementary media",
    imageSrc: `${selfAssetBase}/supplementary-media.png`,
    alt: "OpenLearning lesson page with optional Plato and Aristotle video resources",
    title: "Supplementary learning sequence",
    purpose: "Optional Plato and Aristotle resources provide another entry point into complex philosophical ideas after the required lesson content.",
    decision: "Keep enrichment optional and clearly separated from the required learning path.",
    why: "Learners could explore difficult concepts more deeply without losing sight of what they needed to complete.",
  },
  {
    skill: "Formative assessment",
    imageSrc: `${selfAssetBase}/knowledge-check.png`,
    alt: "Scenario-based multiple-choice knowledge check about philosophical perspectives of the self",
    title: "Practice close to the concept",
    purpose: "Scenario-based questions ask learners to recognize and apply philosophical ideas immediately after studying them.",
    decision: "Use interaction selectively to reinforce understanding rather than decorate the page.",
    why: "Immediate practice helps learners check whether they can distinguish related concepts before moving forward.",
  },
  {
    skill: "Reflection · Personal application",
    imageSrc: `${selfAssetBase}/reflection-activity.png`,
    alt: "Reflection activity asking learners to connect philosophical ideas to a personal choice or goal",
    title: "Connect theory to lived experience",
    purpose: "The reflection asks learners to use Socrates, Plato, or Aristotle to examine a choice, habit, or personal goal.",
    decision: "Connect abstract concepts to the learner’s own experience.",
    why: "Personal application helps keep philosophical content from remaining purely theoretical.",
  },
  {
    skill: "Applied assessment · Submission",
    imageSrc: `${selfAssetBase}/submission-activity.png`,
    alt: "Submission activity asking learners to analyze how a media image presents beauty or body ideals",
    title: "Produce an applied analysis",
    purpose: "A structured submission asks learners to analyze a real media example and propose a more inclusive alternative message.",
    decision: "Use a submission task when learners needed to create and explain an applied response.",
    why: "The deliverable makes learners demonstrate their reasoning rather than only recognize a correct answer.",
  },
  {
    skill: "Visual learning · Interactive practice",
    imageSrc: `${selfAssetBase}/visual-learning-activity.png`,
    alt: "Physical development lifespan infographic followed by an interactive matching activity",
    title: "Explain visually, then practise",
    purpose: "A lifespan infographic makes developmental stages visible before learners use the model in a matching activity.",
    decision: "Use visuals where relationships would be harder to understand through additional paragraphs.",
    why: "The visual reduces content density, while immediate practice checks whether learners can use the relationship it shows.",
  },
];

const projectInsights: Record<string, { need: string; because: string; therefore: string }> = {
  "understanding-the-self": {
    need: "Learners needed a visible, self-directed path through abstract academic material.",
    because: "The prescribed content was dense and learners would not have continuous lecturer guidance inside the asynchronous experience.",
    therefore: "The course was designed as chunked explanations, visual supports, purposeful interactions, and opportunities to apply ideas personally.",
  },
  "mathematics-in-the-modern-world": {
    need: "Learners needed active practice after encountering the arithmetic-sequence explanation.",
    because: "Recognizing a worked example does not necessarily mean a learner can complete each dependent calculation independently.",
    therefore: "The procedure was decomposed into four skills with guided progression, self-selected practice, and immediate feedback.",
  },
  "building-blocks": {
    need: "Student officers needed shared organizational knowledge that could transfer directly into current responsibilities.",
    because: "Leadership, project operations, and community engagement were interconnected performance needs rather than isolated topics.",
    therefore: "The program became a three-part pathway supported by SMEs, facilitated activities, and authentic organizational examples.",
  },
  "project-proposal-coach": {
    need: "Student leaders needed both an understandable process and support while applying it.",
    because: "The original manual made information available, but did not create a learner-facing route through proposal decisions.",
    therefore: "The resource was organized into six lifecycle modules with an optional guided-proposal prototype for application support.",
  },
};

const solutionPillars: Record<string, { title: string; copy: string }[]> = {
  "understanding-the-self": [
    { title: "Concept learning", copy: "Chunked, academically faithful explanations create manageable entry points into abstract ideas." },
    { title: "Active engagement", copy: "Knowledge checks, reflections, and discussions interrupt passive content consumption." },
    { title: "Application", copy: "Submission tasks ask learners to connect theory to their experience and real examples." },
  ],
  "mathematics-in-the-modern-world": [
    { title: "See the model", copy: "A concise visual makes the common difference and explicit rule visible." },
    { title: "Practise each skill", copy: "Four modes isolate the calculations that make up the larger procedure." },
    { title: "Correct immediately", copy: "Feedback remains close to the attempt before the learner advances." },
  ],
  "building-blocks": [
    { title: "Habitat101", copy: "Establish the mission, advocacy context, and shared language behind the chapter’s work." },
    { title: "Operations", copy: "Connect proposals, finance, coordination, and documentation to effective project execution." },
    { title: "Community & leadership", copy: "Apply leadership principles in community-centered and partnered settings." },
  ],
  "project-proposal-coach": [
    { title: "Learn the lifecycle", copy: "Six concise modules organize requirements from DAAM fundamentals through post-activity work." },
    { title: "Find the requirement", copy: "Learner-facing pages translate procedural rules into scannable explanations and examples." },
    { title: "Apply with support", copy: "A local prototype explores guided proposal development without replacing learner judgment." },
  ],
};

export function generateStaticParams() {
  return getVisibleProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project?.title ?? "Project", description: project?.summary ?? "Learning experience design project by Simon Santos." };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return <><SiteHeader /><main className="shell not-found"><p className="eyebrow">Project not found</p><h1>This project has moved.</h1><a className="button button-primary" href="/projects">Back to projects</a></main><SiteFooter /></>;

  const projectIndex = getVisibleProjects().findIndex((item) => item.slug === slug) + 1;
  if (slug === "picking-the-knife-for-the-job") return <KnifeMicrolearningCaseStudy project={project} projectIndex={projectIndex} />;
  const insight = projectInsights[slug];
  const pillars = solutionPillars[slug];
  const keyOutputs = project.finalOutputs?.slice(0, 4) ?? [project.finalOutput];

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className={`case-study lxd-project accent-${project.accent}`}>
        <section className="lxd-hero shell">
          <a className="breadcrumb" href="/projects">← All projects</a>
          <div className="lxd-hero-grid">
            <div className="lxd-hero-copy">
              <p className="eyebrow">Project {String(projectIndex).padStart(2, "0")} · {project.domain}</p>
              <h1>{project.title}</h1>
              <p className="lxd-project-subtitle">{project.cardSubtitle ?? project.type}</p>
              <p className="case-summary">{project.summary}</p>
              <dl className="lxd-meta">
                <div><dt>Project type</dt><dd>{project.type}</dd></div>
                <div><dt>Role</dt><dd>{project.primaryRole ?? project.role}</dd></div>
                <div><dt>Context</dt><dd>{project.context ?? project.platform ?? "Multi-format"}</dd></div>
                <div><dt>Tools</dt><dd>{project.tools.join(", ")}</dd></div>
              </dl>
              <div className="lxd-output-strip"><span>Key outputs</span><ul>{keyOutputs.map((output) => <li key={output}>{output}</li>)}</ul></div>
            </div>
            <HeroArtifact project={project} />
          </div>
        </section>

        <div className="lxd-project-body shell">
          <aside className="case-nav" aria-label="Project sections">
            <p>Project path</p>
            <ol>
              <li><a href="#challenge">Context &amp; challenge</a></li>
              <li><a href="#solution">Insight &amp; solution</a></li>
              <li><a href="#artifacts">Key artifacts</a></li>
              <li><a href="#reflection">Decisions &amp; reflection</a></li>
            </ol>
          </aside>

          <article className="lxd-sections">
            <section id="challenge" className="lxd-section">
              <LxdTitle number="01" kicker="Context and challenge" title="The starting point" />
              <div className="project-overview-grid">
                <article><span>Learning / performance problem</span><p>{project.challenge}</p></article>
                <article><span>Target users</span><p>{project.targetUsers}</p></article>
                <article><span>My role</span><p>{project.role}</p></article>
              </div>
              <StartingArtifact project={project} />
            </section>

            <section id="solution" className="lxd-section">
              <LxdTitle number="02" kicker="Design insight and solution" title="From need to learner action" />
              <div className="insight-statement">
                <p><span>The audience needed</span>{insight.need}</p>
                <p><span>Because</span>{insight.because}</p>
                <p><span>Therefore</span>{insight.therefore}</p>
              </div>
              <div className="solution-pillar-grid">
                {pillars.map((pillar, index) => <article key={pillar.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{pillar.title}</h3><p>{pillar.copy}</p></article>)}
              </div>
            </section>

            <section id="artifacts" className="lxd-section lxd-key-artifacts">
              <LxdTitle number="03" kicker="Key artifacts" title="Artifact → purpose → capability" />
              <p className="lxd-section-intro">The outputs lead the story. Each artifact is paired with the instructional purpose it serves and the design capability it demonstrates.</p>
              <ProjectArtifacts project={project} />
            </section>

            <section id="reflection" className="lxd-section">
              <LxdTitle number="04" kicker="Design decisions and reflection" title="The choices behind the experience" />
              <div className="lxd-decision-grid">
                {project.decisions.slice(0, 4).map((decision, index) => <article key={decision.title}><span>Decision {String(index + 1).padStart(2, "0")}</span><h3>{decision.title}</h3><p>{decision.detail}</p></article>)}
              </div>
              {project.metrics.length ? <div className="project-metric-strip">{project.metrics.map((metric) => <article key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.note}</small></article>)}</div> : null}
              {project.impactNote ? <p className="impact-boundary">Evidence boundary · {project.impactNote}</p> : null}
              <blockquote className="project-reflection"><p>{project.reflection}</p>{project.reflectionDetails?.map((detail) => <p key={detail}>{detail}</p>)}</blockquote>
            </section>
          </article>
        </div>

        <nav className="next-project shell" aria-label="More projects"><span>Keep exploring</span><a href="/projects">See all projects <span aria-hidden="true">→</span></a></nav>
      </main>
      <SiteFooter />
    </>
  );
}

function HeroArtifact({ project }: { project: Project }) {
  const heroMap: Record<string, { src: string; alt: string; title: string; caption: string; ratio: string }> = {
    "understanding-the-self": { src: `${selfAssetBase}/hero-course-wide.png`, alt: "Understanding the Self OpenLearning course architecture", title: "Fourteen learner-facing lessons", caption: "A complete asynchronous course built from faculty-provided plans and academic source material.", ratio: "16 / 9" },
    "mathematics-in-the-modern-world": { src: `${mathAssetBase}/arithmetic-sequence-practice-lab.png`, alt: "Arithmetic Sequence Practice Lab interface", title: "Practice, feedback, progression", caption: "A four-skill HTML interaction designed for active formative practice.", ratio: "1492 / 1292" },
    "building-blocks": { src: `${buildingAssetBase}/building-blocks-poster.png`, alt: "Building Blocks three-part workshop series poster", title: "Three connected workshops", caption: "Habitat101, Operations, and Community & Leadership Development form one organizational pathway.", ratio: "1 / 1" },
    "project-proposal-coach": { src: `${coachAssetBase}/platform-entry-point.png`, alt: "Project Proposal Coach entry page", title: "Learn the process or begin the task", caption: "The entry point gives student leaders a clear choice between instruction and application support.", ratio: "2995 / 2071" },
  };
  const hero = heroMap[project.slug];
  return <ArtifactFigure previewSrc={hero.src} alt={hero.alt} title={hero.title} caption={hero.caption} classification="Learning experience evidence" imageRatio={hero.ratio} className="lxd-hero-figure" />;
}

function StartingArtifact({ project }: { project: Project }) {
  if (project.slug === "understanding-the-self") return <ArtifactFigure previewSrc={`${selfAssetBase}/challenge-teaching-plan.png`} alt="Teaching plan content outline listing Understanding the Self modules and topics" title="Prescribed teaching plan" caption="The starting curriculum established the required scope; the design work transformed it into a learner-facing experience." classification="Context evidence" imageRatio="2342 / 1278" className="overview-context-artifact" />;
  if (project.slug === "mathematics-in-the-modern-world") return <ArtifactFigure previewSrc={`${mathAssetBase}/arithmetic-sequences-at-a-glance.png`} alt="Arithmetic Sequences at a Glance explanatory visual" title="Arithmetic Sequences at a Glance" caption="The concise reference made the concept visible; the design opportunity was to add active procedural practice after it." classification="Context evidence" imageRatio="747 / 440" className="overview-context-artifact" />;
  if (project.slug === "building-blocks") return <ArtifactFigure previewSrc={`${buildingAssetBase}/project-proposal-context.png`} alt="Building Blocks project proposal activity details" title="Documented organizational-development proposal" caption="The proposal established the workshop-series context, audience, and organizational-development purpose before facilitation." classification="Context evidence" imageRatio="795 / 351" className="overview-context-artifact" />;
    return <ArtifactFigure previewSrc={`${coachAssetBase}/original-operations-manual.png`} alt="DAAM Operations Manual for academic year 2024 to 2025" title="Original operations manual" caption="The manual made procedural information available, but learners still needed a usable path through its requirements." classification="Context evidence" imageRatio="876 / 218" className="overview-context-artifact" />;
}

function ProjectArtifacts({ project }: { project: Project }) {
  if (project.slug === "understanding-the-self") return <ArtifactCarousel items={selfKeyExperiences} />;
  if (project.slug === "mathematics-in-the-modern-world") return <div className="single-featured-artifact"><ArtifactFigure previewSrc={`${mathAssetBase}/arithmetic-sequence-practice-lab.png`} alt="Arithmetic Sequence Practice Lab with four modes, a sequence problem, answer field, and feedback panel" title="Arithmetic Sequence Practice Lab" caption="The lab isolates four component skills, lets learners choose guided or targeted practice, and keeps feedback beside each attempt." classification="Learning experience evidence" imageRatio="1492 / 1292" /><div className="artifact-skill-tags"><span>Instructional Design</span><span>Interactive Learning</span><span>Formative Practice</span><span>Immediate Feedback</span></div></div>;
  if (project.slug === "building-blocks") return <div className="project-artifact-grid building-artifact-grid">
    <ArtifactFigure previewSrc={`${buildingAssetBase}/proposal-form-workshop-slide.png`} alt="Building Blocks Project Proposal Form workshop slide" title="Project Proposal Form walkthrough" caption="A procedural visual used to clarify proposal expectations through examples and concrete criteria." classification="Learning experience evidence" imageRatio="1894 / 1320" />
    <ArtifactFigure previewSrc={`${buildingAssetBase}/finance-workshop-slide.png`} alt="Building Blocks finance responsibilities workshop slide" title="Operations and finance learning support" caption="Role-focused material connected financial documentation and monitoring to responsibilities officers perform during activities." classification="Learning experience evidence" imageRatio="1594 / 842" />
  </div>;
  return <ProposalCoachExperienceGallery />;
}

function LxdTitle({ number, kicker, title }: { number: string; kicker: string; title: string }) {
  return <header className="lxd-title"><span>{number}</span><div><p>{kicker}</p><h2>{title}</h2></div></header>;
}
