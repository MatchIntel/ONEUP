import { NextResponse } from "next/server";
import { getFortniteTrackerData } from "@/lib/fortnite-tracker";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getFortniteTrackerData();
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
    },
  });
}
