<div align="center">

![Casa Alma](assets/banner.png)

# Casa Alma · Cabalango

**Un refugio de naturaleza y pileta en las sierras de Córdoba.**
Estadías · Eventos · Retiros

[![Web](https://img.shields.io/badge/Sitio_web-casalma.netlify.app-0C7A7D?style=for-the-badge)](https://casalma.netlify.app)
[![Instagram](https://img.shields.io/badge/Instagram-@casaalma.cordoba-dc2743?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/casaalma.cordoba/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-+54_351_5523836-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5493515523836)
[![Airbnb](https://img.shields.io/badge/Reservar-Airbnb-FF385C?style=for-the-badge&logo=airbnb&logoColor=white)](https://www.airbnb.com/rooms/1522539833886487812)

</div>

---

## 🏡 Sobre Casa Alma

<img src="assets/casa-alma.jpg" align="right" width="380" alt="Casa Alma al atardecer" />

**Casa Alma** es un espacio con alma en **Cabalango, Valle de Punilla (Córdoba, Argentina)**, a pocos minutos de Villa Carlos Paz. Rodeada de verde y con la pileta como corazón, combina el confort de un hogar con la calma de las sierras.

Cada ambiente fue pensado para que grupos, familias y equipos encuentren su ritmo: mañanas de sol, tardes de agua y noches de sobremesa. Ya sea para unos días de descanso, una celebración o un retiro de bienestar, la casa se adapta a lo que necesites vivir.

<br clear="right"/>

## ✨ Experiencias

| | |
|---|---|
| 🛏️ **Estadías** | Alquilá la casa por unos días y disfrutá de la pileta, el verde y la tranquilidad. Ideal para familias y grupos de amigos. |
| 🎉 **Eventos** | Cumpleaños, casamientos, celebraciones y jornadas de equipo. *No es solo un salón: es un lugar al servicio de tu vocación.* |
| 🧘 **Retiros** | Yoga, meditación, bienestar y encuentros de formación. La casa se transforma en un espacio de calma para volver a lo esencial. |

<div align="center">
<img src="assets/pileta.jpg" width="49%" alt="Pileta" />
<img src="assets/vista-aerea.jpg" width="49%" alt="Vista aérea" />
</div>

## 🌐 La web incluye

- 🌎 **Bilingüe** (español / inglés) con selector de idioma.
- 📱 **Responsive** — se ve perfecto en celular, tablet y escritorio.
- 🏠 **Reservas** con botones directos a Airbnb, WhatsApp e Instagram, y formulario de consulta.
- 📅 **Calendario de disponibilidad** que se sincroniza con las reservas de Airbnb/Booking (ver más abajo).
- 🌿 **Universo Rene Boiero** — sección con sus redes (Instagram, YouTube, Spotify, TikTok, web) y sus libros.
- 🎨 Identidad de marca completa (verde petróleo, logo y tipografías).

## 📅 Reservas y contacto

| | |
|---|---|
| 🌐 **Web** | [casalma.netlify.app](https://casalma.netlify.app) |
| 🏠 **Airbnb** | [Reservar en Airbnb](https://www.airbnb.com/rooms/1522539833886487812) |
| 💬 **WhatsApp** | [+54 351 5523836](https://wa.me/5493515523836) |
| ✉️ **Email** | [cabalango.casa.alma@gmail.com](mailto:cabalango.casa.alma@gmail.com) |
| 📸 **Instagram** | [@casaalma.cordoba](https://www.instagram.com/casaalma.cordoba/) |
| 📍 **Dirección** | Calle La Posta S/N, Cabalango, Córdoba, Argentina |

## 💻 Sobre este repositorio

Sitio web de Casa Alma: una página única, responsive y bilingüe, construida como sitio estático autónomo (sin dependencias ni build).

```
CasaAlmaWeb/
├── index.html                  → la web completa (HTML + CSS + JS, imágenes y logo embebidos)
├── README.md                   → este archivo
├── netlify.toml                → configuración de deploy (publish + functions)
├── netlify/
│   └── functions/
│       └── availability.js      → lee los iCal de Airbnb/Booking y devuelve las fechas ocupadas
└── assets/                     → logo, banner e imágenes del README
```

**Publicación:** el sitio se despliega automáticamente en **[casalma.netlify.app](https://casalma.netlify.app)** vía Netlify. Cada cambio que se sube a este repositorio se publica solo.

**Para editar contenido rápido** (WhatsApp, links, etc.), buscá el bloque `CONFIG` al final de `index.html`.

### 🔄 Activar la sincronización del calendario

El calendario bloquea las fechas ya reservadas leyendo los calendarios **iCal** de tus plataformas. Para activarlo, cargá en Netlify (**Site configuration → Environment variables**) estas variables:

| Variable | Valor |
|---|---|
| `AIRBNB_ICAL` | link `.ics` de exportación de Airbnb |
| `BOOKING_ICAL` | link `.ics` de exportación de Booking |
| `ICAL_1` … `ICAL_3` | otros calendarios (ej. un Google Calendar para las reservas directas por llamado o mail) |

Después, **Deploys → Trigger deploy** para que la función tome los cambios. Consejo: usá un Google Calendar como calendario maestro de las reservas directas e importalo también en Airbnb y Booking, para que todo quede sincronizado.

---

<div align="center">

<img src="assets/logo-casa-alma.png" width="150" alt="Casa Alma" />

**Casa Alma** · Cabalango, Córdoba 🇦🇷
Hecho con alma 💚 · © Rene Boiero

</div>
