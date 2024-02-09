import { Button } from '@nextui-org/react'
import { JSX } from 'react'
import Logo from '../Logo'
import Link from 'next/link'
import { navlinks } from '@/constants'
import { NavLink } from '@/types'
import AssetPhone from '@/assets/LandingPage/svg/asset-phone-footer.svg'
import AssetMail from '@/assets/LandingPage/svg/asset-mail-footer.svg'
import AssetAddress from '@/assets/LandingPage/svg/asset-map-footer.svg'

export default function LandingPageFooter(): JSX.Element {
    return (
        <footer className='bg-highlight text-primary'>
            <div className='container space-y-8 p-6 sm:p-8'>
                <div className='flex flex-col items-center gap-8 lg:flex-row lg:justify-between'>
                    <div className='space-y-6 text-center lg:text-left'>
                        <p className='text-xl font-semibold italic lg:text-2xl'>
                            Revitalize Your Spirit, Renew Your Energy: Unwind at Healing Oasis,
                        </p>

                        <p className='text-xl font-semibold italic lg:text-2xl'>
                            Where Tranquility Meets Skilled Touch, for Your Sanctuary of Relaxation
                        </p>
                    </div>

                    <Button className='w-44 lg:w-max' size='lg' color='secondary' radius='full'>
                        Book Now
                    </Button>
                </div>

                <hr className='border-light' />

                <div className='flex flex-col gap-8 xl:flex-row'>
                    <div className='flex flex-col items-center gap-6 md:flex-row md:justify-between'>
                        <Link href={'/'}>
                            <Logo className='w-36' transparent />
                        </Link>

                        <ul className='flex flex-col items-center gap-y-4 text-xl font-semibold sm:flex-row sm:gap-x-8'>
                            {navlinks.map((navlink: NavLink, index: number) => (
                                <li className={`duration-300 hover:text-primary`} key={`navlink-${index}`}>
                                    <Link href={navlink.path}>{navlink.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <ul className='mx-auto flex flex-col items-center gap-y-4 text-center font-medium xl:items-start'>
                        <li>
                            <div className='flex items-center gap-x-2'>
                                <img src={AssetPhone.src} alt='Phone' />

                                <a href='tel:+6597222727' target='_blank' rel='noopener noreferrer'>
                                    +65 9722 2727
                                </a>
                            </div>
                        </li>

                        <li>
                            <div className='flex items-center gap-x-2'>
                                <img src={AssetMail.src} alt='Email' />

                                <a
                                    href='mailto:nails-ops@healingoasis.com.sg'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    nails-ops@healingoasis.com.sg
                                </a>
                            </div>
                        </li>

                        <li>
                            <div className='flex items-center gap-x-2'>
                                <img src={AssetAddress.src} alt='Address' />

                                <address>Tanjong Pagar Plaza BLK 1 #01-47, Singapore (082001)</address>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='bg-secondary p-6 sm:p-8'>
                <p className='text-center text-light'>@2024 HEALING OASIS. All Rights Reserved</p>
            </div>
        </footer>
    )
}
