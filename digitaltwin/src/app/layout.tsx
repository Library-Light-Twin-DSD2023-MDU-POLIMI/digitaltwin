import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header/header'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> 
        <Header/>
      </body>
    </html>
  )
}
