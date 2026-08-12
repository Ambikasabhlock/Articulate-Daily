# Environment separation

Articulate Daily v3.03 should use a separate Supabase project for staging and production. Do not test the new version against the original project's user data.

## Staging setup

1. Create a second free Supabase project named `Articulate Daily Staging`.
2. Run `backend/supabase-schema.sql` in its SQL Editor.
3. Copy `config.example.js` to `config.js`.
4. Replace the staging URL and publishable key.
5. Set Supabase Authentication → URL Configuration to `http://127.0.0.1:8080` with redirect URL `http://127.0.0.1:8080/**`.
6. Test sign-up, confirmation, sign-in, password reset, sync and sign-out.

## Production setup

Create a third Supabase project for the public site. Use its own `config.js` and production site URL. Never share production credentials with staging and never place a `service_role` or `sb_secret_` key in browser files.

The publishable/anon key is intended for browser use; protection comes from Supabase Auth and row-level security.
