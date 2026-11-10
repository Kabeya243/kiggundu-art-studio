type Props = {
  kicker: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ kicker, title, intro, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="kicker">{kicker}</p>
      <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</p>
      )}
      <div className={`rule-clay mt-6 ${align === "center" ? "mx-auto max-w-[240px]" : ""}`} />
    </div>
  );
}
