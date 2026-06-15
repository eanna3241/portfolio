type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full bg-tag-bg px-3.5 py-1.5 text-[13px] font-regular text-tag-text">
      {label}
    </span>
  );
}
