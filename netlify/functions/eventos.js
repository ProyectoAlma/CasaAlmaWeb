// Casa Alma — próximos eventos de René Boiero
// Lee el calendario público de Google de René y devuelve los próximos eventos
// como JSON para mostrarlos en la sección "Próximos eventos" de la web.
//
// Respuesta: { "events": [ { start, title, location, allDay } ], "ok": true }

const CAL = "c_481b0aad9e3c7aa672c454a1844f61468e769770373aaa507be67a2315f82e9d@group.calendar.google.com";
const ICS_URL = "https://calendar.google.com/calendar/ical/" + encodeURIComponent(CAL) + "/public/basic.ics";

function parseDT(line) {
  const val = line.split(":").pop().trim();
  const m = val.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z)?)?/);
  if (!m) return null;
  const Y = +m[1], Mo = +m[2], D = +m[3];
  const h = m[4], mi = m[5], s = m[6], z = m[7];
  if (h === undefined) return new Date(Date.UTC(Y, Mo - 1, D, 12, 0, 0)); // día completo -> mediodía UTC
  if (z) return new Date(Date.UTC(Y, Mo - 1, D, +h, +mi, +s));            // ya en UTC
  return new Date(Date.UTC(Y, Mo - 1, D, +h + 3, +mi, +s));              // hora local Argentina (UTC-3)
}

function unesc(v) {
  return (v || "").replace(/\\n/gi, " ").replace(/\\,/g, ",").replace(/\\;/g, ";").replace(/\\\\/g, "\\").trim();
}

function reply(obj) {
  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=1800, s-maxage=1800",
      "access-control-allow-origin": "*"
    },
    body: JSON.stringify(obj)
  };
}

exports.handler = async function () {
  try {
    const res = await fetch(ICS_URL, { headers: { "User-Agent": "CasaAlma-Web/1.0" } });
    if (!res.ok) return reply({ events: [], ok: false });
    let text = await res.text();
    text = text.replace(/\r\n/g, "\n").replace(/\n[ \t]/g, ""); // unfold líneas plegadas
    const blocks = text.split("BEGIN:VEVENT").slice(1);
    const cutoff = Date.now() - 12 * 3600 * 1000;
    const events = [];
    for (const b of blocks) {
      if (/STATUS:CANCELLED/.test(b)) continue;
      const ds = b.match(/\nDTSTART[^\n]*/);
      if (!ds) continue;
      const dt = parseDT(ds[0]);
      if (!dt || dt.getTime() < cutoff) continue;
      const allDay = !/\nDTSTART[^:\n]*T/.test(b);
      const su = b.match(/\nSUMMARY[^:\n]*:([^\n]*)/);
      const lo = b.match(/\nLOCATION[^:\n]*:([^\n]*)/);
      events.push({
        start: dt.toISOString(),
        title: unesc(su && su[1]) || "Evento",
        location: unesc(lo && lo[1]),
        allDay: allDay
      });
    }
    events.sort((a, b) => new Date(a.start) - new Date(b.start));
    return reply({ events: events.slice(0, 8), ok: true });
  } catch (err) {
    return reply({ events: [], ok: false });
  }
};
