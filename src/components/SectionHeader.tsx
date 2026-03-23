interface Props {
  num: string;
  title: string;
}

export default function SectionHeader({ num, title }: Props) {
  return (
    <div className="flex items-center gap-4 mb-14">
      <span className="text-accent text-xs tracking-widest">{num}</span>
      <h2 className="font-display font-extrabold text-3xl tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
