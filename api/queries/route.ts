import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { query } = await request.json();

  return NextResponse.json({
    success: true,
    query,
    response: "Live intelligence generated successfully."
  });
}
