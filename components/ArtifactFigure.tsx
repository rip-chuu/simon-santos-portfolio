import Image from "next/image";

type ArtifactFigureProps = {
  previewSrc: string;
  fullSrc?: string;
  alt: string;
  title: string;
  caption: string;
  classification: "Context evidence" | "Design evidence" | "Learning experience evidence";
  className?: string;
};

export function ArtifactFigure({
  previewSrc,
  alt,
  title,
  caption,
  classification,
  className = "",
}: ArtifactFigureProps) {
  return (
    <figure className={`artifact-figure ${className}`.trim()}>
      <div className="artifact-preview">
        <span className="artifact-image"><Image src={previewSrc} alt={alt} fill sizes="(max-width: 920px) 100vw, 760px" /></span>
      </div>
      <figcaption>
        <span>{classification}</span>
        <strong>{title}</strong>
        <p>{caption}</p>
      </figcaption>
    </figure>
  );
}
