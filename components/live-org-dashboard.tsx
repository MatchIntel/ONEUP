"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
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

function XMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23 22h-6.6l-5.2-6.6L5.1 22H2l8.1-9.3L1.5 2h6.8l4.7 6.1L18.9 2zm-1.2 18h1.8L7.4 4H5.5l12.2 16z" />
    </svg>
  );
}

function PlayerRow({ player, index }: { player: OrgPlayer; index: number }) {
  return (
    <article className="data-player-row">
      <span className="data-index">{String(index + 1).padStart(2, "0")}</span>
      <div className="data-player-main">
        <span className="player-monogram" aria-hidden="true">
          <img src="/oneup-icon-orange.png" alt="" width="34" height="34" />
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
      <span className="joined-date">
        <CalendarDays aria-hidden="true" />
        {player.joined}
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
      <header className="event-card-header">
        <div className="event-identity">
          <span className="event-logo">
            {event.eventLogo ? <img src={event.eventLogo} alt="" /> : <b>{eventCode(event)}</b>}
          </span>
          <span>
            <small>{event.stage}</small>
            <strong>{event.eventName}</strong>
          </span>
        </div>
        <span className={`result-badge ${event.outcome.toLowerCase()}`}>{event.outcome}</span>
      </header>

      <div className="event-context">
        <span>{event.region}</span>
        <span>{event.dateLabel}</span>
      </div>

      <div className="event-roster">
        <small>ROSTER</small>
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
        <span>
          <small>PR POINTS</small>
          <strong>{event.prPoints ? number(event.prPoints) : "—"}</strong>
        </span>
        <span className="event-earnings">
          <small>RESULT</small>
          <strong>{event.earningsLabel}</strong>
        </span>
      </div>

      <a className="event-link" href={event.trackerUrl} target="_blank" rel="noopener noreferrer">
        Open event on FortniteTracker <ArrowUpRight aria-hidden="true" />
      </a>
    </article>
  );
}

export function LiveOrgDashboard({ initialData }: { initialData: OrgData }) {
  const [data, setData] = useState(initialData);
  const [activeTab, setActiveTab] = useState<"roster" | "results">("roster");
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
            <p>All-time competitive earnings carried over from the 1UP tracker.</p>
          </article>
          <article>
            <span>Active roster earnings</span>
            <strong>{money(activeEarnings)}</strong>
            <p>Current pros, summed from their tracked profiles.</p>
          </article>
          <article>
            <span>Current pro roster</span>
            <strong>{data.roster.length}</strong>
            <p>Signed competitors currently listed by FortniteTracker.</p>
          </article>
          <article>
            <span>Cash Cup wins</span>
            <strong>57</strong>
            <p>Recorded wins from the original 1UP dashboard.</p>
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
            <h2>One tag. Four boards.</h2>
          </div>
          <p>Organization placement refreshed against the FortniteTracker leaderboards every 30 minutes.</p>
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
            <h2>The roster and the results.</h2>
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
            aria-selected={activeTab === "results"}
            className={activeTab === "results" ? "active" : ""}
            onClick={() => setActiveTab("results")}
          >
            <CircleDollarSign aria-hidden="true" />
            Recent results <b>{data.events.length}</b>
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
                <span>#</span><span>PLAYER</span><span>REGION</span><span>2026 PR</span><span>EARNINGS</span><span>MEMBER SINCE</span><span>LINKS</span>
              </div>
              {visiblePlayers.map((entry, index) => <PlayerRow player={entry} index={index} key={entry.id} />)}
            </div>
          </div>
        ) : (
          <div className="results-view" role="tabpanel">
            <div className="results-intro">
              <p>Signed 1UP players are highlighted. Teammates stay visible so every result keeps the full tournament context.</p>
              <span><b>{money(data.events.reduce((total, event) => total + event.earnings, 0))}</b> shown in recent team results</span>
            </div>
            <div className="event-grid">
              {data.events.map((event) => <EventCard event={event} key={event.id} />)}
            </div>
          </div>
        )}

        <div className="tracker-source-bar">
          <span>DATA SOURCE</span>
          <p>FortniteTracker organization roster, regional org leaderboards and recent-event records.</p>
          <a href={TRACKER_ORG_URL} target="_blank" rel="noopener noreferrer">
            View source <ExternalLink aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
