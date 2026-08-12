# Start Here

## Use the app locally

1. Install Node.js 20 or newer.
2. Open a terminal in this folder.
3. Run `npm install` once.
4. Run `npm run serve`.
5. Open `http://127.0.0.1:8080`.

The app works without cloud configuration. Profiles and progress save in the current browser.

## Run verification

Run `npx playwright install chromium` once, then run `npm test`. A successful package reports all tests passed.

## Deploy

Follow `docs/DEPLOYMENT.md`. Upload the contents of this folder as the HTTPS site root. Configure Supabase only when account sync is required.

## Customer and executive materials

- Customer guide: `docs/Articulate-Daily-Customer-Guide-v3.03.docx`
- Quick customer reference: `docs/CUSTOMER-GUIDE.md`
- Architecture and Mermaid flowchart: `docs/ARCHITECTURE.md`
- Executive pitch deck: `presentations/Articulate-Daily-Executive-Pitch-v3.03.pptx`
