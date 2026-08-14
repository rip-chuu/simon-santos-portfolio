"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Decision = {
  number: string;
  title: string;
  why: string;
  evidence: string;
};

type Experience = {
  number: string;
  tag: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  decisions: Decision[];
};

const experiences: Experience[] = [
  {
    number: "01",
    tag: "Learning Experience Design",
    title: "Learning Path — From Idea to Post-Activity",
    description:
      "Six self-paced modules organize the DAAM process into a learner-friendly sequence, helping student leaders understand requirements across the project lifecycle.",
    src: "/images/projects/project-proposal-coach/learning-path-modules.png",
    alt: "Project Proposal Coach learning path showing six modules from DAAM fundamentals through post-activity requirements",
    decisions: [
      {
        number: "01",
        title: "Transform dense documentation into learner pathways",
        why: "Procedural requirements were reframed as a navigable sequence so learners could understand where they were, what mattered, and what came next.",
        evidence: "The six-module learning path groups the process by lifecycle stage instead of presenting the manual as one dense reference.",
      },
      {
        number: "02",
        title: "Organize content around learner actions",
        why: "The experience follows the project lifecycle and the decisions learners need to make instead of reproducing the structure of the original manual.",
        evidence: "Module titles move from DAAM fundamentals through planning, partnerships, implementation, and post-activity requirements.",
      },
    ],
  },
  {
    number: "02",
    tag: "Self-Paced Procedural Learning",
    title: "Planning & Pre-Acts — Learner-Facing Module",
    description:
      "A concise module translates submission lead times, ARC requirements, proposal rules, and finance conventions into one scannable learner-facing page.",
    src: "/images/projects/project-proposal-coach/planning-pre-acts-module.png",
    alt: "Planning and Pre-Acts module explaining ARC codes, submission lead times, proposal requirements, and finance formatting",
    decisions: [
      {
        number: "03",
        title: "Make requirements scannable",
        why: "Learners needed to find a rule at the moment of work without rereading a dense manual section.",
        evidence: "The page groups ARC, lead-time, PPR, objective, brief-context, program-design, and finance rules under learner-facing headings.",
      },
      {
        number: "04",
        title: "Combine instruction with immediate application",
        why: "A requirement is more useful when learners can connect it directly to the document they are preparing.",
        evidence: "The module’s proposal rules and examples sit directly beside the optional route into the proposal-support prototype.",
      },
    ],
  },
  {
    number: "03",
    tag: "Prototype / Future Enhancement",
    title: "Proposal Coach — Guided Application Prototype",
    description:
      "A local prototype explores how plain-language prompts could help learners translate an activity idea into structured proposal components after completing the tutorial.",
    src: "/images/projects/project-proposal-coach/proposal-coach-interface.png",
    alt: "Local Proposal Coach prototype prompting a learner to describe an activity idea",
    decisions: [
      {
        number: "05",
        title: "Use guidance as support, not substitution",
        why: "Learners still need to understand the institutional process and make the substantive decisions behind their proposal.",
        evidence: "The prototype begins with the learner’s own activity description and uses guided prompts instead of presenting a finished proposal as the learning experience.",
      },
      {
        number: "06",
        title: "Keep the experiment visibly bounded",
        why: "The tutorial is the core learning solution; the proposal coach represents a possible extension that requires further testing.",
        evidence: "The interface is identified as a local prototype and is presented after the learning-path and module artifacts.",
      },
    ],
  },
];

export function ProposalCoachExperienceGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [openDecision, setOpenDecision] = useState(0);
  const selected = selectedIndex === null ? null : experiences[selectedIndex];

  function openExperience(index: number) {
    setOpenDecision(0);
    setSelectedIndex(index);
  }

  function closeExperience() {
    setSelectedIndex(null);
  }

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className="daam-artifact-grid daam-experience-grid">
        {experiences.map((experience, index) => (
          <button
            type="button"
            className="proposal-experience-card"
            key={experience.number}
            onClick={() => openExperience(index)}
            aria-haspopup="dialog"
            aria-label={`Open evidence for ${experience.title}`}
          >
            <span className="proposal-experience-image">
              <Image src={experience.src} alt={experience.alt} fill sizes="(max-width: 920px) 100vw, 50vw" />
            </span>
            <span className="proposal-experience-copy">
              <span className="proposal-experience-tag">Artifact {experience.number} · {experience.tag}</span>
              <strong>{experience.title}</strong>
              <span>{experience.description}</span>
              <small>Open artifact evidence ↗</small>
            </span>
          </button>
        ))}
      </div>

      {selected ? (
        <div className="experience-modal-backdrop">
          <button type="button" className="experience-modal-dismiss" onClick={closeExperience} aria-label="Close evidence view" />
          <section
            className="experience-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-modal-title"
          >
            <button type="button" className="experience-modal-close" onClick={closeExperience} aria-label="Close evidence view">×</button>
            <div className="experience-modal-artifact">
              <Image src={selected.src} alt={selected.alt} width={2995} height={2071} sizes="(max-width: 920px) 100vw, 60vw" priority />
            </div>
            <div className="experience-modal-content">
              <span>Artifact {selected.number} · {selected.tag}</span>
              <h3 id="experience-modal-title">{selected.title}</h3>
              <p>{selected.description}</p>
              <div className="experience-decision-menu">
                {selected.decisions.map((decision, index) => {
                  const isOpen = openDecision === index;
                  return (
                    <article className={isOpen ? "is-open" : ""} key={decision.number}>
                      <button
                        type="button"
                        onClick={() => setOpenDecision(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                      >
                        <span>Decision {decision.number}</span>
                        <strong>{decision.title}</strong>
                        <b aria-hidden="true">{isOpen ? "−" : "+"}</b>
                      </button>
                      {isOpen ? <div>
                        <dl>
                          <dt>Why</dt>
                          <dd>{decision.why}</dd>
                          <dt>Evidence</dt>
                          <dd>{decision.evidence}</dd>
                        </dl>
                      </div> : null}
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
