import Image from "next/image";
import type { Project } from "../content/projects";
import { ArtifactFigure } from "./ArtifactFigure";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const base = "/images/projects/picking-the-knife-for-the-job";

const processSteps = [
  ["Problem", "Choose a tool for a real preparation task"],
  ["Audience", "Beginner home cooks"],
  ["Objective", "Select an appropriate knife"],
  ["Content", "Four knives and concise decision rules"],
  ["Interaction", "Explore labels, audio, and examples"],
  ["Assessment", "Match realistic tasks to knives"],
  ["Iteration", "Test, audit, and refine"],
];

const rationale = [
  {
    title: "Concise microlearning structure",
    copy: "The objective is one bounded decision, so the experience excludes knife history, maintenance, and advanced technique. The reduced scope keeps attention on what a novice needs at the kitchen counter.",
  },
  {
    title: "Task-based instruction",
    copy: "Knives are explained through the foods and cuts they support. This keeps instruction closer to performance than a definition-heavy catalogue would.",
  },
  {
    title: "Progressive disclosure",
    copy: "Learners first explore Chef’s, serrated, utility, and paring knives, then encounter rules of thumb, realistic examples, and an applied decision. The sequence manages complexity without hiding the final task.",
  },
  {
    title: "Immediate explanatory feedback",
    copy: "Feedback arrives while the learner’s match is still active and reconnects the choice to size, texture, and cutting technique—the decision rule the objective requires.",
  },
  {
    title: "Visual identification",
    copy: "A labeled graphic makes visible differences concrete before learners must apply them. Audio descriptions offer a second route into each knife’s purpose.",
  },
  {
    title: "Limited extraneous content",
    copy: "Examples and visuals earn their place by supporting identification or selection. The short sequence avoids adding material that would increase cognitive load without improving the target decision.",
  },
];

const demonstrations = [
  "Microlearning design",
  "Articulate Rise 360 development",
  "Learning-objective alignment",
  "Content chunking",
  "Applied knowledge checks",
  "Immediate learner feedback",
  "Visual instructional design",
  "Performance-oriented design",
  "Accessibility-aware documentation",
  "Instructional-design reflection",
];

