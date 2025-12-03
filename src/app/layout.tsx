<div className="page-container">
  {children}
</div>
// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Simple CRM",
  description: "Minimal CRM built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="header-inner">
            <div className="brand">Simple CRM</div>

            <nav className="nav" aria-label="Main navigation">
              <a href="/">Home</a>
              <a href="/contacts">Contacts</a>
            </nav>
          </div>
        </header>

        <main className="page-container">
          <div className="card">
            {/* You can keep a small dashboard intro here */}
            <h2 className="section-title">Welcome to Simple CRM</h2>
            <p style={{ color: "var(--muted)", marginTop: 6 }}>
              Use the navigation to manage contacts.
            </p>
          </div>

          {/* main content from pages will be rendered below inside a card for spacing */}
          <div className="card">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
