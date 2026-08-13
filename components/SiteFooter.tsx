import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow light">Let&apos;s make learning work.</p>
          <p className="footer-callout">Have a learning challenge?</p>
        </div>
        <div className="footer-links">
          <Link href="/projects">Explore projects <span aria-hidden="true">↗</span></Link>
          <Link href="/#about">More about Simon <span aria-hidden="true">↗</span></Link>
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
