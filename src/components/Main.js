import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Main() {
    const [store,setStore]=useState([])

    const filters_keys=[ "DaLish Silk to Matte", "Mineral Fusion Liquid Foundation", "Dr. Hauschka Foundation"]
    const bgClass=[{name:"mangopulp", width:"13.33%"}, {name:"navyleaf", width:"43.33%"},{name:"palewood2", width:"43.33%"}]
    const settledwidth=["38.33%", "40.33%", "36.33%" ]
    const prodImgs=["floaeJar", "floaeTube", "floaePump"]
    // const filteredData = store.filter(({ name }) => filters_keys.includes(name));

// let easing=[0.5, -0.05, 0.01, 0.99]

let stagger={
    animate: {
        transition: {
            staggerChildren: 0.3
        }}
}
const easing = [0.6, -0.05, 0.01, 0.99]
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
                exit={{opacity:0}}
        initial="initial"
        animate="animate"
        >

        <motion.div 
        variants={stagger}
        style={{
             display:"inline-flex", width:"100%", height:" 100vh", textAlign:"center"}}
             >
                 


               {prodImgs.map((x, i) =>(
                    <motion.div
                    key={x.id}
                    //  variants={fadeInUp}
                    initial={{
                        // width:"100%",

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

                    key={x.id}
                    className={bgClass[i].name}
                    style={{padding: "0 5%" 
                    // width:"33.33%"
                }}
                        >
                            <motion.div 
                            variants={fadeInUp}
                            >
                        <div style={{height:"100px"}}>
                            <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat"}}>{filters_keys[i]}</p>
                        </div>
                        <div style={{height: "50vh"}}>
                            <img src={require('../assets/images/'+prodImgs[i]+'.png').default} style={{width:"50%"}}/>
                        </div>
                        <div style={{height: "100px"}}>
                            <Link to="/details"style={{border: "1px solid wheat", background: "none", padding: "10px", color:"wheat"}}>Add to Cart</Link>
                        </div>
                        </motion.div>
                    
                    </motion.div>
                ))}

     
        </motion.div>
         </motion.div >
    )
}
