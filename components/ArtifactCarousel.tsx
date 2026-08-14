"use client";

import { useEffect, useRef, useState } from "react";

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
  const carouselRef = useRef<HTMLUListElement>(null);
  const settleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitionLockRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  function commitSettledExperience() {
    const carousel = carouselRef.current;
    if (!carousel || carousel.clientWidth === 0) return;
    setActiveIndex(Math.round(carousel.scrollLeft / carousel.clientWidth));
    transitionLockRef.current = false;
    setIsTransitioning(false);
  }

  function waitForSettledExperience() {
    if (settleTimerRef.current) window.clearTimeout(settleTimerRef.current);
    settleTimerRef.current = window.setTimeout(commitSettledExperience, 400);
  }

  useEffect(() => () => {
    if (settleTimerRef.current) window.clearTimeout(settleTimerRef.current);
  }, []);

  function showExperience(index: number) {
    const carousel = carouselRef.current;
    if (!carousel || transitionLockRef.current) return;
    const nextIndex = (index + items.length) % items.length;
    transitionLockRef.current = true;
    setIsTransitioning(true);
    carousel.scrollTo({ left: carousel.clientWidth * nextIndex, behavior: "smooth" });
    waitForSettledExperience();
  }

  function syncActiveExperience() {
    const carousel = carouselRef.current;
    if (!carousel || carousel.clientWidth === 0) return;
    waitForSettledExperience();
  }

  return (
    <section className="artifact-carousel key-experience-carousel" aria-label="Understanding the Self key learning experiences">
      <nav className="experience-action-bar" aria-label="Jump to a key learning experience">
        <button type="button" className="experience-arrow" onClick={() => showExperience(activeIndex - 1)} aria-label="Show previous learning experience" aria-disabled={isTransitioning}>←</button>
        {items.map((item, index) => (
          <button
            type="button"
            className={index === activeIndex ? "is-active" : undefined}
            onClick={() => showExperience(index)}
            aria-label={`Show ${item.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            aria-disabled={isTransitioning}
            key={item.title}
          >{String(index + 1).padStart(2, "0")}</button>
        ))}
        <button type="button" className="experience-arrow" onClick={() => showExperience(activeIndex + 1)} aria-label="Show next learning experience" aria-disabled={isTransitioning}>→</button>
      </nav>

      <ul className="experience-carousel" ref={carouselRef} onScroll={syncActiveExperience}>
        {items.map((item) => (
          <li className="experience-card" key={item.title}>
            <div className="carousel-image">
              {/* Screenshots have different aspect ratios, so preserve their intrinsic dimensions. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.imageSrc} alt={item.alt} />
            </div>
            <div className="carousel-caption">
              <strong>{item.skill}</strong>
              <p>{item.purpose}</p>
              <dl>
                <dt>Design decision</dt><dd>{item.decision}</dd>
                <dt>Why</dt><dd>{item.why}</dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
