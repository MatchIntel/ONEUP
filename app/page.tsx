import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  ExternalLink,
  Trophy,
} from "lucide-react";

type Region = "NA West" | "NA Central" | "Brazil";

type Player = {
  index: string;
  name: string;
  region: Region;
  x: string;
  tracker: string;
  avatar: string;
};

const players: Player[] = [
  {
    index: "01",
    name: "larccoz",
    region: "NA West",
    x: "https://x.com/larccoz",
    tracker: "https://fortnitetracker.com/profile/all/1UP%20777%C7%83/events",
    avatar: "https://unavatar.io/x/larccoz",
  },
  {
    index: "02",
    name: "mukutaf",
    region: "NA West",
    x: "https://x.com/mukutaf2",
    tracker: "https://fortnitetracker.com/profile/all/1up%20mukutaf13/events?id=2b4a3ab5-f60a-4e97-af21-84ab04d4d878",
    avatar: "https://unavatar.io/x/mukutaf2",
  },
  {
    index: "03",
    name: "A1alex",
    region: "NA West",
    x: "https://x.com/a1alexfn",
    tracker: "https://fortnitetracker.com/profile/kbm/1UP%20a1alex%C7%83/events?region=NAW",
    avatar: "https://unavatar.io/x/a1alexfn",
  },
  {
    index: "04",
    name: "darky",
    region: "NA West",
    x: "https://x.com/darkynts",
    tracker: "https://fortnitetracker.com/profile/kbm/1up%20darky/events?region=NAW",
    avatar: "https://unavatar.io/x/darkynts",
  },
  {
    index: "05",
    name: "Bacca",
    region: "NA West",
    x: "https://x.com/fnbacca",
    tracker: "https://fortnitetracker.com/profile/all/1UP%20Bacca/events",
    avatar: "https://unavatar.io/x/fnbacca",
  },
  {
    index: "06",
    name: "wagers",
    region: "NA Central",
    x: "https://x.com/wagersfn1",
    tracker: "https://fortnitetracker.com/profile/kbm/1UP%20Wagers%207/events?region=NAC",
    avatar: "https://unavatar.io/x/wagersfn1",
  },
  {
    index: "07",
    name: "dolzeur",
    region: "NA Central",
    x: "https://x.com/dolzeur",
    tracker: "https://fortnitetracker.com/profile/kbm/1up%20dolzeur/events?region=NAC",
    avatar: "https://unavatar.io/x/dolzeur",
  },
  {
    index: "08",
    name: "aloe",
    region: "NA Central",
    x: "https://x.com/aloefr_",
    tracker: "https://fortnitetracker.com/profile/kbm/1UP%20Aloe/events?region=NAC",
    avatar: "https://unavatar.io/x/aloefr_",
  },
  {
    index: "09",
    name: "mirops",
    region: "NA Central",
    x: "https://x.com/mirops4x",
    tracker: "https://fortnitetracker.com/profile/kbm/1up%20mirops/events?region=NAC",
    avatar: "https://unavatar.io/x/mirops4x",
  },
  {
    index: "10",
    name: "ultra",
    region: "NA Central",
    x: "https://x.com/ultrafv281",
    tracker: "https://fortnitetracker.com/profile/kbm/1up%20ultraGOTY/events?region=NAC",
    avatar: "https://unavatar.io/x/ultrafv281",
  },
  {
    index: "11",
    name: "salt",
    region: "NA Central",
    x: "https://x.com/salt3xx",
    tracker: "https://fortnitetracker.com/profile/kbm/1up%20salt/events?region=NAC",
    avatar: "https://unavatar.io/x/salt3xx",
  },
  {
    index: "12",
    name: "enough",
    region: "NA Central",
    x: "https://x.com/iamenoughh_",
    tracker: "https://fortnitetracker.com/profile/kbm/IAm%20Enough/events?region=NAC",
    avatar: "https://unavatar.io/x/iamenoughh_",
  },
  {
    index: "13",
    name: "Jemitty",
    region: "NA Central",
    x: "https://x.com/jemitty5?s=11",
    tracker: "https://fortnitetracker.com/profile/all/1up%20Jemitty/events?id=50fb5c73-7907-4960-952d-e412c4da5f0b",
    avatar: "https://unavatar.io/x/jemitty5",
  },
  {
    index: "14",
    name: "qkay",
    region: "NA Central",
    x: "https://x.com/qkayfv",
    tracker: "https://fortnitetracker.com/profile/kbm/ALP%20Qkay%C7%83/events?region=NAC",
    avatar: "https://unavatar.io/x/qkayfv",
  },
  {
    index: "15",
    name: "Caio",
    region: "Brazil",
    x: "https://x.com/caiod3us",
    tracker: "https://fortnitetracker.com/profile/kbm/1UP%20CaioD3US/events?region=BR",
    avatar: "https://unavatar.io/x/caiod3us",
  },
  {
    index: "16",
    name: "xeat",
    region: "Brazil",
    x: "https://x.com/xeatfn",
    tracker: "https://fortnitetracker.com/profile/kbm/double%20ch%D0%B0mp/events?region=BR",
    avatar: "https://unavatar.io/x/xeatfn",
  },
  {
    index: "17",
    name: "renat0",
    region: "Brazil",
    x: "https://x.com/renat0fn",
    tracker: "https://fortnitetracker.com/profile/kbm/renat0%C7%83/events?region=BR",
    avatar: "https://unavatar.io/x/renat0fn",
  },
];

