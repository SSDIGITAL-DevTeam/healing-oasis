'use client'

import { JSX } from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'

type Faq = {
    title: string
    content: string
}

const faq: Faq[] = [
    {
        title: 'What sets Healing Oasis apart from other spas in the Tanjong Pagar area?',
        content:
            'At Healing Oasis, our distinctiveness lies in the combination of our team of skilled young therapists, who bring expertise and a genuine service attitude, and our tranquil and clean environment designed to create an unparalleled relaxation experience. We are committed to being the top choice for those seeking more than just an ordinary spa, with each touch we deliver being a promise of tranquility.',
    },
    {
        title: 'How can I take advantage of the Healing Oasis membership offers?',
        content:
            'Joining Healing Oasis membership comes at a cost of $89, and in return, you gain access to services and products worth $169. This membership provides exclusive access to special offers, discounts, and other unique benefits. So, in addition to experiencing an exceptional spa journey, you will also enjoy exclusive perks as our member.',
    },
    {
        title: 'How can I take advantage of the Healing Oasis membership offers?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt et vitae magni qui modi ipsum minus aliquam corporis, nulla dolore ducimus incidunt repellendus officia necessitatibus sit, consectetur asperiores illum quia!',
    },
]

export default function FaqLandingPageAccordion(): JSX.Element {
    return (
        <div>
            <Accordion defaultExpandedKeys={[`accordion-${0}`]}>
                {faq.map((item: Faq, index: number) => (
                    <AccordionItem
                        key={`accordion-${index}`}
                        classNames={{
                            title: 'md:text-xl text-primary font-semibold',
                        }}
                        title={item.title}
                        startContent={
                            <div className='rounded-lg bg-secondary p-2 text-white shadow-md sm:p-4 sm:text-xl'>
                                <p>{`0${index + 1}`}</p>
                            </div>
                        }
                    >
                        <p className='pl-14 text-primary sm:pl-16'>{item.content}</p>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
