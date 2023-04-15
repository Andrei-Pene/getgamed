import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>{children}</body>
      <div id="modal"> </div>
    </html>
  )
}