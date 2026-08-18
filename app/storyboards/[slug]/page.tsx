import type { Metadata } from "next";
import Image from "next/image";
import { headers } from "next/headers";
import { ResponsePathwayTabs, type ResponsePathway } from "../../../components/ResponsePathwayTabs";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { getStoryboard, storyboardProjects } from "../../../content/storyboards";

type PageProps = { params: Promise<{ slug: string }> };
const assetBase = "/images/storyboards/manager-conflict-coaching";
const objectives = ["Differentiate between blame-oriented and coaching-oriented responses.", "Select communication approaches that encourage employee accountability and improvement.", "Apply constructive coaching strategies during workplace conflict situations."];
const responsePathways: ResponsePathway[] = [
  { label: "Coaching", title: "Coaching-oriented response", images: [{ src: `${assetBase}/screen3a1.png`, alt: "Coaching-oriented response, conversation screen one" }, { src: `${assetBase}/screen3a2.png`, alt: "Coaching-oriented response, conversation screen two" }], outcome: "The manager asks the employee to explain their thought process, revealing uncertainty about changed client requirements and creating an opening for targeted support.", learningPoint: "Coaching combines accountability with diagnosis, guidance, and development." },
  { label: "Blame", title: "Blame-oriented response", images: [{ src: `${assetBase}/screen3b1.png`, alt: "Blame-oriented response, conversation screen one" }, { src: `${assetBase}/screen3b2.png`, alt: "Blame-oriented response, conversation screen two" }], outcome: "The manager emphasizes the mistake without exploring why it occurred. The employee becomes more self-protective and plans to double-check everything independently.", learningPoint: "Accountability without inquiry can discourage employees from surfacing uncertainty or asking for support." },
  { label: "Avoidance", title: "Avoidance / rescuing response", images: [{ src: `${assetBase}/screen3c1.png`, alt: "Avoidance response, conversation screen one" }, { src: `${assetBase}/screen3c2.png`, alt: "Avoidance response, conversation screen two" }], outcome: "The manager resolves the immediate client issue by taking over the work, but the employee receives limited guidance for handling the task independently next time.", learningPoint: "Solving the immediate problem is not always the same as developing employee capability." },
];

