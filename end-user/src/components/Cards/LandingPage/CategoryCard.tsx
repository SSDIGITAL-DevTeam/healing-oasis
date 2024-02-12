import { Category } from '@/data/categories'
import { Image } from '@nextui-org/react'
import Link from 'next/link'
import { JSX } from 'react'

type Props = {
    category: Category
}

export default function CategoryCard({ category }: Props): JSX.Element {
    return (
        <div className='relative'>
            <Image src={category.image.src} alt={category.title} />

            <div className='absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 text-light'>
                <p className='text-center text-xl font-medium md:text-2xl xl:text-3xl'>
                    {category.title === 'Top 3 Best Selling' && '⭐'} {category.title}
                </p>

                <ul className='flex w-full flex-col items-center gap-2 p-4 sm:p-8 md:gap-4'>
                    {category.services.map((service: { name: string; desc: string }, index: number) => (
                        <li
                            className='w-full rounded-full border px-4 py-2 text-center text-sm'
                            key={`service-${index}`}
                        >
                            <Link className='space-y-2' href={'#'}>
                                <p className=''>{service.name}</p>

                                <p className=''>{service.desc}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
