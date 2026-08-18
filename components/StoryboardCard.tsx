import Image from "next/image";
import type { StoryboardProject } from "../content/storyboards";

export function StoryboardCard({ storyboard }: { storyboard: StoryboardProject }) {
  return (
    <article className="storyboard-card">
      <a href={`/storyboards/${storyboard.slug}`} aria-label={`View ${storyboard.title}`}>
        <div className="storyboard-card-image">
          <Image src={storyboard.thumbnail} alt="" fill sizes="(max-width: 640px) 100vw, 720px" />
          <span>Storyline-ready design</span>
        </div>
        <div className="storyboard-card-copy">
          <p className="eyebrow">{storyboard.learningType}</p>
          <h2>{storyboard.title}</h2>
          <p>{storyboard.summary}</p>
          <dl>
            <div><dt>Audience</dt><dd>{storyboard.audience}</dd></div>
            <div><dt>Format</dt><dd>{storyboard.format}</dd></div>
          </dl>
          <div className="storyboard-card-tags">{storyboard.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          <strong>View storyboard <span aria-hidden="true">→</span></strong>
        </div>
      </a>
    </article>
  );
}
