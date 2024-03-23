import { Review } from '@/data/reviews'
import { Avatar } from '@nextui-org/react'
import { JSX } from 'react'

type Props = {
    review: Review
}

export default function ReviewCard({ review }: Props): JSX.Element {
    return (
        <div className='flex h-full flex-col items-center justify-center gap-y-4 rounded-2xl bg-white p-8 shadow'>
            <div className='flex w-full flex-col items-center justify-end gap-y-2'>
                <p className=''>{review.content}</p>
            </div>

            <div className='mt-auto flex flex-col items-center gap-4'>
                <p>⭐⭐⭐⭐⭐</p>

                <Avatar name={review.name} isBordered color='secondary' />

                <p className=''>{review.name}</p>
            </div>
        </div>
    )
}
