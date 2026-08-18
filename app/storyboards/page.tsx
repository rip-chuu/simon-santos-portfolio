import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { StoryboardCard } from "../../components/StoryboardCard";
import { storyboardProjects } from "../../content/storyboards";

export const metadata: Metadata = {
  title: "Articulate Storyboards",
  description: "Storyline-ready eLearning storyboards and interaction design prototypes by Simon Santos.",
};

const capabilities = [
  "Branching Scenarios",
  "Decision-Based Learning",
  "Interaction Design",
  "Assessment Mapping",
  "Storyboard Documentation",
  "Articulate Storyline-Ready Design",
];

export default function StoryboardsPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className="storyboards-index">
        <section className="index-hero storyboard-index-hero shell">
          <p className="eyebrow">Instructional architecture · Interaction planning</p>
          <h1>Articulate <em>Storyboards</em></h1>
          <div className="storyboard-index-intro">
            <div>
              <strong>Designing interactive learning experiences before development.</strong>
              <p>I translate learning objectives into developer-ready eLearning concepts that define learner journeys, interactions, feedback, assessment, narration, and visual direction.</p>
            </div>
            <span className="index-count">{String(storyboardProjects.length).padStart(2, "0")} storyboard</span>
          </div>
          <ul className="storyboard-capabilities" aria-label="Storyboard capabilities">
            {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
        </section>

        <section className="storyboard-list shell section-pad" aria-labelledby="storyboard-work-heading">
          <header className="storyboard-list-heading">
            <span>Current work</span>
            <h2 id="storyboard-work-heading">Interaction architecture, made visible.</h2>
            <p>Each case shows the decisions, learner pathways, feedback logic, and documentation behind a prospective eLearning build.</p>
          </header>
          <div className="storyboard-card-grid">
            {storyboardProjects.map((storyboard) => <StoryboardCard storyboard={storyboard} key={storyboard.slug} />)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
