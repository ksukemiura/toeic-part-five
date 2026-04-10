import "server-only";

import { createNeonAuth } from "@neondatabase/auth/next/server";

const neonAuthBaseUrl = process.env.NEON_AUTH_BASE_URL;
if (!neonAuthBaseUrl) {
  throw new Error("NEON_AUTH_BASE_URL is not set.");
}

const neonAuthCookieSecret = process.env.NEON_AUTH_COOKIE_SECRET;
if (!neonAuthCookieSecret) {
  throw new Error("NEON_AUTH_COOKIE_SECRET is not set.");
}

export const auth = createNeonAuth({
  baseUrl: neonAuthBaseUrl,
  cookies: {
    secret: neonAuthCookieSecret,
  },
});
