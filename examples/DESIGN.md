# Design — Examples / Silosider

## Sidetyper i examples/

### index.html — Siloside (kategori-landingsside)
**Eksempel:** Velvære i Thy

En siloside er indgangen til én af de 8 kategorier på explorethy. Den er ikke et partnerkatalog — den er en redaktionel hub der samler alle oplevelser inden for kategorien.

**Struktur:**
1. **Hero** — Kategorispecifik overskrift (Cormorant Garamond, stor), subtitle med poetisk framing, breadcrumb Hjem › Kategori
2. **Redaktionel intro** — To-kolonne layout: overskrift til venstre, to afsnit editorial tekst til højre
3. **Fremhævet oplevelse** — Stor featured card (2-kolonne, billede + tekst) der linker til en produktside. Viser priser og nøgletal.
4. **Grid** — Alle oplevelser inden for kategorien, 3-kolonne auto-fill, kort med: billede, SVG-ikon badge, titel, beskrivelse, placering
5. **Editorial bund-blok** — Mørk teal sektion med sæsonoverblik eller redaktionel kontekst

**Ingen:** filterpills, stats-bar ("24+ partnere"), "bliv partner"-CTA, emoji

---

### thy-whisky.html — Produktside / Oplevelsesorienteret
**Eksempel:** Thy Whisky — Smagning & Rundvisning

En produktside er ikke en virksomhedsprofil. Den sætter oplevelsen i centrum: hvad du sanser, hvad du gør, hvad der venter dig.

**Struktur:**
1. **Hero** — Cinematisk billedhero med gradient overlay + tint. Overskrift er oplevelsesledt ("Smag historien om Thy"), ikke virksomhedsnavn. Breadcrumb: Hjem › Kategori › Oplevelse
2. **Info-bar** — Fire praktiske pills (adresse, åbningstider, telefon, e-mail) med SVG-ikoner
3. **To-kolonner** — 2/3 + 1/3 desktop layout
   - **Venstre (main):**
     - "Hvad venter dig" — immersiv, sensorisk intro-tekst + pullquote
     - "Vælg din oplevelse" — 3 exp-cards (drop-in, guidet, privat) med priser og varighed
     - "Fra mark til glas" — 5-trins rejse i numbered layout
     - "Anerkendt af verden" — awards som kontekst, ikke som branding
   - **Højre (sidebar):**
     - Booking card (sticky, mørk teal)
     - "Andre Velvære-oplevelser" (2 mini-cards)
4. **CTA-blok** — Mørk teal, booking-orienteret, linker til thy-whisky.dk

**Ingen:** produktkort med flasker, firmahistorie som primær fortælling, emoji

---

## Designtokens (deles på tværs)

| Token | Værdi |
|---|---|
| Primær farve (guld) | `#b5873a` |
| Sekundær farve (teal) | `#1c3a45` |
| Mørk baggrund | `#0f2028` |
| Sidebaggund | `#f2f1f0` |
| Brødtekst | `#3d5560` |
| Headingfont | Cormorant Garamond 700 (serif) |
| Brødtekstfont | Lato 400/700/900 (sans) |
| Heading tracking | `-0.01em` til `-0.02em` |
| Body line-height | `1.75`–`1.9` |

---

## Typografi-beslutning

CLAUDE.md kræver at headings og body bruger forskellige fonte. Vi bruger:
- **Cormorant Garamond** (serif) til h1, h2, h3 og pull-quotes — giver eksklusiv, editorial karakter
- **Lato** (sans-serif) til al brødtekst, navigation, labels, knapper

Cormorant Garamond er valgt frem for Playfair Display fordi den er slankere og mere elegant til en "smag af sted"-fortælling.

---

## Ikonografi

**Ingen emojis.** Alle ikoner er inline SVG (Feather-inspireret stil):
- Location: path `M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z` + circle
- Clock: circle + polyline
- Phone: Feather phone path
- Mail: envelope path + polyline
- Leaf: organisk path
- Star/award: polygon
- Droplet/destilleri: dråbe-path
- Compass: circle + polygon
- Users/gruppe: person + person-outline
- Moon: Dark Sky path

SVG-ikoner bruges:
1. I hero-tags (11×11px inline i badge-spans)
2. I info-pill-icon (16×16px, stroke)
3. I exp-card icon-circles (18×18px)
4. I breadcrumb (ingen ikoner her)
5. I CTA-knapper (14-16px, arrow)

---

## Oplevelsesorienteret vs. virksomhedsorienteret

| Virksomhedsorienteret (FØR) | Oplevelsesorienteret (EFTER) |
|---|---|
| "Thy Whisky Destilleri" | "Smag historien om Thy" |
| "Danmarks første single-estate whisky" | "En guidet rejse fra mark til fadlager" |
| Produktkort (flasker) | Oplevelseskort (hvad du gør) |
| Tidslinje over firmaets historie | "Fra mark til glas" — sensorisk rejse |
| "Besøg thy-whisky.dk" CTA | "Book rundvisning" CTA |
| Award som branding | Award som kontekst for kvaliteten |

---

## Interne links (silostruktur)

```
examples/index.html (Velvære siloside)
  └── examples/thy-whisky.html (Thy Whisky oplevelsesside)
        └── → tilbage til examples/index.html
```

Alle siloside-kort der endnu ikke har en produktside vises med "Kommer snart" og er ikke klikkable (intentionelt).

---

*Sidst opdateret: marts 2026*
