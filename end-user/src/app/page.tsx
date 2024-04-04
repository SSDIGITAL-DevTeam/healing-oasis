import { JSX } from 'react'
import { Button } from '@nextui-org/react'
import ReviewCard from '@/components/Cards/LandingPage/ReviewCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/Carousel'
import { Review, reviews } from '@/data/reviews'
import { Advantage, advantages } from '@/data/advantages'
import { Category, categories } from '@/data/categories'
import AdvantageCard from '@/components/Cards/LandingPage/AdvantageCard'
import CategoryCard from '@/components/Cards/LandingPage/CategoryCard'
import AssetOurMission1 from '@/assets/LandingPage/webp/asset-our-mission-1.webp'
import ScrollSpy from '@/components/ScrollToTop/ScrollSpy'
import AssetHero from '@/assets/LandingPage/webp/asset-hero-landing-page.webp'
import AssetSection2_1 from '@/assets/LandingPage/svg/asset-section-2.1.svg'
import TermsAndConditions from '@/components/Modals/TermsAndConditions'
import Galleries from '@/components/Galleries/Galleries'
import AddOnCard from '@/components/Cards/LandingPage/AddOnCard'
import Link from 'next/link'
import { AddOn, addOns } from '@/data/addons'

export default function Home(): JSX.Element {
    return (
        <main>
            {/* hero section */}
            <header className='relative h-screen lg:p-10'>
                {/* bg-[url("/webp/asset-hero-landing-page.webp")] */}
                <div className='absolute inset-0 lg:inset-8'>
                    <img className='h-full w-full object-cover lg:rounded-3xl' src={AssetHero.src} alt='Hero' />

                    <div className='container absolute inset-0 z-20 flex h-full max-h-screen flex-col items-center justify-center gap-y-12 p-4 py-8 md:items-start lg:p-12'>
                        <h1 className='mt-8 max-w-2xl text-center leading-snug text-light md:text-left lg:mt-16'>
                            <span className='text-[#FFC99A]'>Recharge</span> your Energy, <br />{' '}
                            <span className='text-[#FFC99A]'>Rejuvenate</span> Your Body, <br />{' '}
                            <span className='text-[#FFC99A]'>Revitalize</span> Your Mind
                        </h1>

                        <Button className='text-light' size='lg' radius='full' variant='bordered'>
                            <ScrollSpy to='/contact-us'>Schedule Appointment</ScrollSpy>
                        </Button>
                    </div>

                    {/* <div className='absolute bottom-12 right-0 ml-auto max-w-xs md:max-w-xl xl:max-w-2xl'>
                        <Carousel className='relative w-full'>
                            <CarouselContent>
                                {categories[0].services.map((service: Service, index: number) => (
                                    <CarouselItem className='md:basis-1/2 md:p-4' key={`service-${index}`}>
                                        <div className='flex items-center gap-x-4 rounded-lg bg-white/20 p-2 lg:p-2.5'>
                                            <Image
                                                src={service.asset!}
                                                alt='Top 3 Best Selling'
                                                className='h-24 w-72'
                                            />

                                            <p className='text-light'>{service.name}</p>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className='border-none text-primary lg:scale-80' />

                            <CarouselNext className='hidden border-none text-primary lg:flex lg:scale-80' />
                        </Carousel>
                    </div> */}
                </div>
            </header>
            {/* end of hero section */}

            {/* our service section */}
            <section id='/services' className='py-8'>
                <div className='container p-6 sm:p-8'>
                    <header className='space-y-4 text-center text-primary'>
                        <h2>Our Services</h2>

                        <p className='lg:text-2xl'>
                            We prioritize for our customers to enjoy the highest standard of services.
                        </p>
                    </header>

                    <div className='mt-8 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8'>
                        {categories.map((category: Category, index: number) => (
                            <CategoryCard key={`category-${index}`} category={category} />
                        ))}
                    </div>

                    <div className='mt-8 flex justify-center lg:mt-12'>
                        <Button className='bg-secondary text-lg' color='primary' size='lg' radius='full'>
                            <ScrollSpy to='/contact-us'>Book Your Session Now</ScrollSpy>
                        </Button>
                    </div>
                </div>
            </section>
            {/* end of our service section */}

            {/* add on section */}
            <section id='/services' className='py-8'>
                <div className='container p-6 sm:p-8'>
                    <header className='space-y-4 text-center text-primary'>
                        <h2>All Kinds Of Healing Products</h2>
                    </header>

                    <div className='mt-8 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8'>
                        {addOns.map((addon: AddOn, index: number) => (
                            <AddOnCard key={`category-${index}`} addon={addon} />
                        ))}
                    </div>
                </div>
            </section>
            {/* end of add on section */}

            {/* divider */}
            <div className='container px-6 lg:px-8'>
                <hr className='mx-auto max-w-[16rem] border-primary lg:max-w-5xl' />

                <hr className='mx-auto mt-4 max-w-[14rem] border-primary lg:max-w-2xl' />
            </div>

            {/* 1 get 3 section */}
            <section className='py-8'>
                <div className='container relative p-6 sm:p-8'>
                    <img
                        className='absolute right-8 top-6 hidden w-96 rounded-full lg:block'
                        src={AssetOurMission1.src}
                        alt='1 get 3'
                    />

                    <header className='relative mb-8 space-y-4 text-center text-primary lg:max-w-lg lg:text-left'>
                        {/* absolute image */}
                        <div className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8'>
                            <h2 className='uppercase'>Buy 1 Get 3</h2>

                            <img className='w-24 lg:w-max' src={AssetSection2_1.src} alt='1 get 3' />
                        </div>

                        <p className='md:text-lg lg:pt-8 lg:text-xl xl:text-2xl'>
                            <strong>Buy one 90 minutes session</strong> of Signature Body Massage valued at $79,{' '}
                            <strong>receive 3 free add-on 30 minutes session</strong> of any massage services
                        </p>

                        <Button
                            className='border-primary font-semibold text-primary'
                            variant='bordered'
                            size='lg'
                            radius='full'
                        >
                            <ScrollSpy to='/contact-us'>Book Now</ScrollSpy>
                        </Button>
                    </header>
                </div>

                <div className='flex w-full items-center bg-[url("/webp/asset-our-mission-bg.webp")] bg-cover bg-center bg-no-repeat p-8'>
                    <div className='container flex flex-col items-center justify-center gap-y-6 p-4 md:flex-row lg:justify-start'>
                        <div className='w-full'>
                            <div className='w-full space-y-4 rounded-lg bg-white/80 p-4 text-center text-primary lg:w-1/2 lg:p-8'>
                                <p className='text-lg lg:text-2xl'>Receive up to</p>

                                <p className='text-5xl font-bold lg:text-8xl'>S$87</p>

                                <p className='text-lg font-semibold lg:text-2xl'>Worth of Massage Services!</p>
                            </div>

                            <div className='mt-2 flex justify-center lg:w-1/2'>
                                <TermsAndConditions />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of 1 get 3 section */}

            {/* uncover what sets us apart */}
            <section id='/why-us' className='py-8'>
                <div className='container p-6 sm:p-8'>
                    <header className='space-y-4 text-center text-primary'>
                        <h2>We Strive to Give the Best Quality of Services</h2>
                    </header>

                    <div className='mt-8 grid grid-cols-1 items-start gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8'>
                        {advantages.map((advantage: Advantage, index: number) => (
                            <AdvantageCard advantage={advantage} key={`advantage-${index}`} />
                        ))}
                    </div>
                </div>
            </section>
            {/* end of uncover what sets us apart */}

            {/* reviews section */}
            <section className='py-8'>
                <div className='container flex flex-col gap-y-8 p-4 sm:p-8'>
                    <div className='flex items-center justify-center'>
                        <header className='mb-8 space-y-4 text-center text-primary'>
                            <h2>What Our Customers Say About Us</h2>

                            <p className='mx-auto max-w-xl text-center md:text-xl'>
                                Don&apos;t just take our word for it - see what actual users of our service have to say
                                about their experience.
                            </p>
                        </header>
                    </div>

                    <div>
                        <Carousel className='w-full'>
                            <CarouselContent className='p-2'>
                                {reviews.map((review: Review, index: number) => (
                                    <CarouselItem className='md:basis-1/2 md:p-2 lg:basis-1/4' key={`review-${index}`}>
                                        <ReviewCard review={review} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className='border-none bg-primary text-light' />

                            <CarouselNext className='border-none bg-primary text-light' />
                        </Carousel>
                    </div>

                    <Button
                        className='self-center text-lg underline'
                        as={Link}
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.google.com/search?q=healing+oasis+singapore&rlz=1C1ONGR_enID1075ID1075&oq=healing+oasis+sin&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYPDIGCAMQRRg80gEINjQ5N2owajGoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x31da191df6faac6f:0x7c99791c6555d5a7,1,,,,'
                        radius='full'
                        size='lg'
                        color='primary'
                        variant='light'
                    >
                        See All Reviews
                    </Button>

                    <div className='flex flex-col items-center justify-center gap-6 lg:mt-12'>
                        <Button className='bg-secondary text-lg' color='primary' size='lg' radius='full'>
                            <ScrollSpy to='/contact-us'>Book Your Session Now</ScrollSpy>
                        </Button>
                    </div>

                    {/* <Button
                        className='self-center'
                        as={Link}
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.google.com/search?q=healing+oasis+singapore&rlz=1C1ONGR_enID1075ID1075&oq=healing+oasis+sin&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYPDIGCAMQRRg80gEINjQ5N2owajGoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x31da191df6faac6f:0x7c99791c6555d5a7,1,,,,'
                        radius='full'
                        size='lg'
                        color='primary'
                    >
                        See All Reviews
                    </Button> */}
                </div>
            </section>
            {/* end of reviews section */}

            {/* gallery section */}
            <section className='py-8'>
                <div className='container p-6 sm:p-8'>
                    <header className='mb-8 text-center text-primary'>
                        <h2>Gallery</h2>

                        <p className='mt-4 lg:text-2xl'>What You See is What You Will Get</p>
                    </header>

                    <Galleries />
                </div>
            </section>
            {/* end of gallery section */}

            {/* cta section */}
            <section id='/contact-us' className='py-8'>
                <div className='container px-6 sm:px-8'>
                    <div className='flex flex-col gap-x-8 gap-y-8 md:flex-row'>
                        <div className='mb-8 flex w-full flex-col items-center justify-center gap-y-8 text-center'>
                            {/* <Logo className='w-48 lg:w-64' /> */}

                            <h2 className='text-3xl font-semibold uppercase text-primary lg:text-5xl'>Call Us Now</h2>

                            <a href='tel:+6597222727' rel='noopener noreferrer'>
                                <Button
                                    className='py-6 text-2xl font-bold'
                                    aria-label='Healing Oasis WhatsApp Number'
                                    size='lg'
                                    radius='sm'
                                    color='secondary'
                                >
                                    +65 9722 2727
                                </Button>
                            </a>
                        </div>

                        <div className='w-full'>
                            <iframe
                                className='aspect-square w-full rounded-2xl lg:aspect-auto lg:h-[28rem]'
                                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.318357691753!2d103.8424828!3d1.2755841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da191df6faac6f%3A0x7c99791c6555d5a7!2sHealing%20Oasis!5e0!3m2!1sen!2sen!4v1707451184464!5m2!1sen!2sen'
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of cta section */}

            {/* our contact section */}
            <section className='py-8'>
                <div className='container p-6 sm:p-8'>
                    <div className='flex flex-col gap-6 p-6 lg:flex-row lg:justify-between lg:gap-8 lg:p-8'>
                        <div>
                            <p className='text-center text-3xl font-bold text-primary'>Address</p>

                            <p className='mt-8 max-w-xs text-center text-primary'>
                                Tanjong Pagar Plaza BLK 1 #01-47, Singapore (082001)
                            </p>
                        </div>

                        <div className='border-b border-primary lg:border-r'></div>

                        <div className=''>
                            <p className='text-center text-3xl font-bold text-primary'>Opening Hours</p>

                            <div className='mt-4'>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr className='border-none'>
                                            <td className='text-base'>Every Day</td>
                                            <td className='text-base font-normal'>9:30 am - 10:30 pm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='border-b border-primary lg:border-r'></div>

                        <div>
                            <p className='text-center text-3xl font-bold text-primary'>Email</p>

                            <a
                                href='mailto:nails-ops@healingoasis.com.sg'
                                className='mt-8 block text-center text-primary'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                nails-ops@healingoasis.com.sg
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of our contact section */}
        </main>
    )
}
