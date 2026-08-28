export type RegionCode = "NAW" | "NAC" | "BR" | "EU" | "ME" | "OCE" | "ASIA";

export type OrgPlayer = {
  id: string;
  name: string;
  epicName: string;
  region: RegionCode;
  joined: string;
  prPoints: number;
  prRank: number | null;
  earnings: number;
  earningsRank: number | null;
  trackerUrl: string;
  xUrl?: string;
};

export type OrgRanking = {
  code: "GLOBAL" | "NAW" | "NAC" | "BR";
  label: string;
  rank: number;
  url: string;
  isLive: boolean;
};

export type EventMember = {
  name: string;
  isOneUp: boolean;
};

export type OrgEvent = {
  id: string;
  eventName: string;
  stage: string;
  region: string;
  dateLabel: string;
  placement: string;
  prPoints: number | null;
  earnings: number;
  earningsLabel: string;
  roster: EventMember[];
  trackerUrl: string;
  eventLogo?: string;
  outcome: "EARNED" | "QUALIFIED";
};

export type OrgData = {
  sourceState: "live" | "partial" | "snapshot";
  updatedAt: string;
  refreshMinutes: number;
  roster: OrgPlayer[];
  rankings: OrgRanking[];
  events: OrgEvent[];
};

export const TRACKER_ORG_URL =
  "https://fortnitetracker.com/esports/organization/oneup-esports";

const trackerProfile = (epicName: string, region: RegionCode) =>
  `https://fortnitetracker.com/profile/all/${encodeURIComponent(epicName)}/events?region=${region}`;

const player = (
  name: string,
  epicName: string,
  region: RegionCode,
  joined: string,
  prPoints: number,
  prRank: number,
  earnings: number,
  earningsRank: number | null,
  xUrl?: string,
): OrgPlayer => ({
  id: name.toLowerCase(),
  name,
  epicName,
  region,
  joined,
  prPoints,
  prRank,
  earnings,
  earningsRank,
  trackerUrl: trackerProfile(epicName, region),
  xUrl,
});

const SNAPSHOT_ROSTER: OrgPlayer[] = [
  player("larccoz", "1UP 777ǃ", "NAW", "Oct 25, 2025", 134261, 6, 17390, 137, "https://x.com/larccoz"),
  player("Xeat", "double chаmp", "BR", "Aug 16, 2026", 105235, 34, 169940, 12, "https://x.com/xeatfn"),
  player("Evolved", "1up evolved", "NAW", "Aug 10, 2026", 109467, 13, 20480, 121),
  player("Dolzeur", "1up dolzeur", "NAC", "Aug 15, 2026", 110619, 37, 28100, 64, "https://x.com/dolzeur"),
  player("ZLinkRain", "1up zlinkǃ", "NAW", "Aug 01, 2026", 105793, 15, 41620, 56),
  player("Velo", "1up velo", "NAW", "Aug 10, 2026", 81109, 34, 33140, 69),
  player("Munk", "1up munkǃ", "NAW", "Aug 10, 2026", 96526, 18, 13600, 181),
  player("Caio", "1UP CaioD3US", "BR", "Aug 14, 2026", 87842, 52, 10430, 203, "https://x.com/caiod3us"),
  player("Aloe", "1UP Aloe", "NAC", "Aug 12, 2026", 87272, 58, 10250, 123, "https://x.com/aloefr_"),
  player("Alex", "1UP a1alexǃ", "NAW", "Aug 08, 2026", 75334, 42, 8830, 246, "https://x.com/a1alexfn"),
  player("Enough", "IAm Enough", "NAC", "Jun 02, 2024", 76875, 73, 11825, 115, "https://x.com/iamenoughh_"),
  player("Jemitty", "1up Jemitty", "NAC", "Jun 06, 2025", 82888, 65, 5575, 202, "https://x.com/jemitty5"),
  player("Salt", "1up salt", "NAC", "Aug 05, 2026", 70676, 82, 11900, 114, "https://x.com/salt3xx"),
  player("Zno", "1up zno", "NAC", "Aug 01, 2026", 69424, 49, 24855, 98),
  player("Mirops", "1up mirops", "NAC", "Aug 12, 2026", 65144, 93, 3000, 309, "https://x.com/mirops4x"),
  player("Darky", "1up darky", "NAW", "Aug 14, 2026", 59669, 79, 4600, 425, "https://x.com/darkynts"),
  player("mukutaf", "1up mukutaf13", "NAC", "Aug 01, 2026", 69288, 51, 3290, 575, "https://x.com/mukutaf2"),
  player("Prax", "1up praxǃ", "EU", "Aug 15, 2026", 45582, 146, 6850, 899),
  player("Pax", "1UP pax", "NAW", "Aug 10, 2026", 42050, 120, 1800, 916),
  player("Ultra", "1up ultraGOTY", "NAC", "Aug 12, 2026", 39516, 166, 1575, 493, "https://x.com/ultrafv281"),
  player("shark", "1UP sharkǃ", "NAW", "Aug 10, 2026", 29168, 213, 100, 5680),
  player("TREX", "1UP TREXǃ", "NAW", "Aug 01, 2026", 24659, 252, 450, 2454),
  player("Dan", "danbotloll", "NAC", "Jun 16, 2026", 26960, 257, 2950, 312),
  player("EL", "1up ELBEENDIDIT", "NAC", "Nov 24, 2024", 10646, 870, 2900, 319),
  player("Floww", "1UP Floww", "NAC", "Jul 25, 2024", 8473, 1133, 2650, 340),
  player("Nitro", "1UP Noob Nitro", "NAC", "Jun 04, 2024", 9405, 1011, 1250, 585),
  player("blixy", "1up blixyǃ", "NAW", "Aug 10, 2026", 11783, 638, 0, null),
];

