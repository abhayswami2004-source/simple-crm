export const metadata = {
  title: "Simple CRM",
  description: "Minimal CRM built with Next.js and Prisma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Simple CRM</h1>
          <nav>
            <a href="/">Home</a> | <a href="/contacts">Contacts</a>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}

