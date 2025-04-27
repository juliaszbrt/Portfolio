import './globals.css'
import localFont from 'next/font/local'
import CustomCursor from '@/components/Cursor';

const oshigo = localFont({
  src: '../../public/fonts/oshigo.otf',
  variable: '--font-oshigo',
})

const sacramento = localFont({
  src: '../../public/fonts/sacramento.otf',
  variable: '--font-sacramento',
})

const playwrite = localFont({
  src: '../../public/fonts/playwrite.otf',
  variable: '--font-playwrite',
})

export const metadata = {
  title: 'Julia Szubert',
  description: 'Portfolio website'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${oshigo.variable} ${playwrite.variable} bg-[#F8C39A]`}>
        <CustomCursor />  
        {children}
      </body>
    </html>
  )
}
