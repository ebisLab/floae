import React from 'react'

export default function FeaturedProducs({store}) {
    const prodImgs=["floaeJar", "floaeTube", "floaePump"]

    return (
        <div className="palewood" style={{height:"100vh", width:"100%"}}>
            Random Feature products here
            <div style={{display:"inline-flex", width:"100%", height:" 100vh", textAlign:"-webkit-center", }}>
            {store.map((item,i)=>(
            <div key={item.id} style={{width:"33.33%"}}>
                <h2>{item.name}</h2>
                <img src={require('../assets/images/'+prodImgs[i]+'.png').default} style={{maxWidth:"36%"}}/>

            </div>))}
            </div>
        </div>
    )
}
