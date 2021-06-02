import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react"

export default function AccordionContainer({store}) {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionButton>Product Info</AccordionButton>
                <AccordionPanel pb={4}><p>{store.description}</p></AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton>Return & Refund Policy</AccordionButton>
                <AccordionPanel pb={4}>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Non alias error porro, iure, hic laboriosam tenetur perspiciatis sunt, quasi dolores ipsum! 
                    Dolores, magnam? Beatae, error quidem? Nemo numquam officia delectus.
                </p>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton>Shipping Info</AccordionButton>
                <AccordionPanel pb={4}><p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Non alias error porro, iure, hic laboriosam tenetur perspiciatis sunt, quasi dolores ipsum! 
                    Dolores, magnam? Beatae, error quidem? Nemo numquam officia delectus.
                </p>
                </AccordionPanel>
            </AccordionItem>
            
        </Accordion>
    )
}
