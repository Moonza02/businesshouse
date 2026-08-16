"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { OneboHouseMark } from "./BrandMark";
import { ArrowUpRightIcon } from "./Icons";

const nav = [
  ["Bosh sahifa", "#home"],
  ["Yo‘nalishlar", "#brands"],
  ["Biz haqimizda", "#about"],
  ["Aloqa", "#contact"],
] as const;

export function SiteChrome({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    const onPointer = (event: PointerEvent) => {
      root.style.setProperty("--mx", `${event.clientX}px`);
      root.style.setProperty("--my", `${event.clientY}px`);
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="site-shell">
      <div className="cursor-aura" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
      <header className="site-header">
        <a className="brand-home" href="#home" onClick={() => setOpen(false)}>
          <OneboHouseMark compact />
        </a>
        <nav className="desktop-nav" aria-label="Asosiy navigatsiya">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Bog‘lanish <ArrowUpRightIcon /></a>
        <button className={`menu-button ${open ? "is-open" : ""}`} onClick={() => setOpen((v) => !v)} aria-label="Menyuni ochish" aria-expanded={open}>
          <span /><span />
        </button>
        <div className={`mobile-panel ${open ? "is-open" : ""}`}>
          {nav.map(([label, href], i) => <a key={href} href={href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}</a>)}
        </div>
      </header>
      {children}
    </div>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  return <div ref={setNode} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}
