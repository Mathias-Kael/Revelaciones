import { NextResponse } from 'next/server';
import data from '@/data/lennox.json';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const simbolos = Array.isArray(data) ? data : (data.simbolos ?? []);
  const found = simbolos.find((s: any) => String(s.id ?? s.nombre) === decodeURIComponent(params.id));
  if (!found) {
    return NextResponse.json({ error: 'not_found' }, { status: 404 });
  }
  return NextResponse.json(found);
}
