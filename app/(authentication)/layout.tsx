export default function AuthRootLayout({children}:{children : React.ReactNode}) {
    return (
        <html lang="en">
            <head />
            <body className='h-screen w-screen bg-gradient-to-r from-slate-800 via-gray-400 to-black'>
                {children}
            </body>
        </html>
    )
}