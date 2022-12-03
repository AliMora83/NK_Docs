import '../styles/globals.css'
import Footer from './footer'
import Navmenu from './navmenu'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Navmenu />
        {children}
        <Footer />
        </body>
    </html>
  )
}
