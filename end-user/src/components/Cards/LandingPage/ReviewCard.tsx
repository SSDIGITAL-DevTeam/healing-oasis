import { Review } from '@/data/reviews'
import Image from 'next/image'
import { JSX } from 'react'

type Props = {
    review: Review
}

export default function ReviewCard({ review }: Props): JSX.Element {
    return (
        <div className='flex h-full flex-col items-center justify-center gap-y-4 rounded-2xl bg-white p-8 text-center shadow'>
            <div className='flex w-full flex-col items-center justify-end gap-y-2'>
                <p className=''>{review.content}</p>
            </div>

            <div className='flex flex-col items-center gap-4'>
                <p>⭐⭐⭐⭐⭐</p>

                <Image
                    width={review.image.width}
                    height={review.image.height}
                    src={review.image.src}
                    alt={review.name}
                />

                <p className=''>{review.name}</p>

                <p className=''>{review.job}</p>
            </div>
        </div>
    )
}
