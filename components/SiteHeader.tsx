import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="wordmark" href="/" aria-label="Simon Santos, home">
          <span className="wordmark-mark" aria-hidden="true">S!</span>
          <span>Simon Santos</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/#about">About</Link>
        </nav>
      </div>
    </header>
  );
}
