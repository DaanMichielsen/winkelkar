import { LandingPage } from "./_components/landing-page";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { MobileNav } from "./_components/mobile-nav";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <section className="px-2 py-4">
          <h1>Home</h1>
        </section>
        <MobileNav></MobileNav>
      </SignedIn>
    </main>
  );
}
