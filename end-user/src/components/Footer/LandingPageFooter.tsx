'use client'

import { JSX, useEffect, useState } from 'react'
import Logo from '../Logo'
import Link from 'next/link'
import { WHATSAPP_LINK, navlinks } from '@/constants'
import { NavLink } from '@/types'
import { Link as LinkSpy } from 'react-scroll'
import { Image } from '@nextui-org/react'
import Whatsapp from '@/assets/LandingPage/svg/whatsapp.svg'
import AssetPhone from '@/assets/LandingPage/svg/asset-phone-footer.svg'
import AssetMail from '@/assets/LandingPage/svg/asset-mail-footer.svg'
import AssetAddress from '@/assets/LandingPage/svg/asset-map-footer.svg'

export default function LandingPageFooter(): JSX.Element {
    // state
    const [scrollTop, setScrollTop] = useState<number>(0)

    // useeffect
    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <footer className='bg-highlight text-primary'>
            <div className='container space-y-8 p-6 sm:p-8'>
                <div className='flex flex-col items-center gap-8 lg:flex-row lg:justify-between'>
                    <div className='space-y-6 text-center lg:text-left'>
                        <p className='max-w-3xl text-xl font-semibold italic lg:text-2xl'>
                            Recharge your Energy, Rejuvenate Your Body, Revitalize Your Mind.
                        </p>
                    </div>
                </div>

                <hr className='border-light' />

                <div className='flex flex-col gap-8 xl:flex-row xl:justify-between'>
                    <div className='flex flex-col items-center gap-6 md:flex-row md:justify-between lg:gap-28'>
                        <Link href={'/'}>
                            <Logo className='w-36' transparent />
                        </Link>

                        <ul className='flex flex-col items-center gap-y-4 text-xl font-semibold sm:flex-row sm:gap-x-8'>
                            {navlinks.map((navlink: NavLink, index: number) => (
                                <li className={`duration-300 hover:text-primary`} key={`navlink-${index}`}>
                                    <LinkSpy
                                        className='cursor-pointer'
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={800}
                                        to={navlink.path}
                                    >
                                        {navlink.name}
                                    </LinkSpy>
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

            {/* whatsapp */}
            <div>
                <a
                    id='whatsapp-cta'
                    aria-label='The Healing Loft'
                    href={WHATSAPP_LINK}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${
                        scrollTop > 0 ? 'scale-100' : 'scale-0'
                    } fixed bottom-6 right-4 z-40 rounded-full bg-[#25d366] px-3 py-2.5 text-white shadow-lg duration-200 hover:scale-105 hover:bg-[#075e54] hover:text-white lg:right-6 lg:p-4 lg:py-2`}
                >
                    <div className='flex items-center gap-x-2 font-semibold'>
                        <Image src={Whatsapp.src} width={28} height={28} alt='WhatsApp' />
                        <span className='hidden lg:inline'>Book Via WhatsApp</span>
                    </div>
                </a>
            </div>
        </footer>
    )
}
