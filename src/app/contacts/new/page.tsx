export const metadata = {
  title: "Add Contact - Simple CRM",
};

export default function AddContactPage() {
  return (
    <div className="page-container">
      <div className="card">
        <h2 className="section-title">Add New Contact</h2>

        <form action="/api/contacts" method="POST" className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input name="name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" required />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input name="phone" required />
          </div>

          <button className="btn" type="submit">Save Contact</button>
        </form>
      </div>
    </div>
  );
}

 
