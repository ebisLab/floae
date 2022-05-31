import React, { useState } from 'react'
import Accordion from '../AccordionContainer'

export default function InfoDetails({store, data, setStore,setData, addItem, checkout}) {
    const [qty, setQty]=useState(0)
    const [recordQty, 
        // setRecordQty
    ]=useState({quantity:2})
    const [cart, 
        // setCart
    ]=useState(0)

    // const updateCartHandler = (id, value) => {
    //     let num=0
    //     console.log("IDD",id)
    //     console.log("vallluee", num +=value)
    //     console.log("check this out", checkout.map(item=>item.id===id))
    //     let updatedCart = checkout.map(item => item.id === id ? item.quantity += value : item)     
    //     setCart(updatedCart)
     
    //  }

    //  useEffect(() => {
    //      setData([{...store, quantity:30}])
    //  },[])
     console.log("hey there", data)
     console.log("record qty", recordQty)
     console.log("INSIDE DETAILS", checkout)
     console.log("updating cart-->", cart)
     console.log("store", store)
     console.log("DDDDATA", data)
    //  console.log("update item", [{...store,quantity:store.quantity+=5}])
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
            ><button style={{width:"30px", height:"30px", border:0}} 
            // onClick={() => updateCartHandler(store.id, +1)}
            // onClick={()=>setQty(qty+1)}
            // onClick={()=>setStore({...store,quantity:store.quantity+=1})}

            // onClick={()=>setRecordQty({quantity:recordQty.quantity +1})}

            onClick={()=>setData([{...store, quantity:store.quantity +1}])}

            >+</button>
            <input 
            value={store.quantity}
            // value={recordQty} 
            style={{width:"25px", height:"30px", border:0, background:"none", textAlign:"center"}}/>
            <button style={{width:"30px", height:"30px", border:0}} onClick={()=>setQty(qty-1)}>-</button></div>
</div>
            <div>
                <button className="description_btn" onClick={()=>addItem(store)}>Add To Cart</button>
            </div>

            </div>

            <Accordion store={store}/>
        </div>
    )
}