export function generateStaticParams() { return storyboardProjects.map((storyboard) => ({ slug: storyboard.slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const storyboard = getStoryboard(slug);
  if (!storyboard) return { title: "Storyboard" };
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = new URL(storyboard.thumbnail, `${protocol}://${host}`).toString();
  return { title: storyboard.title, description: storyboard.summary, openGraph: { title: storyboard.title, description: storyboard.summary, images: [image] }, twitter: { card: "summary_large_image", title: storyboard.title, description: storyboard.summary, images: [image] } };
}

export default async function StoryboardPage({ params }: PageProps) {
  const { slug } = await params;
  const storyboard = getStoryboard(slug);
  if (!storyboard) return <><SiteHeader /><main className="shell not-found"><p className="eyebrow">Storyboard not found</p><h1>This storyboard has moved.</h1><a className="button button-primary" href="/storyboards">Back to storyboards</a></main><SiteFooter /></>;

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main" className="storyboard-case accent-coral">
      <section className="storyboard-hero shell">
        <a className="breadcrumb" href="/storyboards">← All storyboards</a>
        <div className="storyboard-hero-grid storyboard-hero-grid-compact"><div>
          <p className="eyebrow">Scenario-based eLearning · Concept / Prototype</p>
          <h1>{storyboard.title}</h1>
          <p className="storyboard-subtitle">{storyboard.subtitle}</p>
          <p className="case-summary">A branching eLearning prototype designed to help managers practice constructive responses to employee mistakes through realistic decisions, conversational consequences, feedback, and reflection.</p>
          <TagList tags={["Scenario-Based Learning", "Branching Interaction", "Manager Development", "Storyboarding"]} />
        </div></div>
        <dl className="storyboard-meta"><div><dt>Learning type</dt><dd>{storyboard.learningType}</dd></div><div><dt>Audience</dt><dd>{storyboard.audience}</dd></div><div><dt>Role</dt><dd>{storyboard.role}</dd></div><div><dt>Format</dt><dd>{storyboard.format}</dd></div><div><dt>Status</dt><dd>{storyboard.status}</dd></div></dl>
      </section>
      <div className="storyboard-body shell">
        <aside className="case-nav" aria-label="Storyboard sections"><p>Experience map</p><ol><li><a href="#challenge">Learning challenge</a></li><li><a href="#objectives">Objectives</a></li><li><a href="#flow">How it works</a></li><li><a href="#scenario">Scenario introduction</a></li><li><a href="#decision">Decision point</a></li><li><a href="#pathways">Response pathways</a></li><li><a href="#transfer">Transfer the learning</a></li><li><a href="#documentation">Behind the storyboard</a></li><li><a href="#assessment">Assessment approach</a></li></ol></aside>
        <article className="storyboard-sections">
          <section id="challenge" className="storyboard-section"><SectionHeading number="01" kicker="Context → learning need" title="The learning challenge" /><div className="storyboard-lede"><p>Managers are often expected to maintain accountability while also developing their employees. During high-pressure situations, however, corrective conversations can easily shift toward blame, immediate correction, or simply fixing the problem for the employee.</p><p>The learning opportunity was therefore not simply to explain good management practices, but to give managers a safe space to experience how different responses affect a workplace conversation.</p></div><div className="performance-shift" aria-label="Target performance shift"><div><span>From</span><strong>Reacting to the mistake</strong></div><b aria-hidden="true">→</b><div><span>To</span><strong>Understanding what happened, maintaining accountability, and coaching toward improvement</strong></div></div><p className="evidence-boundary">Prospective concept-based learning intervention · No formal organizational research is claimed.</p></section>
          <section id="objectives" className="storyboard-section"><SectionHeading number="02" kicker="Learning objectives" title="What should the learner be able to do?" /><p className="storyboard-section-intro">By the end of the simulation, learners will be able to:</p><ol className="storyboard-objectives">{objectives.map((objective, index) => <li key={objective}><span>{String(index + 1).padStart(2, "0")}</span><p>{objective}</p></li>)}</ol></section>
          <section id="flow" className="storyboard-section storyboard-section-compact"><SectionHeading number="03" kicker="Interaction architecture" title="How the experience works" /><div className="compact-learning-flow" aria-label="Scenario-based learning flow"><span>Scenario</span><b aria-hidden="true">→</b><span>Decision</span><b aria-hidden="true">→</b><span>Outcome</span><b aria-hidden="true">→</b><span>Feedback</span><b aria-hidden="true">→</b><span>Explore another response</span><b aria-hidden="true">↺</b><span>Decision</span></div><p className="storyboard-flow-note">Learners can revisit the decision point after reviewing each outcome, encouraging comparison between alternative responses.</p></section>
          <section id="scenario" className="storyboard-section storyboard-section-compact"><SectionHeading number="04" kicker="Learner experience" title="Scenario introduction" /><LearningArtifact number="01" title="Enter the situation" src="screen1.png" ratio="2028 / 1314" alt="A workplace scenario about an inaccurate report submitted before a client deadline" copy="Learners enter a time-sensitive workplace situation: a new team member has submitted an inaccurate report shortly before a client deadline. The scenario establishes enough context to create managerial pressure without teaching the desired response beforehand." tags={["Contextual Learning", "Workplace Realism", "Decision Preparation"]} /></section>
          <section id="decision" className="storyboard-section storyboard-section-compact"><SectionHeading number="05" kicker="Learner experience" title="Decision point" /><LearningArtifact number="02" title="Choose a response" src="screen2.png" ratio="1926 / 1286" alt="Manager decision screen offering coaching, blame, and avoidance responses" copy="Learners choose between coaching, blame/correction, and avoidance/rescuing. None is visually labeled correct or incorrect before selection; the instructional value comes from experiencing each consequence." tags={["Decision Mapping", "Behavioral Choice", "Branching Scenario"]}><div className="response-options"><p><span>Coaching</span>“Let’s take a look at what happened. Walk me through your thought process.”</p><p><span>Blame / correction</span>“We’ve already talked about this. You need to be more careful next time.”</p><p><span>Avoidance / rescuing</span>“I’ll fix it this time, but make sure this doesn’t happen again.”</p></div></LearningArtifact></section>
          <section id="pathways" className="storyboard-section storyboard-section-compact"><SectionHeading number="06" kicker="Branching interaction" title="Explore response pathways" /><p className="storyboard-section-intro">Compare how each response changes the workplace conversation.</p><ResponsePathwayTabs pathways={responsePathways} /></section>
          <section id="transfer" className="storyboard-section storyboard-section-compact"><SectionHeading number="07" kicker="Reflection" title="Transfer the learning" /><div className="transfer-learning-card"><div><Image src={`${assetBase}/reflection.png`} alt="Reflection prompt asking the learner to connect coaching to a real mistake" width={1626} height={634} /></div><p>After exploring the pathways, learners connect the scenario to a real workplace mistake and consider how a coaching approach could change the outcome.</p></div></section>
          <section id="documentation" className="storyboard-section"><SectionHeading number="08" kicker="Storyboard documentation" title="Behind the storyboard" /><div className="storyboard-documentation-accordion"><details><summary>Decision screen specification <span aria-hidden="true">+</span></summary><div className="storyboard-disclosure-content"><Image src={`${assetBase}/10.png`} alt="Developer-ready storyboard documentation for the manager decision point" width={1200} height={675} /><p>Defines purpose, visual direction, narration, learner interaction, response choices, and branching logic.</p></div></details><details><summary>Additional storyboard notes <span aria-hidden="true">+</span></summary><div className="storyboard-notes-gallery">{["8.png", "11.png", "12.png", "13.png"].map((filename) => <Image key={filename} src={`${assetBase}/${filename}`} alt={`Additional storyboard documentation ${filename}`} width={1200} height={675} />)}</div></details><details><summary>Storyline development plan <span aria-hidden="true">+</span></summary><div className="storyboard-disclosure-content"><Image src={`${assetBase}/15.png`} alt="Recommended Articulate Storyline development structure" width={1200} height={675} /><p>Recommended Storyline build structure: feedback layers, triggers, variables, branching navigation, and replay logic for a future build.</p></div></details></div></section>
          <section id="assessment" className="storyboard-section"><SectionHeading number="09" kicker="Assessment and feedback strategy" title="Assessment approach" /><div className="assessment-approach-card"><strong>Formative decision practice + reflection</strong><p>Learners demonstrate understanding by comparing response outcomes, evaluating communication consequences, and applying coaching principles through reflection.</p></div><p className="evidence-boundary">This prototype emphasizes formative decision practice and reflection rather than a scored summative assessment. No validated learning-effectiveness claim is made.</p></section>
        </article>
      </div>
      <nav className="next-project shell" aria-label="More portfolio work"><span>Keep exploring</span><a href="/storyboards">See all storyboards <span aria-hidden="true">→</span></a></nav>
    </main>
    <SiteFooter />
  </>;
}

function SectionHeading({ number, kicker, title }: { number: string; kicker: string; title: string }) { return <header className="lxd-title"><span>{number}</span><div><p>{kicker}</p><h2>{title}</h2></div></header>; }
function TagList({ tags }: { tags: string[] }) { return <ul className="storyboard-tags">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>; }
function LearningArtifact({ number, title, src, ratio, alt, copy, tags, children }: { number: string; title: string; src: string; ratio: string; alt: string; copy: string; tags: string[]; children?: React.ReactNode }) { return <article className="learning-artifact"><div className="learning-artifact-image" style={{ aspectRatio: ratio }}><Image src={`${assetBase}/${src}`} alt={alt} fill sizes="(max-width: 920px) 100vw, 900px" /></div><div className="learning-artifact-copy"><span>Artifact {number}</span><h3>{number} — {title}</h3><p>{copy}</p>{children}<TagList tags={tags} /></div></article>; }
