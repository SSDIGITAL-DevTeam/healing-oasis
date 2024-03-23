import { JSX } from 'react'

export default function NotFound(): JSX.Element {
    return (
        <main className='bg-primary'>
            <div className='container flex h-screen flex-col items-center justify-center p-6 md:flex-row'>
                <header className='container w-max space-y-4 p-6 text-center text-light'>
                    <h1 className='text-9xl font-extrabold'>404</h1>

                    <h2 className='font-medium'>
                        <span className='text-5xl font-bold md:text-7xl'>Whoops,</span> <br /> we couldn&apos;t find
                        that page
                    </h2>
                </header>
            </div>
        </main>
    )
}
