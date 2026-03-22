# Content Brief: Nationalpark Thy — Tysk side
**Til Claude Code:** Dette er et færdigt content brief. Brug det til at bygge den tyske Nationalpark Thy-side ind i explorethy.dk's eksisterende arkitektur. Tilpas komponentstruktur, filplacering og styling til det eksisterende projekt.

---

## SEO-metadata

```
URL:              /de/nationalpark-thy
Sprog:            de (hreflang="de")
Titel-tag:        Nationalpark Thy – Dänemarks wilde Westküste entdecken | Explore Thy
Meta description: Nationalpark Thy ist Dänemarks erster Nationalpark – wilde Dünen, Heidelandschaft und endlose Strände. Tipps für Wandern, Radfahren und Naturerlebnisse.
Canonical:        https://explorethy.dk/de/nationalpark-thy
hreflang da:      https://explorethy.dk/nationalpark-thy  (eller hvad den danske URL er)
hreflang de:      https://explorethy.dk/de/nationalpark-thy
hreflang x-default: https://explorethy.dk/nationalpark-thy
```

**Primary keyword:** `nationalpark thy` (1.600/md, lav konkurrence)
**Secondary keywords:** `nationalpark thy wandern` (10/md), `nationalpark thy erlebnisse` (long-tail), `nordjütland natur` (long-tail)
**Long-tail:** `dünen dänemark westküste`, `wildnis dänemark`, `vogelbeobachtung thy`

---

## Sidestruktur & copy

### H1
```
Nationalpark Thy – Dänemarks erste und wildeste Natur
```

---

### Intro-afsnit (under H1, ca. 70-90 ord)
```
Nationalpark Thy war der erste Nationalpark Dänemarks – und er ist bis heute der wildeste. Zwischen dem Atlantik im Westen und dem Limfjord im Osten erstreckt sich eine Landschaft aus riesigen Dünen, blühenden Heiden, stillen Seen und dichten Küstenplantagen. Hier leben über 2.000 Rothirsche, seltene Zugvögel rasten an den Küsten, und der Wind formt die Dünen seit Jahrhunderten. Eine Natur, die man in Europa nur noch selten so unberührt findet.
```

---

### H2: Was macht Nationalpark Thy besonders?

```
Nationalpark Thy wurde 2008 gegründet und erstreckt sich über 60 Kilometer Küstenlinie – von Agger Tange im Süden bis zum Hanstholm Wildreservat im Norden. Das Schutzgebiet umfasst Europas größte Küstenheideflächen, Hunderte von Seen und eines der größten zusammenhängenden Naturgebiete Dänemarks.

Das Besondere: Die Natur hier ist nicht inszeniert. Es gibt keine großen Besucherzentren an jeder Ecke, keine überlaufenen Wege. Stattdessen: Stille, Weite und das Gefühl, wirklich in der Natur zu sein.
```

---

### H2: Wandern im Nationalpark Thy
*(Målrettet mod: `nationalpark thy wandern`)*

```
Mit 59 ausgeschilderten Wanderrouten bietet der Nationalpark Thy Möglichkeiten für jeden Anspruch – von kurzen Familienausflügen bis zu mehrtägigen Küstenwanderungen.
```

**3 rute-kort (brug eksisterende kort/card-komponent):**

**Rute 1**
```
Navn:       Lodbjerg Fyr Rundweg
Længde:     ca. 6 km
Sværhed:    Let
Højdepunkt: Lodbjerg Leuchtturm mit Panoramablick über Dünen und Meer
Startpunkt: Parkplatz Lodbjerg Fyr
```

**Rute 2**
```
Navn:       Agger Tange
Længde:     Variabel (2–12 km)
Sværhed:    Let til medium
Højdepunkt: Schmale Landzunge zwischen Nordsee und Limfjord – einzigartiges Naturerlebnis
Startpunkt: Svaneholmhus Besucherzentrum
```

**Rute 3**
```
Navn:       Hanstholm Vildtreservat
Længde:     ca. 8 km
Sværhed:    Let
Højdepunkt: Vogelbeobachtung, Rothirsche, weite Heidelandschaft
Startpunkt: Hanstholm – nördlicher Eingang des Nationalparks
```

---

### H2: Tiere und Natur erleben

