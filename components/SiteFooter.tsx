export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow light">Let&apos;s make learning work.</p>
          <p className="footer-callout">Have a learning challenge?</p>
        </div>
        <div className="footer-links">
          <a href="/projects">Explore projects <span aria-hidden="true">↗</span></a>
          <a href="/storyboards">Explore storyboards <span aria-hidden="true">↗</span></a>
          <a href="/#about">More about Simon <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>Simon Angelo Santos</span>
        <span>Instructional Designer · Learning Experience Designer</span>
        <span>Built with intention, 2026</span>
      </div>
    </footer>
  );
}
