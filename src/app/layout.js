import './globals.css'
import localFont from 'next/font/local'
import CustomCursor from '@/components/Cursor';

const oshigo = localFont({
  src: '../../public/fonts/oshigo.otf',
  variable: '--font-oshigo',
})

export const metadata = {
  title: 'Julia Szubert',
  description: 'Portfolio website',
  icons: [
    { url: '/favicon.svg', type: 'image/svg+xml' }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oshigo.variable} bg-[#F8C39A]`}>
        <CustomCursor />  
        {children}
      </body>
    </html>
  )
}
