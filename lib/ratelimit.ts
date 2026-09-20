// lib/ratelimit.ts — Stage 0 stub (no rate limiting)

export function checkIpRateLimit(_ip: string | undefined): Promise<void> {
  // Intentionally a no-op in Stage 0.
  return Promise.resolve();
}
