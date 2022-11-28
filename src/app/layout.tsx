import { ReactNode } from 'react'
import '../styles/globals.scss'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Bruno Borges | Front end Developer</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
