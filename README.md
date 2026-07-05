# AI Product Engineering Academy

Static HTML presentation and marketing site for a 75-day practical AI product engineering course for engineering students in Hyderabad.

## What Is Included

- `index.html` - presentation-style landing page with signup form
- `styles.css` - responsive visual design
- `script.js` - lightweight signup validation and local demo capture
- `docs/course-plan.md` - full business and curriculum plan
- `assets/hero-ai-product-engineering.png` - generated hero image for the site

## Run Locally

Open `index.html` directly in a browser, or serve the folder with any static file server.

```powershell
python -m http.server 5173
```

Then open `http://localhost:5173`.

## Signup Form

The form currently validates entries and saves demo submissions in the visitor's browser. Before running paid campaigns, connect it to a real endpoint such as a CRM, Google Forms, Airtable, Formspree, or a custom API.

