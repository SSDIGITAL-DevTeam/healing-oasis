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
import { Category, categories } from '@/data/categories'

export default function Home(): JSX.Element {
    return (
        <main>
            {/* hero section */}
            <header className='container mt-4 w-full p-6 sm:p-8 xl:mt-8'>
                <div className='h-screen max-h-[45rem] rounded-xl bg-[url("/webp/asset-hero-landing-page.webp")] bg-cover bg-center bg-no-repeat'></div>
            </header>
            {/* end of hero section */}

            {/* about us section */}
            <section className='py-8'>
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
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of about us section */}

            {/* our mission section */}
            <section className='py-8'>
                <div className='container p-6 sm:p-8'></div>
            </section>
            {/* end of our mission section */}

            {/* our expertise section */}
            <section className='container p-4 py-8'>
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
                                    Book Now
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
                                    <CarouselItem className='md:basis-1/2 md:p-4 lg:basis-1/3' key={`review-${index}`}>
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
            <section className='py-8'>
                <div className='container p-6 sm:p-8'>
                    <header className='mb-8 space-y-4 text-center text-primary'>
                        <h2>Uncover What Sets Us Apart</h2>
                    </header>

                    <div className='space-y-8 lg:space-y-12'>
                        {advantages.map((advantage: Advantage, index: number) => (
                            <AdvantageCard advantage={advantage} key={`advantage-${index}`} />
                        ))}
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
            <section className='py-8'>
                <div className='container px-6 sm:px-8'>
                    <div className='flex flex-col gap-x-8 gap-y-8 md:flex-row'>
                        <div className='flex w-full flex-col items-center justify-center gap-y-12 text-center xl:gap-y-16'>
                            <Logo className='w-48 lg:w-64' />

                            <h2 className='text-2xl font-semibold text-primary md:text-3xl lg:text-4xl'>
                                Book Via Whatsapp
                            </h2>

                            <Button
                                className='text-2xl font-bold text-primary'
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
