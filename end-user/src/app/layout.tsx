import './globals.css'
import { JSX, ReactNode } from 'react'
import { Providers } from './providers'
import LandingPageNavbar from '@/components/Navbar/LandingPageNavbar'
import LandingPageFooter from '@/components/Footer/LandingPageFooter'
import ScrollToTop from '@/components/ScrollToTop'
import { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://healingoasis.com.sg'), // later change this url with real domain
    title: 'Healing Oasis | Massage and Spa Singapore',
    description:
        'Revitalize your mind, body, and spirit with spa & massage treatments at Healing Oasis. Book your session now and feel the comfort.',
    keywords: [
        'massage in tanjong pagar',
        'tanjong pagar massage',
        'massage near tanjong pagar',
        'best massage in singapore',
    ],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        images: '/webp/asset-og-healing-oasis.webp',
    },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
    return (
        <html lang='en'>
            <body id='/home'>
                <Providers>
                    <LandingPageNavbar />

                    {children}

                    <LandingPageFooter />

                    <ScrollToTop />
                </Providers>
            </body>
        </html>
    )
}
