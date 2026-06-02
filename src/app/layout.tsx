import Header from '../components/header/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'auhmaugmaufm',
  description:
    'This is AUHMAUGMAUFM Web Page by Supitcha Kaewkham, a Computer Science student focusing on Fullstack Development.',
  keywords:
    'Supitcha Kaewkham, auhmaugmaufm,Fullstack Developer, Portfolio, React, Next.js, Computer Science',
  authors: [{ name: 'Supitcha Kaewkham' }],
  openGraph: {
    title: 'auhmaugmaufm',
    description: 'Fullstack Developer Portfolio using Next.js and TailwindCSS.',
    url: 'https://auhmaugmaufm.vercel.app/',
    siteName: 'AUHMAUGMAUFM',
    images: [
      {
        url: '/og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="Rp5eodu5Aw6IlRe8xGzPSkK6hEC6pz3mx4f-pwTB_Qk"
        />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
        </style>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
