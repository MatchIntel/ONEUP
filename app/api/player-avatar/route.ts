export async function GET(request: Request) {
  const handle = new URL(request.url).searchParams.get("handle")?.trim() ?? "";

  if (!/^[A-Za-z0-9_]{1,15}$/.test(handle)) {
    return new Response("Invalid X handle", { status: 400 });
  }

  return Response.redirect(`https://unavatar.io/x/${encodeURIComponent(handle)}`, 307);
}
