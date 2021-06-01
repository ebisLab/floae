import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import mock from '../mock.json'

export default function Main() {
    const [store,setStore]=useState(mock)

    console.log("mocking", mock)

    const filters_keys=[ "DaLish Silk to Matte", "Mineral Fusion Liquid Foundation", "Dr. Hauschka Foundation"]
    const bgClass=[{name:"mangopulp", width:"13.33%"}, {name:"navyleaf", width:"43.33%"},{name:"palewood2", width:"43.33%"}]
    const settledwidth=["38.33%", "40.33%", "36.33%" ]
    const show=["unset", "unset", "none"]
    const endWidth=["60.66%", "30.33%","0%" ]
    const appear=[1, 0, 0]

    // const endWidth=["58.33%", "40.33%", "0" ]
    const prodImgs=["floaeJar", "floaeTube", "floaePump"]

// let easing=[0.5, -0.05, 0.01, 0.99]

let stagger={
    animate: {
        transition: {
            staggerChildren: 0.3
        }}
}
const easing = [0.6, -0.05, 0.01, 0.99]
const transition={duration: 0.5}
const fadeInUp={
    initial:{
        y: 200,
        opacity:0
    },
    animate:{
        y: 60,
        opacity:1,
        transition: {
            duration:2.9,
            ease: easing, 
            delay: 1.2
        }
    }
}



    return (

    
       
       <motion.div 
        initial="initial"
        animate="animate"
        // exit={{transition:{duration:1555}}}
        // exit={{opacity:0, transition: {
        //     duration:2.9,
        //     ease: easing, 
        //     delay: 1.2
        // }}}
        transition={transition}
        style={{zIndex:0}}
        >
            {/* <div style={{position: "absolute"}}>Hey hey hey</div> */}

            <motion.nav
        transition={transition} 
        animate={{ marginTop:"5px", transition:{delay:4.0, duration:.9}}}
        style={{position: 'absolute', zIndex: 1000, marginTop:"-50px"}}>Menu menu menu menu</motion.nav>

        <motion.div 
        variants={stagger}
        style={{
             display:"inline-flex", width:"100%", height:" 100vh", textAlign:"center"}}
             >
                 


               {prodImgs.map((x, i) =>(
                    <motion.div
                    key={x.id}
                    // exit={endWidth[i]}
                    key={i}
                    //  variants={fadeInUp}
                    initial={{
                        width:bgClass[i].width,
                        opacity:0
                    }}
                    animate={{
                        width:settledwidth[i],
                        opacity:1,
                        transition: {
                            duration:1.3,
                            ease: easing
                        }
                    }}

                    exit={{width:endWidth[i], opacity:appear[i] , transition:{ease:easing, duration: 1.5, delay:.5}}}
                    className={bgClass[i].name}
                    style={{padding: "0 5%" 
                    // width:"33.33%"
                }}

                // exit={endWidth[i]}
                        >
                            <motion.div 
                            variants={fadeInUp}
                            exit={{ marginLeft: "50px", opacity:0, transition:{duration:1.0}}}
                            >
                        <div style={{height:"100px", margin:"36px 0 "}}>
                            <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat", margin: 0}}>{filters_keys[i]}</p>
                        </div>
                        <div style={{height: "45vh", verticalAlign: "bottom", display: "table-cell"}}>
                            <img src={require('../assets/images/'+prodImgs[i]+'.png').default} style={{maxWidth:"46%"}}/>
                        </div>
                        <div style={{height: "100px",
                        marginTop:"45px"
                        //  margin: "25% 0 25%"
                         }}>
                            <Link to="/details"style={{border: "1px solid wheat", background: "none", padding: "10px", color:"wheat"}}>Add to Cart</Link>
                        </div>
                        </motion.div>
                    
                    </motion.div>
                ))}

     
        </motion.div>
         </motion.div >
    )
}
