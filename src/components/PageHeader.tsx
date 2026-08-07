import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="display-xl mt-6 text-[clamp(2.5rem,6vw,5rem)]">{title}</h1>
      {description ? (
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
