import type { Metadata } from "next";
import { ProjectCard } from "../../components/ProjectCard";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getVisibleProjects } from "../../content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Instructional design and learning experience design projects by Simon Santos.",
};

export default function ProjectsPage() {
  const projects = getVisibleProjects();
  const higherEducationProjects = projects.filter((project) => project.domain === "Higher Education");
  const organizationalProjects = projects.filter((project) => project.domain === "Organizational Learning & Performance");

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="index-hero shell">
          <p className="eyebrow">Learning solutions · 2026 portfolio</p>
          <h1>Systems that help people <em>learn</em> and perform.</h1>
          <div className="index-intro">
            <p>Artifact-led work across asynchronous course development, interactive practice, and performance support.</p>
            <span className="index-count">{String(projects.length).padStart(2, "0")} projects</span>
          </div>
        </section>
        <section className="index-projects shell section-pad">
          <div className="project-domain-group">
            <header><span>Domain A</span><h2>Higher Education</h2><p>Course development and interactive practice for self-directed university learning.</p></header>
            <div className="project-grid">{higherEducationProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
          </div>
          <div className="project-domain-group">
            <header><span>Domain B</span><h2>Organizational Learning &amp; Performance</h2><p>Learning pathways and performance support embedded in authentic organizational work.</p></header>
            <div className="project-grid">{organizationalProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index + higherEducationProjects.length} />)}</div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
