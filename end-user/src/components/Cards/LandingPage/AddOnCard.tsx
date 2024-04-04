import { JSX } from 'react'
import { Card, CardBody, Image } from '@nextui-org/react'
import { AddOn } from '@/data/addons'

type Props = {
    addon: AddOn
}

export default function AddOnCard({ addon }: Props): JSX.Element {
    return (
        <Card className='bg-transparent shadow-none' shadow='none'>
            <CardBody>
                <div className='flex justify-between gap-4 lg:items-center lg:gap-8'>
                    <div className='flex w-3/5 flex-col justify-between gap-4 lg:flex-row lg:items-center lg:gap-8'>
                        <div className=''>
                            <p className='text-lg font-semibold text-primary sm:whitespace-nowrap lg:text-xl'>
                                {addon.name}
                            </p>

                            <p className='text-sm font-normal text-slate-500'>{addon.desc}</p>
                        </div>

                        <p className='text-lg font-semibold text-primary sm:whitespace-nowrap lg:hidden lg:text-2xl'>
                            {addon.price}
                        </p>
                    </div>

                    <p className='hidden text-lg font-semibold text-primary sm:whitespace-nowrap lg:block lg:text-2xl'>
                        {addon.price}
                    </p>

                    <div className='flex w-2/5 justify-end'>
                        <Image className='aspect-square object-cover' src={addon.asset} alt={addon.name} />
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
