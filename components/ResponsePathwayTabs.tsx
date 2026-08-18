"use client";

import { useId, useState } from "react";

export type ResponsePathway = {
  label: string;
  title: string;
  images: { src: string; alt: string }[];
  outcome: string;
  learningPoint: string;
};

export function ResponsePathwayTabs({ pathways }: { pathways: ResponsePathway[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const id = useId();
  const active = pathways[activeIndex];

  return (
    <div className="response-pathway-tabs">
      <div className="response-pathway-tablist" role="tablist" aria-label="Response pathways">
        {pathways.map((pathway, index) => (
          <button key={pathway.label} id={`${id}-tab-${index}`} type="button" role="tab" aria-selected={index === activeIndex} aria-controls={`${id}-panel-${index}`} className={index === activeIndex ? "is-active" : undefined} onClick={() => setActiveIndex(index)}>{pathway.label}</button>
        ))}
      </div>
      <article id={`${id}-panel-${activeIndex}`} className="response-pathway-panel" role="tabpanel" aria-labelledby={`${id}-tab-${activeIndex}`}>
        <div className="response-pathway-images">
          {active.images.map((image, index) => <div className="response-pathway-image" key={image.src}>
            {/* Screens retain their native ratio so the storyboard evidence stays legible. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} />
            {index === 0 ? <span aria-hidden="true">→</span> : null}
          </div>)}
        </div>
        <div className="response-pathway-copy">
          <p className="eyebrow">{active.label} pathway</p>
          <h3>{active.title}</h3>
          <p>{active.outcome}</p>
          <blockquote><strong>Learning point</strong>{active.learningPoint}</blockquote>
        </div>
      </article>
    </div>
  );
}
