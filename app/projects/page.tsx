import type { Metadata } from "next";
import { ProjectCard } from "../../components/ProjectCard";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getVisibleProjects } from "../../content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Instructional design and learning experience design case studies by Simon Santos.",
};

export default function ProjectsPage() {
  const projects = getVisibleProjects();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="index-hero shell">
          <p className="eyebrow">Selected work · 2026 portfolio</p>
          <h1>Projects that turn <em>information</em> into action.</h1>
          <div className="index-intro">
            <p>Case studies across asynchronous courses, technical learning, leadership development, and performance support.</p>
            <span className="index-count">{String(projects.length).padStart(2, "0")} projects</span>
          </div>
        </section>
        <section className="index-projects shell section-pad">
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
