# Articulate Daily v3.03

Articulate Daily is a local-first English vocabulary, writing and speaking-practice application. Document extraction organises useful language into Simple, Medium and Strategic words plus Power Expressions, with meanings and two examples when available. This folder is the complete versioned package: application, optional backend schema, pinned browser libraries, automated tests, deployment configuration, customer documentation, architecture, licences and executive pitch deck.

## Start

Read `START-HERE.md`. For local use with Node.js 20+:

```sh
npm run serve
```

Open `http://127.0.0.1:8080`. Do not open `index.html` directly; microphone, workers and local assets behave correctly through HTTP/HTTPS.

## Test

```sh
npm test
```

The suite uses Playwright headless Chromium, not Computer Use. See `docs/TESTING.md`.

## Optional free cloud sync

1. Create a free Supabase project.
2. Run `backend/supabase-schema.sql` in its SQL Editor.
3. Copy the Project URL and anon/publishable key into `config.js`.
4. Configure the Authentication Site URL and redirect URLs.

Never place a `service_role` or secret key in this folder.

For separate staging and production projects, follow `docs/ENVIRONMENTS.md` and use `config.example.js` as the safe template.

## Package map

- `index.html` — production application
- `config.js` — optional public backend configuration
- `vendor/` — pinned local PDF, DOCX, OCR and Supabase browser libraries plus licences
- `backend/` — Supabase schema and row-level-security policies
- `tests/` — automated source, backend-contract and headless frontend tests
- `docs/` — architecture, customer guide, deployment and testing guidance
- `presentations/` — executive pitch deck and reproducible source
- `_headers` — security headers for compatible static hosts
- `MANIFEST.sha256` — package integrity hashes

## Important limitations

- The speaking coach is rule-based; it is not a live AI or factual research service.
- The pronunciation percentage is a speech-recognition transcript match, not phonetic assessment.
- Dictionary lookup and optional Supabase sync require internet access.
- Browser speech recognition may use a browser-vendor online service.
- Live Supabase authentication/email/database testing must be performed after a project is configured.
