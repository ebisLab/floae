import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

export default function Cart({checkout}) {

    const transition={duration: 0.5}
    const easing = [0.6, -0.05, 0.01, 0.99]
    return (
        <motion.div
        // initial={{opacity:0}}
        // animate={{opacity:1}}
        >

        <motion.nav
        transition={transition} 
        // animate={{ color:'rgb(63, 69, 39)', transition:{delay:1.5, duration:1, easing: 'ease'}}}
        style={{position: 'absolute', zIndex: 1000, marginTop:"5px", color:"wheat", padding:"5px 50px 0px", width:"100%"}}>

        {/* // style={{position: 'absolute', zIndex: 2000, marginTop:"5px", color:"wheat", padding:"5px 50px 0px", width:"100%"}}> */}
            <span style={{fontFamily:'Ballerina', fontSize:"3em", fontWeight:700}}>Floae</span>
                <ul className="menu_list" style={{display:"inline-flex", listStyle:"none"}}>
                    <li><Link to="/">Home</Link></li>
                    <li>Collections</li>
                    <li>Featured </li>
                    <li>Women</li>
                </ul>
                <ul className="menu_list" style={{display:"inline-flex", listStyle:"none", float:"right", color:"wheat", zIndex:2000}}>
                    <li><Link to="/cart"><i className="pe-7s-cart" style={{fontSize:"1.7em", fontWeight:"600"}}></i><span style={{color:"salmon", fontWeight: 700, position:"relative", top:'-20px', left:'-14px'}}>{checkout.length}</span></Link></li>
                    <li><i className="pe-7s-user" style={{fontSize:"1.7em", fontWeight:"600"}}></i></li>
                </ul>
        </motion.nav>
        <div style={{display: 'inline-flex', height:"100vh", width:"100%"}}>
            <motion.div className="navyleaf"
            initial={{width:"60.0%"}}
            animate={{
                opacity:1,
                width:"80.0%", transition: {
                duration:2.5,
                ease: easing, 
            }}}
             >
            <motion.div  
            initial={{opacity:1}}
            // initial={{opacity:0}}
            // animate={{opacity:1}}
                style={{
                    height:"100%",
                    width:"100.0%", 
                    // position:"absolute",
                    left:0,
                    bottom:0,
                    backgroundSize:" cover",
                    backgroundPosition: "bottom right",
            backgroundImage:`url(${require('../assets/images/Details/cosmetic-cart.jpg').default})`, 
            zIndex:1
        }}></motion.div>
            </motion.div>

            <motion.div className="mangopulp" initial={{opacity:0}} 
            style={{width:"40.0%"}}
            animate={{opacity:1, transition:{ease:easing, duration:1.0}}} 

            >
            <motion.div  
            initial={{y:50, opacity:0}} 
            animate={{y:0, opacity:1, transition:{ease:easing, duration:2.0}}} 
            style={{padding: "18% 8%"}}
            >
                <h1 style={{fontFamily:'Ballerina', fontSize:'3em'}}>My Cart</h1>
            {checkout.map(item=>(
                <div style={{display: 'inline-flex',}} >
                    <div>
                    <img src={require('../assets/images/'+item.image_link).default} style={{width:"120px"}}/>
                    
                        </div>
                        <div>
                            <div>{item.name}</div>
                            <div><input style={{width:"50px"}} value="1" /></div>
                            <div style={{fontWeight:600, fontSize:'1.5em'}}> ${item.price}</div>
                        </div>
                </div>
            ))}

                        <div>Subtotal</div>
                        <div>Shipping</div>
                        <div>Total</div>
                        <button>Checkout</button>
            
            
            </motion.div>
            </motion.div >
        </div>
        </motion.div>
    )
}
