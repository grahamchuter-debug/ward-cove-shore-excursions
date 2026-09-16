const ORIGIN = "https://wardcoveshoreexcursions.com";
const ENQUIRY_TO = "hello@wardcoveshoreexcursions.com";
const ENQUIRY_FROM = "hello@wardcoveshoreexcursions.com";
const MAX_BODY = 32_768;

function canonicalizePath(pathname) {
  let p = pathname || "/";
  try {
    p = decodeURIComponent(p);
  } catch {
    /* keep raw */
  }
  if (p.length > 1) {
    p = p.replace(/\/+$/, "");
  }
  if (p.toLowerCase().endsWith(".html")) {
    p = p.slice(0, -5);
  }
  if (p.toLowerCase().endsWith("/index")) {
    p = p.slice(0, -6);
  }
  if (!p.startsWith("/")) p = `/${p}`;
  return p === "" ? "/" : p;
}

function canonicalUrl(url) {
  return `${ORIGIN}${canonicalizePath(url.pathname)}${url.search}`;
}

function needsCanonicalRedirect(url) {
  if (url.protocol === "http:") return true;
  if (url.hostname !== "wardcoveshoreexcursions.com") return true;
  return canonicalizePath(url.pathname) !== url.pathname;
}

function jsonResponse(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function htmlResponse(html, status) {
  return new Response(html, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function confirmationHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Enquiry sent | Ward Cove Shore Excursions</title>
  <meta name="robots" content="noindex,follow">
  <link rel="canonical" href="${ORIGIN}/book">
</head>
<body style="font-family:system-ui,sans-serif;max-width:40rem;margin:3rem auto;padding:0 1.25rem;color:#0f172a">
  <h1>Enquiry sent</h1>
  <p>Thank you. We have received your Ward Cove enquiry and will reply with excursion options that fit your ship schedule. This is not a booking confirmation.</p>
  <p><a href="/book">Send another enquiry</a> · <a href="/">Home</a></p>
</body>
</html>`;
}

function errorHtml(message) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Enquiry not sent | Ward Cove Shore Excursions</title>
  <meta name="robots" content="noindex,follow">
</head>
<body style="font-family:system-ui,sans-serif;max-width:40rem;margin:3rem auto;padding:0 1.25rem;color:#0f172a">
  <h1>Enquiry not sent</h1>
  <p>${escapeHtml(message)}</p>
  <p><a href="/book">Return to the enquiry form</a></p>
</body>
</html>`;
}

function wantsJson(request) {
  const accept = request.headers.get("accept") || "";
  const requested = request.headers.get("x-requested-with") || "";
  return accept.includes("application/json") || requested === "fetch";
}

function field(form, name) {
  const value = form.get(name);
  return typeof value === "string" ? value.trim() : "";
}

async function handleEnquire(request, env) {
  const length = Number(request.headers.get("content-length") || "0");
  if (length > MAX_BODY) {
    const message = "Enquiry is too large. Please shorten your message.";
    return wantsJson(request) ? jsonResponse({ ok: false, error: message }, 413) : htmlResponse(errorHtml(message), 413);
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    const message = "We could not read that form submission. Please try again.";
    return wantsJson(request) ? jsonResponse({ ok: false, error: message }, 400) : htmlResponse(errorHtml(message), 400);
  }

  if (field(form, "company_website")) {
    return wantsJson(request)
      ? jsonResponse({ ok: true }, 200)
      : htmlResponse(confirmationHtml(), 200);
  }

  const name = field(form, "name");
  const email = field(form, "email");
  const ship = field(form, "ship");
  const portDate = field(form, "portDate");
  const hours = field(form, "hours");
  const excursion = field(form, "excursion");
  const message = field(form, "message");

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    const err = "Please include your name and a valid email address.";
    return wantsJson(request) ? jsonResponse({ ok: false, error: err }, 400) : htmlResponse(errorHtml(err), 400);
  }

  const text = [
    "New Ward Cove shore excursion enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Cruise line / ship: ${ship || "(not provided)"}`,
    `Port date: ${portDate || "(not provided)"}`,
    `Hours in port: ${hours || "(not provided)"}`,
    `Excursion interest: ${excursion || "(not sure yet)"}`,
    "",
    "Message:",
    message || "(none)",
  ].join("\n");

  try {
    await env.EMAIL.send({
      to: ENQUIRY_TO,
      from: { email: ENQUIRY_FROM, name: "Ward Cove Shore Excursions" },
      replyTo: email,
      subject: `Ward Cove enquiry from ${name}`,
      text,
      html: `<pre style="font-family:system-ui,sans-serif;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
    });
  } catch (err) {
    console.error("enquiry_send_failed", err instanceof Error ? err.message : String(err));
    const fail = "We could not send your enquiry just now. Please email hello@wardcoveshoreexcursions.com directly.";
    return wantsJson(request) ? jsonResponse({ ok: false, error: fail }, 502) : htmlResponse(errorHtml(fail), 502);
  }

  return wantsJson(request)
    ? jsonResponse({ ok: true }, 200)
    : htmlResponse(confirmationHtml(), 200);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = canonicalizePath(url.pathname);

    if (request.method === "POST" && path === "/api/enquire") {
      return handleEnquire(request, env);
    }

    if (request.method !== "POST" && needsCanonicalRedirect(url)) {
      return Response.redirect(canonicalUrl(url), 301);
    }

    const assetResponse = await env.ASSETS.fetch(request);

    if (url.pathname === "/book" && url.search) {
      return new HTMLRewriter()
        .on("head", {
          element(el) {
            el.append('<meta name="robots" content="noindex,follow">', { html: true });
          },
        })
        .transform(assetResponse);
    }

    return assetResponse;
  },
};
