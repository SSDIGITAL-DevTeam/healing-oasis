'use client'

import { JSX, useState } from 'react'
import Gallery1 from '@/assets/LandingPage/Gallery/webp/asset-gallery-1.webp'
import Gallery2 from '@/assets/LandingPage/Gallery/webp/asset-gallery-2.webp'
import Gallery3 from '@/assets/LandingPage/Gallery/webp/asset-gallery-3.webp'
import Gallery4 from '@/assets/LandingPage/Gallery/webp/asset-gallery-4.webp'
import Gallery5 from '@/assets/LandingPage/Gallery/webp/asset-gallery-5.webp'
import Gallery6 from '@/assets/LandingPage/Gallery/webp/asset-gallery-6.webp'
import Gallery7 from '@/assets/LandingPage/Gallery/webp/asset-gallery-7.webp'
import Gallery8 from '@/assets/LandingPage/Gallery/webp/asset-gallery-8.webp'
import FsLightbox from 'fslightbox-react'
import { EnterFullScreenIcon } from '@radix-ui/react-icons'

export default function Galleries(): JSX.Element {
    const [toggler, setToggler] = useState<boolean>(false)
    const [imageIndex, setImageIndex] = useState<number>(0)

    const galleries = [
        Gallery1.src,
        Gallery2.src,
        Gallery3.src,
        Gallery4.src,
        Gallery5.src,
        Gallery6.src,
        Gallery7.src,
        Gallery8.src,
    ]

    return (
        <div>
            <div className='columns-2 space-y-4 lg:columns-4'>
                {galleries.map((gallery: string, index: number) => (
                    <div key={index} className='group relative'>
                        <div
                            className='absolute inset-0 flex cursor-pointer items-center justify-center rounded-2xl duration-200 hover:bg-white/60'
                            onClick={() => {
                                setToggler(!toggler)
                                setImageIndex(index)
                            }}
                        >
                            <EnterFullScreenIcon className='h-8 w-8 text-primary opacity-0 duration-200 group-hover:opacity-100' />
                        </div>

                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className='break-inside-avoid rounded-2xl hover:cursor-pointer'
                            src={gallery}
                            alt='interior'
                            loading='lazy'
                        />
                    </div>
                ))}
            </div>
            <FsLightbox toggler={toggler} sources={galleries} sourceIndex={imageIndex} types={['image']} />
        </div>
    )
}
