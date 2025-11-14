import { NextResponse } from 'next/server';

export async function GET() {
  const origin =
    process.env.BACKEND_ORIGIN
      // local dev fallback (when running frontend alone)
      ?? 'http://localhost:8080';

  try {
    const upstream = await fetch(`${origin}/menu`, { cache: 'no-store' });

    if (!upstream.ok) {
      const body = await upstream.text().catch(() => '');
      return NextResponse.json(
        { error: 'Upstream error', status: upstream.status, body },
        { status: 502 }
      );
    }

    const data = (await upstream.json()) as unknown;
    return NextResponse.json(data, { status: 200 });
  } catch (err: unknown) {
    const message =
      typeof err === 'object' && err !== null && 'toString' in err
        ? String(err)
        : 'Unknown error';
    return NextResponse.json(
      { error: 'Proxy fetch failed', message },
      { status: 500 }
    );
  }
}
