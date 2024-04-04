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
            className='flex h-full items-center justify-center'
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
