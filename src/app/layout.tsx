import "./globals.css";
import "./font.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import Navbar from "./Component/Navbar.tsx";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DevLinkProvider>
          <Navbar/>
          {children}
        </DevLinkProvider>
      </body>
    </html>
  );
}