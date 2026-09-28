# CleanAirCon

Astro website for Hong Kong air conditioner cleaning services.

- Local development: `npm ci`, then `npm run dev`.
- Local static build: `npm run build`.
- GitHub Pages build: `npm run build:pages`.
- Live site: https://tomyeung929.github.io/cleanaircon/

Push to `main` to build, validate internal links, and deploy through GitHub Actions.
The Pages build sets the project base path and canonical URL and checks the generated
page and asset links. Ordinary local builds keep their root-relative URLs.
