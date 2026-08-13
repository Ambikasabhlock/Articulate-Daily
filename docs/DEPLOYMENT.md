# Deployment and Operations

## Pre-deployment checklist

- Run `npm test` with Node.js 20 or newer and Playwright available.
- Confirm `config.js` contains only the Supabase URL and anon/publishable key.
- Run `backend/supabase-schema.sql` in the selected Supabase project.
- Set the Supabase authentication Site URL and allowed redirect URLs.
- Serve the folder through HTTPS.
- Confirm the host applies `_headers`, or reproduce those headers in its configuration.
- Test account confirmation, sign-in, first sync, conflict choices and deletion against the configured project.

## Static hosting

Upload the contents of this folder as the site root. No build step is required. Do not publish test output, temporary screenshots or credentials.

## Supabase configuration

Edit `config.js`:

```js
window.ARTICULATE_CONFIG = {
  supabaseUrl: "https://PROJECT.supabase.co",
  supabaseAnonKey: "PUBLIC_ANON_OR_PUBLISHABLE_KEY"
};
```

Never use the `service_role` key in browser code.

## Backend smoke test

After configuration:

1. Create a test user through the application.
2. Confirm the email when confirmation is enabled.
3. Add a test word and select **Sync now**.
4. Verify one `user_app_state` row exists for that user.
5. Sign in on another browser profile and select **CLOUD** at the conflict prompt.
6. Confirm the word appears.
7. Confirm one user cannot query or modify another user’s row.
8. Delete the test user and test data.

## Rollback

Keep the previous versioned folder unchanged. Roll back by deploying that folder, while preserving database rows and exported user backups.

## Email verification and Google sign-in

In Supabase Dashboard, open **Authentication → Providers**. Keep Email enabled and turn on **Confirm email** so new registrations receive a verification link. Configure the Site URL and every allowed redirect URL to match the deployed app URL exactly.

For Google sign-in, create an OAuth 2.0 Web application in Google Cloud, add the Supabase callback URL shown by the Google provider screen, then copy the Google client ID and client secret into **Authentication → Providers → Google**. Never place the Google client secret in `config.js` or `index.html`.

After deployment, verify registration with a test email, follow its confirmation link, sign in, sign out, and repeat with the Google button. Confirm that each account can see only its own `user_app_state` row.
