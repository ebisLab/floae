import React, { useState } from 'react'
import Accordion from '../AccordionContainer'

export default function InfoDetails({store, addItem}) {
    const [qty, setQty]=useState(1)
    return (
        <div style={{padding:"18% 8%" }}>
            <h1 style={{fontSize:'2em', fontFamily:'Ballerina'}}>{store.name}</h1>
            <h1 style={{fontSize:'1.8em', borderBottom:'1px solid'}}>$ {Number(store.price).toFixed(2)}</h1>
            <div style={{paddingTop:'5%'}}>Quantity</div>
            
            <div style={{display:"inline-flex"}}>
                <div style={{marginTop:'5%'}}>
            <div
            style={{border: "1px solid",
                width: "fit-content"}}
            ><button style={{width:"30px", height:"30px", border:0}}>+</button>
            <input value={qty} style={{width:"25px", height:"30px", border:0, background:"none", textAlign:"center"}}/><button style={{width:"30px", height:"30px", border:0}}>-</button></div>
</div>
            <div>
                <button className="description_btn" onClick={()=>addItem(store)}>Add To Cart</button>
            </div>

            </div>

            <Accordion store={store}/>
        </div>
    )
}
