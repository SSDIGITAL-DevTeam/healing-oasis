import { StaticImageData } from 'next/image'
import AssetTop3BestSelling from '@/assets/LandingPage/webp/asset-top-3-best-selling.webp'
import AssetAccupresure from '@/assets/LandingPage/webp/asset-accupressure.webp'
import AssetTraditional from '@/assets/LandingPage/webp/asset-traditional.webp'
import AssetRelaxing from '@/assets/LandingPage/webp/asset-relaxing.webp'
import AssetSpecialTreatment from '@/assets/LandingPage/webp/asset-special-treatment.webp'
import AssetTheraputicTreatment from '@/assets/LandingPage/webp/asset-theraputic-treatment.webp'
import AssetHero from '@/assets/LandingPage/webp/asset-advantage-3.webp'

export type Service = {
    name: string
    desc: string
    asset?: StaticImageData
}

export type Category = {
    image: StaticImageData
    title: string
    services: Service[]
}

export const categories: Category[] = [
    {
        image: AssetTop3BestSelling,
        title: 'Top 3 Best Selling',
        services: [
            {
                name: 'Signature Body Masssage',
                desc: 'S$39 - 30 minutes',
                asset: AssetHero,
            },
            {
                name: 'Authentic Foot Reflexology',
                desc: 'S$39 - 30 minutes',
                asset: AssetHero,
            },
            {
                name: '3 in 1 Packages',
                desc: 'S$89 - 90 minutes',
                asset: AssetHero,
            },
        ],
    },
    {
        image: AssetAccupresure,
        title: 'Accupressure',
        services: [
            {
                name: 'Head Massage',
                desc: 'S$25 - 30 minutes',
            },
            {
                name: 'Neck Massage',
                desc: 'S$29 - 30 minutes',
            },
            {
                name: 'Shoulder Massage',
                desc: 'S$29 - 30 minutes',
            },
        ],
    },
    {
        image: AssetTraditional,
        title: 'Traditional',
        services: [
            {
                name: 'Gua Sha',
                desc: 'S$25 - 30 minutes',
            },
            {
                name: 'Ba Guan',
                desc: 'S$25 - 30 minutes',
            },
        ],
    },
    {
        image: AssetRelaxing,
        title: 'Relaxing',
        services: [
            {
                name: 'Arms / Hands Massage',
                desc: 'S$25 - 30 minutes',
            },
            {
                name: 'Thigh / Calves Massage',
                desc: 'S$29 - 30 minutes',
            },
        ],
    },
    {
        image: AssetSpecialTreatment,
        title: 'Special Treatment',
        services: [
            {
                name: 'Ear Cleaning',
                desc: 'S$29 - 30 minutes',
            },
        ],
    },
    {
        image: AssetTheraputicTreatment,
        title: 'Theraputic Treatment',
        services: [
            {
                name: 'Back Massage',
                desc: 'S$29 - 30 minutes',
            },
        ],
    },
]
