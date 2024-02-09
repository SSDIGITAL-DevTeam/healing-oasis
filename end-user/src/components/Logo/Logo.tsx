import { JSX } from 'react'
import Image from 'next/image'
import AssetLogoLight from '@/assets/Logo/asset-logo-for-light.webp'
import AssetLogoDark from '@/assets/Logo/asset-logo-for-dark.webp'

export default function Logo({
    className,
    dark = false,
    transparent = false,
}: {
    className?: string
    dark?: boolean
    transparent?: boolean
}): JSX.Element {
    return (
        <figure>
            {dark ? (
                <Image className={className} src={AssetLogoDark} alt='Logo' priority />
            ) : (
                <Image
                    className={`${className} ${transparent ? '' : 'rounded bg-light p-1'}`}
                    src={AssetLogoLight}
                    alt='Logo'
                    priority
                />
            )}
        </figure>
    )
}
