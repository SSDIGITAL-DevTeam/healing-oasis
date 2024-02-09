import './globals.css'
import { JSX, ReactNode } from 'react'
import { Providers } from './providers'
// import LandingPageNavbar from '@/components/Navbar/LandingPageNavbar'
import LandingPageFooter from '@/components/Footer/LandingPageFooter'

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    {/* <LandingPageNavbar /> */}

                    {children}

                    <LandingPageFooter />
                </Providers>
            </body>
        </html>
    )
}
