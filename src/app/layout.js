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

const murecho = localFont({
  src: '../../public/fonts/murecho.otf',
  variable: '--font-murecho',
})

const domine = localFont({
  src: '../../public/fonts/domine.otf',
  variable: '--font-domine',
})

export const metadata = {
  title: 'Julia Szubert',
  description: 'Portfolio website'
}

const rammetto = localFont({
  src: '../../public/fonts/rammetto.otf',
  variable: '--font-rammetto',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${oshigo.variable} ${murecho.variable} ${domine.variable} ${sacramento.variable} ${rammetto.variable} bg-[#F8C39A]`}>
        <CustomCursor />  
        {children}
      </body>
    </html>
  )
}
