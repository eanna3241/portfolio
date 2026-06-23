type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span
      className="
        rounded-full
        bg-tag-bg
        px-[clamp(14px,1vw,20px)]
        py-[clamp(6px,0.5vw,10px)]
        text-[clamp(13px,0.8vw,15px)]
        font-normal
        text-tag-text
      "
    >
      {label}
    </span>
  );
}