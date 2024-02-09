import { JSX } from 'react'
import Logo from '../Logo'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { navlinks } from '@/constants'
import { NavLink } from '@/types'

export default function LandingPageNavbar(): JSX.Element {
    return (
        <nav className='container absolute inset-x-0 top-8 z-50 p-2.5 md:p-4'>
            <div className='flex items-center justify-between rounded-2xl p-4'>
                <Link href={'/'}>
                    <Logo className='w-24' />
                </Link>

                <ul className='flex items-center gap-x-4 rounded-full bg-highlight/25 px-8 py-4 font-medium text-white'>
                    {navlinks.map((navlink: NavLink, index: number) => (
                        <li
                            className={`${index === 1 || index === 3 ? 'border-x border-light px-4' : ''} duration-300 hover:text-primary`}
                            key={`navlink-${index}`}
                        >
                            <Link href={navlink.path}>{navlink.name}</Link>
                        </li>
                    ))}
                </ul>

                <Button className='bg-light font-medium' size='lg' radius='full'>
                    Book Now
                </Button>
            </div>
        </nav>
    )
}
