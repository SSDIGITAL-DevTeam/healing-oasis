import './globals.css'
import { JSX, ReactNode } from 'react'
import { Providers } from './providers'

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
    return (
        <html lang='en'>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
