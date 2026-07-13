"use client";

import { Logo, Container } from "@/components/ui";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { DownloadButton, SearchBar } from "@/components/shared";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 xl:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <SearchBar />
            <DownloadButton />
          </div>

          {/* Mobile / Tablet / Compact Screen Menu */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}