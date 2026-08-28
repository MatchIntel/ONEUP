"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  CircleDollarSign,
  ExternalLink,
  RefreshCw,
  Trophy,
  UsersRound,
} from "lucide-react";
import type { OrgData, OrgEvent, OrgPlayer, RegionCode } from "@/lib/fortnite-tracker";

const TRACKER_ORG_URL = "https://fortnitetracker.com/esports/organization/oneup-esports";

const regionNames: Record<RegionCode, string> = {
  NAW: "NA West",
  NAC: "NA Central",
  BR: "Brazil",
  EU: "Europe",
  ME: "Middle East",
  OCE: "Oceania",
  ASIA: "Asia",
};

const money = (value: number) => `$${value.toLocaleString("en-US")}`;
const number = (value: number) => value.toLocaleString("en-US");

export function LiveHeroRankings({ initialData }: { initialData: OrgData }) {
  const [rankings, setRankings] = useState(initialData.rankings);

  useEffect(() => {
    const refreshRankings = async () => {
      const response = await fetch("/api/fortnite-tracker", { cache: "no-store" });
      if (response.ok) setRankings(((await response.json()) as OrgData).rankings);
    };
    void refreshRankings();
    const timer = window.setInterval(
      () => void refreshRankings(),
      initialData.refreshMinutes * 60 * 1000,
    );
    return () => window.clearInterval(timer);
  }, [initialData.refreshMinutes]);

  return (
    <div className="hero-rankings">
      {rankings.map((ranking) => (
        <a href={ranking.url} target="_blank" rel="noopener noreferrer" key={ranking.code}>
          <small>{ranking.label}</small>
          <strong>#{ranking.rank}</strong>
        </a>
      ))}
    </div>
  );
}

function XMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23 22h-6.6l-5.2-6.6L5.1 22H2l8.1-9.3L1.5 2h6.8l4.7 6.1L18.9 2zm-1.2 18h1.8L7.4 4H5.5l12.2 16z" />
    </svg>
  );
}

function PlayerRow({ player, index }: { player: OrgPlayer; index: number }) {
  const avatarUrl = player.xHandle
    ? `/api/player-avatar?handle=${encodeURIComponent(player.xHandle)}`
    : "/oneup-icon-orange.png";

  return (
    <article className="data-player-row">
      <span className="data-index">{String(index + 1).padStart(2, "0")}</span>
      <div className="data-player-main">
        <span className={player.xHandle ? "player-monogram has-avatar" : "player-monogram"}>
          <img
            src={avatarUrl}
            alt={player.xHandle ? `${player.name} X profile photo` : ""}
            width="38"
            height="38"
            loading="lazy"
            onError={(event) => {
              const image = event.currentTarget;
              if (player.xHandle && image.dataset.fallback !== "bundled") {
                image.dataset.fallback = "bundled";
                image.src = `/player-avatars/${encodeURIComponent(player.xHandle)}.webp`;
                return;
              }
              image.onerror = null;
              image.src = "/oneup-icon-orange.png";
              image.classList.add("avatar-fallback");
            }}
          />
        </span>
        <span>
          <strong>{player.name}</strong>
          <small>{player.epicName}</small>
        </span>
      </div>
      <span className="region-pill">{player.region}</span>
      <span className="data-metric">
        <strong>{number(player.prPoints)}</strong>
        <small>{player.prRank ? `#${number(player.prRank)} ${regionNames[player.region]}` : "PR points"}</small>
      </span>
      <span className="data-metric earnings-metric">
        <strong>{money(player.earnings)}</strong>
        <small>{player.earningsRank ? `#${number(player.earningsRank)} earnings` : "Tracked earnings"}</small>
      </span>
      <span className="data-actions">
        {player.xUrl ? (
          <a href={player.xUrl} target="_blank" rel="noopener noreferrer" aria-label={`${player.name} on X`}>
            <XMark />
          </a>
        ) : null}
        <a href={player.trackerUrl} target="_blank" rel="noopener noreferrer" aria-label={`${player.name} on FortniteTracker`}>
          <BarChart3 aria-hidden="true" />
        </a>
      </span>
    </article>
  );
}

