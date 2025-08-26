import React from 'react'

const items = [
  {name:'SnapBurger Tee', price:19.99, img:'/images/snapburger-tee.png', alt:'SnapBurger t-shirt with Theo logo'},
  {name:'Theo Keychain', price:6.99, img:'/images/theo-keychain.png', alt:'Theo character acrylic keychain'},
  {name:'SnapBurger Sticker Set', price:2.99, img:'/images/snapburger-stickers.png', alt:'SnapBurger Sticker Set'},
  {name:'SnapBurger Reusable Bag', price:2.99, img:'/images/snapburger-bag.png', alt:'SnapBurger Reuseable Bag'},
]

export default function Merch(){
  return (
    <section style={{display:'grid', gap:12}}>
      <h2 style={{margin:'0 0 0.5rem 0'}}>Merch</h2>
      <div style={{display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fit, minmax(400px, 1fr))'}}>
        {items.map(it => (
          <div key={it.name} style={{border:'1px solid #e2e8f0', borderRadius:16, padding:'1rem', display:'grid', gap:8}}>
            <div style={{width: '100%', maxWidth: 400, aspectRatio: '1 / 1', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, display: 'grid', placeItems: 'center', padding: 8}}>
              <img src={it.img} alt={it.alt} style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', display: 'block', objectFit: 'contain', objectPosition: 'center'}} />
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:8}}>
              <div style={{fontWeight:700}}>{it.name}</div>
              <div style={{fontWeight:800}}>${(it.price).toFixed(2)}</div>
            </div>
            <button style={{padding:'0.5rem 0.75rem', borderRadius:10, border:'1px solid #0ea5e9', background:'white', cursor:'pointer'}}>Add to cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}
