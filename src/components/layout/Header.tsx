"use client";

import { Logo, Container } from "@/components/ui";
import Navigation from "./Navigation";
import { DownloadButton, SearchBar } from "@/components/shared";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Left */}
          <Logo />

          {/* Center */}
          <Navigation />

          {/* Right */}
          <div className="flex items-center gap-4">
            <SearchBar />
            <DownloadButton />
          </div>

        </div>
      </Container>
    </header>
  );
}