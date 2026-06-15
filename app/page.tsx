import { Header } from "@/components/Header";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ProfileCard } from "@/components/ProfileCard";

export default function Home() {
  return (
    <div className="min-w-[1200px] bg-background px-10 py-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5">
        <Header />

        <main className="grid grid-cols-[44%_56%] gap-5">
          <ProfileCard />
          <PortfolioGrid />
        </main>
      </div>
    </div>
  );
}