const regions: { name: Region; code: string }[] = [
  { name: "NA West", code: "NAW" },
  { name: "NA Central", code: "NAC" },
  { name: "Brazil", code: "BR" },
];

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Rankings", href: "#rankings" },
  { label: "Roster", href: "#roster" },
  { label: "News", href: "#announcements" },
];

function XMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23 22h-6.6l-5.2-6.6L5.1 22H2l8.1-9.3L1.5 2h6.8l4.7 6.1L18.9 2zm-1.2 18h1.8L7.4 4H5.5l12.2 16z" />
    </svg>
  );
}

function PlayerRow({ player }: { player: Player }) {
  return (
    <article className="player-row">
      <span className="player-index">{player.index}</span>
      <a
        className="player-main"
        href={player.x}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${player.name} on X`}
      >
        <span className="avatar-shell">
          <img
            src={player.avatar}
            alt=""
            width="52"
            height="52"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </span>
        <span className="player-copy">
          <strong>{player.name}</strong>
          <small>Competitor · Fortnite</small>
        </span>
      </a>
      <span className="region-code">{player.region}</span>
      <span className="player-actions">
        <a
          href={player.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${player.name} on X`}
        >
          <XMark />
        </a>
        <a
          href={player.tracker}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${player.name} on Fortnite Tracker`}
        >
          <BarChart3 aria-hidden="true" />
        </a>
      </span>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="1UP Esports home">
          <img src="/oneup-logo.png" alt="" width="44" height="44" />
          <span>
            <strong>1UP</strong>
            <small>ESPORTS</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="text-link"
            href="https://x.com/oneupesport"
            target="_blank"
            rel="noopener noreferrer"
          >
            @oneupesport <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            className="button button-small"
            href="https://discord.gg/oneup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Discord
          </a>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="https://discord.gg/oneup" target="_blank" rel="noopener noreferrer">
              Join Discord
            </a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="status-line">
            <span className="status-dot" />
            EST. 2024 · COMPETITIVE FORTNITE
          </div>
          <h1>
            ONE TEAM.
            <br />
            <span>THREE REGIONS.</span>
          </h1>
          <p>
            Home to OneUp Esports™ — fielding competitive Fortnite rosters
            across NA West, NA Central and Brazil.
          </p>
          <div className="hero-actions">
            <a className="button" href="#roster">
              Explore roster <ArrowDown aria-hidden="true" />
            </a>
            <a
              className="button button-ghost"
              href="https://x.com/oneupesport"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow 1UP <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="hero-mark" aria-label="1UP Tracker ranking">
          <div className="logo-stage">
            <img src="/oneup-logo.png" alt="1UP Esports" width="340" height="340" />
          </div>
          <div className="ranking-strip">
            <span>
              <small>TRACKER RANKING</small>
              <strong>NA WEST</strong>
            </span>
            <b>#1</b>
          </div>
        </aside>
      </section>

      <section className="overview section-shell" id="overview">
        <div className="section-kicker">
          <span>01</span>
          <p>ORGANIZATION OVERVIEW</p>
        </div>
        <div className="stats-grid">
          <article className="stat-feature">
            <span>Total earnings</span>
            <strong>$591,215</strong>
            <p>Combined competitive earnings across the active 1UP roster.</p>
          </article>
          <article>
            <span>Cash Cup wins</span>
            <strong>57</strong>
          </article>
          <article>
            <span>Players signed</span>
            <strong>17</strong>
          </article>
          <article>
            <span>Founded</span>
            <strong>2024</strong>
          </article>
        </div>
      </section>

      <section className="rankings section-shell" id="rankings">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <span>02</span>
              <p>TRACKER RANKINGS</p>
            </div>
            <h2>Standing across every region.</h2>
          </div>
          <p>Current organization rankings from the original 1UP tracker board.</p>
        </div>

        <div className="rank-board">
          <article className="rank-row featured">
            <span className="rank-medal"><Trophy aria-hidden="true" /></span>
            <span className="rank-name"><small>REGION</small><strong>NA West</strong></span>
            <span className="rank-record"><small>STATUS</small><strong>Best regional standing</strong></span>
            <b>#1</b>
          </article>
          <article className="rank-row">
            <span className="rank-number">02</span>
            <span className="rank-name"><small>REGION</small><strong>NA Central</strong></span>
            <span className="rank-record"><small>BOARD</small><strong>Tracker ranking</strong></span>
            <b>#8</b>
          </article>
          <article className="rank-row">
            <span className="rank-number">03</span>
            <span className="rank-name"><small>SCOPE</small><strong>Global</strong></span>
            <span className="rank-record"><small>BOARD</small><strong>Worldwide ranking</strong></span>
            <b>#12</b>
          </article>
        </div>
      </section>

      <section className="roster section-shell" id="roster">
        <div className="section-heading roster-heading">
          <div>
            <div className="section-kicker">
              <span>03</span>
              <p>ACTIVE ROSTER</p>
            </div>
            <h2>Seventeen players. One tag.</h2>
          </div>
          <div className="roster-meta">
            <span><b>17</b> COMPETITORS</span>
            <span><b>3</b> REGIONS</span>
            <span><b>1</b> TEAM</span>
          </div>
        </div>

        <div className="region-stack">
          {regions.map((region) => {
            const regionPlayers = players.filter((player) => player.region === region.name);
            return (
              <section className="region-panel" key={region.name} aria-labelledby={`region-${region.code}`}>
                <header className="region-header">
                  <div>
                    <span>{region.code}</span>
                    <h3 id={`region-${region.code}`}>{region.name}</h3>
                  </div>
                  <div className="region-count">
                    <span>{regionPlayers.length.toString().padStart(2, "0")}</span>
                    <small>PLAYERS</small>
                  </div>
                </header>
                <div className="player-list">
                  {regionPlayers.map((player) => (
                    <PlayerRow key={player.index} player={player} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="announcements section-shell" id="announcements">
        <div className="announcement-panel">
          <div className="announcement-index">04 / NEWSWIRE</div>
          <div className="announcement-copy">
            <span>ROSTER MOVES · RESULTS · GIVEAWAYS</span>
            <h2>Everything drops first in Discord.</h2>
            <p>
              Signings, Cash Cup results and giveaways get posted straight to
              #announcements — the source of truth before anywhere else.
            </p>
          </div>
          <div className="announcement-actions">
            <a
              className="button button-light"
              href="https://discord.gg/oneup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Discord <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="inline-action"
              href="https://discord.gg/avYTa4msg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check announcements <ExternalLink aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="join-section section-shell" id="join">
        <div>
          <span className="join-label">READY UP</span>
          <h2>Land with 1UP.</h2>
        </div>
        <p>
          Scrims, Cash Cups and a community that shows up for every drop.
          Follow the team or join the Discord.
        </p>
        <div className="join-actions">
          <a className="button" href="https://discord.gg/oneup" target="_blank" rel="noopener noreferrer">
            Join Discord <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="button button-ghost" href="https://www.youtube.com/@oneupesport" target="_blank" rel="noopener noreferrer">
            YouTube <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/oneup-logo.png" alt="1UP Esports" width="72" height="72" />
            <div>
              <strong>ONEUP ESPORTS™</strong>
              <p>Competitive Fortnite across NA West, NA Central and Brazil.</p>
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#overview">Overview</a>
            <a href="#rankings">Rankings</a>
            <a href="#roster">Roster</a>
            <a href="#announcements">Announcements</a>
          </nav>
          <div className="footer-social">
            <a href="https://x.com/oneupesport" target="_blank" rel="noopener noreferrer">X / Twitter</a>
            <a href="https://discord.gg/oneup" target="_blank" rel="noopener noreferrer">Discord</a>
            <a href="https://www.youtube.com/@oneupesport" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 1UP Esports. All rights reserved.</span>
          <span>Independent esports organization. Not affiliated with Epic Games.</span>
          <a href="https://unavatar.io" target="_blank" rel="noopener noreferrer">Avatars by Unavatar</a>
        </div>
      </footer>

      <div className="score-hud" aria-label="Total team earnings">
        <span>TEAM EARNINGS</span>
        <b>$591,215</b>
      </div>
    </main>
  );
}
