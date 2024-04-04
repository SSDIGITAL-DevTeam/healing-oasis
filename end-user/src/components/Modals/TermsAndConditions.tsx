'use client'

import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react'

export default function TermsAndConditions() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <>
            <Button
                className='text-lg font-medium text-light underline underline-offset-4'
                variant='light'
                onPress={onOpen}
            >
                Terms and Conditions
            </Button>

            <Modal backdrop='blur' size='xl' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col gap-1'></ModalHeader>
                            <ModalBody>
                                <p className='text-center text-3xl font-bold text-primary'>TERMS & CONDITIONS APPLY</p>

                                <ul className='mt-4 list-disc pl-4'>
                                    <li>This Offer cannot be used in conjunction with any other promotions.</li>

                                    <li>
                                        You may only utilize one free add-on 30 minutes per visit with per spending of
                                        any massage services.
                                    </li>

                                    <li>
                                        This offer is valid for all new patrons / customers with full registration.
                                        Redemption of the free add-on will expire by the end of the next following year.
                                    </li>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button radius='sm' color='primary' onPress={onClose}>
                                    Ok, I Got It
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
