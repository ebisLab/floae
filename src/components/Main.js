import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import mock from '../mock.json'

export default function Main({store, checkout, addItem}) {
    // const [store,setStore]=useState(mock)

    // console.log("mocking", mock)
    const [canScroll, setCanScroll]=useState(false)
    const filters_keys=[ "DaLish Silk to Matte", "Mineral Fusion Liquid Foundation", "Dr. Hauschka Foundation"]
    const bgClass=[{name:"mangopulp", width:"13.33%"}, {name:"navyleaf", width:"43.33%"},{name:"palewood2", width:"43.33%"}]
    const settledwidth=["38.33%", "40.33%", "36.33%" ]
    const show=["unset", "unset", "none"]
    const endWidth=["60.66%", "30.33%","0%" ]
    const appear=[1, 0, 0]

    useEffect(() => {
        console.log("can scroll", canScroll)
        if(canScroll === false){
            document.querySelector('body').classList.add('no-scroll')
            document.querySelector('body').style.setProperty('overflow;', 'hidden')
        }

    },[canScroll])

    useEffect(() => {
        let detail =document.querySelector('.palewood2 .product_detail_cointainer')
        console.log("DETAIL", detail)
        detail.querySelector('h1').style.setProperty('color', 'rgb(255 240 212)');
        detail.querySelector('p').style.setProperty('color', 'rgb(255 240 212)');
        detail.querySelector('a').style.setProperty('color', 'rgb(255 240 212)');
        detail.querySelector('a').style.setProperty('border', '1px solid rgb(255 240 212)');


    },[])

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
        y: 100,
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
       onAnimationComplete={()=>setCanScroll(true)}
        initial="initial"
        animate="animate"
        transition={transition}
        style={{zIndex:0}}
        >
            <motion.nav
        transition={transition} 
        animate={{ marginTop:"5px", transition:{delay:3.5, duration:.9}}}
        style={{position: 'absolute', zIndex: 1000, marginTop:"-60px", color:"wheat", padding:"5px 50px 0px", width:"100%"}}>
            <span style={{fontFamily:'Ballerina', fontSize:"3em", fontWeight:700}}>Floae</span>
                <ul className="menu_list" style={{display:"inline-flex", listStyle:"none"}}>
                    <li>Home</li>
                    <li>Collections</li>
                    <li>Featured </li>
                    <li>Women</li>
                </ul>
                <ul className="menu_list" style={{display:"inline-flex", listStyle:"none", float:"right", color:'#ffecc8'}}>
                <ul className="menu_list" style={{display:"inline-flex", listStyle:"none", float:"right", color:"wheat"}}>
                    <li><i className="pe-7s-cart" style={{fontSize:"1.7em", fontWeight:"600"}}></i><span style={{color:"salmon", fontWeight: 700, position:"relative", top:'-20px', left:'-14px'}}>{checkout.length}</span></li>
                    <li><i className="pe-7s-user" style={{fontSize:"1.7em", fontWeight:"600"}}></i></li>
                </ul>
                </ul>
        </motion.nav>

        <motion.div 
        variants={stagger}
        style={{
             display:"inline-flex", width:"100%", height:" 100vh", textAlign:"-webkit-center"}}
             >
                 


               {store.map((x, i) =>(
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

                    exit={{ width:endWidth[i], opacity:appear[i] , transition:{ease:easing, duration: 1.5, delay:.5}}}
                    className={bgClass[i].name}
                    style={{padding: "0 5%" 
                    // width:"33.33%"
                }}

                // exit={endWidth[i]}
                        >
                            <motion.div 
                            className="product_detail_cointainer"
                            variants={fadeInUp}
                            exit={{ x: "-4px", opacity:0, transition:{duration:1.0}}}
                            >
                        <div style={{height:"100px", margin:"36px 0 "}}>
                            <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "2em", fontFamily: "Ballerina", color:"wheat", margin: 0}}>{filters_keys[i]}</p>
                            <h1 style={{ fontSize: "2em",
    borderTop: "2px solid",
    width: "fit-content"}}>${x.price}</h1>
                        </div>
                        <div style={{height: "45vh", verticalAlign: "bottom", display: "table-cell"}}>
                            <img src={require('../assets/images/'+prodImgs[i]+'.png').default} style={{maxWidth:"46%"}}/>
                        </div>
                        <div style={{
                            // height: "100px",
                        marginTop:"45px"
                        //  margin: "66px 0px 0px;"
                         }}>
                             {/* <div style={{border:"1px solid blue", margin:"5px", padding:"5px", cursor:"pointer"}} onClick={()=>addItem(x)}>Checkout Here</div> */}
                            <Link to="/details"style={{border: "1px solid wheat", background: "none", padding: "10px", color:"wheat"}}>Add to Cart</Link>
                        </div>
                        </motion.div>
                    
                    </motion.div>
                ))}

     
        </motion.div>
         </motion.div >
    )
}
