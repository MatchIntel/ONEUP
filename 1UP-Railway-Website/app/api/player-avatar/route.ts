import { PLAYER_X_HANDLES } from "@/lib/fortnite-tracker";

const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;
const allowedHandles = new Set(PLAYER_X_HANDLES.map((handle) => handle.toLowerCase()));
const avatarCache = new Map<string, {
  expiresAt: number;
  bytes: ArrayBuffer;
  contentType: string;
}>();

const responseHeaders = (contentType: string) => ({
  "Content-Type": contentType,
  "Cache-Control": "public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400",
  "X-Content-Type-Options": "nosniff",
});

const bundledAvatar = (request: Request, handle: string) =>
  Response.redirect(new URL(`/player-avatars/${handle}.webp`, request.url), 307);

export async function GET(request: Request) {
  const handle = new URL(request.url).searchParams.get("handle")?.trim().toLowerCase() ?? "";
  if (!/^[a-z0-9_]{1,15}$/.test(handle) || !allowedHandles.has(handle)) {
    return new Response("Unknown player", { status: 404 });
  }

  const cached = avatarCache.get(handle);
  if (cached && cached.expiresAt > Date.now()) {
    return new Response(cached.bytes.slice(0), { headers: responseHeaders(cached.contentType) });
  }

  try {
    const timelineResponse = await fetch(
      `https://syndication.twitter.com/srv/timeline-profile/screen-name/${encodeURIComponent(handle)}`,
      {
        headers: {
          accept: "text/html,application/xhtml+xml",
          "user-agent": "Mozilla/5.0 (compatible; OneUpEsportsRoster/1.0)",
        },
        cache: "no-store",
        signal: AbortSignal.timeout(12000),
      },
    );
    if (!timelineResponse.ok) throw new Error(`X returned ${timelineResponse.status}`);

    const timelineHtml = await timelineResponse.text();
    const imageMatch = timelineHtml.match(/https:\/\/pbs\.twimg\.com\/profile_images\/[^"'?\\ ]+/i);
    if (!imageMatch) throw new Error("X profile photo was not present");

    const imageUrl = imageMatch[0].replace(/_normal(?=\.[a-z]+$)/i, "_400x400");
    const imageResponse = await fetch(imageUrl, {
      cache: "no-store",
      signal: AbortSignal.timeout(12000),
    });
    if (!imageResponse.ok) throw new Error(`X image returned ${imageResponse.status}`);

    const bytes = await imageResponse.arrayBuffer();
    const contentType = imageResponse.headers.get("content-type") || "image/jpeg";
    avatarCache.set(handle, { expiresAt: Date.now() + ONE_WEEK, bytes, contentType });
    return new Response(bytes.slice(0), { headers: responseHeaders(contentType) });
  } catch {
    return bundledAvatar(request, handle);
  }
}
