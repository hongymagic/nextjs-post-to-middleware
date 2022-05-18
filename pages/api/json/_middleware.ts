import type { NextFetchEvent, NextRequest } from "next/server";

export async function middleware(req: NextRequest, _ev: NextFetchEvent) {
	console.log(`${req.method} ${req.url}`, {
		bodyUsed: req.bodyUsed,
		contenType: req.headers.get("Content-Type"),
	});

	if (req.method?.toUpperCase() === "POST") {
		const json = await req.json();

		if (json) {
			return new Response(JSON.stringify(json));
		}
	}

	return new Response("You hit JSON endpoint");
}
