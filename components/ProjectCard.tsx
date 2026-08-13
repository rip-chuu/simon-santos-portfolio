import Link from "next/link";
import type { Project } from "../content/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <Link href={`/projects/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
        <div className="card-topline">
          <span className="project-number">0{index + 1}</span>
          <span className="project-type">{project.type}</span>
        </div>
        <div className="card-art" aria-hidden="true">
          <span className="art-word">{project.title.split(" ")[0]}</span>
          <span className="art-grid" />
          <span className="art-sticker">CASE<br />STUDY</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="card-focus">
          {project.focus.slice(0, 3).map((item) => <span key={item}>{item}</span>)}
        </div>
        <span className="card-link">View project <span aria-hidden="true">↗</span></span>
      </Link>
    </article>
  );
}
