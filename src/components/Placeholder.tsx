import { ImageIcon } from "lucide-react";

export function Placeholder({
  label,
  className = "",
  ratio,
}: {
  label?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`ph flex items-center justify-center ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
      role="img"
      aria-label={label ? `Espaço reservado para imagem: ${label}` : "Espaço reservado para imagem"}
    >
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <ImageIcon className="h-6 w-6 text-muted-foreground/60" strokeWidth={1.25} />
        {label ? (
          <span className="font-display text-[0.625rem] tracking-[0.3em] text-muted-foreground/70 uppercase">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
