export function absoluteUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? `http://localhost:${process.env.PORT ?? '3000'}`;
  return new URL(path, base).toString();
}
