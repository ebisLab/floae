import React,{ useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'



export default function FeaturedProducs({store, easing}) {
    const prodImgs=["floaeJar", "floaeTube", "floaePump"]
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll =()=> setOffsetY(window.pageYOffset)

    //event list
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);

    }, [])

    return (

        <motion.div 

        initial={{opacity:0, zIndex:-1}}
       
        animate={{
            opacity:1,zIndex:-1,

            transition: {
            delay:2.5,

            ease: easing, 
        }}}
        // className="palewood" 
        style={{height:"120vh", width:"100%", textAlign:"center", zIndex:-1, marginTop:"-10px", zIndex:-1, fontFamily:'Bubbles', background:"#c39356"}}>
<div style={{
    // zIndex:-1, 
    marginTop:"-100px", 
    position:"relative"
    }}>
            <div  style={{transform: `translateY(${offsetY * 0.2}px)`}}>
            <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat", zIndex:-1, margin: "0 0 5% 0"}}>Featured Products</p>

            <div style={{display:"inline-flex", width:"100%", 
            height:" 3vh",
             textAlign:"-webkit-center", }}>
            {store.map((item,i)=>(
            <div key={item.id} style={{width:"33.33%"}}>
                <h2>{item.name}</h2>
                <img src={require('../assets/images/'+prodImgs[i]+'.png').default} style={{maxWidth:"36%"}}/>
                <div style={{ marginTop:"45px" }}>
                    <Link to="/details"style={{border: "1px solid wheat", background: "none", padding: "10px", color:"wheat"}}>Add to Cart</Link>
                </div>

            </div>))}
            </div>
            </div>
            </div>
        </motion.div>

    )
}
