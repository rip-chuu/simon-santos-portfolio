"use client";

import { useEffect, useState } from "react";

const tabs = [
  { id: "home", label: "Home", href: "/" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "storyboards", label: "Storyboards", href: "/storyboards" },
  { id: "about", label: "About", href: "/#about" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function tabFromLocation(): TabId {
  if (window.location.pathname.startsWith("/storyboards")) return "storyboards";
  if (window.location.pathname.startsWith("/projects")) return "projects";
  if (window.location.hash === "#about") return "about";
  return "home";
}

export function SiteHeader() {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  useEffect(() => {
    const syncTab = () => setActiveTab(tabFromLocation());
    syncTab();
    window.addEventListener("hashchange", syncTab);
    window.addEventListener("popstate", syncTab);
    return () => {
      window.removeEventListener("hashchange", syncTab);
      window.removeEventListener("popstate", syncTab);
    };
  }, []);

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a className="wordmark" href="/" aria-label="Simon Santos, home" onClick={() => setActiveTab("home")}>
          <span className="wordmark-mark" aria-hidden="true">S!</span>
          <span>Simon Santos</span>
        </a>
        <nav className="continuous-tabs" aria-label="Primary navigation">
          <span
            className="continuous-tabs-indicator"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
            aria-hidden="true"
          />
          {tabs.map((tab) => (
            <a
              href={tab.href}
              key={tab.id}
              className={activeTab === tab.id ? "is-active" : undefined}
              aria-current={activeTab === tab.id ? "page" : undefined}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
