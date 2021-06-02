import React from 'react'
import {Link} from 'react-router-dom'
import FeaturedProducs from '../components/FeaturedProducs'
import {motion} from 'framer-motion'
import InfoDetails from '../components/Detail/Details'

export default function Details({store}) {
    const transition={duration: 0.5}
    const easing = [0.6, -0.05, 0.01, 0.99]
    return (

        <motion.div
        transition={transition}

        >
            {/* <nav
        transition={transition} 
        style={{position: 'absolute', zIndex: 1000, marginTop:"5px"}}>Menu menu menu menu</nav> */}

<motion.nav
        transition={transition} 
        animate={{ color:'grey', transition:{delay:1.5, duration:1, easing: 'ease'}}}
        style={{position: 'absolute', zIndex: 1000, marginTop:"5px", color:"wheat", marginLeft: "50px"}}>
            <span style={{fontFamily:'Ballerina', fontSize:"3em", fontWeight:700}}>Floae</span>
                <ul className="menu_list" style={{display:"inline-flex", listStyle:"none"}}>
                    <li><Link to="/">Home</Link></li>
                    <li>Collections</li>
                    <li>Featured </li>
                    <li>Women</li>
                </ul>
        </motion.nav>

        <motion.div
        transition={transition}
        animate={{background:"#3f4527", transition:{ease:easing}}}
        // className="navyleaf" 
        style={{display: 'inline-flex', height:"110vh", width:"100%", 
        // position:"relative"
        }}>
            <motion.div 
            className="mangopulp" 
            animate={{
                opacity:1,
                width:"66.6%", transition: {
                duration:2.5,
                ease: easing, 
            }}}
            style={{width:"60.0%", 
            position:"relative",
            // background:"#3f4527"
        }}
             >   <motion.div  
                animate={{opacity:1, transition: {delay:.2, duration:2.0}}}  
                initial={{opacity:0}}
                style={{
                    height:"100%",
                    width:"100%", 
                    position:"absolute",
                    right:0,
                    bottom:0,
                    backgroundSize:" cover",
                    backgroundPosition: "bottom right",
            backgroundImage:`url(${require('../assets/images/Details/Pump.jpg').default})`, 
            zIndex:1
        }}></motion.div>

                </motion.div>
            <motion.div 
            className="demo2"
            animate={{opacity:1, zIndex:1000, background:"#3f4527", transition: {delay:1.8, duration:2.0}}}
            // initial={{opacity:0}}
            // className="navyleaf"
            // animate={{background:"#3f4527", trasition:{ease:easing}}}
            style={{width:"33.4%", zIndex:1000 }}>

                <motion.div 
                
                 animate={{opacity:1, transition: {delay:.2, duration:.5}}} initial={{opacity:0}}>
                    <InfoDetails store={store[0]}/>
                </motion.div>
            </motion.div>
        </motion.div>
        <FeaturedProducs store={store} easing={easing}/>
        </motion.div>
    )
}
