import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CollectionCta({
  lines,
  to,
  caption,
}: {
  lines: string[];
  to: "/sneakers" | "/lancamentos" | "/colecoes";
  caption?: string;
}) {
  return (
    <Link
      to={to}
      className="group soft relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden border border-border bg-card/40 p-8 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
    >
      {caption ? <span className="eyebrow">{caption}</span> : <span />}
      <div>
        <h3 className="display-xl text-[clamp(1.75rem,2.4vw,2.5rem)]">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <span
          aria-hidden
          className="soft mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-primary/60 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <ArrowRight
            className="arrow-nudge h-5 w-5 group-hover:[animation-duration:0.9s]"
            strokeWidth={1.5}
          />
        </span>
      </div>
    </Link>
  );
}
