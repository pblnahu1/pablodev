type SectionHeadingProps = { label: string; detail?: string };

export function SectionHeading({ label, detail }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      {detail && <p className="project-count">{detail}</p>}
    </div>
  );
}