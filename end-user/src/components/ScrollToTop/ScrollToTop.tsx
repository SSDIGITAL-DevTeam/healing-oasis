'use client'

import { Button } from '@nextui-org/react'
import { ArrowUpIcon } from '@radix-ui/react-icons'
import { JSX, useEffect, useState } from 'react'
import { Link } from 'react-scroll'

export default function ScrollToTop(): JSX.Element {
    const [scrollTop, setScrollTop] = useState<number>(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollTop(window.scrollY)
        })

        return () => window.removeEventListener('scroll', () => setScrollTop(0))
    }, [])

    return (
        <div className={`${scrollTop < 10 ? 'scale-0' : 'scale-100'} fixed bottom-8 right-8 z-40 duration-150`}>
            <Button color='primary' isIconOnly radius='full'>
                <Link
                    className='flex h-full w-full items-center justify-center rounded-full'
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={800}
                    to='/home'
                >
                    <ArrowUpIcon className='h-6 w-6' />
                </Link>
            </Button>
        </div>
    )
}
