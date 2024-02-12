import { JSX } from 'react'
import AssetAboutUs from '@/assets/LandingPage/webp/asset-about-us.webp'
import { Button } from '@nextui-org/react'
import FaqLandingPageAccordion from '@/components/Accordions/LandingPage/FaqLandingPageAccordion'
import Logo from '@/components/Logo'
import AssetWhatsapp from '@/assets/LandingPage/svg/asset-whatsapp.svg'
import ContactCard from '@/components/Cards/LandingPage/ContactCard'
import ReviewCard from '@/components/Cards/LandingPage/ReviewCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/Carousel'
import { Review, reviews } from '@/data/reviews'
import { Advantage, advantages } from '@/data/advantages'
import AdvantageCard from '@/components/Cards/LandingPage/AdvantageCard'
import CategoryCard from '@/components/Cards/LandingPage/CategoryCard'
import { Category, Service, categories } from '@/data/categories'
import AssetOurMission1 from '@/assets/LandingPage/webp/asset-our-mission-1.webp'
import Image from 'next/image'
import ScrollSpy from '@/components/ScrollToTop/ScrollSpy'

export default function Home(): JSX.Element {
    return (
        <main>
            {/* hero section */}
            <header className='relative'>
                <div className='h-screen bg-[url("/webp/asset-hero-landing-page.webp")] bg-cover bg-center bg-no-repeat lg:max-h-[52rem]'>
                    <div className='container flex h-full flex-col items-center justify-center gap-y-8 md:items-start'>
                        <h1 className='max-w-5xl text-center leading-snug text-light md:text-left'>
                            Revitalize Your Mind, Body, and Spirit with Spa & Massage Treatments
                        </h1>

                        <Button className='text-light' size='lg' radius='full' variant='bordered'>
                            <ScrollSpy to='/contact-us'>Schedule Appointment</ScrollSpy>
                        </Button>
                    </div>

                    <div className='absolute bottom-12 right-0 ml-auto max-w-xs md:max-w-xl xl:max-w-2xl'>
                        <Carousel className='w-full'>
                            <CarouselContent>
                                {categories[0].services.map((service: Service, index: number) => (
                                    <CarouselItem className='md:basis-1/2 md:p-4' key={`review-${index}`}>
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
                        </Carousel>
                    </div>
                </div>
            </header>
            {/* end of hero section */}

            {/* about us section */}
            <section id='/about-us' className='py-8'>
                <div className='container p-6 sm:p-8'>
                    <header className='mb-4'>
                        <h2 className='text-center text-2xl font-semibold text-primary sm:text-4xl md:hidden'>
                            About Us
                        </h2>
                    </header>

                    <div className='flex flex-col gap-6 text-primary sm:gap-8 md:flex-row md:items-center lg:gap-16'>
                        <img src={AssetAboutUs.src} className='min-w-[16rem] object-cover lg:w-2/5' alt='About Us' />

                        {/* content */}
                        <div className='space-y-6 text-center md:text-left lg:w-3/5 lg:space-y-12'>
                            <header className=''>
                                <h2 className='hidden text-4xl font-semibold md:block lg:text-5xl'>About Us</h2>
                            </header>

                            <p className='md:text-lg lg:text-xl xl:text-2xl'>
                                At Healing Oasis, we believe in the transformative power of touch and the rejuvenating
                                energy of serene environments. Nestled in the heart of Tanjong Pagar.
                            </p>

                            <p className='md:text-xl lg:text-2xl xl:text-3xl'>
                                Our team comprises young, skilled, and qualified therapists who not only bring expertise
                                to every massage treatment but also carry a genuine attitude of service.
                            </p>

                            <Button
                                className='border border-primary bg-light font-medium text-primary'
                                size='lg'
                                radius='full'
                            >
                                <ScrollSpy to='/contact-us'>Book Now</ScrollSpy>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of about us section */}

            {/* our mission section */}
            <section className='py-8'>
                <div className='container relative p-6 sm:p-8'>
                    <Image
                        className='absolute right-8 top-6 hidden w-72 rounded-full lg:block'
                        src={AssetOurMission1}
                        alt='Our Mission'
                    />

                    <header className='mb-8 space-y-4 text-center text-primary lg:max-w-lg lg:text-left'>
                        <h2>Our Mission</h2>

                        <p className='pt-8 md:text-xl'>
                            Provide a team of highly trained professionals dedicated to delivering exceptional service
                            that prioritizes your comfort at every step
                        </p>

                        <Button
                            className='border border-primary bg-light font-medium text-primary'
                            size='lg'
                            radius='full'
                        >
                            <ScrollSpy to='/contact-us'>Book Now</ScrollSpy>
                        </Button>
                    </header>
                </div>

                <div className='flex w-full items-center bg-[url("/webp/asset-our-mission-bg.webp")] bg-cover bg-center bg-no-repeat p-8 py-20'>
                    <div className='container flex flex-col items-center justify-center gap-y-6 md:flex-row md:gap-x-12 lg:justify-start'>
                        <div className='w-full rounded-lg bg-white/30 p-4 text-center text-light lg:w-40'>
                            <p className='text-4xl font-medium'>5K</p>

                            <p className=''>Customer Rating</p>
                        </div>

                        <div className='w-full rounded-lg bg-white/30 p-4 text-center text-light lg:w-40'>
                            <p className='text-4xl font-medium'>250+</p>

                            <p className=''>Happy Customer</p>
                        </div>

                        <div className='w-full rounded-lg bg-white/30 p-4 text-center text-light lg:w-40'>
                            <p className='text-4xl font-medium'>130+</p>

                            <p className=''>Online Orders</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of our mission section */}

            {/* our expertise section */}
            <section id='/services' className='bg-highlight p-4 py-8 md:bg-transparent'>
                <div className='container rounded-2xl bg-highlight p-6 sm:p-8'>
                    <header className='mb-8 space-y-4 text-center text-primary lg:text-left'>
                        <h2>Our Expertise</h2>

                        <div className='flex flex-col justify-between gap-6 sm:gap-8 lg:flex-row'>
                            <div className='space-y-6'>
                                <p className='mx-auto max-w-xl md:text-xl'>
                                    Each touch is dedicated to warming your heart and easing the tensions of your daily
                                    life.
                                </p>

                                <Button
                                    className='border border-primary font-medium text-primary'
                                    variant='bordered'
                                    radius='full'
                                    size='lg'
                                >
                                    <ScrollSpy to='/contact-us'>Book Now</ScrollSpy>
                                </Button>
                            </div>

                            <p className='mx-auto max-w-lg sm:text-xl md:text-2xl'>
                                To be the beacon of relaxation for the working class, the haven for residents, and the
                                source of peacefulness for every explorer in Singapore.
                            </p>
                        </div>
                    </header>

                    {/* mobile and table view */}
                    <div className='lg:hidden'>
                        <Carousel className='w-full'>
                            <CarouselContent>
                                {categories.map((category: Category, index: number) => (
                                    <CarouselItem className='md:basis-1/2 md:pl-4 lg:basis-1/3' key={`review-${index}`}>
                                        <CategoryCard category={category} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className='border-none text-primary' />

                            <CarouselNext className='border-none text-primary' />
                        </Carousel>
                    </div>

                    {/* desktop view */}
                    <div className='hidden lg:grid lg:grid-cols-3 lg:gap-8'>
                        {categories.map((category: Category, index: number) => (
                            <CategoryCard key={`category-${index}`} category={category} />
                        ))}
                    </div>
                </div>
            </section>
            {/* end of our expertise section */}

            {/* uncover what sets us apart */}
            <section id='/why-us' className='py-8'>
                <div className='container p-6 sm:p-8'>
                    <header className='mb-8 space-y-4 text-center text-primary'>
                        <h2>Uncover What Sets Us Apart</h2>
                    </header>

                    <div className='space-y-8 lg:space-y-12'>
                        {advantages.map((advantage: Advantage, index: number) => (
                            <AdvantageCard advantage={advantage} key={`advantage-${index}`} />
                        ))}
                    </div>

                    <div className='mt-8 flex flex-col items-center space-y-4 text-center'>
                        <p className='max-w-lg text-xl font-medium text-primary md:text-2xl'>
                            Book your session today and embark on a journey of well-being with Healing Oasis.
                        </p>

                        <Button
                            // className='border border-primary bg-light font-medium text-primary'
                            color='primary'
                            size='lg'
                            radius='full'
                        >
                            <ScrollSpy to='/contact-us'>Book My Session</ScrollSpy>
                        </Button>
                    </div>
                </div>
            </section>
            {/* end of uncover what sets us apart */}

            {/* reviews section */}
            <section className='py-8'>
                <div className='container p-6 sm:p-8'>
                    <div className='flex items-center justify-center gap-6 lg:justify-between'>
                        <header className='mb-8 space-y-4 text-center text-primary lg:text-left'>
                            <h2>What Our Customers Say About Us</h2>

                            <p className='max-w-xl'>
                                Don&apos;t just take our word for it - see what actual users of our service have to say
                                about their experience.
                            </p>
                        </header>
                    </div>

                    <div>
                        <Carousel className='w-full'>
                            <CarouselContent>
                                {reviews.map((review: Review, index: number) => (
                                    <CarouselItem className='md:basis-1/2 md:p-4 lg:basis-1/3' key={`review-${index}`}>
                                        <ReviewCard review={review} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className='border-none bg-highlight text-primary' />

                            <CarouselNext className='border-none bg-highlight text-primary' />
                        </Carousel>
                    </div>
                </div>
            </section>
            {/* end of reviews section */}

            {/* our contact section */}
            <section className='py-8'>
                <div className='container p-6 sm:p-8'>
                    <header className='mb-8 text-center text-primary'>
                        <h2>Our Contact</h2>
                    </header>

                    <ContactCard />
                </div>
            </section>
            {/* end of our contact section */}

            {/* cta section */}
            <section id='/contact-us' className='py-8'>
                <div className='container px-6 sm:px-8'>
                    <div className='flex flex-col gap-x-8 gap-y-8 md:flex-row'>
                        <div className='flex w-full flex-col items-center justify-center gap-y-12 text-center xl:gap-y-16'>
                            <Logo className='w-48 lg:w-64' />

                            <h2 className='text-2xl font-semibold text-primary md:text-3xl lg:text-4xl'>
                                Book Via Whatsapp
                            </h2>

                            <a href='https://wa.me/6597222727' target='_blank' rel='noopener noreferrer'>
                                <Button
                                    className='border border-primary py-6 text-2xl font-bold text-primary'
                                    aria-label='Healing Oasis WhatsApp Number'
                                    href='tel:+6597222727'
                                    target='_blank'
                                    size='lg'
                                    variant='bordered'
                                    radius='full'
                                    startContent={<img src={AssetWhatsapp.src} className='w-10' alt='WhatsApp Now' />}
                                >
                                    +65 9722 2727
                                </Button>
                            </a>
                        </div>

                        <div className='w-full'>
                            <iframe
                                className='aspect-square w-full rounded-2xl lg:aspect-auto lg:h-[28rem]'
                                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.318357691753!2d103.8424828!3d1.2755841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da191df6faac6f%3A0x7c99791c6555d5a7!2sHealing%20Oasis!5e0!3m2!1sid!2sid!4v1707451184464!5m2!1sid!2sid'
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of cta section */}

            {/* faq section */}
            <section className='py-8'>
                <div className='container p-6 sm:p-8'>
                    <header className='mb-8 text-center text-primary'>
                        <h2>Frequently Asked Questions</h2>
                    </header>

                    <FaqLandingPageAccordion />
                </div>
            </section>
            {/* end of faq section */}
        </main>
    )
}
