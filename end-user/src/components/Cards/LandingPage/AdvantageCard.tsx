import { Advantage } from '@/data/advantages'
import { Image } from '@nextui-org/react'
import { JSX } from 'react'

type Props = {
    advantage: Advantage
}

export default function AdvantageCard({ advantage }: Props): JSX.Element {
    return (
        <div className='flex flex-col items-center justify-center gap-y-6 text-center'>
            <Image className='mx-auto md:max-w-[80%]' src={advantage.image.src} alt={advantage.name} />

            <header className='space-y-4 text-primary'>
                <h3 className='text-xl font-bold md:text-3xl'>{advantage.name}</h3>

                <p className='md:text-2xl'>{advantage.content}</p>
            </header>

            <hr className='mt-4 w-full max-w-xs border border-primary' />
        </div>
    )
}
