import React from 'react'
import FeaturedProducs from '../components/FeaturedProducs'
import {motion} from 'framer-motion'
import InfoDetails from '../components/Detail/Details'

export default function Details({store}) {
    const transition={duration: 0.5}
    const easing = [0.6, -0.05, 0.01, 0.99]
    return (

        <motion.div
        // initial={{opacity:0}}
        // animate={{opacity:1}}
        transition={transition}

        >
            <nav
        transition={transition} 
        // animate={{ marginTop:"5px", transition:{delay:1.0, duration:.9}}}
        style={{position: 'absolute', zIndex: 1000, marginTop:"5px"}}>Menu menu menu menu</nav>

        <div style={{display: 'inline-flex', height:"100vh", width:"100%"}}>
            <motion.div 
            className="mangopulp" 
            animate={{
                opacity:1,
                width:"66.6%", transition: {
                duration:4.5,
                ease: easing, 
            }}}
            style={{width:"56.5%", 
            position:"relative"
        }}
             >   <motion.div  
                animate={{opacity:1, transition: {delay:.2, duration:1.0}}}  
                initial={{opacity:0}}
                style={{
                    height:"100%",
                    width:"100%", 
                    position:"absolute",
                    right:0,
                    bottom:0,
                    backgroundSize:" cover",
                    backgroundPosition: "bottom right",
            backgroundImage:`url(${require('../assets/images/Details/Pump.jpg').default})`
        }}></motion.div>

                </motion.div>
            <motion.div 
            style={{width:"33.4%"}}>

                <div>
                    <InfoDetails store={store[0]}/>
                </div>
            </motion.div>
        </div>
        <FeaturedProducs/>
        </motion.div>
    )
}
