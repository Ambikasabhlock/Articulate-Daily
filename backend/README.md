# Optional Supabase backend

The application is local-first. This backend adds identity and cross-device state sync; it is not required for local learning.

`supabase-schema.sql` creates one JSON state row per authenticated user and enables row-level security for select, insert, update and delete. Anonymous access is revoked.

## Verified locally

- SQL contains RLS enablement and ownership checks through `auth.uid()`.
- Authenticated grants are limited to the four required operations.
- The frontend never requires or references a service-role key.
- Local state remains authoritative when cloud configuration is blank or unavailable.
- Deletion does not remove local data if cloud deletion fails.

## Configuration-dependent verification

Authentication emails, token refresh, hosted database availability and cross-account isolation require a real Supabase project. Execute the smoke test in `../docs/DEPLOYMENT.md` after configuration.
