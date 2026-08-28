import { ArrowDown, ArrowUpRight, ExternalLink } from "lucide-react";
import { LiveHeroRankings, LiveOrgDashboard } from "@/components/live-org-dashboard";
import { FALLBACK_DATA } from "@/lib/fortnite-tracker";

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Rankings", href: "#rankings" },
  { label: "Roster & Earnings", href: "#roster" },
  { label: "Community", href: "#community" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="1UP Esports home">
          <img src="/oneup-wordmark-color.png" alt="1UP Esports" width="118" height="58" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <div className="header-actions">
          <a className="text-link" href="https://x.com/oneupesport" target="_blank" rel="noopener noreferrer">
            @oneupesport <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="button button-small" href="https://discord.gg/oneup" target="_blank" rel="noopener noreferrer">Join Discord</a>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            <a href="https://discord.gg/oneup" target="_blank" rel="noopener noreferrer">Join Discord</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="status-line"><span className="status-dot" /> EST. 2024 · COMPETITIVE FORTNITE</div>
          <h1>PLAY TO WIN.<br /><span>BUILT TO LAST.</span></h1>
          <p>OneUp Esports fields a global Fortnite roster across NA West, NA Central, Brazil and Europe — with every signing and result connected back to the competitive record.</p>
          <div className="hero-actions">
            <a className="button" href="#roster">Explore the team <ArrowDown aria-hidden="true" /></a>
            <a className="button button-ghost" href="https://fortnitetracker.com/esports/organization/oneup-esports" target="_blank" rel="noopener noreferrer">FortniteTracker <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>

        <aside className="hero-mark" aria-label="1UP regional rankings">
          <div className="logo-stage">
            <img src="/oneup-wordmark-color.png" alt="1UP Esports" width="520" height="258" />
          </div>
          <LiveHeroRankings initialData={FALLBACK_DATA} />
        </aside>
      </section>

      <LiveOrgDashboard initialData={FALLBACK_DATA} />

      <section className="announcements section-shell" id="community">
        <div className="announcement-panel">
          <img className="announcement-watermark" src="/oneup-wordmark-white.png" alt="" width="900" height="446" aria-hidden="true" />
          <div className="announcement-index">04 / NEWSWIRE</div>
          <div className="announcement-copy">
            <span>ROSTER MOVES · RESULTS · GIVEAWAYS</span>
            <h2>Everything drops first in Discord.</h2>
            <p>Signings, tournament results and giveaways get posted straight to announcements before anywhere else.</p>
          </div>
          <div className="announcement-actions">
            <a className="button button-light" href="https://discord.gg/oneup" target="_blank" rel="noopener noreferrer">Join the Discord <ArrowUpRight aria-hidden="true" /></a>
            <a className="inline-action" href="https://discord.gg/avYTa4msg" target="_blank" rel="noopener noreferrer">Check announcements <ExternalLink aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="join-section section-shell">
        <div><span className="join-label">READY UP</span><h2>Land with 1UP.</h2></div>
        <p>Scrims, Cash Cups and a community that shows up for every drop. Follow the team or join the Discord.</p>
        <div className="join-actions">
          <a className="button" href="https://discord.gg/oneup" target="_blank" rel="noopener noreferrer">Join Discord <ArrowUpRight aria-hidden="true" /></a>
          <a className="button button-ghost" href="https://www.youtube.com/@oneupesport" target="_blank" rel="noopener noreferrer">YouTube <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/oneup-wordmark-white.png" alt="1UP Esports" width="184" height="91" />
            <p>Competitive Fortnite. One team, worldwide.</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#overview">Overview</a><a href="#rankings">Rankings</a><a href="#roster">Roster & Earnings</a><a href="#community">Community</a>
          </nav>
          <div className="footer-social">
            <a href="https://x.com/oneupesport" target="_blank" rel="noopener noreferrer">X / Twitter</a>
            <a href="https://discord.gg/oneup" target="_blank" rel="noopener noreferrer">Discord</a>
            <a href="https://www.youtube.com/@oneupesport" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 1UP Esports. All rights reserved.</span>
          <span>Independent esports organization. Not affiliated with Epic Games or Tracker Network.</span>
        </div>
      </footer>

      <div className="score-hud" aria-label="Total organization earnings">
        <img src="/oneup-icon-orange.png" alt="" width="20" height="20" />
        <span>ORG EARNINGS</span><b>$591,215</b>
      </div>
    </main>
  );
}
