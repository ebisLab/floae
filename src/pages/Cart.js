import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

export default function Cart({checkout, removeItem, localCart}) {
    // const [total, setTotal]=useState()
    const [canScroll, 
        // setCanScroll
    ]=useState(false)


    console.log("checkout", checkout.flatMap(item=>Number(item.price)))

    useEffect(() => {
        console.log("can scroll", canScroll)
        if(canScroll === false){
            document.querySelector('body').classList.add('no-scroll')
            document.querySelector('body').style.setProperty('overflow;', 'hidden')
        }

    },[canScroll])

    console.log("insite cart", checkout)
    console.log("reduce", checkout.reduce((a, {price,quantity}) => a + Number(price)*(quantity), 0))

    const transition={duration: 0.5}
    const easing = [0.6, -0.05, 0.01, 0.99]
    return (
        <motion.div>

        <motion.nav
        transition={transition} 
        style={{position: 'absolute', zIndex: 1000, marginTop:"5px", color:"wheat", padding:"5px 50px 0px", width:"100%"}}>

            <span style={{fontFamily:'Ballerina', fontSize:"3em", fontWeight:700}}>Floae</span>
                <ul className="menu_list" style={{display:"inline-flex", listStyle:"none"}}>
                    <li><Link to="/">Home</Link></li>
                    <li>Collections</li>
                    <li>Featured </li>
                    <li>Women</li>
                </ul>
                <ul className="menu_list" style={{display:"inline-flex", listStyle:"none", float:"right", color:"wheat", zIndex:2000}}>
                <li><Link to="/cart"><i className="pe-7s-cart" style={{fontSize:"1.7em", fontWeight:"600"}}></i><span className={checkout.length>0?"stuff_cart":""} style={{color:"tomato", fontWeight: 700, position:"relative", top:'-20px', left:'-14px', borderRadius:"50%"}}>{checkout.length}</span></Link></li>
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
                    height:"110%",
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
            animate={{y:0, opacity:1, transition:{ease:easing, duration:2.0, delay:0.5}}} 
            style={{padding: "18% 8%"}}
            >
                <div style={{overflowY:'scroll', overflowX: "hidden",  height:'600px', width:"395px"}}>
                <h1 style={{fontFamily:'Ballerina', fontSize:'3em'}}>My Cart</h1>
                
                <div style={{paddingBottom:"10px"}}>
            {checkout.map(item=>(
                <div style={{display: 'inline-flex',}} >
                    <div>
                    <Link to={`/details/${item.id}`} >
                        <img 
                        alt={item.name}
                        src={require('../assets/images/'+item.image_link).default} 
                        style={{ 
                            maxWidth: "90px", 
                            maxHeight: "150px", 
                            width:"70%"}}/>
                    </Link>
                    
                        </div>
                        <div>
                            <div style={{fontSize:"1.3em"}}>{item.name}</div>
                            <div style={{display:"inline-flex"}}>
                            <div>
                                <div style={{border: "1px solid",width: "fit-content"}}>
                                    <button style={{width:"30px", height:"30px", border:0}}>+</button>
                                    <input value={item.quantity} style={{width:"25px", height:"30px", border:0, background:"none", textAlign:"center"}}/><button style={{width:"30px", height:"30px", border:0}}>-</button></div>
                                </div>
                                <div style={{width:"175px", textAlign:"right"}}>
                                <div >
                                    <i
                                onClick={()=>removeItem(item)}
                                    className="pe-7s-close" style={{fontSize:"2.3em", cursor: "pointer", padding:"0px 24px 0px 15px"}}></i>
                                </div>
                                </div>
                            </div>
                            <div style={{fontWeight:600, fontSize:'1.5em'}}> ${Number(item.price).toFixed(2)}</div>
                        </div>
                </div>
            ))}
            </div>

                        <div style={{display: 'inline-flex',width:"100%", borderTop:"1px solid", padding:"10px"}}>
                            <div style={{fontSize:"1.3em", width:"50%"}}>Subtotal</div>
                            <div style={{width:"50%", textAlign:"right", fontSize:"1.2em", fontWeight:600}}>$ {(checkout.reduce((a, {price,quantity}) => a + Number(price)*(quantity), 0)).toFixed(2)}</div>
                            {/* <div style={{width:"50%", textAlign:"right", fontSize:"1.2em"}}>$ {checkout.reduce((a, {price}) => a + Number(price), 0).toFixed(2)}</div> */}
                        </div>
                        <div style={{display: 'inline-flex',width:"100%", borderTop:"1px solid", padding:"10px"}}>
                            <div style={{fontSize:"1.3em", width:"50%"}}>Shipping</div>
                            <div style={{width:"50%", textAlign:"right", fontSize:"1.2em"}}>Free</div>
                        </div>
                        
                        <div style={{display: 'inline-flex',width:"100%", borderTop:"1px solid", padding:"10px"}}>
                            <div style={{fontSize:"1.3em", width:"50%"}}>Total</div>
                            <div style={{width:"50%", textAlign:"right", fontSize:"1.2em", fontWeight:600}}>$ {(checkout.reduce((a, {price,quantity}) => a + Number(price)*(quantity), 0)).toFixed(2)}</div>
                        </div>
                        <button className="description_btn" 
                        style={{background:"#3f4527", width:"100%"}}
                        // onClick={()=>addItem(store)}
                        >Checkout</button>
                        </div>

            
            
            </motion.div>
            </motion.div >
        </div>
        </motion.div>
    )
}
