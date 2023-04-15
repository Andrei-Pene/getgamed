export default function AuthRootLayout({children}:{children : React.ReactNode}) {
    return (
        <html lang="en">
            <head />
            <body className='h-screen w-screen bg-gradient-to-b from-slate-800 via-orange-300 to-cyan-500'>
                {children}
            </body>
        </html>
    )
}