import React from 'react'

export default function Menu(){
  return (
    <section style={{display:'grid', gap:16}}>
      <h2 style={{margin:'0 0 0.5rem 0'}}>Menu</h2>
      <img src="/images/menu.png" alt="Menu"/>
      <div style={{display:'grid', gap:12}}>
        {items.map((it) => (
          <div key={it.name} style={{display:'grid', gridTemplateColumns:'1fr auto', alignItems:'start', padding:'0.75rem 1rem', border:'1px solid #e2e8f0', borderRadius:16}}>
            <div>
              <div style={{fontWeight:700}}>{it.name}</div>
              <div style={{color:'#475569'}}>{it.desc}</div>
            </div>
            <div style={{fontWeight:800}}>${it.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
