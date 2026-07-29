// Casa Alma — disponibilidad
// Lee uno o más calendarios iCal (Airbnb, Booking, etc.) definidos como
// variables de entorno en Netlify y devuelve las fechas ocupadas como JSON.
//
// Variables de entorno soportadas (Netlify → Site settings → Environment variables):
//   AIRBNB_ICAL   → link .ics de exportación de Airbnb
//   BOOKING_ICAL  → link .ics de exportación de Booking
//   ICAL_1, ICAL_2, ICAL_3 → cualquier otro calendario iCal adicional
//
// Respuesta: { "booked": [ { "start": "YYYY-MM-DD", "end": "YYYY-MM-DD" }, ... ], "configured": true }
// (end es exclusivo: el día de salida queda libre para una nueva llegada)

function iso(d) {
  return d.slice(0, 4) + '-' + d.slice(4, 6) + '-' + d.slice(6, 8);
}

exports.handler = async function () {
  const urls = [
    process.env.AIRBNB_ICAL,
    process.env.BOOKING_ICAL,
    process.env.ICAL_1,
    process.env.ICAL_2,
    process.env.ICAL_3
  ].filter(Boolean);

  const booked = [];

  await Promise.all(urls.map(async (url) => {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'CasaAlma-Web/1.0' } });
      if (!res.ok) return;
      const text = await res.text();
      const blocks = text.split('BEGIN:VEVENT').slice(1);
      for (const b of blocks) {
        const s = b.match(/DTSTART[^:]*:(\d{8})/);
        const e = b.match(/DTEND[^:]*:(\d{8})/);
        if (s && e) booked.push({ start: iso(s[1]), end: iso(e[1]) });
      }
    } catch (err) {
      // ignorar un feed que falle; los demás siguen
    }
  }));

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=1800, s-maxage=1800'
    },
    body: JSON.stringify({ booked, configured: urls.length > 0 })
  };
};
