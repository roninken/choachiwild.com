# Choachi Wild — Landing Page

Landing page for [ChoachiWild.com](https://choachiwild.com) — a premium bio-ecotourism experience in the Colombian Andes, 1 hour from Bogotá.

## About the Project

Choachi Wild guides international travelers through páramo ecosystems, high Andean cloud forest, Muisca ancestral heritage sites, and natural thermal springs. The site targets European and North American markets with a private, all-inclusive 2-day / 1-night expedition format.

## Tech Stack

- Pure HTML5, CSS3, Vanilla JavaScript
- No frameworks or build tools — fully static
- Google Fonts: Playfair Display + Source Sans 3
- Deployable to any static host (GitHub Pages, Netlify, Vercel, etc.)

## Project Structure

```
ChoachiWild.com/
├── index.html        # Main landing page
├── style.css         # All styles
├── main.js           # Nav scroll, mobile menu, reveal animations, form
├── assets/           # Photos and logo
│   ├── logo.png
│   ├── hero.jpg
│   ├── paramo.jpg
│   ├── rocablanca.jpg
│   ├── rocablanca-hike.jpg
│   ├── termales.jpg
│   ├── laguna-ubaque.jpg
│   ├── naranjalia.jpg
│   ├── day1.jpg
│   └── day2.jpg
└── CLAUDE.md         # AI assistant context (business docs summary)
```

## Page Sections

| Section | Description |
|---------|-------------|
| Hero | Full-screen with headline, subtitle, and two CTAs |
| Stats Strip | Key facts: altitude, private access, price, forest coverage |
| The Experience | 4 feature cards highlighting the expedition's pillars |
| Pull Quote | Full-bleed editorial quote from the guide script |
| Itinerary | Day 1 & Day 2 timestamped stops with alternating image layout |
| Destinations | Magazine-style photo gallery grid |
| What's Included | All-inclusive checklist |
| Book | Enquiry form with guest count and date selection |
| Footer | Contact, navigation, social links |

## Running Locally

No build step required. Serve from any local server, e.g.:

```bash
python3 -m http.server 8765
# then open http://localhost:8765
```

Or open `index.html` directly in your browser.

## Deploying to GitHub Pages

1. Go to **Settings → Pages** in this repository
2. Set source to **Deploy from a branch → main → / (root)**
3. Save — the site will be live at `https://<your-username>.github.io/<repo-name>/`

For the custom domain `choachiwild.com`, add a `CNAME` file to the repo root containing:

```
choachiwild.com
```

Then configure your DNS with a CNAME record pointing `www` → `<your-username>.github.io`.

## Design Reference

Visual style inspired by [National Geographic Expeditions] - full-screen imagery, editorial serif typography, dark earthy palette with gold accents.

**Color palette:**
- Dark forest: `#0e110e`
- Earth: `#1c2318`
- Moss green: `#4a6741`
- Gold: `#c8a96e`
- Cream: `#f5f0e8`

## License

All rights reserved © 2026 Choachi Wild.
