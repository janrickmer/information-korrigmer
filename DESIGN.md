---
name: "KORRIGMER – Information"
description: "Klassische Produktseite, auf der KORRIGMER selbst vorführt: weißer Raum, Steinstufen, eine Messingbühne."
colors:
  accent: "#8a6612"
  accent-strong: "#6e5210"
  accent-ink: "#ffffff"
  gold: "#99741b"
  bg: "#ffffff"
  surface: "#f3f2ef"
  surface-2: "#e8e7e3"
  ink: "#1c1813"
  ink-soft: "#3a332a"
  muted: "#5c564b"
  selection: "#ecdcae"
  night: "#1c1813"
  night-surface: "#29231b"
  night-ink: "#ecebe7"
  night-muted: "#a39c8e"
  night-gold: "#d8b662"
  night-gold-hover: "#e4c77a"
  scrim: "rgba(20, 17, 12, 0.6)"
typography:
  display:
    fontFamily: "Work Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5.2vw, 5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Work Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1rem + 2.6vw, 3.25rem)"
    fontWeight: 300
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Work Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1rem + 1.85vw, 2.25rem)"
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  subhead:
    fontFamily: "Work Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.12rem + 0.5vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Work Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.12rem + 0.5vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Work Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Work Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 500
    letterSpacing: "0"
  small:
    fontFamily: "Work Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: "0"
  pill: "999px"
  circle: "50%"
spacing:
  margin: "clamp(1rem, 2.2vw, 2rem)"
  gutter: "clamp(0.75rem, 1.6vw, 1.5rem)"
  section: "clamp(4.5rem, 2rem + 9vw, 11rem)"
  tile-gap: "0.5rem"
  tile-pad: "clamp(1.25rem, 2vw, 1.75rem)"
  maxw: "105rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-strong}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.5rem"
    height: "3rem"
  button-ink-hover:
    backgroundColor: "{colors.ink-soft}"
  button-small:
    padding: "0 1.1rem"
    height: "2.5rem"
  stage:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.none}"
  tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.tile-pad}"
  tile-lead:
    backgroundColor: "{colors.surface-2}"
  shot:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "clamp(0.5rem, 1.2vw, 1rem)"
  version-card:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 3vw, 2.5rem)"
  select-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 2.1rem 0 0.9rem"
    height: "2.75rem"
  select-pill-hover:
    backgroundColor: "{colors.surface-2}"
  input-number:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 0.9rem"
    height: "2.75rem"
    width: "6.5rem"
  play-button:
    backgroundColor: "{colors.night-gold}"
    textColor: "{colors.night}"
    rounded: "{rounded.circle}"
    size: "clamp(4.25rem, 7vw, 5.75rem)"
  play-button-hover:
    backgroundColor: "{colors.night-gold-hover}"
---

# Design System: KORRIGMER – Information

## Overview

**Creative North Star: „Das Werkzeug auf der Messingbühne“**

Die Seite ist ein ruhiger, weißer Raum, in dem das Produkt selbst vorführt. Statt Funktionen aufzuzählen, steht eine funktionierende Replik der KORRIGMER-Bewertungstabelle (drei Kriterien einer fiktiven Klausur, gerechnet wie in der App) in Originalgröße auf einer Messingbühne; weiter unten zeigen Bildschirmfotos der echten Anwendung und ein zweites Live-Fragment, was die App tut. Alles andere tritt zurück: weißer Grund, zwei Steinstufen, warme Tinte, eine leichte Groteske.

Die Dichte ist die einer klassischen Produktseite: große Abstände zwischen den Abschnitten, kurze Textblöcke auf einem asymmetrischen 12-Spalten-Raster, Abschnittswechsel durch Tonwechsel statt durch Linien. Messing erscheint nur in seiner einen Rolle, als Bühne und als Hauptaktion; das Logo-Gold bleibt der Wortmarke. Ein einziges invertiertes Tintenfeld trägt das Erklärvideo. Bewegung ist knapp und physisch: Zeilen steigen auf, die Bühne öffnet sich nach unten, Zahlen in den Repliken hellen kurz auf, wenn sie sich ändern.

Maßstab ist das Handwerksniveau von Apple und Stripe in der Ausführung, nicht im Aussehen. Schrift, Bilder und Video kommen ausschließlich von der eigenen Domain; das ist Teil des Datenschutzversprechens und damit eine Gestaltungsgrenze.

