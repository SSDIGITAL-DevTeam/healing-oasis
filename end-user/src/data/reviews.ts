import { StaticImageData } from 'next/image'
import AssetSylvia from '@/assets/LandingPage/webp/asset-sylvia.webp'
import AssetRico from '@/assets/LandingPage/webp/asset-rico.webp'
import AssetStephanie from '@/assets/LandingPage/webp/asset-stephanie.webp'
import AssetMichelle from '@/assets/LandingPage/webp/asset-michelle.webp'

export type Review = {
    image: StaticImageData
    name: string
    job: string
    content: string
}

export const reviews: Review[] = [
    {
        image: AssetSylvia,
        name: 'Sylvia Tanadi',
        job: 'Freelance Designer',
        content:
            'This spa wasnt just a massage, it was a complete escape. From the moment I walked in, the soothing ambience and friendly staff melted away my stress. My therapist was a miracle worker, and the body scrub and facial left my skin glowing. I feel like Ive returned from a week-long  – reborn and rejuvenated. Thank you for the incredible experience',
    },
    {
        image: AssetRico,
        name: 'Rico Ghozaly',
        job: 'Software Developer',
        content:
            'Lets be honest, I dont always prioritize self-care. But after a hectic week, I booked a hot stone massage at your spa, and it was pure magic. The warmth of the stones seeped into my muscles, loosening every knot and tension. I left feeling lighter, calmer, and ready to tackle anything. You have shown me the power of pampering – I will definitely be back!',
    },
    {
        image: AssetStephanie,
        name: 'Stephanie Huangga',
        job: 'Online Entrepreneur',
        content:
            "As a busy mom of two, finding time for myself feels like a luxury. But sneaking away for a facial at your spa was the best decision I have made in ages. The skilled esthetician tailored the treatment to my skin's needs, and the whole experience was pure bliss. I emerged feeling refreshed, radiant, and even a little bit like my old self again. ",
    },
    {
        image: AssetMichelle,
        name: 'Michelle & co',
        job: 'Blogger',
        content:
            'We needed a spark to reignite the romance in our relationship, and your spa delivered exactly that. The couples massage was the perfect blend of relaxation and intimacy, and the private jacuzzi afterward was pure magic. We laughed, we connected, and we remembered why we fell in love in the first place.  brought us closer than ever before ',
    },
]
