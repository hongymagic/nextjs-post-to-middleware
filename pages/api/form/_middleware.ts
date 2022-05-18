import type { NextFetchEvent, NextRequest } from "next/server";

export async function middleware(req: NextRequest, _ev: NextFetchEvent) {
	console.log(`${req.method} ${req.url}`, {
		bodyUsed: req.bodyUsed,
		contenType: req.headers.get("Content-Type"),
	});

	if (req.method?.toUpperCase() === "POST") {
		const data = await req.formData();

		if (data) {
			console.log('Found data!', data);
			return new Response(JSON.stringify(data));
		}
	}

	return new Response("You hit FormData endpoint");
}
