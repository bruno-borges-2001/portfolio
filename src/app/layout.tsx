import '../styles/globals.scss'

export default function RootLayout({ children }: { children: JSX.Element }) {
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
