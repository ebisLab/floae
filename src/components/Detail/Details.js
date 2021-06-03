import React, { useState } from 'react'
import Accordion from '../AccordionContainer'

export default function InfoDetails({store}) {
    console.log("sotre", store)
    const [qty, setQty]=useState(1)
    return (
        <div style={{padding:"8%" }}>
            <h1 style={{fontSize:'2em', fontFamily:'Ballerina'}}>{store.name}</h1>
            <h1 style={{fontSize:'1.8em'}}>$ {store.price}</h1>
            <div>Quantity</div>

            <div
            style={{border: "1px solid",
                width: "fit-content"}}
            ><button style={{width:"30px", height:"30px", border:0}}>+</button><input value={qty} style={{width:"25px", height:"30px", border:0, background:"none", textAlign:"center"}}/><button style={{width:"30px", height:"30px", border:0}}>-</button></div>

            <div>
                <button className="description_btn">Add To Cart</button>
            </div>
            {/* <div><button className="description_btn"> Shop Now</button></div> */}

            <Accordion store={store}/>
        </div>
    )
}
