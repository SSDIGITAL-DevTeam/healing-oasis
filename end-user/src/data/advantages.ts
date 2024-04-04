import { StaticImageData } from 'next/image'
import AssetAdvantage1 from '@/assets/LandingPage/webp/asset-advantage-1.webp'
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
        name: 'Clean and Hygiene',
        content: 'Exemplary Cleanliness and Uncompromising Hygiene Standards Ensured Throughout Every Service.',
    },
    {
        image: AssetAdvantage2,
        name: 'Certified Professional Therapist',
        content:
            'Our Team Comprises Highly Skilled and Certified Professional Therapists, Dedicated to Providing Exceptional Care.',
    },
    {
        image: AssetAdvantage3,
        name: 'Most Complete Services',
        content:
            'Enjoy a Wide Range of Services Tailored to Meet Your Every Need, Ensuring You Experience the Most Complete and Gratifying Wellness Journey.',
    },
]
