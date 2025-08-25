import React from 'react'

const items = [
  {name:'SnapBurger Tee', price:19.99},
  {name:'Theo Sticker Pack', price:4.99},
  {name:'SnapCoin Keychain', price:6.99},
]

export default function Merch(){
  return (
    <section style={{display:'grid', gap:12}}>
      <h2 style={{margin:'0 0 0.5rem 0'}}>Merch</h2>
      <div style={{display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))'}}>
        {items.map(it => (
          <div key={it.name} style={{border:'1px solid #e2e8f0', borderRadius:16, padding:'1rem'}}>
            <div style={{height:100, background:'#f1f5f9', borderRadius:12, marginBottom:8, display:'grid', placeItems:'center'}}>Image</div>
            <div style={{fontWeight:700}}>{it.name}</div>
            <div style={{color:'#0f172a'}}>${it.price.toFixed(2)}</div>
            <button style={{marginTop:8, padding:'0.5rem 0.75rem', borderRadius:10, border:'1px solid #0ea5e9', background:'white', cursor:'pointer'}}>Add to cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}
