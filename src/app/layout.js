import './globals.css'
import localFont from 'next/font/local'

// Replace 'YourFontName' with your actual font name and update the path
const oshigo = localFont({
  src: '../../public/fonts/oshigo.otf',
  variable: '--font-oshigo',
})

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oshigo.variable} bg-[#F8C39A]`}>
        {children}
      </body>
    </html>
  )
}
