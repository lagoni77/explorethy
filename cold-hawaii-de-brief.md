# Content Brief: Cold Hawaii & Klitmøller — Tysk side
**Til Claude Code:** Dette er et færdigt content brief. Brug det til at bygge den tyske Cold Hawaii-side ind i explorethy.dk's eksisterende arkitektur. Tilpas komponentstruktur, filplacering og styling til det eksisterende projekt — brug ikke hardkodet HTML medmindre projektet gør det.

---

## SEO-metadata

```
URL:              /de/cold-hawaii-klitmoller
Sprog:            de (hreflang="de")
Titel-tag:        Klitmöller & Cold Hawaii – Surfen in Dänemark | Explore Thy
Meta description: Klitmöller ist Dänemarks Surfparadies – Cold Hawaii an der Nordseeküste. Entdecke die besten Surfspots, Kurse und Erlebnisse in Nationalpark Thy.
Canonical:        https://explorethy.dk/de/cold-hawaii-klitmoller
hreflang da:      https://explorethy.dk/cold-hawaii-klitmoller  (eller hvad den danske URL er)
hreflang de:      https://explorethy.dk/de/cold-hawaii-klitmoller
hreflang x-default: https://explorethy.dk/cold-hawaii-klitmoller
```

**Primary keyword:** `klitmöller cold hawaii` (2.400/md, lav konkurrence)
**Secondary keywords:** `cold hawaii dänemark` (390/md, +136% YoY), `klitmöller surfen` (70/md), `surfen dänemark cold hawaii` (20/md)
**Long-tail:** `cold hawaii klitmöller erfahrungen`, `surfschule klitmöller`, `surfkurs klitmöller`

---

## Sidestruktur & copy

### H1
```
Klitmöller – Das Cold Hawaii Dänemarks
```
*(Indeholder primary keyword naturligt. Kort og direkte.)*

---

### Intro-afsnit (under H1, ca. 60-80 ord)
```
An der Westküste Jütlands, wo der Atlantik auf kilometerlange Sandstrände trifft, liegt Klitmøller – von Surfern aus ganz Europa liebevoll Cold Hawaii genannt. Starke, beständige Wellen, konstanter Wind und eine wilde Naturkulisse im Nationalpark Thy machen diesen kleinen Fischerort zu einem der besten Surfspots Nordeuropas. Ob Anfänger oder Profi – Cold Hawaii hat für jeden etwas.
```

---

### H2: Warum heißt es Cold Hawaii?
```
Der Spitzname Cold Hawaii entstand in den 1990er Jahren, als internationale Surfer die kraftvollen Wellen vor Klitmøller entdeckten. Die Bedingungen – konstanter Westwind, saubere Nordseeswells und wenig Menschenmassen – erinnerten sie an Hawaii, nur eben kälter. Heute zählt Klitmøller zu den renommiertesten Kitesurfing- und Wellensurf-Destinationen Europas und ist Austragungsort internationaler Wettkämpfe.
```

---

### H2: Surfen in Klitmöller – die besten Spots

**Intro til sektionen:**
```
Klitmøller bietet Surfspots für alle Niveaus. Direkt im Ort bricht die Hauptwelle über einem Sandboden – ideal für Fortgeschrittene. Nördlich und südlich davon finden sich ruhigere Abschnitte für Anfänger und Kitesurfer.
```

**3 spot-kort (komponent: brug eksisterende "card" eller "spot" komponent hvis den findes):**

**Kort 1**
```
Titel:       Klitmøller Hauptstrand
Type:        Wellensurf & Bodyboard
Niveau:      Fortgeschrittene
Bedingungen: Bester bei Westwind, Swells 1–3m
Besonderheit: Hauptspot des Cold Hawaii Festivals
```

**Kort 2**
```
Titel:       Hanstholm
Type:        Wellensurf
Niveau:      Alle Niveaus
Bedingungen: Funktioniert bei mehr Windrichtungen
Besonderheit: Geschütztere Bedingungen, gut für Einsteiger
```

**Kort 3**
```
Titel:       Vorupør
Type:        Kitesurfen & Wellensurf
Niveau:      Mittelstufe bis Fortgeschrittene
Bedingungen: Starker Nordwestwind ideal
Besonderheit: Spektakuläre Strandlandschaft im Nationalpark
```

