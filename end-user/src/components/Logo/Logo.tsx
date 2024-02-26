import { JSX } from 'react'
import AssetLogoLight from '@/assets/Logo/asset-logo-for-light.webp'
import AssetLogoDark from '@/assets/Logo/asset-logo-for-dark.webp'
import { Image } from '@nextui-org/react'

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
                <Image className={className} src={AssetLogoDark.src} alt='Logo' />
            ) : (
                <Image
                    className={`${className} ${transparent ? '' : 'rounded-lg bg-light p-1'}`}
                    src={AssetLogoLight.src}
                    alt='Logo'
                />
            )}
        </figure>
    )
}