export function KnifeMicrolearningCaseStudy({ project, projectIndex }: { project: Project; projectIndex: number }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className="case-study lxd-project knife-case accent-yellow">
        <section className="lxd-hero shell">
          <a className="breadcrumb" href="/projects">← All projects</a>
          <div className="lxd-hero-grid">
            <div className="lxd-hero-copy">
              <p className="eyebrow">Project {String(projectIndex).padStart(2, "0")} · {project.domain}</p>
              <h1>{project.title}</h1>
              <p className="lxd-project-subtitle">Microlearning | Articulate Rise 360</p>
              <p className="case-summary">{project.summary}</p>
              <dl className="lxd-meta">
                <div><dt>Audience</dt><dd>Beginner home cooks</dd></div>
                <div><dt>Role</dt><dd>{project.primaryRole}</dd></div>
                <div><dt>Focus</dt><dd>Task-based knife selection</dd></div>
                <div><dt>Tool</dt><dd>Articulate Rise 360</dd></div>
              </dl>
              <p className="prototype-boundary">Self-directed portfolio prototype · No validated learner-performance outcomes are claimed.</p>
              <div className="button-row knife-launch-row">
                <a className="button button-primary" href={project.externalUrl} target="_blank" rel="noreferrer">Launch Interactive Course <span aria-hidden="true">↗</span></a>
                <a className="button button-secondary" href="#evidence">View design evidence <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <ArtifactFigure
              previewSrc={`${base}/rise-opening.png`}
              alt="Opening screen of the Picking the Knife for the Job Articulate Rise microlearning course"
              title="Course opening"
              caption="A direct, scenario-led entry point frames the everyday choice before instruction begins."
              classification="Learning experience evidence"
              imageRatio="1440 / 800"
              className="lxd-hero-figure"
            />
          </div>
        </section>

        <div className="lxd-project-body shell">
          <aside className="case-nav" aria-label="Project sections">
            <p>Project path</p>
            <ol>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#process">Design process</a></li>
              <li><a href="#evidence">Course evidence</a></li>
              <li><a href="#alignment">Alignment</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
              <li><a href="#reflection">Reflection</a></li>
            </ol>
          </aside>

          <article className="lxd-sections">
            <section id="overview" className="lxd-section">
              <CaseTitle number="01" kicker="Overview" title="One decision, taught deliberately" />
              <div className="project-overview-grid knife-overview-grid">
                <article><span>Learning challenge</span><p>Beginners may recognize different kitchen knives visually but struggle to determine which tool fits a specific food-preparation task.</p></article>
                <article><span>Target audience</span><p>Beginner or inexperienced home cooks who need a concise, usable selection rule.</p></article>
                <article><span>Learning solution</span><p>A short Rise course connecting four common knives to food characteristics, cutting tasks, and an applied matching activity.</p></article>
              </div>
              <article className="knife-objective-card">
                <span>Behavioral learning objective</span>
                <p>After completing the microlearning, learners should be able to <strong>select an appropriate knife</strong> for common kitchen preparation tasks based on the characteristics of the food and cutting task.</p>
                <small>Intended behavior: selection in context—not general awareness or visual recognition alone.</small>
              </article>
            </section>

            <section id="process" className="lxd-section">
              <CaseTitle number="02" kicker="Design process" title="From performance need to aligned practice" />
              <div className="knife-process-flow" aria-label="Instructional design process">
                {processSteps.map(([title, copy], index) => (
                  <article key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    {index < processSteps.length - 1 ? <b aria-hidden="true">→</b> : null}
                  </article>
                ))}
              </div>
              <div className="process-boundary-card">
                <span>Process evidence boundary</span>
                <p>No separate storyboard, content map, objective draft, or version history was included in the supplied package. This process map is transparent portfolio documentation reconstructed from the finished course—not an original development artifact.</p>
              </div>
            </section>

            <section className="lxd-section">
              <CaseTitle number="03" kicker="Design approach and rationale" title="Why the experience works this way" />
              <div className="knife-rationale-grid">
                {rationale.map((item, index) => <article key={item.title}><span>Decision {String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
              </div>
            </section>

            <section id="evidence" className="lxd-section lxd-key-artifacts">
              <CaseTitle number="04" kicker="Course evidence" title="Artifact → purpose → capability" />
              <p className="lxd-section-intro">These screens come directly from the deployed Rise export. Learner-facing evidence remains visually dominant; course source files are not exposed through the portfolio interface.</p>
              <div className="knife-evidence-grid">
                <ArtifactFigure
                  previewSrc={`${base}/rise-identification.png`}
                  alt="Rise labeled graphic introducing Chef’s, serrated, utility, and paring knives through interactive markers"
                  title="Four-knife visual exploration"
                  caption="The labeled graphic introduces purpose progressively and pairs visual identification with optional audio and transcripts."
                  classification="Visual instructional design · Progressive disclosure"
                  imageRatio="1440 / 800"
                />
                <ArtifactFigure
                  previewSrc={`${base}/rise-knowledge-check.png`}
                  alt="Rise matching knowledge check asking learners to pair sandwich preparation tasks with appropriate knives"
                  title="Applied knife-selection practice"
                  caption="Learners match four realistic preparation tasks to knives, moving from recognition to contextual selection."
                  classification="Assessment design · Immediate feedback"
                  imageRatio="1440 / 800"
                />
              </div>
              <div className="knife-example-strip" aria-label="Food preparation examples used in the course">
                <Image src={`${base}/chef-task.webp`} alt="Chef's knife slicing cooked chicken" width={600} height={500} />
                <Image src={`${base}/serrated-task.webp`} alt="Serrated knife cutting a baguette" width={1280} height={960} />
                <Image src={`${base}/paring-task.jpeg`} alt="Paring knife peeling fruit" width={447} height={447} />
                <Image src={`${base}/utility-task.jpg`} alt="Utility knife slicing strawberries" width={679} height={452} />
              </div>
            </section>

            <section id="alignment" className="lxd-section">
              <CaseTitle number="05" kicker="Objective–assessment alignment" title="The learner practises the target decision" />
              <div className="alignment-map">
                <article><span>Objective</span><h3>Select an appropriate knife</h3><p>Use food characteristics and the cutting task as the basis for a decision.</p></article>
                <b aria-hidden="true">→</b>
                <article><span>Knowledge check</span><h3>Match tasks to knives</h3><p>Choose tools for onion, baguette, avocado, and cooked-chicken preparation.</p></article>
                <b aria-hidden="true">→</b>
                <article><span>Feedback</span><h3>Reconnect choice to rule</h3><p>Explanatory feedback reinforces size, texture, and cutting technique.</p></article>
              </div>
              <p className="impact-boundary">This is an aligned practice and knowledge-check activity. It is more meaningful than recalling definitions because it asks for the objective’s selection behavior in a realistic context; it does not, by itself, prove real-world transfer.</p>
            </section>

            <section id="accessibility" className="lxd-section">
              <CaseTitle number="06" kicker="Accessibility and inclusive design" title="Verified support, documented limits" />
              <p className="lxd-section-intro">Accessibility and inclusive-design principles informed the digital content structure, including keyboard-operable interactions, labeled controls, audio transcripts, responsive layouts, and descriptive text alternatives on the portfolio page.</p>
              <div className="accessibility-grid">
                <article><span>Verified in the export</span><ul><li>Semantic headings and labeled step navigation</li><li>Keyboard-focusable labeled-graphic markers and matching controls</li><li>Accessible names for navigation and interactive elements</li><li>Show/hide transcripts for all four audio explanations</li><li>Responsive Rise layout with zoom and reflow behavior</li><li>Descriptive alternative text on portfolio evidence images</li></ul></article>
                <article><span>Limitations and accommodations</span><ul><li>The labeled graphic’s base image has an empty alt attribute; marker labels carry the knife names, but equivalent image-level description was not verified.</li><li>No formal screen-reader or WCAG conformance audit was supplied.</li><li>Rise controls much of the interaction markup and focus behavior, limiting author-level customization.</li><li>Course transcripts provide a text alternative to audio; a future version should add a formal alt-text and assistive-technology audit.</li></ul></article>
              </div>
              <p className="impact-boundary">Accessibility status is documented from export inspection and local keyboard/markup checks—not claimed as certified compliance.</p>
            </section>

            <section id="reflection" className="lxd-section">
              <CaseTitle number="07" kicker="Iteration and reflection" title="What the artifact supports—and what remains" />
              <div className="reflection-boundary">
                <h3>What can be stated responsibly</h3>
                <p>The final build shows three deliberate scope decisions: narrow the content to four versatile knives, place concise selection rules before the matching task, and require correction with explanatory feedback. The supplied export does not preserve revision history, so presenting these as test-driven changes would be inaccurate.</p>
                <h3>Future iteration</h3>
                <p>Test the sequence with beginner cooks; replace generic response feedback with item-level explanations; audit alternative text, keyboard order, contrast, zoom, and screen-reader output; and add varied tasks only after evidence shows the current four-knife framework is understood.</p>
              </div>
              <div className="demonstrates-panel">
                <span>What this demonstrates</span>
                <ul>{demonstrations.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="final-course-cta">
                <div><span>Try the learner experience</span><h2>Make the knife-selection decisions yourself.</h2></div>
                <a className="button button-primary" href={project.externalUrl} target="_blank" rel="noreferrer">Launch Interactive Course <span aria-hidden="true">↗</span></a>
              </div>
            </section>
          </article>
        </div>

        <nav className="next-project shell" aria-label="More projects"><span>Keep exploring</span><a href="/projects">See all projects <span aria-hidden="true">→</span></a></nav>
      </main>
      <SiteFooter />
    </>
  );
}

function CaseTitle({ number, kicker, title }: { number: string; kicker: string; title: string }) {
  return <header className="lxd-title"><span>{number}</span><div><p>{kicker}</p><h2>{title}</h2></div></header>;
}
