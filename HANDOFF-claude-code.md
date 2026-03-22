# explorethy.dk — Tysk SEO: Handoff til Claude Code

Dette dokument er udgangspunktet for at bygge de tyske sider på explorethy.dk. Læs det igennem inden du åbner de individuelle content briefs.

---

## Kontekst

explorethy.dk er en oplevelsesguide til Thy, Nordjylland. Der bygges nu en tysk sprogversion (`/de/`) målrettet tyske turister, som udgør den største gruppe af udenlandske gæster i området.

**Keyword-analyse (Google Keyword Planner, Mar 2025–Feb 2026):**
- `klitmöller cold hawaii`: 2.400 søgn./md — lav konkurrence (+23% YoY)
- `nationalpark thy`: 1.600 søgn./md — lav konkurrence
- `cold hawaii dänemark`: 390 søgn./md — lav konkurrence (+136% YoY)

Alle med lav konkurrence. Ingen etablerede konkurrenter med dedikeret tysk SEO.

---

## To sider der skal bygges (prioriteret rækkefølge)

### Side 1 — Cold Hawaii & Klitmøller
```
Brief:    cold-hawaii-de-brief.md
URL:      /de/cold-hawaii-klitmoller
Sprog:    de
Volumen:  ~3.100+ søgn./md samlet
Deadline: Inden juni (sommertoppen starter)
```

### Side 2 — Nationalpark Thy
```
Brief:    nationalpark-thy-de-brief.md
URL:      /de/nationalpark-thy
Sprog:    de
Volumen:  ~1.600 søgn./md
Deadline: Inden juni
```

---

## Tekniske krav (gælder begge sider)

### hreflang
Begge sider skal have korrekte hreflang-tags i `<head>`:
```html
<link rel="alternate" hreflang="da" href="https://explorethy.dk/[dansk-url]" />
<link rel="alternate" hreflang="de" href="https://explorethy.dk/de/[tysk-url]" />
<link rel="alternate" hreflang="x-default" href="https://explorethy.dk/[dansk-url]" />
```

### lang-attribut
Siderne skal rendere med `lang="de"` — brug projektets i18n-setup hvis det findes.

### Routing
Følg projektets eksisterende mønster for URL-struktur. Hvis projektet bruger filbaseret routing (Next.js App Router, Astro etc.), opret under `/de/` mappen.

### Komponenter
Brug eksisterende layout-komponenter (header, footer, navigation). Brug eksisterende kort/card-komponenter til spots og ruter — briefs markerer tydeligt hvor kort-komponenter hører hjemme.

### Schema markup
JSON-LD til begge sider er inkluderet i de individuelle briefs. Tilføj via projektets schema-løsning eller direkte i `<head>`.

### Billeder
Alt-tekster på tysk er specificeret i hvert brief. Brug eksisterende billeder fra projektet — ingen nye billeder er nødvendige til MVP.

---

## Interne links mellem siderne

De to sider skal linke til hinanden:
- Cold Hawaii-siden linker til `/de/nationalpark-thy`
- Nationalpark Thy-siden linker til `/de/cold-hawaii-klitmoller`

---

## Hvad der IKKE skal bygges nu

Følgende er planlagt til fase 2 (efter sæsonen):
- `/de/` — tysk forside/oversigt
- `/de/aktivitaeten` — surfcamp, surfundervisning
- `/de/natur-nordjuetland` — klit og naturartikler
- `/de/bunkermuseum-hanstholm` — kulturhistorie

---

## Copy-status

Alt copy i de to briefs er klar til brug og skrevet af et menneske på tysk. Brug det direkte — intet skal maskinoversættes.
