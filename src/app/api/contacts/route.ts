import { NextResponse } from "next/server";

let contacts: any[] = []; // temporary in-memory store

export async function GET() {
  return NextResponse.json(contacts);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newContact = {
    id: Date.now(),
    name: body.name,
    email: body.email,
    phone: body.phone || "",
  };

  contacts.push(newContact);

  return NextResponse.json(newContact);
}
