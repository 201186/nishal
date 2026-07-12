"use client";

import { Logo, Container } from "@/components/ui";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { DownloadButton, SearchBar } from "@/components/shared";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <Navigation />

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <SearchBar />
            <DownloadButton />
          </div>

          {/* Mobile Hamburger */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}