# Testing Strategy

`tests/run-tests.mjs` performs source, backend-policy and headless browser checks without Computer Use.

Coverage includes:

- JavaScript parsing and startup errors
- required package inventory
- Supabase RLS policies for select, insert, update and delete
- navigation and accessible current-page state
- Settings persistence
- profile creation
- word creation and library search
- local-first behavior without backend configuration
- security/validation safeguards in the production source

Live Supabase authentication and email delivery require a configured external project. Follow `DEPLOYMENT.md` for the final backend smoke test.