const SNAPSHOT_EVENTS: OrgEvent[] = [
  {
    id: "performance-evaluation-8-dolzeur",
    eventName: "Fortnite Performance Evaluation",
    stage: "Event 8 · Round 2",
    region: "NA Central",
    dateLabel: "Aug 7, 2026",
    placement: "1st",
    prPoints: 500,
    earnings: 800,
    earningsLabel: "$800 team · $400 each",
    roster: [
      { name: "Dolzeur", isOneUp: true },
      { name: "Eshouu", isOneUp: false },
    ],
    trackerUrl: "https://fortnitetracker.com/events/epicgames_S41_PerformanceEvaluation_NAC?page=0&window=S41_PerformanceEvaluation_Event8Round2_NAC",
    outcome: "EARNED",
  },
];

export const FALLBACK_DATA: OrgData = {
  sourceState: "snapshot",
  updatedAt: "2026-08-27T00:00:00.000Z",
  refreshMinutes: 30,
  roster: SNAPSHOT_ROSTER,
  rankings: [
    { code: "GLOBAL", label: "Global", rank: 12, url: "https://fortnitetracker.com/esports", isLive: false },
    { code: "NAW", label: "NA West", rank: 1, url: "https://fortnitetracker.com/esports?region=NAW", isLive: false },
    { code: "NAC", label: "NA Central", rank: 8, url: "https://fortnitetracker.com/esports?region=NAC", isLive: false },
    { code: "BR", label: "Brazil", rank: 62, url: "https://fortnitetracker.com/esports?region=BR", isLive: false },
  ],
  events: SNAPSHOT_EVENTS,
};

const REGION_LABELS: Record<string, RegionCode> = {
  NAW: "NAW",
  NAC: "NAC",
  BR: "BR",
  EU: "EU",
  ME: "ME",
  OCE: "OCE",
  ASIA: "ASIA",
};

const decodeHtml = (value: string) =>
  value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");

