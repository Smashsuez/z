import Provider from '@/context/provider'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Global/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zagel',
  description: 'MyZagel Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <title>ZAGEL</title>
        <meta name="description" content="MyZagel Website" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="83LjU3ij1FIvWD7zMwXOt7CHlmUN-6cJuoHgcO0wGV8" />
        
      </head>
      <body className={inter.className}>
        <Provider>
          <Header/>
          <main >
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
