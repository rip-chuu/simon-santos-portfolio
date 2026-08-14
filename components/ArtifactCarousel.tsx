"use client";

import { useState } from "react";

export type KeyExperienceSlide = {
  skill: string;
  imageSrc: string;
  alt: string;
  title: string;
  purpose: string;
  decision: string;
  why: string;
};

export function ArtifactCarousel({ items }: { items: KeyExperienceSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  function move(direction: number) {
    setActiveIndex((current) => (current + direction + items.length) % items.length);
  }

  return (
    <section className="artifact-carousel key-experience-carousel" aria-label="Understanding the Self key learning experiences">
      <div className="carousel-stage" aria-live="polite">
        <div className="carousel-image">
          {/* Screenshots have different aspect ratios, so preserve their intrinsic dimensions. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={active.imageSrc} alt={active.alt} />
        </div>
        <div className="carousel-caption" key={active.title}>
          <span>{active.skill}</span>
          <strong>{active.title}</strong>
          <p>{active.purpose}</p>
          <dl>
            <dt>Design decision</dt><dd>{active.decision}</dd>
            <dt>Why</dt><dd>{active.why}</dd>
          </dl>
        </div>
      </div>

      <div className="carousel-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Show previous learning experience">← Previous</button>
        <div className="carousel-dots" aria-label="Choose a learning experience">
          {items.map((item, index) => <button
            type="button"
            className={index === activeIndex ? "is-active" : undefined}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${item.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            key={item.title}
          ><span>{String(index + 1).padStart(2, "0")}</span></button>)}
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Show next learning experience">Next →</button>
      </div>
    </section>
  );
}
