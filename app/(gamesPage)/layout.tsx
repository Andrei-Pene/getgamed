import Header from "../../components/Header"

export default function GamesHomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      
      <body
      className='h-screen w-screen bg-gradient-to-r from-slate-800 via-gray-400 to-black'
      >
      <Header />
        
      {children}
      </body>
      <div id="modal"> </div>
    </html>
  )
}
