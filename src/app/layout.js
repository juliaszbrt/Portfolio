
import './globals.css'

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F8C39A]">
        {children}
      </body>
    </html>
  )
}
