export async function POST(request) {
  try {
    const body = await request.json();
    const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.RSVP_WEBHOOK_URL;

    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...body,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        return Response.json({ ok: false }, { status: 502 });
      }
    } else {
      console.log("[RSVP]", body);
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[RSVP]", error);
    return Response.json({ ok: false }, { status: 400 });
  }
}
