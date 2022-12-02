import '../styles/globals.css'
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
        {children}</body>
    </html>
  )
}
