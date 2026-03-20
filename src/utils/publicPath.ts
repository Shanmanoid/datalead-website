/**
 * Prepends Vite base URL to public asset paths.
 * Converts "/images/logo.png" → "/datalead/images/logo.png" in production.
 */
export function publicPath(path: string): string {
  const base = import.meta.env.BASE_URL
  // Remove leading slash from path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}
