import { JSX } from 'react'
import { Category } from '@/data/categories'
import { Card, CardBody, Image } from '@nextui-org/react'
import AssetStar from '@/assets/LandingPage/svg/asset-star.svg'

type Props = {
    category: Category
}

export default function CategoryCard({ category }: Props): JSX.Element {
    return (
        <Card className='relative overflow-visible shadow-none'>
            {category.title === 'Top 3 Best Selling' && (
                <img className='absolute -right-4 -top-8 z-50 w-20' src={AssetStar.src} alt='star' />
            )}

            <CardBody className='relative p-0'>
                {/* overlay */}
                <div className='absolute inset-0 z-40 flex aspect-video items-center justify-center rounded-t-2xl bg-black/50'>
                    <p className='text-center text-2xl font-semibold text-light lg:text-4xl'>{category.title}</p>
                </div>

                <Image
                    className='aspect-video rounded-t-2xl object-cover'
                    src={category.image.src}
                    alt={category.title}
                    radius='none'
                />

                <div className='lg:p-2'>
                    <table className='mb-auto min-w-full'>
                        <thead>
                            <tr>
                                <th className='w-1/2 text-left'>
                                    <span className='rounded-full bg-primary px-4 py-2 text-xs font-normal text-light sm:text-base'>
                                        Services
                                    </span>
                                </th>

                                <th className='w-1/2 text-center'>
                                    <span className='whitespace-nowrap rounded-full bg-primary px-4 py-2 text-xs font-normal text-light sm:text-base'>
                                        Every 30 Minutes
                                    </span>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {category.services.map((service, index) => (
                                <tr key={`service-${index}`}>
                                    <td className='w-3/5'>
                                        <div>
                                            <p className='sm:whitespace-nowrap'>{service.name}</p>

                                            <p className='text-sm font-normal text-slate-500'>{service.desc}</p>
                                        </div>
                                    </td>

                                    <td className='w-2/5 text-center'>{service.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    )
}
