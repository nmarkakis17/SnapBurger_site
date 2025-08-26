import React from 'react'

export default function Home(){
  return (
    <section style={{display:'grid', gap:'1.25rem'}}>
      <div style={{padding:'1.25rem', borderRadius:16, background:'linear-gradient(135deg, #0ea5e9 0%, #f97316 100%)', color:'white', textAlign:'center'}}>
        <img src="/snapburger-logo.png" alt="SnapBurger logo" style={{maxWidth:220, width:'100%', height:'auto', margin:'0 auto 12px', display:'block', filter:'drop-shadow(0 4px 24px rgba(0,0,0,0.25))'}} />
        <h1 style={{margin:'0 0 0.5rem 0', fontSize:'2rem'}}>SnapBurger</h1>
        <p style={{margin:0, fontSize:'1.1rem'}}>Where technology meets dining. Order at kiosks, earn SnapCoins, and see yourself on the SnapBoard.</p>
      </div>
      <div style={{display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))'}}>
        {[
          {title:'Byte Burger', desc:'Angus beef, cheese, lettuce, tomato, SnapSauce™'},
          {title:'MegaByte', desc:'Double Angus, cheese, lettuce, tomato, SnapSauce™'},
          {title:'BaconByte', desc:'Angus, thick-cut bacon, cheddar, crispy onions'},
        ].map((card) => (
          <div key={card.title} style={{padding:'1rem', border:'1px solid #e2e8f0', borderRadius:16}}>
            <h3 style={{marginTop:0}}>{card.title}</h3>
            <p style={{marginBottom:0, color:'#475569'}}>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