**Key Characteristics:**
- Weißer Grund, zwei Steinstufen und warme Tinte; Messing nur auf der Bühne und der Hauptaktion.
- Work Sans durchgehend; Überschriften leicht (300) und eng gesetzt, Text regulär.
- Pillen für Bedienelemente, rechte Winkel für Flächen und Bilder, das Eselsohr der Bühne als einzige eigene Form.
- Flach: keine Schatten, keine Linien, keine Verläufe auf der Seite; Tiefe entsteht durch Tonstufen.
- Das Produkt führt vor: Repliken der echten Oberfläche (`[data-ui]`) in Originalgröße, mit den Werten der App.
- Bewegung nur als Auftritt und als Bestätigung. Bei `prefers-reduced-motion: reduce` entfallen Auftritte, Drift, Cover-Zoom und das Aufhellen von Zahlen; die kurzen Druck- und Hover-Antworten und das Ausblenden des Videocovers bleiben.

## Colors

Eine warme, fast einfarbige Palette aus Weiß, Stein und Tinte, in der Messing selten und deshalb laut ist.

### Primary
- **Bühnenmessing** (`accent`, #8a6612): Fläche der Hero-Bühne und Grund der Hauptschaltfläche („Oberstufe öffnen“, „KORRIGMER öffnen“); Weiß darauf erreicht 5,3:1. Außerdem Fokusring und Eingabemarke.
- **Dunkles Messing** (`accent-strong`, #6e5210): Hover der Hauptschaltfläche, nur als Zustand.
- **Weiß auf Messing** (`accent-ink`, #ffffff): Label und Pfeil auf Messing- und Tinte-Schaltflächen.
- **Logo-Gold** (`gold`, #99741b): die Markenfarbe des Logos. Wortmarke in Kopf und Fuß, das Favicon („K“ in Georgia fett auf weißem, gerundetem Quadrat) und der Punkt am aktiven Schritt der Schrittliste. Mit 4,3:1 auf Weiß nie Textfarbe.

### Neutral
- **Papierweiß** (`bg`, #ffffff): Grund jeder Seite; weiße Flächen auf Hellem Stein (Versionskarten, Steuerung der Live-Demo, die KORRIGMER-Spalte der Vergleichstabelle).
- **Heller Stein** (`surface`, #f3f2ef): erste Tonstufe. Grund ganzer Abschnitte (Vergleich, Live-Demo, Zugang), Tafeln, Rahmen um Bildschirmfotos, Hinweise, Pillen-Felder.
- **Stein** (`surface-2`, #e8e7e3): zweite Tonstufe. Leittafel im Datenschutz, jede zweite Zeile der Vergleichstabelle, Hover der Pillen-Auswahl.
- **Warme Tinte** (`ink`, #1c1813): Text (17,7:1 auf Weiß), Tinte-Schaltfläche, Sprunglink.
- **Weiche Tinte** (`ink-soft`, #3a332a): nur Hover der Tinte-Schaltfläche.
- **Graphit** (`muted`, #5c564b): Bildunterschriften, Kleingedrucktes, Anmerkungen, inaktive Schritte; hält AA auch auf Stein (5,9:1).
- **Markierung** (`selection`, #ecdcae): Textauswahl auf allen hellen Flächen.

### Nachtfeld (nur Video)
- **Nachttinte** (`night`, #1c1813): Grund des Videoabschnitts, des einzigen dunklen Feldes; Glyphe im Play-Knopf.
- **Nachtfläche** (`night-surface`, #29231b): Fläche des Players, solange das Video nicht geladen ist.
- **Kreide** (`night-ink`, #ecebe7): Text im Nachtfeld (14,8:1).
- **Asche** (`night-muted`, #a39c8e): Nebentext im Nachtfeld (6,5:1).
- **Nachtgold** (`night-gold`, #d8b662): Play-Knopf, Wortmarke im Cover, Textauswahl im Nachtfeld. Messing in seiner hellen Fassung für dunklen Grund.
- **Helles Nachtgold** (`night-gold-hover`, #e4c77a): Hover des Play-Knopfs.
- **Tintenschleier** (`scrim`, rgba(20, 17, 12, 0.6)): liegt über dem Coverbild, damit Text darauf lesbar bleibt.

### Named Rules
**Die Eine-Bühne-Regel.** Bühnenmessing füllt höchstens eine Fläche pro Seite: die Bühne im Hero. Daneben trägt es nur die Hauptaktion, den Fokusring und die Eingabemarke. Eine gleichrangige zweite Aktion ist Tinte, eine nachrangige ein Text-Link.

**Die Logo-Gold-Regel.** Logo-Gold ist Identität, nicht Aktion: Wortmarke, Favicon und Schrittmarkierung, nie Text, nie Fläche.

**Die Ein-Tintenfeld-Regel.** Eine Seite hat höchstens ein invertiertes Feld, und es gehört dem Video. Die Nacht-Farben gelten nur dort.

## Typography

**Display Font:** Work Sans (mit Helvetica Neue, Arial, sans-serif)
**Body Font:** Work Sans (dieselbe variable Datei, Gewichte 100–900)

**Character:** Eine einzige, sachlich-freundliche Groteske in zwei Stimmen: leicht und eng gesetzt für Überschriften, regulär und offen für Text. Die Datei liegt auf der eigenen Domain (`assets/fonts`, SIL Open Font License) und wird vorgeladen; Webfont-Dienste gibt es nicht.

### Hierarchy
- **Display** (300, 2,5–5rem fluid, Zeilenhöhe 1, auf der Unterseite 1,02, −0,035em): nur die H1 von Start- und Unterseite. Die Hero-H1 steht auf höchstens 11ch und ist um 0,04em optisch nach links gezogen; unter 40rem wächst sie auf clamp(2.5rem, 10.5vw, 3rem).
- **Headline** (300, 1,75–3,25rem, 1,06, −0,03em): Abschnittsüberschriften.
- **Title** (300, 1,5–2,25rem, 1,12, −0,02em): Titel der Versionskarten; die Abschnittsüberschriften im Rechtstext stehen in derselben Größe in 400.
- **Problemsatz** (400, clamp(1.5rem, 1rem + 1.6vw, 2.25rem), 1,3, −0,015em): die zentrierte Aussage mit Bildern im Satz, höchstens 46ch; unter 40rem linksbündig in 1,5rem.
- **Subhead** (500, 1,25–1,5rem, 1,3, −0,01em): Schritte im Ablauf, Kontrastpaar, Zeilenköpfe der Vergleichstabelle, Unterpunkte im Rechtstext; Tafeln setzen sie enger (1,2, −0,015em).
- **Lead** (400, 1,25–1,5rem, 1,38–1,45): Einleitungs- und Schlusssätze, Leittafel, Aussage im Fuß; Maß 34–44ch.
- **Body** (400, 17–19px fluid, 1,55): Fließtext und Hinweise, Maß höchstens 64ch, `text-wrap: pretty`.
- **Label** (500, Body-Größe, Laufweite 0): Schaltflächen, Text-Links, Werte in Pillen-Feldern.
- **Small** (400, 13–14px fluid, 1,55): Navigation, Bildunterschriften, Anmerkungen, Kleingedrucktes; in der kleinen Schaltfläche mit 500.

Überschriften setzen `text-wrap: balance` ohne Silbentrennung. Fettung (600) bleibt kurzen Vorspannen („Probieren Sie es aus:“, „Nur für Sie:“, „Das Wichtigste in Kürze:“), der live mitlaufenden Punktzahl in der Bühnennotiz, der Überschrift der Demo-Steuerung („Nur für Sie sichtbar“, Body-Größe) und Tabellenköpfen vorbehalten.

### Named Rules
**Die Lichtstimme-Regel.** Überschriften ab Titelgröße stehen in 300 mit negativer Laufweite, nur die Abschnittsüberschriften im Rechtstext in 400; Gewicht entsteht durch Größe, nie durch Fettung. Zwischenüberschriften in Lead-Größe tragen 500, damit sie im Fließtext halten.

**Die Sechs-Stufen-Regel.** Es gibt sechs Größen: small, body, lead, head, section, display (`--step-*`). Eine neue Rolle bekommt eine dieser Stufen, keine eigene Größe. Außerhalb der Repliken sind der Problemsatz und die Hero-H1 unter 40rem die einzigen Ausnahmen.

**Die Tabellenziffern-Regel.** Zahlen, die sich ändern, stehen mit `tabular-nums`, nie in einer Monospace-Schrift: auf der Seite in Work Sans, in Repliken in der Schrift der App.

## Layout

Ein 12-Spalten-Raster (`.grid`) mit fluidem Spaltenabstand (`gutter`) und Seitenrand (`margin`), zentriert auf höchstens 105rem (`maxw`). Inhalte verteilen sich asymmetrisch statt in gleichen Blöcken: 4 zu 7 (Problem), 6 zu 6 (Vergleich, Video), 5 zu 7 (Ablauf, Zugang), 7 zu 5 (Bildband, Abschluss des Ablaufs), 62 zu 38 (Live-Demo: Bogen und Steuerung). Fließtext hält höchstens 64ch.

Der Hero setzt Überschrift, einen Satz und die Aktionen oben links. Die Messingbühne beginnt in Spalte 5, schiebt sich mit negativem Abstand von unten in den Hero und läuft rechts bis an den Bildschirmrand.

Der vertikale Takt ist `section` (4,5–11rem) oben und unten je Abschnitt; der Problemsatz bekommt das 1,15-Fache, der Schluss einen an der Fensterhöhe bemessenen Raum. Die Schritte im Ablauf liegen clamp(4.5rem, 8vw, 7.5rem) auseinander. Tafeln (Datenschutz, Fuß) und die Versionsliste stehen mit 0,5rem Fuge (`tile-gap`); der Fuß ist ein Tafelraster mit 0,5rem Rand.

Responsiv:
- **ab 75rem:** Die Bühne trägt ihren Inhalt bis 52rem breit, darunter 46rem.
- **bis 72rem:** Die Bühne überlappt den Hero nicht mehr und liegt vollbreit unter dem Text; die Notiz rückt neben das Eselsohr.
- **bis 64rem:** Alle Teilungen werden einspaltig, die Live-Demo stapelt, Tafeln laufen zweispaltig. Die Schrittliste erscheint erst darüber.
- **bis 52rem:** Die Ankerlinks im Kopf entfallen; Wortmarke und kleine Schaltfläche bleiben.
- **bis 40rem:** Tafeln einspaltig, einfache Tafeln verlieren ihre Fläche (Leit- und Bildtafel behalten sie); die Vergleichstabelle stapelt mit Etiketten; Bilder im Problemsatz und reine Desktop-Bildschirmfotos entfallen; die Replik-Tabelle wird zu Kartenzeilen.
- Hover-Zustände gelten nur unter `(hover: hover) and (pointer: fine)`.

**Die Tonwechsel-Regel.** Abschnitte trennen sich durch Abstand und Wechsel des Grundes (Weiß, Heller Stein, das eine Tintenfeld), nie durch Linien oder Rahmen.

## Elevation & Depth

Die Seite ist flach. Tiefe entsteht durch drei Tonstufen und ihre Umkehrung: Auf Steinabschnitten liegen weiße Flächen (Versionskarten, Steuerung der Live-Demo, KORRIGMER-Spalte), auf weißen Abschnitten Steinflächen (Tafeln, Bildrahmen, Hinweise); dazu kommt das eine Tintenfeld. Kein Seitenelement trägt einen Schatten, weder in Ruhe noch im Hover; Zustände zeigen sich durch Tonwechsel. Schatten gibt es ausschließlich in den Repliken der App-Oberfläche, weil die App sie selbst hat.

### Shadow Vocabulary
- **App-Karte** (`box-shadow: 0 1px 2px rgba(40,33,15,.06), 0 18px 40px -18px rgba(40,33,15,.45)`): nur die `[data-ui]`-Karte des Bewertungsfragments auf der Bühne.
- **Bogen** (`box-shadow: 0 1px 2px rgba(40,33,15,.06), 0 22px 46px -24px rgba(40,33,15,.4)`): nur der nachgebaute Rückmeldebogen, der als Blatt auf dem Hellen Stein liegt.
- **App-Fokusring** (`box-shadow: 0 0 0 3px var(--ui-gold-tint), 0 0 0 5px var(--ui-gold-d)`): nur Auswahlfelder in Repliken.

### Named Rules
**Die Flach-in-Ruhe-Regel.** Außerhalb von `[data-ui]` gibt es keinen Schatten, auch nicht als Hover-Antwort. Wer Abhebung braucht, wechselt die Tonstufe.

## Shapes

Drei Formen und eine Ausnahme. Rechte Winkel (0) für alle Flächen, Abschnitte, Tafeln, Bildrahmen und Bilder, auch für das Videocover, das als Ganzes ein Knopf ist. Pillen (999px) für Schaltflächen, Auswahl- und Zahlenfelder und den Sprunglink. Der Kreis (50%) nur für den Play-Knopf und den Punkt am aktiven Schritt.

Die eigene Form ist das Eselsohr: Die Bühne ist ein Rechteck, dessen linke obere Ecke im 45°-Winkel abgeschnitten ist wie die geknickte Ecke eines Klausurbogens (`clip-path` mit `--dogear`, Kante clamp(4.5rem, 7vw, 6.5rem), unter 40rem 4.5rem). Wenn sich die Bühne beim Laden öffnet, bleibt die Ecke 45°.

Linien gibt es auf der Seite nicht; Ausnahmen sind die Unterstreichung von Links (0,07em stark, 0,2–0,3em Abstand) und der Fokusring (2px). Archivfotos stehen randlos und werden per `object-fit: cover` beschnitten: im Bildband 4:3, im Videocover 16:9, im Problemsatz als Daumenbilder von 1,45 × 1,05em (breit 1,85 × 1,05em); in der Bildtafel füllt das Foto die Tafel. App-Bildschirmfotos stehen in einem schmalen Rahmen aus Hellem Stein. Repliken behalten die Radien der App (Karte 12px, Tabellenrahmen 10px, Felder 8px), und nur sie.

**Die Eselsohr-Regel.** Die abgeschrägte Ecke ist die einzige eigene Form der Welt und gehört der Bühne. Sie wandert nicht auf Karten, Bilder oder Schaltflächen.

## Components

### Buttons
Ruhig, satt, eindeutig.
- **Shape:** Pille (999px), Höhe 3rem, seitlich 1,5rem; klein 2,5rem hoch, 1,1rem seitlich, Small-Größe in 500.
- **Primary:** Bühnenmessing mit weißem Label (500) und Pfeil (Inline-SVG, 1em) rechts, für „Oberstufe öffnen“; die kleine Kopfschaltfläche „KORRIGMER öffnen“ trägt keinen Pfeil.
- **Hover / Focus:** Hover dunkelt die Fläche (180ms) und schiebt den Pfeil 3px nach rechts; Druck skaliert auf 0,97 (140ms, ease-out); Fokus ist der globale Ring (2px Bühnenmessing, 3px Abstand).
- **Tinte:** warme Tinte mit weißem Label, Hover weiche Tinte. Für die gleichrangige zweite Version (Sek I) in der Versionsliste.
- **Text-Link:** die nachrangige Aktion neben einer Schaltfläche („Sek I öffnen“). Label-Gewicht, Unterstreichung in 35 % der Textfarbe, im Hover voll. Links im Fließtext des Rechtstexts stehen in 400 mit 40 %.

### Cards / Containers
- **Corner Style:** rechtwinklig (0).
- **Background:** Heller Stein auf Weiß, Weiß auf Hellem Stein, Stein für die Leittafel.
- **Shadow Strategy:** keine (siehe Elevation & Depth).
- **Border:** keine.
- **Internal Padding:** Tafeln `tile-pad`; Versionskarten clamp(1.5rem, 3vw, 2.5rem); Bildrahmen clamp(0.5rem, 1.2vw, 1rem); Hinweise 0,9rem/1,1rem.
- **Tafel:** Subhead oben, Text unten angeschlagen, Mindesthöhe 15rem. Varianten: Leittafel (zwei Spalten, Stein, Headline und Lead), Bildtafel (randlos), breite Tafel.
- **Fußtafeln:** dieselbe Sprache im 12-Spalten-Fuß: Aussage, Seitenübersicht, Rechtliches, Bildnachweise und eine große Wortmarke in Logo-Gold.
- **Versionskarte:** Titel und Satz links, Schaltfläche unten rechts; unter 40rem gestapelt.
- **Kontrastpaar:** die leise Seite ohne Fläche mit Überschrift in Graphit, die starke Seite auf Hellem Stein.

### Inputs / Fields
- **Style:** Pillen auf Hellem Stein ohne Rahmen, Höhe 2,75rem, Label-Gewicht, `tabular-nums`. Auswahlfelder mit eigenem Chevron in Tinte, Zahlenfelder 6,5rem breit und rechtsbündig. Bezeichnung links (Body, Zweitzeile Small in Graphit), Feld rechts.
- **Focus:** globaler Ring (2px Bühnenmessing, 3px Abstand); Eingabemarke in Bühnenmessing. Hover der Auswahl: Stein.
- **Error / Disabled:** Ungültige Zahlen ändern nichts; beim Verlassen steht wieder der letzte gültige Wert im Feld. Ein eigener Fehlerzustand existiert nicht.

### Navigation
- **Kopf:** Wortmarke links (1,375rem hoch, Logo-Gold), rechts Ankerlinks in Small und Tinte, deren Unterstreichung erst im Hover erscheint, am Ende die kleine Primärschaltfläche. Unter 52rem bleiben Wortmarke und Schaltfläche. Auf der Unterseite: Wortmarke und Text-Link „Zur Startseite“ mit gespiegeltem Pfeil.
- **Schrittliste (Ablauf):** ab 64rem sticky neben den Schritten. Einträge in Graphit, der aktuelle Schritt in Tinte mit Punkt in Logo-Gold (`aria-current="step"`), ohne Nummern.
- **Fuß:** Seitenübersicht als Liste in einer Tafel, Unterstreichung erst im Hover.
- **Sprunglink:** Tinte-Pille, erscheint beim Fokus oben links.

### Messingbühne
Der Auftritt des Produkts: eine Messingfläche mit Eselsohr, darauf eine kurze weiße Anleitung (Small, fetter Vorspann, live mitlaufende Punktzahl) und eine Replik der Bewertungstabelle in Originalgröße. Beim Laden öffnet sich die Bühne per `clip-path` von 30 % auf volle Höhe (900ms, ease-out, 150ms verzögert), ihr Inhalt steigt 24px auf (700ms).

### Vergleichstabelle
Drei Spalten in Zeilen von mindestens 4,5rem: Zeilenkopf (Subhead), „Traditionell“, „Mit KORRIGMER“. Die Zeilen wechseln zwischen Hellem Stein und Stein; die KORRIGMER-Spalte ist eine durchgehende weiße Bahn in Label-Gewicht, die 1,5rem über den Kopf hinausragt. Unter 40rem stapeln die Zellen mit vorangestellten Etiketten „Traditionell:“ und „Mit KORRIGMER:“.

### Videofeld
Das eine Tintenfeld. Der Player steht 16:9 auf der Nachtfläche; das Cover ist ein einziger Knopf: Archivbild leicht entsättigt unter dem Tintenschleier, Wortmarke in Nachtgold, runder Play-Knopf in Nachtgold mit Glyphe in Nachttinte, Titel (Lead) und Dauer (Small). Hover: Knopf auf 1,05 und heller, Bild zoomt langsam auf 1,05 (900ms, ease-soft). Druck: Knopf auf 0,96 (200ms, ease-out). Fokus: 2px Nachtgold-Ring um den Knopf, 4px Abstand. Das Video lädt erst beim Klick.

### Oberflächen-Repliken (`[data-ui]`)
Eine begrenzte Ausnahme. Repliken sind gekürzte Ausschnitte der echten KORRIGMER-Oberfläche (Bewertungstabelle auf der Bühne, Rückmeldebogen in der Live-Demo): Bearbeiten- und Löschfunktionen und Teile des Bogens entfallen, auf der Bühne ist ein Ergebnisblock ergänzt. Was sie zeigen, geben sie in der Optik der App wieder. Unter `[data-ui]` gelten deshalb die Werte der App, nicht die der Seite: eigene Variablen (`--ui-bg`, `--ui-surface`, `--ui-ink`, `--ui-muted`, `--ui-line`, `--ui-line-strong`, `--ui-gold`, `--ui-gold-d`, `--ui-gold-tint`), System-Sans in festen px-Größen (12–30px) und Georgia nur für Titel und Endnote der Bewertungskarte, 1px-Linien (2px unter dem Tabellenkopf und über dem Ergebnis der Karte), Radien 12/10/8px, der eingefasste Tabellenrahmen in der Karte, App-Schatten und App-Fokusring. Die Einordnung färbt sich nach Leistungsbereich (`fb-great` bis `fb-fail`). Geänderte Zahlen hellen kurz auf (Deckkraft 0,4 auf 1, 260ms) und lassen das bei schnell folgenden Änderungen aus. Eine neue Replik übernimmt ihre Werte aus der App, nicht aus diesem Dokument; Beispieldaten sind fiktiv und als solche gekennzeichnet.

**Die Replik-Regel.** Was unter `[data-ui]` steht, gehört der App. Ihre Linien, Radien, Schatten und Schriften bleiben dort und werden nie zum Muster für Seitenelemente; Seiten-Tokens wandern umgekehrt nicht in eine Replik. Einzige Ausnahme: Titel und Zwischenüberschriften des Rückmeldebogens stehen in #8a6612 statt im Gold der App (#9f7f2a), weil dieses mit 3,8:1 die 16px-Zwischenüberschriften unter AA ließe.

### Einblendungen
- **Hero-Überschrift:** Die Zeilen steigen aus einer Maske auf (900ms, ease-out, je Zeile 90ms versetzt).
- **Inhalte beim Scrollen:** einmalig beim Eintritt, Deckkraft 0 auf 1 (700ms) und 24px Aufstieg (900ms), ease-out, in 80ms-Schritten gestaffelt.
- **Bildband:** Das Archivbild driftet scrollgebunden (Maßstab 1,05, ±2 %), nur wo `animation-timeline` unterstützt wird.
- Jede Einblendung läuft nur unter `prefers-reduced-motion: no-preference`; ohne JavaScript und im Druck steht die Seite vollständig da.

## Do's and Don'ts

### Do:
- **Do** zeige das Produkt in Originalgröße als funktionierende Replik unter `[data-ui]`, mit den Werten der App und gekennzeichneten fiktiven Beispieldaten.
- **Do** setze Bühnenmessing nur für die eine Bühne, die Hauptaktion, den Fokusring und die Eingabemarke ein; eine gleichrangige zweite Aktion ist eine Tinte-Schaltfläche, eine nachrangige ein Text-Link.
- **Do** trenne Abschnitte durch `section`-Abstand und Tonwechsel (Weiß, Heller Stein, das eine Tintenfeld).
- **Do** gestalte Bedienelemente als Pillen (999px), Flächen und Bilder rechtwinklig (0).
- **Do** binde Hover an `(hover: hover) and (pointer: fine)` und gib jeder Schaltfläche eine Druckantwort (Pillen-Schaltflächen 0,97 in 140ms, Play-Knopf 0,96 in 200ms); Links und Felder haben keine.
- **Do** lade Schrift, Bilder und Video nur von der eigenen Domain; Bilder sind echte App-Bildschirmfotos mit fiktiven Daten, frei lizenzierte Archivbilder mit Bildnachweis oder im Code gezeichnete Grafiken.
- **Do** halte WCAG AA: Text in Tinte oder Graphit, Weiß nur auf Bühnenmessing oder Tinte, Nebentext im Nachtfeld in Asche.
- **Do** setze Zahlen, die sich ändern, in `tabular-nums`.

### Don't:
- **Don't** setze Eyebrows oder Kicker (kleine Zeilen über Überschriften); ein fetter Vorspann im Satz („Nur für Sie:“) ist erlaubt.
- **Don't** verwende Verläufe, weder auf Flächen noch auf Text.
- **Don't** gib Seitenelementen Schatten, weder in Ruhe noch im Hover; Schatten gibt es nur unter `[data-ui]`.
- **Don't** ziehe Haarlinien, Rahmen oder Trennstriche auf der Seite; Linien gibt es nur unter `[data-ui]`, als Link-Unterstreichung und als Fokusring.
- **Don't** verwende eine Monospace-Schrift, auch nicht für Zahlen.
- **Don't** nummeriere Abschnitte oder Schritte als Gestaltung (01, 02 …); die Gliederungsnummern der Datenschutzerklärung sind Inhalt.
- **Don't** führe Schriftgrößen außerhalb der sechs Stufen ein; Ausnahmen sind nur der Problemsatz, die Hero-H1 unter 40rem und die px-Größen der Repliken.
- **Don't** setze Logo-Gold als Text oder Fläche ein, und öffne kein zweites Tintenfeld.
- **Don't** übertrage das Eselsohr auf andere Elemente.
- **Don't** baue Icon-Karten-Raster oder setze Icons als Schmuck; die Seite kennt nur den Pfeil, das Play-Dreieck und den Auswahl-Chevron.
- **Don't** übertrage Werte der Repliken (Radien, Linien, Schatten, Georgia, System-Sans) auf Seitenelemente.
- **Don't** verwende Standbilder aus dem Erklärvideo oder Stockbilder.
