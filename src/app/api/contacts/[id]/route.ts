import { NextResponse } from "next/server";

let contacts: any[] = []; // same in-memory list

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const contact = contacts.find((c) => c.id == params.id);
  return NextResponse.json(contact || null);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const index = contacts.findIndex((c) => c.id == params.id);

  if (index === -1) {
    return NextResponse.json({ error: "Contact not found" }, { status: 404 });
  }

  contacts[index] = { ...contacts[index], ...body };

  return NextResponse.json(contacts[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  contacts = contacts.filter((c) => c.id != params.id);
  return NextResponse.json({ message: "Deleted successfully" });
}
