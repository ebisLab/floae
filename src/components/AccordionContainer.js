import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box, 

  } from "@chakra-ui/react"

  import { MinusIcon, AddIcon } from '@chakra-ui/icons'

export default function AccordionContainer({store}) {
    return (
        <Accordion defaultIndex={[0]} allowToggle>

            <AccordionItem borderTop="1px">
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left" >
            Product Info
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} style={{height:"300px", overflow: "scroll"}}>{store.description}</AccordionPanel>
      </>
    )}
  </AccordionItem>





            <AccordionItem borderTop="1px">
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            Return & Refund Policy
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Non alias error porro, iure, hic laboriosam tenetur perspiciatis sunt, quasi dolores ipsum! 
                    Dolores, magnam? Beatae, error quidem? Nemo numquam officia delectus.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

           

<AccordionItem borderTop="1px" borderBottom="0px">
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            Shipping Info
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Non alias error porro, iure, hic laboriosam tenetur perspiciatis sunt, quasi dolores ipsum! 
                    Dolores, magnam? Beatae, error quidem? Nemo numquam officia delectus.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
            
        </Accordion>
    )
}
