"use client";

import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import type { Project } from "../content/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  expandable?: boolean;
};

export function ProjectCard({ project, index, expandable = false }: ProjectCardProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = `project-summary-${project.slug}`;

  useEffect(() => {
    return () => document.body.classList.remove("modal-open");
  }, []);

  function openSummary() {
    dialogRef.current?.showModal();
    document.body.classList.add("modal-open");
  }

  function closeSummary() {
    dialogRef.current?.close();
  }

  function handleDialogClose() {
    document.body.classList.remove("modal-open");
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) closeSummary();
  }

  return (
    <article className={`project-card accent-${project.accent}`}>
      {expandable ? (
        <button
          className="project-card-trigger"
          type="button"
          onClick={openSummary}
          aria-haspopup="dialog"
          aria-label={`Open a summary of ${project.title}`}
        >
          <CardPreview project={project} index={index} action="Open summary" />
        </button>
      ) : (
        <a href={`/projects/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
          <CardPreview project={project} index={index} action="View project" />
        </a>
      )}

      {expandable ? (
        <dialog
          className={`project-dialog accent-${project.accent}`}
          ref={dialogRef}
          aria-labelledby={titleId}
          onClose={handleDialogClose}
          onClick={handleBackdropClick}
        >
          <div className="project-dialog-panel">
            <div className="dialog-art" aria-hidden="true">
              <span className="art-grid" />
              <span className="dialog-index">0{index + 1} / FEATURED</span>
              <strong className="dialog-art-word">{project.title.split(" ")[0]}</strong>
              <span className="dialog-sticker">PROJECT<br />SUMMARY</span>
            </div>

            <div className="dialog-content">
              <button className="dialog-close" type="button" onClick={closeSummary} aria-label="Close project summary">×</button>
              <p className="eyebrow">{project.type} · {project.platform ?? "Multi-format"}</p>
              <h2 id={titleId}>{project.title}</h2>

              <section className="dialog-summary" aria-label="Project summary">
                <span>In brief</span>
                <p>{project.summary}</p>
              </section>

              <dl className="dialog-snapshot">
                <div>
                  <dt>Primary role</dt>
                  <dd>{project.primaryRole ?? project.role}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{project.status ?? "Case study in progress"}</dd>
                </div>
              </dl>

              <div className="dialog-focus">
                <span className="dialog-section-label">Key contributions</span>
                <div>{project.focus.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
              </div>

              <a className="button button-primary dialog-cta" href={`/projects/${project.slug}`}>
                Know more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </dialog>
      ) : null}
    </article>
  );
}

function CardPreview({ project, index, action }: { project: Project; index: number; action: string }) {
  return (
    <>
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
      <span className="card-link">{action} <span aria-hidden="true">↗</span></span>
    </>
  );
}
