import React,{ useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'



export default function FeaturedProducs({store, easing,addItem}) {
    // const prodImgs=["floaeJar", "floaeTube", "floaePump"]
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
        style={{height:"120vh", width:"100%", 
        textAlign:"center", marginTop:"-10px", 
        zIndex:-1, fontFamily:'Bubbles', background:"#c39356"}}>
<div style={{
    // zIndex:-1, 
    marginTop:"-100px", 
    position:"relative"
    }}>
            <div  style={{transform: `translateY(${offsetY * 0.2}px)`}}>
            <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat", zIndex:-1, margin: "0 0 2% 0"}}>Featured Products</p>

            <div style={{display:"inline-flex", width:"100%", 
             textAlign:"-webkit-center", }}>
            {store.map((item,i)=>(
            
            <div style={{width:"33.3%"}}>
                        <div style={{ margin:"36px 0 "}}>
                            <p style={{ fontSize: "1.4em", fontFamily: "Bubbles", color:"wheat", margin: 0}}>{item.name}</p>
                            <h2 style={{ fontSize: "1.4em", width: "fit-content"}}>${Number(item.price).toFixed(2)}</h2>
                        </div>
                        <Link to={`/details/${item.id}`} style={{height: "35vh", verticalAlign: "bottom", display: "table-cell"}}>
                            <img alt={item.name} src={require('../assets/images/'+ item.image_link).default} style={{maxWidth:"36%"}}/>
                        </Link>
                        <div style={{ marginTop:"45px" }}>
                            <button onClick={()=>addItem({...item, quantity:item.quantity+1})}
                            style={{border: "1px solid wheat", background: "none", padding: "10px", color:"wheat"}} >Add To Cart</button>
                        </div>
                        </div>
                   
            ))}
            </div>
            </div>
            </div>
        </motion.div>

    )
}



