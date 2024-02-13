'use client'

import { JSX, useState } from 'react'
import Logo from '../Logo'
import { Button } from '@nextui-org/react'
import { navlinks } from '@/constants'
import { NavLink } from '@/types'
import Link from 'next/link'
import { Link as LinkSpy } from 'react-scroll'
import ScrollSpy from '../ScrollToTop/ScrollSpy'
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'

export default function LandingPageNavbar(): JSX.Element {
    // states
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

    return (
        <nav className='container absolute inset-x-0 z-50 p-2.5 md:p-4'>
            <div className='flex items-center justify-between rounded-2xl p-4'>
                <Link href={'/'}>
                    <Logo className='w-24' dark />
                </Link>

                <ul className='hidden items-center gap-x-4 rounded-full bg-highlight/25 px-8 py-4 font-medium text-white lg:flex'>
                    {navlinks.map((navlink: NavLink, index: number) => (
                        <li
                            className={`${index === 1 || index === 3 ? 'border-x border-light px-4' : ''} duration-300 hover:text-primary`}
                            key={`navlink-${index}`}
                        >
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

                <div className='flex items-center gap-x-4'>
                    <Button className='bg-light font-medium text-primary' size='lg' radius='full'>
                        <ScrollSpy to='/contact-us'>Book Now</ScrollSpy>
                    </Button>

                    <HamburgerMenuIcon onClick={() => setIsNavbarOpen(true)} className='h-8 w-8 text-light lg:hidden' />
                </div>
            </div>

            {/* mobile nav */}
            <div
                className={`${isNavbarOpen ? 'translate-x-0' : 'translate-x-full'} fixed inset-0 flex flex-col justify-between gap-4 space-y-12 bg-secondary p-6 duration-300`}
            >
                <div className='flex items-center justify-between gap-x-4'>
                    <Link href={'/'}>
                        <Logo className='w-24' dark />
                    </Link>

                    <Cross2Icon onClick={() => setIsNavbarOpen(false)} className='h-8 w-8 text-light' />
                </div>

                <ul className='flex flex-col items-center gap-y-6 px-8 py-4 text-3xl font-semibold text-white lg:hidden'>
                    {navlinks.map((navlink: NavLink, index: number) => (
                        <li className={`duration-300 hover:text-primary`} key={`navlink-${index}`}>
                            <LinkSpy
                                onClick={() => setIsNavbarOpen(false)}
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

                <Button
                    onPress={() => setIsNavbarOpen(false)}
                    className='w-full bg-light font-medium text-primary'
                    size='lg'
                    radius='full'
                >
                    <ScrollSpy to='/contact-us'>Book Now</ScrollSpy>
                </Button>
            </div>
        </nav>
    )
}
