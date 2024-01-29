import { JSX, ReactNode } from 'react'

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    )
}
