import { Header } from "@/components/Header";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ProfileCard } from "@/components/ProfileCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-7 py-10 md:px-10 md:py-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:gap-5">
          <Header />

          <section className="grid grid-cols-1 gap-4 md:grid-cols-[44%_56%] md:gap-5">
            <ProfileCard />
            <PortfolioGrid />
          </section>
        </div>
      </div>
    </main>
  );
}