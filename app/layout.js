export const metadata = {
  title: 'Hello Vercel',
  description: 'A 90s style Hello World with visit counter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ 
        backgroundColor: '#c0c0c0', 
        fontFamily: '"Times New Roman", Times, serif',
        margin: '2rem'
      }}>
        {children}
      </body>
    </html>
  )
}
