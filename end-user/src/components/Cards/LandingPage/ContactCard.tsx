import { JSX } from 'react'
import Image, { StaticImageData } from 'next/image'
import AssetPhoneContact from '@/assets/LandingPage/svg/asset-phone-contact.svg'
import AssetEmailContact from '@/assets/LandingPage/svg/asset-mail-contact.svg'
import AssetLocationContact from '@/assets/LandingPage/svg/asset-location-contact.svg'

type Contact = {
    image: StaticImageData
    title: string
    desc: string
}

const contacts: Contact[] = [
    {
        image: AssetPhoneContact,
        title: 'Phone Number',
        desc: '+65 9722 2727',
    },
    {
        image: AssetEmailContact,
        title: 'Email Address',
        desc: 'nails-ops@healingoasis.com.sg',
    },
    {
        image: AssetLocationContact,
        title: 'Store Address',
        desc: 'Tanjong Pagar Plaza BLK 1 #01-47, Singapore (082001)',
    },
]

export default function ContactCard(): JSX.Element {
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3 xl:gap-8'>
            {contacts.map((contact: Contact, index: number) => (
                <div
                    key={index}
                    className='flex flex-col items-center justify-center gap-y-4 rounded-2xl border bg-secondary p-8 text-center text-light shadow'
                >
                    <div className='flex w-full flex-col items-center justify-end gap-y-2'>
                        <Image
                            width={contact.image.width}
                            height={contact.image.height}
                            src={contact.image.src}
                            alt={contact.title}
                        />
                        <h2 className='text-xl'>{contact.title}</h2>
                    </div>

                    <p className='h-3/5 text-lg'>{contact.desc}</p>
                </div>
            ))}
        </div>
    )
}
