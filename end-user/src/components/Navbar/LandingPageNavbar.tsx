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
import { motion } from 'framer-motion'

export default function LandingPageNavbar(): JSX.Element {
    // states
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

    return (
        <nav className='container absolute inset-x-0 z-50 p-2.5 md:p-4 lg:mt-8'>
            <div className='flex items-center justify-between rounded-2xl p-4'>
                <Link href={'/'}>
                    <Logo className='w-24' dark />
                </Link>

                <ul className='hidden items-center gap-x-4 rounded-full bg-highlight/25 px-8 py-4 font-medium text-white lg:flex'>
                    {navlinks.map((navlink: NavLink, index: number) => (
                        <li
                            className={`${index === 1 || index === 3 ? 'border-x border-light px-4' : ''} duration-300 hover:text-highlight`}
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
                    <Button className='hidden bg-light font-medium text-primary lg:block' size='lg' radius='full'>
                        <ScrollSpy to='/contact-us'>Book Now</ScrollSpy>
                    </Button>

                    <HamburgerMenuIcon onClick={() => setIsNavbarOpen(true)} className='h-8 w-8 text-light lg:hidden' />
                </div>
            </div>

            {/* mobile nav */}
            <div
                className={`${isNavbarOpen ? 'translate-x-0' : 'translate-x-full'} fixed inset-0 z-50 flex max-h-screen flex-col justify-between gap-4 space-y-12 overflow-y-auto bg-light p-6 duration-500 ease-in-out`}
            >
                <div className='flex items-center justify-between gap-x-4'>
                    <Link href={'/'}>
                        <Logo className='w-24' />
                    </Link>

                    <Cross2Icon onClick={() => setIsNavbarOpen(false)} className='h-8 w-8 font-semibold text-primary' />
                </div>

                <ul className='flex flex-col items-center gap-y-6 p-2 text-xl font-medium text-primary lg:hidden'>
                    {navlinks.map((navlink: NavLink, index: number) => (
                        <motion.li
                            className='w-full'
                            initial={{ x: '100%' }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.2, delay: (0.2 * index) / 2 }}
                            key={`navlink-${index}`}
                        >
                            <LinkSpy
                                onClick={() => setIsNavbarOpen(false)}
                                className={`block w-full rounded-lg border border-primary/10 bg-white p-4 duration-300 hover:text-primary`}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={800}
                                to={navlink.path}
                            >
                                {navlink.name}
                            </LinkSpy>
                        </motion.li>
                    ))}
                </ul>

                <div className='p-2'>
                    <Button
                        onPress={() => setIsNavbarOpen(false)}
                        className='w-full'
                        color='primary'
                        size='lg'
                        radius='full'
                    >
                        <ScrollSpy to='/contact-us'>Book Now</ScrollSpy>
                    </Button>
                </div>
            </div>
        </nav>
    )
}
