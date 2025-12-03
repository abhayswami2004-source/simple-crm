<h2>Add New Contact</h2>
<form>
  <input />
  <button>Save Contact</button>
</form>
"use client";

import { useState } from "react";

export default function NewContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  async function submitForm(e: any) {
    e.preventDefault();

    await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    // After adding, go back to contacts list
    window.location.href = "/contacts";
  }

  return (
    <div>
      <h2>Add New Contact</h2>

      <form onSubmit={submitForm}>
        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        <button type="submit">Save Contact</button>
      </form>
    </div>
  );
}
