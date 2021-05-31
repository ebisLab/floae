import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Main() {
    const [store,setStore]=useState([])
    useEffect(() => {
        axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_category=liquid&product_type=foundation`,{crossdomain:true})
        .then(res=>{
            setStore(res.data)
        })
    }, [])

    const filters_keys=[ "DaLish Silk to Matte Foundation", "Dr. Hauschka Foundation", "Mineral Fusion Liquid Foundation"]

    const filteredData = store.filter(({ name }) => filters_keys.includes(name));
console.log("filteredData", filteredData );

let easing=[0.5, -0.05, 0.01, 0.99]

let stagger={
    animate: {transition: {staggerChildren: 0.1}}
}
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition: {duration: .6,ease:easing}}}
        exit={{opacity: 0}}>

        <motion.div
        variants={stagger}

         style={{display:"inline-flex", width:"100%", height:" 100vh", textAlign:"center"}}>
            <motion.div 
            // variants={}
            intial={{width:0}}
            animate={{width:"33.3%"}}
            className="mangopulp" style={{
                // width:"33.3%", 
                paddingTop:"10%"}}>
            {
                    filteredData[0] && (
                        <div>
                        <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat"}}>{filteredData[0].name}</p>
                        
                        <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat", borderTop: "wheat 1px solid",
    width: "max-content",margin: "0 50%", transform: "translateX(-50%)"}}> $ {filteredData[0].price}</p>
                        <img src={require('../assets/images/floaeJar.png').default} style={{width:"50%"}}/>
<div>
                        <button style={{border: "1px solid wheat", background: "none", padding: "10px", color:"wheat"}}>Add to Cart</button>
                        </div>
                        </div>
                        
                    )
                }
 
            </motion.div>
            <div className="navyleaf" style={{width:"33.3%", paddingTop:"10%"}}>

                {
                    filteredData[2] && (
                        <div>
                        <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat"}}>{filteredData[2].name}</p>
                        
                        <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat", borderTop: "wheat 1px solid",
    width: "max-content",margin: "0 50%", transform: "translateX(-50%)"}}> $ {filteredData[1].price}</p>
                        <img src={require('../assets/images/floaeTube.png').default} style={{width:"46%"}}/>
<div>
                        <Link to="/details"style={{border: "1px solid wheat", background: "none", padding: "10px", color:"wheat"}}>Add to Cart</Link>
                        </div>
                        </div>
                        
                    )
                }
            </div>
            <div className="palewood2" style={{width:"33.3%", paddingTop:"10%"}}>
            {
                    filteredData[1] && (
                        <div>
                        <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat"}}>{filteredData[1].name}</p>
                        
                        <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat", borderTop: "wheat 1px solid",
    width: "max-content",margin: "0 50%", transform: "translateX(-50%)"}}> $ {filteredData[1].price}</p>
                        <img src={require('../assets/images/floaePump.png').default} style={{width:"36%"}}/>
<div>
                        <button style={{border: "1px solid wheat", background: "none", padding: "10px", color:"wheat"}}>Add to Cart</button>
                        </div>
                        </div>
                        
                    )
                }
                </div> 

            
        </motion.div>
        </motion.div>
    )
}
