"use client";

import { useState, useEffect } from "react";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);

  async function loadContacts() {
    const res = await fetch("/api/contacts");
    const data = await res.json();
    setContacts(data);
  }

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div>
      <h2>Contacts</h2>

      <a href="/contacts/new">+ Add Contact</a>

      <ul style={{ marginTop: 20 }}>
        {contacts.map((c: any) => (
          <li key={c.id} style={{ marginBottom: 10 }}>
            <strong>{c.name}</strong> — {c.email} — {c.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