function eventCode(event: OrgEvent) {
  if (/FNCS/i.test(event.eventName)) return "FNCS";
  if (/Solo Victory/i.test(event.eventName)) return "SVC";
  if (/Reload/i.test(event.eventName)) return "RVC";
  return event.eventName
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 4)
    .toUpperCase();
}

function EventCard({ event }: { event: OrgEvent }) {
  return (
    <article className="event-card">
      <div className="event-poster">
        {event.eventLogo ? (
          <img src={event.eventLogo} alt={`${event.eventName} event artwork`} />
        ) : (
          <div className="event-poster-fallback">
            <img src="/oneup-icon-orange.png" alt="" />
            <b>{eventCode(event)}</b>
          </div>
        )}
        <span>{event.placement}</span>
      </div>

      <div className="event-card-copy">
        <header className="event-card-header">
          <div className="event-identity">
            <small>Latest earning · {event.dateLabel}</small>
            <strong>{event.eventName}</strong>
            <p>{event.stage} · {event.region}</p>
          </div>
        </header>

        <div className="event-roster">
          <small>TEAM</small>
          <div>
            {event.roster.map((member) => (
              <span className={member.isOneUp ? "event-member signed" : "event-member"} key={member.name}>
                {member.isOneUp ? <b>1UP</b> : null}
                {member.name}
              </span>
            ))}
          </div>
        </div>

        <div className="event-stats">
          <span>
            <small>PLACE</small>
            <strong>{event.placement}</strong>
          </span>
          <span className="event-earnings">
            <small>EARNINGS</small>
            <strong>{event.earningsLabel}</strong>
          </span>
        </div>

        <a className="event-link" href={event.trackerUrl} target="_blank" rel="noopener noreferrer">
          View on FortniteTracker <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function LiveOrgDashboard({ initialData }: { initialData: OrgData }) {
  const [data, setData] = useState(initialData);
  const [activeTab, setActiveTab] = useState<"roster" | "earnings">("roster");
  const [region, setRegion] = useState<"ALL" | RegionCode>("ALL");
  const [refreshing, setRefreshing] = useState(false);

  const sync = async () => {
    setRefreshing(true);
    try {
      const response = await fetch("/api/fortnite-tracker", { cache: "no-store" });
      if (response.ok) setData((await response.json()) as OrgData);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    const refreshFromTracker = async () => {
      const response = await fetch("/api/fortnite-tracker", { cache: "no-store" });
      if (response.ok) setData((await response.json()) as OrgData);
    };
    void refreshFromTracker();
    const timer = window.setInterval(
      () => void refreshFromTracker(),
      initialData.refreshMinutes * 60 * 1000,
    );
    return () => window.clearInterval(timer);
  }, [initialData.refreshMinutes]);

  const regions = useMemo(
    () => [...new Set(data.roster.map((player) => player.region))],
    [data.roster],
  );
  const visiblePlayers = region === "ALL"
    ? data.roster
    : data.roster.filter((player) => player.region === region);
  const activeEarnings = data.roster.reduce((total, player) => total + player.earnings, 0);
  const latestEarning = data.events.find((event) => event.earnings > 0);
  const stateLabel = data.sourceState === "live"
    ? "Live from Tracker"
    : data.sourceState === "partial"
      ? "Partially live"
      : "Verified snapshot";
  const lastUpdated = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(data.updatedAt));

  return (
    <>
      <section className="overview section-shell" id="overview">
        <div className="section-kicker">
          <span>01</span>
          <p>ORGANIZATION OVERVIEW</p>
        </div>
        <div className="stats-grid">
          <article className="stat-feature">
            <span>Organization earnings</span>
            <strong>$591,215</strong>
          </article>
          <article>
            <span>Active roster earnings</span>
            <strong>{money(activeEarnings)}</strong>
          </article>
          <article>
            <span>Current pro roster</span>
            <strong>{data.roster.length}</strong>
          </article>
          <article>
            <span>Cash Cup wins</span>
            <strong>57</strong>
          </article>
        </div>
      </section>

      <section className="rankings section-shell" id="rankings">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <span>02</span>
              <p>ORGANIZATION RANKINGS</p>
            </div>
            <h2>Regional rankings.</h2>
          </div>
          <p>Updated from FortniteTracker every 30 minutes.</p>
        </div>

        <div className="ranking-grid">
          {data.rankings.map((ranking) => (
            <a className={`ranking-card ${ranking.rank === 1 ? "ranking-leader" : ""}`} href={ranking.url} target="_blank" rel="noopener noreferrer" key={ranking.code}>
              <span className="ranking-card-top">
                <small>{ranking.code}</small>
                {ranking.rank === 1 ? <Trophy aria-hidden="true" /> : <span>{ranking.isLive ? "LIVE" : "SYNCED"}</span>}
              </span>
              <strong>#{ranking.rank}</strong>
              <span className="ranking-card-bottom">
                <b>{ranking.label}</b>
                <ArrowUpRight aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="competition section-shell" id="roster">
        <div className="section-heading competition-heading">
          <div>
            <div className="section-kicker">
              <span>03</span>
              <p>COMPETITIVE HUB</p>
            </div>
            <h2>Roster & earnings.</h2>
          </div>
          <div className="sync-panel" title="FortniteTracker may temporarily serve a verified local snapshot when it rate-limits automated requests.">
            <span className={`sync-dot ${data.sourceState}`} />
            <span>
              <strong>{stateLabel}</strong>
              <small>Updated {lastUpdated}</small>
            </span>
            <button type="button" onClick={() => void sync()} disabled={refreshing} aria-label="Refresh FortniteTracker data">
              <RefreshCw className={refreshing ? "spinning" : ""} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="hub-tabs" role="tablist" aria-label="Competitive data">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "roster"}
            className={activeTab === "roster" ? "active" : ""}
            onClick={() => setActiveTab("roster")}
          >
            <UsersRound aria-hidden="true" />
            Pro roster <b>{data.roster.length}</b>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "earnings"}
            className={activeTab === "earnings" ? "active" : ""}
            onClick={() => setActiveTab("earnings")}
          >
            <CircleDollarSign aria-hidden="true" />
            Recent earnings
          </button>
        </div>

        {activeTab === "roster" ? (
          <div className="roster-view" role="tabpanel">
            <div className="region-filters" aria-label="Filter roster by region">
              <button type="button" className={region === "ALL" ? "active" : ""} onClick={() => setRegion("ALL")}>
                ALL <b>{data.roster.length}</b>
              </button>
              {regions.map((code) => (
                <button type="button" className={region === code ? "active" : ""} onClick={() => setRegion(code)} key={code}>
                  {code} <b>{data.roster.filter((player) => player.region === code).length}</b>
                </button>
              ))}
            </div>
            <div className="roster-table">
              <div className="roster-table-head" aria-hidden="true">
                <span>#</span><span>PLAYER</span><span>REGION</span><span>2026 PR</span><span>EARNINGS</span><span>LINKS</span>
              </div>
              {visiblePlayers.map((entry, index) => <PlayerRow player={entry} index={index} key={entry.id} />)}
            </div>
          </div>
        ) : (
          <div className="results-view" role="tabpanel">
            <div className="event-grid">
              {latestEarning ? <EventCard event={latestEarning} key={latestEarning.id} /> : (
                <p className="event-empty">No recent cash result is currently listed.</p>
              )}
            </div>
          </div>
        )}

        <div className="tracker-source-bar">
          <span>DATA SOURCE</span>
          <p>Roster, rankings and latest earnings from FortniteTracker.</p>
          <a href={TRACKER_ORG_URL} target="_blank" rel="noopener noreferrer">
            View source <ExternalLink aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
