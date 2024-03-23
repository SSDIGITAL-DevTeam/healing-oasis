'use client'

import { JSX, ReactNode } from 'react'
import { Link } from 'react-scroll'

type Props = {
    children: ReactNode
    to: string
}

export default function ScrollSpy({ children, to }: Props): JSX.Element {
    return (
        <Link
            className='flex h-full w-full items-center justify-center rounded-full'
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            to={to}
        >
            {children}
        </Link>
    )
}
