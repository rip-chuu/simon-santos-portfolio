import Image from "next/image";
import type { Project } from "../content/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const outputs = project.finalOutputs?.slice(0, 3) ?? [project.finalOutput];

  return (
    <article className={`project-card project-solution-card accent-${project.accent}`}>
      <a href={`/projects/${project.slug}`} aria-label={`View the ${project.title} learning solution`}>
        <div className="card-topline">
          <span className="project-number">Project {String(project.order || index + 1).padStart(2, "0")}</span>
          <span className="project-type">{project.capability ?? project.cardSubtitle ?? project.type}</span>
        </div>

        <div className="card-art card-artifact">
          {project.heroImage ? <Image src={project.heroImage} alt="" fill sizes="(max-width: 640px) 100vw, 50vw" /> : null}
          <span className="art-sticker">LEARNING<br />SOLUTION</span>
        </div>

        <h3>{project.title}</h3>
        <p className="project-card-subtitle">{project.cardSubtitle ?? project.type}</p>
        {project.domain ? <p className="project-card-domain">{project.domain}</p> : null}
        <p>{project.summary}</p>

        <dl className="project-card-details">
          <div><dt>Role</dt><dd>{project.primaryRole ?? project.role}</dd></div>
          <div><dt>Context</dt><dd>{project.context ?? project.type}</dd></div>
          <div><dt>Tools</dt><dd>{project.tools.slice(0, 4).join(" • ")}</dd></div>
          <div><dt>Key outputs</dt><dd>{outputs.join(" • ")}</dd></div>
        </dl>

        <div className="card-focus" aria-label="Design capabilities">
          {project.focus.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
        </div>
        <span className="card-link">View learning solution <span aria-hidden="true">↗</span></span>
      </a>
    </article>
  );
}
