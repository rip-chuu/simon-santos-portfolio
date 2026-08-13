import type { Metadata } from "next";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { getProject, getVisibleProjects } from "../../../content/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getVisibleProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project?.title ?? "Project",
    description: project?.summary ?? "Instructional design case study by Simon Santos.",
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return (
      <>
        <SiteHeader />
        <main className="shell not-found"><p className="eyebrow">Project not found</p><h1>This case study has moved.</h1><a className="button button-primary" href="/projects">Back to projects</a></main>
        <SiteFooter />
      </>
    );
  }

  const projectIndex = getVisibleProjects().findIndex((item) => item.slug === slug) + 1;

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className={`case-study accent-${project.accent}`}>
        <section className="case-hero shell">
          <a className="breadcrumb" href="/projects">← All projects</a>
          <div className="case-heading">
            <div>
              <p className="eyebrow">Case study · {String(projectIndex).padStart(2, "0")}</p>
              <h1>{project.title}</h1>
              <p className="case-summary">{project.summary}</p>
            </div>
            <div className="case-stamp" aria-hidden="true"><span>PROJECT</span><strong>{String(projectIndex).padStart(2, "0")}</strong><small>SIMON SANTOS</small></div>
          </div>
          <dl className="case-meta">
            <div><dt>Project type</dt><dd>{project.type}</dd></div>
            <div><dt>Platform</dt><dd>{project.platform ?? "Multi-format"}</dd></div>
            <div><dt>Primary role</dt><dd>Instructional Design</dd></div>
            <div><dt>Status</dt><dd>Case study in progress</dd></div>
          </dl>
        </section>

        <div className="case-art shell" aria-label="Project media placeholder">
          <span className="case-art-label">Project media · add hero screenshot</span>
          <strong>{project.title}</strong>
          <span className="case-art-tag">{project.type}</span>
        </div>

        <div className="case-content shell">
          <aside className="case-nav" aria-label="Case study sections">
            <p>On this page</p>
            <ol>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#challenge">Challenge</a></li>
              <li><a href="#role">My role</a></li>
              <li><a href="#inputs">Inputs</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#decisions">Decisions</a></li>
              <li><a href="#output">Output</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#reflection">Reflection</a></li>
              <li><a href="#tools">Tools</a></li>
            </ol>
          </aside>

          <article className="case-sections">
            <section id="overview" className="case-section">
              <CaseTitle number="01" title="Project Overview" />
              <p className="large-copy">{project.summary}</p>
              <div className="focus-strip">{project.focus.map((item) => <span key={item}>{item}</span>)}</div>
            </section>

            <section id="challenge" className="case-section">
              <CaseTitle number="02" title="The Learning Challenge" />
              <blockquote>{project.challenge}</blockquote>
              <div className="placeholder-note"><span>Evidence slot</span><p>Add learner analysis, performance gaps, or a before-state artifact here.</p></div>
            </section>

            <section id="role" className="case-section two-column-section">
              <CaseTitle number="03" title="My Role" />
              <p className="large-copy">{project.role}</p>
            </section>

            <section id="inputs" className="case-section">
              <CaseTitle number="04" title="Inputs / Source Materials" />
              <ul className="input-list">{project.sourceMaterials.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul>
              <div className="comparison-placeholder">
                <div><span>BEFORE</span><strong>Dense source material</strong><small>Add original material</small></div>
                <div className="comparison-arrow" aria-hidden="true">→</div>
                <div><span>AFTER</span><strong>Learner-ready experience</strong><small>Add final example</small></div>
              </div>
              <p className="media-caption">Before/after comparison component · ready for project images and captions.</p>
            </section>

            <section id="process" className="case-section">
              <CaseTitle number="05" title="Design Process" />
              <ol className="process-list">{project.process.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
            </section>

            <section id="decisions" className="case-section">
              <CaseTitle number="06" title="Key Learning Decisions" />
              <div className="decision-grid">{project.decisions.map((decision, index) => <article key={decision.title}><span>Decision {index + 1}</span><h3>{decision.title}</h3><p>{decision.detail}</p></article>)}</div>
            </section>

            <section id="output" className="case-section">
              <CaseTitle number="07" title="Final Output" />
              <p className="large-copy">{project.finalOutput}</p>
              <div className="media-placeholder"><span>16:9</span><strong>Screenshot, walkthrough, or embedded media</strong><small>Supports optimized images, captions, diagrams, and video embeds.</small></div>
              <p className="media-caption">Final output media placeholder · replace with an asset in public/images/projects/{project.slug}/.</p>
              {project.externalUrl ? <a className="button button-primary" href={project.externalUrl}>Open live project ↗</a> : null}
            </section>

            <section id="impact" className="case-section">
              <CaseTitle number="08" title="Impact / Results" />
              <div className="metric-grid">{project.metrics.map((metric) => <article key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.note}</small></article>)}</div>
              <p className="honest-note">Results are intentionally marked as placeholders until verified data and feedback are available.</p>
            </section>

            <section id="reflection" className="case-section">
              <CaseTitle number="09" title="Reflection / What I Learned" />
              <blockquote>{project.reflection}</blockquote>
            </section>

            <section id="tools" className="case-section">
              <CaseTitle number="10" title="Tools Used" />
              <ul className="case-tools">{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
              <p className="tools-note">Tools supported the design decisions; they were never the starting point.</p>
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

function CaseTitle({ number, title }: { number: string; title: string }) {
  return <div className="case-title"><span>{number}</span><h2>{title}</h2></div>;
}
