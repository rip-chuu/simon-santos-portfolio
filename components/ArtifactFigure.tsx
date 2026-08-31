import Image from "next/image";

type ArtifactFigureProps = {
  previewSrc: string;
  fullSrc?: string;
  alt: string;
  title: string;
  caption: string;
  classification:
    | "Context evidence"
    | "Design evidence"
    | "Learning experience evidence"
    | "Learning Experience Design"
    | "Performance Support / Guided Practice"
    | "Visual instructional design · Progressive disclosure"
    | "Assessment design · Immediate feedback";
  imageRatio?: string;
  className?: string;
};

export function ArtifactFigure({
  previewSrc,
  alt,
  title,
  caption,
  classification,
  imageRatio,
  className = "",
}: ArtifactFigureProps) {
  return (
    <figure className={`artifact-figure ${className}`.trim()}>
      <div className="artifact-preview">
        <span className="artifact-image" style={imageRatio ? { aspectRatio: imageRatio } : undefined}><Image src={previewSrc} alt={alt} fill sizes="(max-width: 920px) 100vw, 760px" /></span>
      </div>
      <figcaption>
        <span>{classification}</span>
        <strong>{title}</strong>
        <p>{caption}</p>
      </figcaption>
    </figure>
  );
}
