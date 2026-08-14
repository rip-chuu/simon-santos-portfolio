import type { Metadata } from "next";
import { ArtifactCarousel } from "../../../components/ArtifactCarousel";
import { ArtifactFigure } from "../../../components/ArtifactFigure";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { getProject, getVisibleProjects } from "../../../content/projects";

type PageProps = { params: Promise<{ slug: string }> };

const selfAssetBase = "/images/projects/understanding-the-self";

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
    purpose: "The reflection prompt asks learners to use Socrates, Plato, or Aristotle to examine a choice, habit, or personal goal.",
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
    title: "Explain visually, then practice",
    purpose: "A lifespan infographic makes developmental stages visible before learners use the model in a matching activity.",
    decision: "Use visuals where relationships would be harder to understand through additional paragraphs.",
    why: "The visual reduces content density, while immediate practice checks whether learners can use the relationship it shows.",
  },
];

export function generateStaticParams() {
  return getVisibleProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project?.title ?? "Project",
    description: project?.summary ?? "Learning experience design project by Simon Santos.",
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return (
      <>
        <SiteHeader />
        <main className="shell not-found"><p className="eyebrow">Project not found</p><h1>This project has moved.</h1><a className="button button-primary" href="/projects">Back to projects</a></main>
        <SiteFooter />
      </>
    );
  }

  const projectIndex = getVisibleProjects().findIndex((item) => item.slug === slug) + 1;
  const hasSelfArtifacts = project.slug === "understanding-the-self";
  const verifiedMetrics = project.metrics.filter((metric) => metric.value !== "—");
  const solutionCards = [
    { label: "Concept learning", detail: project.decisions[0]?.detail ?? project.finalOutput },
    { label: "Guided engagement", detail: project.decisions[1]?.detail ?? project.finalOutput },
    { label: "Application & transfer", detail: project.decisions[2]?.detail ?? project.finalOutput },
  ];

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className={`case-study lxd-project accent-${project.accent}`}>
        <section className="lxd-hero shell">
          <a className="breadcrumb" href="/projects">← All projects</a>
          <div className="lxd-hero-grid">
            <div className="lxd-hero-copy">
              <p className="eyebrow">Learning experience project · {String(projectIndex).padStart(2, "0")}</p>
              <h1>{project.title}</h1>
              <p className="case-summary">{project.summary}</p>
              <dl className="lxd-meta">
                <div><dt>Project type</dt><dd>{project.type}</dd></div>
                <div><dt>Role</dt><dd>{project.primaryRole ?? project.role}</dd></div>
                <div><dt>Platform</dt><dd>{project.platform ?? "Multi-format"}</dd></div>
                <div><dt>Tools</dt><dd>{project.tools.join(", ")}</dd></div>
              </dl>
            </div>
            {hasSelfArtifacts ? (
              <ArtifactFigure
                previewSrc={`${selfAssetBase}/hero-course-wide.png`}
                fullSrc={`${selfAssetBase}/course-architecture.png`}
                alt="OpenLearning course structure showing the Understanding the Self lesson cards"
                title="The complete learner-facing course"
                caption="Fourteen asynchronous lessons organized into a coherent OpenLearning experience."
                classification="Learning experience evidence"
                className="lxd-hero-figure"
              />
            ) : (
              <div className="lxd-hero-artifact" aria-label="Hero artifact area reserved for the next content pass">
                <span>Hero evidence</span>
                <strong>{project.title}</strong>
                <small>Strongest project artifact will be added in the evidence pass.</small>
              </div>
            )}
          </div>
        </section>

        <div className="lxd-project-body shell">
          <aside className="case-nav" aria-label="Project sections">
            <p>Project path</p>
            <ol>
              <li><a href="#challenge">Challenge</a></li>
              <li><a href="#insight">Insight</a></li>
              <li><a href="#solution">{hasSelfArtifacts ? "Key experiences" : "Learning solution"}</a></li>
              {!hasSelfArtifacts ? <li><a href="#experience">Experience</a></li> : null}
              {!hasSelfArtifacts ? <li><a href="#decisions">Design decisions</a></li> : null}
              <li><a href="#evidence">Evidence</a></li>
              <li><a href="#reflection">Reflection</a></li>
            </ol>
          </aside>

          <article className="lxd-sections">
            <section id="challenge" className="lxd-section">
              <LxdTitle number="01" kicker="Challenge" title="What needed to change?" />
              <p className="lxd-lede">{project.challenge}</p>
              {project.overview ? <div className="case-prose compact">{project.overview.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div> : null}
              <div className="lxd-context-card">
                <div><span>Starting context</span><strong>What the project began with</strong></div>
                <ul>{project.sourceMaterials.map((item) => <li key={item}>{item}</li>)}</ul>
                <small>{hasSelfArtifacts ? "Verified source: official teaching plan and prescribed course outline." : "Context evidence will be added during the artifact pass."}</small>
              </div>
              {hasSelfArtifacts ? (
                <div className="transformation-evidence">
                  <div className="transformation-heading"><span>Source → learner experience</span><p>The evidence shows the prescribed academic structure alongside the learner-facing course it became.</p></div>
                  <div className="transformation-grid">
                    <ArtifactFigure
                      previewSrc={`${selfAssetBase}/challenge-teaching-plan.png`}
                      fullSrc={`${selfAssetBase}/source-to-course.png`}
                      alt="Teaching plan content outline listing required Understanding the Self modules and topics"
                      title="Teaching plan / content outline"
                      caption="The prescribed module sequence and topics established the project’s academic starting point."
                      classification="Context evidence"
                    />
                    <div className="transformation-arrow" aria-hidden="true">→</div>
                    <ArtifactFigure
                      previewSrc={`${selfAssetBase}/hero-course-wide.png`}
                      fullSrc={`${selfAssetBase}/course-architecture.png`}
                      alt="Final OpenLearning module showing the organized lesson cards"
                      title="Learner-facing course architecture"
                      caption="The source structure was translated into a navigable visual sequence of asynchronous lessons."
                      classification="Learning experience evidence"
                    />
                  </div>
                </div>
              ) : null}
            </section>

            <section id="insight" className="lxd-section">
              <LxdTitle number="02" kicker="Insight" title="The design logic" />
              <div className="insight-chain">
                <article><span>The audience needed</span><p>{project.challenge}</p></article>
                <div aria-hidden="true">↓</div>
                <article><span>Because</span><p>{project.challengeDetails?.[1] ?? project.decisions[0]?.detail ?? "The project required a clearer path from information to action."}</p></article>
                <div aria-hidden="true">↓</div>
                <article className="insight-result"><span>Therefore, the experience was designed to</span><p>{project.finalOutput}</p></article>
              </div>
            </section>

            <section id="solution" className="lxd-section">
              <LxdTitle number="03" kicker={hasSelfArtifacts ? "Key learning experiences" : "Learning solution"} title={hasSelfArtifacts ? "How learners encounter, practise, and apply ideas" : "How the experience works"} />
              {hasSelfArtifacts ? (
                <>
                  <p className="lxd-section-intro key-experience-intro">Each artifact appears once, organized by the instructional capability it demonstrates and the decision that gave it purpose.</p>
                  <ArtifactCarousel items={selfKeyExperiences} />
                </>
              ) : (
                <>
                  <p className="large-copy">{project.finalOutput}</p>
                  <div className="solution-grid">
                    {solutionCards.map((card, index) => <article key={card.label}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{card.label}</h3>
                      <p>{card.detail}</p>
                      <small>Supporting artifact to be added</small>
                    </article>)}
                  </div>
                </>
              )}
            </section>

            {!hasSelfArtifacts ? <section id="experience" className="lxd-section lxd-showcase-section">
              <LxdTitle number="04" kicker="Experience" title="What it looks like" />
              <p className="lxd-section-intro">This area will become the project’s visual walkthrough. Artifacts are intentionally withheld until each one has a clear instructional purpose.</p>
              <div className="showcase-scaffold">
                <article><span>Context evidence</span><strong>Before</strong><p>Source material, teaching plan, workflow, or organizational need.</p></article>
                <article><span>Design evidence</span><strong>Reasoning</strong><p>Structure, storyboard, interaction plan, or design-development artifact.</p></article>
                <article><span>Learning experience evidence</span><strong>Learner view</strong><p>Lesson, activity, assessment, workshop, or performance-support experience.</p></article>
              </div>
            </section> : null}

            {!hasSelfArtifacts ? <section id="decisions" className="lxd-section">
              <LxdTitle number="05" kicker="Design decisions" title="Choices that shaped the experience" />
              <div className="lxd-decision-grid">
                {project.decisions.slice(0, 4).map((decision, index) => <article key={decision.title}>
                  <span>Decision {String(index + 1).padStart(2, "0")}</span>
                  <h3>{decision.title}</h3>
                  <dl><dt>Why</dt><dd>{decision.detail}</dd><dt>Evidence</dt><dd>Artifact to be linked in the evidence pass.</dd></dl>
                </article>)}
              </div>
            </section> : null}

            <section id="evidence" className="lxd-section">
              <LxdTitle number={hasSelfArtifacts ? "04" : "06"} kicker="Evidence" title="Outcomes / impact" />
              {verifiedMetrics.length ? (
                <div className="metric-grid">{verifiedMetrics.map((metric) => <article key={`${metric.label}-${metric.note}`}><strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.note}</small></article>)}</div>
              ) : (
                <div className="measurement-state"><span>Measurement status</span><strong>Project outcomes to be measured</strong><p>No verified outcome metrics are currently documented for this project.</p></div>
              )}
              {project.impactNote ? <p className="honest-note">{project.impactNote}</p> : null}
            </section>

            <section id="reflection" className="lxd-section">
              <LxdTitle number={hasSelfArtifacts ? "05" : "07"} kicker="Reflection" title="What the work strengthened" />
              <blockquote>{project.reflection}</blockquote>
              {project.reflectionDetails?.[1] ? <p className="reflection-next">{project.reflectionDetails[1]}</p> : null}
            </section>
          </article>
        </div>

        <nav className="next-project shell" aria-label="More projects">
          <span>Keep exploring</span>
          <a href="/projects">See all projects <span aria-hidden="true">→</span></a>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}

function LxdTitle({ number, kicker, title }: { number: string; kicker: string; title: string }) {
  return <header className="lxd-title"><span>{number}</span><div><p>{kicker}</p><h2>{title}</h2></div></header>;
}
