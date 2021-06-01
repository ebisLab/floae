import React, { useState } from 'react'

export default function InfoDetails() {
    const [qty, setQty]=useState(1)
    return (
        <div>
            <h1>Title</h1>

            <input value={qty}/>

            <div><button>Add To Cart</button></div>
            <div><button> Shop Now</button></div>
            <hr/>
            {/* drop down */}
            <div>
                Product Info
            </div>
            <div>
                Return & Refund Policy
            </div>
            <div>
                Shipping Info
            </div>
        </div>
    )
}
