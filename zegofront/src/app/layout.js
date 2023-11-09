import Nav from "../app/Orgnanismos/Nav";
import "../../css/globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Nav />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
