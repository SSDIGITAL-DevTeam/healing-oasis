import { StaticImageData } from 'next/image'
import AssetAdvantage1 from '@/assets/LandingPage/webp/asset-hero-landing-page.webp'
import AssetAdvantage2 from '@/assets/LandingPage/webp/asset-advantage-2.webp'
import AssetAdvantage3 from '@/assets/LandingPage/webp/asset-advantage-3.webp'

export type Advantage = {
    image: StaticImageData
    name: string
    content: string
}

export const advantages: Advantage[] = [
    {
        image: AssetAdvantage1,
        name: 'Tranquil Spaces ',
        content: 'Immerse yourself in the serenity of our clean and inviting environment.',
    },
    {
        image: AssetAdvantage2,
        name: 'Dedicated Therapists',
        content: 'Our dedicated therapists are devoted to provide heartfelt service.',
    },
    {
        image: AssetAdvantage3,
        name: 'Gateway to Vitality',
        content:
            'A range of services guaranteed to leave you refreshed and prepared for whatever life throws your way.',
    },
]
