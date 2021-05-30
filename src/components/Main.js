import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Main() {
    const [store,setStore]=useState([])
    useEffect(() => {
        axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_category=liquid&product_type=foundation`)
        .then(res=>{
            setStore(res.data)
        })
    }, [])

    const filters_keys=[ "DaLish Silk to Matte Foundation", "Dr. Hauschka Foundation", "Mineral Fusion Liquid Foundation"]

    const filteredData = store.filter(({ name }) => filters_keys.includes(name));
console.log("filteredData", filteredData );

    return (
        <div style={{display:"inline-flex", width:"100%", height:" 100vh", textAlign:"center"}}>
            <div className="mangopulp" style={{width:"33.3%", paddingTop:"10%"}}>
            {
                    filteredData[0] && (
                        <div>
                        <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat"}}>{filteredData[0].name}</p>
                        
                        <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat", borderTop: "wheat 1px solid",
    width: "max-content",margin: "0 50%", transform: "translateX(-50%)"}}> $ {filteredData[0].price}</p>
                        <img src= {filteredData[0].image_link} style={{height:"300px", mixBlendMode: "multiply"}}/>
<div>
                        <button style={{border: "1px solid wheat", background: "none", padding: "10px", color:"wheat"}}>Add to Cart</button>
                        </div>
                        </div>
                        
                    )
                }
 
            </div>
            <div className="navyleaf" style={{width:"33.3%", paddingTop:"10%"}}>

                {
                    filteredData[2] && (
                        <div>
                        <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat"}}>{filteredData[2].name}</p>
                        
                        <p style={{ fontStyle: "normal", fontWeight: 700, fontSize: "36px", fontFamily: "Ballerina", color:"wheat", borderTop: "wheat 1px solid",
    width: "max-content",margin: "0 50%", transform: "translateX(-50%)"}}> $ {filteredData[1].price}</p>
                        <img src= {filteredData[2].image_link} style={{height:"300px", mixBlendMode: "multiply"}}/>
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
                        <img src= {filteredData[1].image_link} style={{height:"300px", mixBlendMode: "darken"}}/>
<div>
                        <button style={{border: "1px solid wheat", background: "none", padding: "10px", color:"wheat"}}>Add to Cart</button>
                        </div>
                        </div>
                        
                    )
                }
                </div> 

            
        </div>
    )
}
