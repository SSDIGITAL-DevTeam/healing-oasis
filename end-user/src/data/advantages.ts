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
        content: 'Immerse yourself in the serenity of our clean and inviting environment',
    },
    {
        image: AssetAdvantage2,
        name: 'Dedicated Therapist',
        content: ' Our skilled therapists are committed to delivering service from the heart',
    },
    {
        image: AssetAdvantage3,
        name: 'Competitive Advantage',
        content: 'Experience the difference with Healing Oasis - where every touch is a promise of tranquility',
    },
]