```
Der Nationalpark Thy ist ein Paradies für Naturbeobachter. Im Herbst röhren über 2.000 Rothirsche in der Heide – ein Naturschauspiel, das Besucher aus ganz Europa anzieht. An den Küstenseen rasten Kraniche, Fischadler und im Winter Singschwäne. Die fleischfressende Sonnentau-Pflanze wächst wild in den Moorflächen zwischen den Dünen.

Beste Jahreszeiten:
- Frühling: Zugvögel, blühende Heiden
- Sommer: Lange Abende, Strände fast für sich allein
- Herbst: Hirschbrunft (September–Oktober) – absolutes Highlight
- Winter: Stürme, Einsamkeit, dramatische Küstenlandschaft
```

---

### H2: Bunkermuseum Hanstholm
*(Kulturhistorisk sektion — vigtigt for tyske turister pga. 2. verdenskrig)*

```
Am nördlichen Rand des Nationalparks liegt das Bunkermuseum Hanstholm – Nordeuropas größte erhaltene Festungsanlage aus dem Zweiten Weltkrieg. Die deutschen Bunker, Geschütztürme und unterirdischen Gänge aus dem Atlantikwall sind heute ein faszinantes Stück Geschichte. Ein Besuch lohnt sich besonders für Geschichtsinteressierte – und für alle, die verstehen wollen, wie die dänische Westküste im Krieg aussah.
```

**CTA:**
```
Text: Bunkermuseum Hanstholm →
Link: [intern: /de/bunkermuseum-hanstholm eller ekstern til museets hjemmeside]
```

---

### H2: Praktische Informationen

```
Lage:           Westküste Jütlands, zwischen Thisted und Hanstholm
Eintritt:       Kostenlos – der gesamte Nationalpark ist frei zugänglich
Anreise:        Ca. 4,5 Stunden von Hamburg, 5 Stunden von Kopenhagen
Beste Basis:    Thisted oder Ferienhaus direkt im/am Nationalpark
Parken:         Mehrere kostenlose Parkplätze entlang der Küstenroute
App:            Nationalpark Thy App (kostenlos, iOS & Android) mit Karten und Routen
Besucherzentrum: Nationalparkcentret Thy, Nr. Vorupør
```

---

### Interne links

| Linktekst (DE) | Destination |
|---|---|
| Cold Hawaii & Surfen in Klitmøller | `/de/cold-hawaii-klitmoller` |
| Unterkünfte in Thy | `/de/` eller feriehus-landing page |
| Alle Erlebnisse in Thy | `/de/` (oversigt) |

---

### Schema markup (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Nationalpark Thy",
  "description": "Dänemarks erster Nationalpark – 60 km Küstenlinie mit Dünen, Heiden, Küstenseen und über 2.000 Rothirschen an der dänischen Westküste.",
  "url": "https://explorethy.dk/de/nationalpark-thy",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Thisted",
    "addressRegion": "Nordjylland",
    "addressCountry": "DK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 57.0,
    "longitude": 8.55
  },
  "touristType": ["Wanderer", "Naturliebhaber", "Familien", "Vogelbeobachter"],
  "inLanguage": "de"
}
```

---

## Billeder (alt-tekster på tysk)

| Billedtype | Alt-tekst |
|---|---|
| Klithede/panorama | `Nationalpark Thy – Europas größte Küstenheide in Nordjütland` |
| Kronhjort | `Rothirsch in der Heide – Nationalpark Thy im Herbst` |
| Vandresti | `Wanderweg im Nationalpark Thy an der dänischen Westküste` |
| Strandfoto | `Einsamer Strand im Nationalpark Thy – Westküste Jütlands` |
| Lodbjerg Fyr | `Lodbjerg Leuchtturm im Nationalpark Thy, Dänemark` |

---

## Noter til Claude Code

- Samme arkitektur og layout som `/de/cold-hawaii-klitmoller`
- hreflang-tags skal sættes korrekt — begge tyske sider skal referere til hinanden og til de danske versioner
- Sæsondata: siden har traffik hele året men topper juni–august (3.600/md i august). Ingen grund til sæsonlogik i koden, men hold dette in mente ved prioritering
- Rothirsch-brunft (september/oktober) er et stærkt salgsargument for efterårstrafikken — det er bevidst fremhævet
- Bunkermuseum-sektionen er vigtig: tyske turister har særlig interesse i Atlantvolden/2. verdenskrig
- Copy er klar til brug — brug ikke maskinoversat indhold
