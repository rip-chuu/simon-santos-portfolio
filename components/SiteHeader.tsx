export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a className="wordmark" href="/" aria-label="Simon Santos, home">
          <span className="wordmark-mark" aria-hidden="true">S!</span>
          <span>Simon Santos</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/#about">About</a>
        </nav>
      </div>
    </header>
  );
}
