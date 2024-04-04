import { StaticImageData } from 'next/image'
import AssetTop3BestSelling from '@/assets/LandingPage/webp/asset-top-3-best-selling.webp'
import AssetAccupresure from '@/assets/LandingPage/webp/asset-accupressure.webp'
import AssetTraditional from '@/assets/LandingPage/webp/asset-traditional.webp'
import AssetRelaxing from '@/assets/LandingPage/webp/asset-relaxing.webp'
import AssetSpecialTreatment from '@/assets/LandingPage/webp/asset-special-treatment.webp'
import AssetTheraputicTreatment from '@/assets/LandingPage/webp/asset-theraputic-treatment.webp'
import AssetOtherTreatment from '@/assets/LandingPage/webp/asset-other-treatment.webp'
import AssetHero from '@/assets/LandingPage/webp/asset-advantage-3.webp'

export type Service = {
    name: string
    desc: string
    price: string
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
        title: 'Best Selling Treatment',
        services: [
            {
                name: 'Signature Body Masssage',
                price: 'S$29',
                desc: 'Treat yourself to Signature Body Relaxation.',
                asset: AssetHero,
            },
            {
                name: 'Authentic Foot Reflexology',
                price: 'S$25',
                desc: 'Feel the Authentic Foot Revival.',
                asset: AssetHero,
            },
            // {
            //     name: 'Buy 1 Get 3 Free',
            //     price: 'S$87',
            //     desc: 'Enjoy all 3 of our best services worth $100',
            //     asset: AssetHero,
            // },
        ],
    },
    {
        image: AssetAccupresure,
        title: 'Accupressure Treatment',
        services: [
            {
                name: 'Head Massage',
                price: 'S$29',
                desc: 'Enjoy Soothing Head Massage Therapy',
            },
            {
                name: 'Neck Massage',
                price: 'S$29',
                desc: 'Feel Relaxed with Neck Massage Service',
            },
            {
                name: 'Shoulder Massage',
                price: 'S$29',
                desc: 'Tension-Relief Shoulder Massage Experience',
            },
        ],
    },
    {
        image: AssetTraditional,
        title: 'Traditional Treatment',
        services: [
            {
                name: 'Gua Sha',
                price: 'S$25',
                desc: 'Rejuvenating Gua Sha Treatment',
            },
            {
                name: 'Ba Guan',
                price: 'S$25',
                desc: 'Traditional Ba Guan Therapy',
            },
        ],
    },
    {
        image: AssetRelaxing,
        title: 'Relaxing Treatment',
        services: [
            {
                name: 'Arms / Hands Massage',
                price: 'S$25',
                desc: 'Soothing Arm and Hand Massage',
            },
            {
                name: 'Thigh / Calves Massage',
                price: 'S$29',
                desc: 'Revitalizing Thigh and Calves Massage',
            },
        ],
    },
    {
        image: AssetSpecialTreatment,
        title: 'Special Treatment',
        services: [
            {
                name: 'Ear Cleaning',
                price: 'S$29',
                desc: 'Enjoy Our Gentle Ear Care Service',
            },
        ],
    },
    {
        image: AssetTheraputicTreatment,
        title: 'Therapeutic Treatment',
        services: [
            {
                name: 'Back Massage',
                price: 'S$29',
                desc: 'Relaxing Back Massage Therapy',
            },
        ],
    },
    {
        image: AssetOtherTreatment,
        title: 'Other Treatment',
        services: [
            {
                name: 'Double Bliss',
                price: 'S$50',
                desc: 'Enjoy treatment from 2 therapists at the same time',
            },
        ],
    },
]
