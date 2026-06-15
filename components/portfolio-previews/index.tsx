export function MobilePreview() {
  return (
    <div className="relative h-[140px] w-[72px] rounded-[18px] border-[3px] border-[#2a2a2a] bg-[#1a1a1a] shadow-lg">
      <div className="absolute left-1/2 top-2 h-1 w-8 -translate-x-1/2 rounded-full bg-[#333]" />
      <div className="mx-1.5 mt-5 space-y-2 rounded-lg bg-[#252525] p-2">
        <div className="h-2 w-full rounded bg-accent/80" />
        <div className="h-1.5 w-3/4 rounded bg-[#444]" />
        <div className="h-1.5 w-1/2 rounded bg-[#444]" />
        <div className="mt-3 h-8 w-full rounded-md bg-[#333]" />
      </div>
    </div>
  );
}

export function WebPreview() {
  return (
    <div className="relative h-[110px] w-[180px]">
      <div className="absolute bottom-0 left-1/2 h-2 w-[140px] -translate-x-1/2 rounded-b-lg bg-[#d4d4d4]" />
      <div className="overflow-hidden rounded-t-lg border border-[#ccc] bg-white shadow-md">
        <div className="flex h-4 items-center gap-1 bg-[#eee] px-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex h-[86px] flex-col items-center justify-center bg-gradient-to-br from-[#87CEEB] to-[#E8D5B7] px-3">
          <p className="text-center text-[7px] font-bold leading-tight text-white drop-shadow">
            LET&apos;S GOOOO
            <br />
            В ПУТЕШЕСТВИЕ
          </p>
        </div>
      </div>
    </div>
  );
}

export function PresentationPreview() {
  return (
    <div className="relative h-[110px] w-[180px]">
      <div className="absolute bottom-0 left-1/2 h-2 w-[140px] -translate-x-1/2 rounded-b-lg bg-[#d4d4d4]" />
      <div className="overflow-hidden rounded-t-lg border border-[#ccc] bg-white shadow-md">
        <div className="flex h-4 items-center gap-1 bg-[#eee] px-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex h-[86px] items-center justify-center bg-gradient-to-r from-[#E87A5D] to-[#D94F3D] px-4">
          <div className="h-10 w-16 rounded bg-white/20" />
          <div className="ml-3 space-y-1.5">
            <div className="h-2 w-20 rounded bg-white/90" />
            <div className="h-1.5 w-14 rounded bg-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function GraphicEventPreview() {
  return (
    <div className="relative flex h-[140px] w-[100px] flex-col items-center">
      <div className="h-3 w-16 rounded-sm bg-[#333]" />
      <div className="mt-1 h-[120px] w-[80px] overflow-hidden rounded-lg border-2 border-[#222] bg-[#111] shadow-lg">
        <div className="flex h-full flex-col items-center justify-between p-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#4ade80] to-[#166534]" />
          <div className="h-2 w-12 rounded bg-white/20" />
          <div className="h-1.5 w-16 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export function ShotPreview({ variant }: { variant: "dashboard" | "graphic" }) {
  if (variant === "dashboard") {
    return (
      <div className="h-[100px] w-[160px] overflow-hidden rounded-xl border border-[#e5e5e5] bg-white shadow-sm">
        <div className="flex h-5 items-center border-b border-[#eee] px-2">
          <div className="h-1.5 w-12 rounded bg-[#ddd]" />
        </div>
        <div className="p-3">
          <div className="mb-2 h-8 w-full rounded bg-[#f5f5f5]" />
          <div className="flex items-end gap-1">
            {[40, 60, 35, 70, 50].map((h, i) => (
              <div
                key={i}
                className="w-4 rounded-t bg-[#4ade80]"
                style={{ height: `${h}%`, maxHeight: 32 }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100px] w-[160px] overflow-hidden rounded-xl bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#0f172a] shadow-sm">
      <div className="flex h-full flex-col justify-between p-3">
        <div className="h-2 w-16 rounded bg-white/30" />
        <div className="space-y-1">
          <div className="h-6 w-full rounded bg-white/10" />
          <div className="h-3 w-2/3 rounded bg-white/20" />
        </div>
        <div className="flex gap-1">
          <div className="h-4 w-4 rounded-full bg-white" />
          <div className="h-4 flex-1 rounded bg-white/40" />
        </div>
      </div>
    </div>
  );
}
