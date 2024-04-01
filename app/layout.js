import Provider from "@/context/provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   description: 'MyZagel Website',
// }
export const metadata = {
  name: "google-adsense-account",
  content: "ca-pub-8234874125207307",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ZAGEL</title>
        <meta name="description" content="MyZagel Website" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="83LjU3ij1FIvWD7zMwXOt7CHlmUN-6cJuoHgcO0wGV8"
        />
      </head>
      <body className={inter.className}>
        <Provider>
          <Header />
          <main>
            {children}
            <Analytics />
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