const cleanText = (html: string) =>
  decodeHtml(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();

const parseInteger = (value: string) => {
  const match = value.replace(/,/g, "").match(/-?\d+/);
  return match ? Number(match[0]) : 0;
};

const absoluteTrackerUrl = (href: string) => {
  if (!href) return TRACKER_ORG_URL;
  if (href.startsWith("http")) return href;
  if (href.startsWith("//")) return `https:${href}`;
  return `https://fortnitetracker.com${href.startsWith("/") ? "" : "/"}${href}`;
};

const firstHref = (html: string) => {
  const match = html.match(/href=["']([^"']+)["']/i);
  return absoluteTrackerUrl(match?.[1] ?? "");
};

const firstImage = (html: string) => {
  const match = html.match(/<img[^>]+(?:data-src|src)=["']([^"']+)["']/i);
  return match?.[1] ? absoluteTrackerUrl(match[1]) : undefined;
};

const tableRows = (html: string) =>
  [...html.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((match) => ({
    html: match[1],
    cells: [...match[1].matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((cell) => cell[1]),
  }));

const section = (html: string, startText: string, endText?: string) => {
  const lower = html.toLowerCase();
  const start = lower.lastIndexOf(startText.toLowerCase());
  if (start < 0) return "";
  if (!endText) return html.slice(start);
  const end = lower.indexOf(endText.toLowerCase(), start + startText.length);
  return html.slice(start, end < 0 ? undefined : end);
};

const firstPlayerLabel = (cellHtml: string) => {
  const candidates = [
    ...cellHtml.matchAll(/<(?:strong|b|h[1-6]|span|div)\b[^>]*>([\s\S]*?)<\/(?:strong|b|h[1-6]|span|div)>/gi),
  ]
    .map((match) => cleanText(match[1]))
    .filter((text) => text && text.length < 40 && !/^(pc|xbox|playstation|flag)$/i.test(text));
  const preferred = candidates.find((text) => !/^(NAW|NAC|BR|EU|ME|OCE|ASIA)$/i.test(text));
  const combined = cleanText(cellHtml);
  return (preferred || combined.split(/\s+/)[0] || "Player").trim();
};

const parseRoster = (html: string): OrgPlayer[] => {
  const rosterSection = section(html, "Current PRO Roster", "Content Creators");
  if (!rosterSection) return [];

  return tableRows(rosterSection)
    .map((row, index): OrgPlayer | null => {
      const cellTexts = row.cells.map(cleanText).filter(Boolean);
      const regionCell = cellTexts.find((text) => /\b(NAW|NAC|BR|EU|ME|OCE|ASIA)\b/i.test(text));
      const dateCell = cellTexts.find((text) => /\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4}\b/.test(text));
      const earningsCell = cellTexts.find((text) => /\$/.test(text));
      if (!regionCell || !dateCell || !earningsCell || row.cells.length < 3) return null;

      const playerCell = row.cells.find((cell) => /href=/i.test(cell)) ?? row.cells[0];
      const name = firstPlayerLabel(playerCell);
      const playerText = cleanText(playerCell);
      const regionMatch = regionCell.match(/\b(NAW|NAC|BR|EU|ME|OCE|ASIA)\b/i);
      const region = REGION_LABELS[regionMatch?.[1]?.toUpperCase() ?? ""];
      if (!region || !name) return null;

      const prNumbers = regionCell.replace(regionMatch?.[0] ?? "", "").match(/[\d,]+/g) ?? [];
      const earningNumbers = earningsCell.match(/[\d,]+/g) ?? [];
      const epicName = playerText.replace(new RegExp(`^${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*`, "i"), "").trim() || name;
      return {
        id: `${name.toLowerCase()}-${index}`,
        name,
        epicName,
        region,
        joined: dateCell,
        prPoints: parseInteger(prNumbers[0] ?? "0"),
        prRank: prNumbers[1] ? parseInteger(prNumbers[1]) : null,
        earnings: parseInteger(earningNumbers[0] ?? "0"),
        earningsRank: earningNumbers[1] ? parseInteger(earningNumbers[1]) : null,
        trackerUrl: firstHref(playerCell),
      };
    })
    .filter((entry): entry is OrgPlayer => Boolean(entry));
};

const parseRanking = (html: string) => {
  for (const row of tableRows(html)) {
    const text = cleanText(row.html);
    if (!/ONEUP ESPORTS/i.test(text) || /ONEUP FUTURE/i.test(text)) continue;
    const firstCell = row.cells[0] ? cleanText(row.cells[0]) : "";
    const rank = parseInteger(firstCell);
    if (rank > 0 && rank < 1000) return rank;
  }
  return null;
};

const competitiveName = (value: string) => value
  .toLowerCase()
  .normalize("NFKD")
  .replace(/^1up\s*/, "")
  .replace(/[^a-z0-9]+/g, "");

const parseEventMembers = (cellHtml: string, currentNames: Set<string>) => {
  const linked = [...cellHtml.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)]
    .map((match) => cleanText(match[1]))
    .filter(Boolean);
  const names = linked.length ? linked : cleanText(cellHtml).split(/\s*\+\s*|\s*,\s*/).filter(Boolean);
  return names.slice(0, 4).map((name) => ({
    name,
    isOneUp: currentNames.has(competitiveName(name)),
  }));
};

const parseEvents = (html: string, roster: OrgPlayer[]): OrgEvent[] => {
  const eventSection = section(html, "Recent Events");
  const currentNames = new Set(roster.flatMap((entry) => [
    competitiveName(entry.name),
    competitiveName(entry.epicName),
  ]));
  if (!eventSection) return [];

  return tableRows(eventSection)
    .map((row, index): OrgEvent | null => {
      if (row.cells.length < 5) return null;
      const cells = row.cells.map(cleanText);
      const placement = cells[1];
      const earningsLabel = cells[3];
      const rosterMembers = parseEventMembers(row.cells[4], currentNames);
      if (!cells[0] || !placement || rosterMembers.length === 0) return null;
      const earnings = parseInteger(earningsLabel);
      return {
        id: `live-event-${index}-${cells[0].toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        eventName: cells[0],
        stage: "Recent event",
        region: "Fortnite Competitive",
        dateLabel: "Latest",
        placement,
        prPoints: parseInteger(cells[2]) || null,
        earnings,
        earningsLabel: earningsLabel || (earnings ? `$${earnings.toLocaleString()}` : "Qualified"),
        roster: rosterMembers,
        trackerUrl: firstHref(row.cells[0]),
        eventLogo: firstImage(row.cells[0]),
        outcome: earnings > 0 ? "EARNED" : "QUALIFIED",
      };
    })
    .filter((entry): entry is OrgEvent => Boolean(entry))
    .filter((entry) => entry.earnings > 0)
    .slice(0, 1);
};

const fetchPage = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      accept: "text/html,application/xhtml+xml",
      "accept-language": "en-US,en;q=0.8",
      "user-agent": "Mozilla/5.0 (compatible; OneUpEsportsDashboard/1.0; +https://fortnitetracker.com/esports/organization/oneup-esports)",
    },
    signal: AbortSignal.timeout(12000),
    cache: "no-store",
  });
  const html = await response.text();
  if (!response.ok || /cf-mitigated|performing security verification|just a moment/i.test(html)) {
    throw new Error(`FortniteTracker returned ${response.status}`);
  }
  return html;
};

let cached: { expiresAt: number; data: OrgData } | null = null;

export async function getFortniteTrackerData(): Promise<OrgData> {
  if (cached && cached.expiresAt > Date.now()) return cached.data;

  const rankSources = FALLBACK_DATA.rankings.map((ranking) => ranking.url);
  const [orgResult, ...rankResults] = await Promise.allSettled([
    fetchPage(TRACKER_ORG_URL),
    ...rankSources.map(fetchPage),
  ]);

  let roster = FALLBACK_DATA.roster;
  let events = FALLBACK_DATA.events;
  let rosterLive = false;
  let eventsLive = false;

  if (orgResult.status === "fulfilled") {
    const parsedRoster = parseRoster(orgResult.value);
    if (parsedRoster.length >= 3) {
      roster = parsedRoster;
      rosterLive = true;
    }
    const parsedEvents = parseEvents(orgResult.value, roster);
    if (parsedEvents.length > 0) {
      events = parsedEvents;
      eventsLive = true;
    }
  }

  const rankings = FALLBACK_DATA.rankings.map((ranking, index) => {
    const result = rankResults[index];
    if (result?.status !== "fulfilled") return ranking;
    const rank = parseRanking(result.value);
    return rank ? { ...ranking, rank, isLive: true } : ranking;
  });
  const liveRankCount = rankings.filter((ranking) => ranking.isLive).length;
  const sourceState = rosterLive && eventsLive && liveRankCount === rankings.length
    ? "live"
    : rosterLive || eventsLive || liveRankCount > 0
      ? "partial"
      : "snapshot";

  const data: OrgData = {
    sourceState,
    updatedAt: sourceState === "snapshot" ? FALLBACK_DATA.updatedAt : new Date().toISOString(),
    refreshMinutes: 30,
    roster,
    rankings,
    events,
  };

  cached = { expiresAt: Date.now() + 30 * 60 * 1000, data };
  return data;
}
