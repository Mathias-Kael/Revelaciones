import { NextResponse } from 'next/server';
import data from '@/data/lennox.json';

export async function GET() {
  const simbolos = Array.isArray(data) ? data : (data.simbolos ?? []);
  const list = simbolos.map((s: any) => ({
    id: s.id ?? s.nombre,
    nombre: s.nombre,
  }));
  return NextResponse.json(list);
}