---

### H2: Surfkurse & Surfschulen in Klitmöller
*(Målrettet mod: `surfschule klitmöller`, `surfkurs klitmöller`)*

```
Noch nie gesurft? In Klitmøller gibt es mehrere Surfschulen, die Kurse für Anfänger, Fortgeschrittene und Kinder anbieten. Die meisten Schulen vermieten auch Equipment, sodass du nichts mitbringen musst.

Was dich erwartet:
- Anfängerkurse ab 2 Stunden
- Ausrüstungsverleih (Board, Neoprenanzug)
- Privatstunden und Gruppenkurse
- Kitesurfing-Kurse für alle Niveaus
```

**CTA-knap:**
```
Text:   Surfkurse entdecken
Link:   [intern: /de/aktivitaeten eller ekstern til lokale surfskole — udfyld når siden er live]
```

---

### H2: Cold Hawaii Festival
```
Jedes Jahr im Herbst verwandelt sich Klitmøller in die Surfhauptstadt Skandinaviens. Das Cold Hawaii PWA Windsurf World Cup zieht Weltklasse-Surfer und Tausende von Zuschauern an die Küste. Selbst wenn du nicht surfst – die Atmosphäre ist einzigartig und das Spektakel auf dem Wasser beeindruckend.
```

---

### H2: Anreise & praktische Infos
```
Klitmøller liegt rund 15 km nordwestlich von Thisted an der Westküste Thylands. Mit dem Auto ist der Ort von Hamburg in etwa 4,5 Stunden erreichbar – ein ideales Ziel für einen verlängerten Urlaub an der dänischen Nordseeküste.

Beste Reisezeit: Mai bis September für Surfer, ganzjährig für Naturliebhaber
Unterkunft: Ferienhaus in der Umgebung empfohlen – buche frühzeitig für Juli/August
Parkplätze: Direkt am Strand vorhanden, kostenlos außerhalb der Saison
```

---

### Interne links (tilføj til relevant sted i siden)

| Linktekst (DE) | Destination |
|---|---|
| Nationalpark Thy entdecken | `/de/nationalpark-thy` *(bygges næste)* |
| Unterkünfte in Thy | `/de/` eller feriehujs-landing page |
| Alle Erlebnisse in Thy | `/de/` (oversigt) |

---

### Schema markup (JSON-LD)
Tilføj i `<head>` eller via projektets schema-komponent:

```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Cold Hawaii – Klitmøller",
  "description": "Klitmøller ist Dänemarks bekanntester Surfspot, bekannt als Cold Hawaii. Gelegen im Nationalpark Thy an der dänischen Westküste.",
  "url": "https://explorethy.dk/de/cold-hawaii-klitmoller",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Klitmøller",
    "addressRegion": "Nordjylland",
    "addressCountry": "DK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 57.0388,
    "longitude": 8.5089
  },
  "inLanguage": "de"
}
```

---

## Billeder (alt-tekster på tysk)

Brug eksisterende billeder fra projektet. Alt-tekster skal sættes til:

| Billedtype | Alt-tekst |
|---|---|
| Surfere på vand | `Surfer bei Cold Hawaii in Klitmøller, Dänemark` |
| Strandbillede | `Klitmøller Strand – Cold Hawaii Surfspot in Nationalpark Thy` |
| Kitesurfer | `Kitesurfen an der Westküste Dänemarks bei Klitmøller` |
| Luftfoto/kyst | `Westküste Jütland – Nationalpark Thy bei Klitmøller` |

---

## Noter til Claude Code

- Siden skal rendere med `lang="de"` eller tilsvarende i projektets i18n-setup
- Brug projektets eksisterende layout-komponent (header, footer, nav)
- Hvis projektet har en `/da/` eller standard-rute for lignende sider, følg samme mønster for `/de/`
- hreflang-tags er vigtige — sørg for at de sættes korrekt i head
- Siden er en SEO-prioritet: sørg for at H1 vises i første viewport, og at meta-title ikke overstiger 60 tegn (den er 58)
- Brug ikke maskinoversat indhold — copy i dette brief er klar til brug
