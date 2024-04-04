import AssetAddon1 from '@/assets/LandingPage/Addon/webp/asset-addon-1.webp'
import AssetAddon2 from '@/assets/LandingPage/Addon/webp/asset-addon-2.webp'
import AssetAddon3 from '@/assets/LandingPage/Addon/webp/asset-addon-3.webp'
import AssetAddon4 from '@/assets/LandingPage/Addon/webp/asset-addon-4.webp'
import AssetAddon5 from '@/assets/LandingPage/Addon/webp/asset-addon-5.webp'
import AssetAddon6 from '@/assets/LandingPage/Addon/webp/asset-addon-6.webp'
import AssetAddon7 from '@/assets/LandingPage/Addon/webp/asset-addon-7.webp'
import AssetAddon8 from '@/assets/LandingPage/Addon/webp/asset-addon-8.webp'

export type AddOn = {
    name: string
    price: string
    desc: string
    asset?: string
}

export const addOns: AddOn[] = [
    {
        name: 'Medicated Oil',
        price: 'S$5',
        desc: 'Melt Away Muscle Tension',
        asset: AssetAddon1.src,
    },
    {
        name: 'Comfort Eye Bag',
        price: 'S$5',
        desc: 'Cooling Relief for Soothing Headaches',
        asset: AssetAddon2.src,
    },
    {
        name: 'Warming Herb Bag',
        price: 'S$10',
        desc: 'Deep Tissue Relaxation Wrap',
        asset: AssetAddon3.src,
    },
    {
        name: 'Custom / Pure Essential Oils',
        price: 'S$10',
        desc: 'Craft Your Ideal Relaxation Blend',
        asset: AssetAddon4.src,
    },
    {
        name: 'Medicated Plaster',
        price: 'S$30',
        desc: 'Targeted Pain Relief Patch',
        asset: AssetAddon5.src,
    },
    {
        name: 'Herbal Tea',
        price: 'S$3',
        desc: 'Relieve Stress & Find Inner Calm',
        asset: AssetAddon6.src,
    },
    {
        name: 'Herb Eye Bag',
        price: 'S$5',
        desc: 'De-Puff & Brighten Tired Eyes',
        asset: AssetAddon7.src,
    },
    {
        name: 'Aromatic / Herbal Tea',
        price: 'S$3',
        desc: 'Uplifting Sip to Enhance Your Mood ',
        asset: AssetAddon8.src,
    },
]
