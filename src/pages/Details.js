import React from 'react'
import FeaturedProducs from '../components/FeaturedProducs'
import {motion} from 'framer-motion'

export default function Details() {
    const transition={duration: 0.5}
    return (

        <motion.div 
        initial={{opacity:0}} animate={{opacity:1}} 
        transition={transition}
        exit={{opacity:0}}>
        <div style={{display: 'inline-flex', height:"100vh", width:"100%"}}>
            <div className="mangopulp" style={{width:"66.6%"}}>bleh</div>
            <div className="navyleaf" style={{width:"33.4%"}}> bruhh bruhh</div>
        </div>
        <FeaturedProducs/>
        </motion.div>
    )
}
