import React,{useEffect,useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import FeaturedProducs from '../components/FeaturedProducs'
import {motion} from 'framer-motion'
import InfoDetails from '../components/Detail/Details'

export default function Details({store,checkout, setStore, addItem, localCart}) {
    const {infoID} = useParams();
    const [canScroll, setCanScroll]=useState(false)
    const [data, setData] = useState(
        store.filter(item=>item.id === Number(infoID))
    )
    const [transAnimation, setTransAnimation]=useState(false)
    const transition={duration: 0.5}
    const easing = [0.6, -0.05, 0.01, 0.99]



    useEffect(() => {
        console.log("can scroll", canScroll)
        setData([{...data[0],quantity:1}])
        document.querySelector('html').style.setProperty('background', 'rgb(63, 69, 39)')
        if(canScroll === false){
            document.querySelector('body').classList.add('no-scroll')
            document.querySelector('body').style.setProperty('position', 'fixed')
        }else{
            document.querySelector('body').classList.remove('no-scroll')
            document.querySelector('body').style.setProperty('position', 'unset')


        }

    },[canScroll])

    return (

        <motion.div transition={transition} style={{overflowY: "hidden"}}>
            <motion.nav
                transition={transition} 
                onAnimationComplete={()=>setCanScroll(true)}
                animate={{ color: data[0].menu_color, transition:{delay:1.5, duration:1, easing: 'ease'}}}
                style={{
                    position: 'absolute', 
                    zIndex: 20000, 
                    marginTop:"5px", 
                    color:"wheat", 
                    padding:"5px 50px 0px", 
                    width:"100%"}}>
                <span style={{fontFamily:'Ballerina', fontSize:"3em", fontWeight:700}}>Floae</span>
                    <ul className="menu_list" style={{display:"inline-flex", listStyle:"none"}}>
                        <li><Link to="/">Home</Link></li>
                        <li>Collections</li>
                        <li>Featured </li>
                        <li>Women</li>
                    </ul>
                    <ul className="menu_list" style={{display:"inline-flex", listStyle:"none", float:"right", color:"wheat", zIndex:2000}}>
                    <li><Link to="/cart" 
                    onClick={()=>setTransAnimation(true)}
                    ><i className="pe-7s-cart" style={{fontSize:"1.7em", fontWeight:"600"}}></i><span className={checkout.length>0?"stuff_cart":""} style={{color:"tomato", fontWeight: 700, position:"relative", top:'-20px', left:'-14px', borderRadius:"50%"}}>{checkout.length}</span></Link></li>
                        <li><i className="pe-7s-user" style={{fontSize:"1.7em", fontWeight:"600"}}></i></li>
                    </ul>
            </motion.nav>

        <motion.div
        transition={transition}
        animate={{background:"#3f4527", transition:{ease:easing}}}
        style={{display: 'inline-flex', height:"110vh", width:"100%", 
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
        }}
        exit={{width:"60.0%", 
        backgroundSize:transAnimation?"cover":"",
        backgroundPosition: transAnimation?"bottom right":"",
        backgroundImage: transAnimation?`url(${require(`../assets/images/Details/cosmetic-cart.jpg`).default})`:"", 
        transition: {
            duration:1.5,
            ease: easing, 
        }}
    }
             >   <motion.div  
                initial={{opacity:1}}
                exit={{opacity:0, transition: {duration:1.5}}}
                style={{
                    height:"100%",
                    width:"100%", 
                    position:"absolute",
                    right:0,
                    bottom:0,
                    backgroundSize:" cover",
                    backgroundPosition: "bottom right",
                    backgroundImage:`url(${require(`../assets/images/Details/${data[0].product_detail_img}`).default})`, 

            // backgroundImage:`url(${require('../assets/images/Details/Pump.jpg').default})`, 
            zIndex:1
        }}></motion.div>

                </motion.div>
            <motion.div 
            className="demo2"
            animate={{opacity:1, zIndex:1000, 
                transition: {delay:1.8, duration:2.0}}}
            style={{width:"33.4%", zIndex:1000 }}>

                <motion.div 

                        initial={{opacity:1, y:0}}
                        exit={{opacity:0, y:-30, 
                            width:"457px",
                            position:"absolute",
                            right:0,
                            transition:{delay:.1, duration:1.5}
                        }}
                        // exit={{transition:{delay:2222}}}
                        animate={{opacity:1, transition: {delay:.2, duration:.5}}}>
                    <InfoDetails 
                        store={data[0]} 
                        data={data} 
                        addItem={addItem} 
                        setStore={setStore} 
                        setData={setData} 
                        checkout={checkout}/>
                </motion.div>
            </motion.div>
        </motion.div>
        <div>
        <FeaturedProducs addItem={addItem} store={store} easing={easing} />
        </div>
        </motion.div>
    )
}
