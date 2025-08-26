import React from 'react'

export default function Rewards(){
  return (
    <section style={{display:'grid', gap:16}}>
      <header style={{display:'grid', gap:8}}>
        <h2 style={{margin:'0'}}>BurgerBytes → SnapCoins</h2>
        <p style={{margin:0, color:'#475569'}}>
          Earn <strong>BurgerBytes</strong> (BB) from purchases and social sharing. Convert BB into physical
          <strong> SnapCoins</strong> (SC) you can spend on food, merch, or weekly events.
        </p>
      </header>

      <div style={{display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', alignItems:'start'}}>
        <div style={{border:'1px solid #e2e8f0', borderRadius:16, padding:'1rem'}}>
          <h3 style={{marginTop:0}}>How to earn BB</h3>
          <ul style={{margin:'0 0 0.5rem 1rem'}}>
            <li><strong>Purchases:</strong> 10 BB per $1.</li>
            <li><strong>Social posts:</strong> +50 BB for a valid public post with our hashtag and your code (max 1 per platform / 24h, up to 3/day).</li>
            <li><strong>Referrals:</strong> +50 BB when a friend signs up (verified), +200 BB when they make their first $10+ purchase.</li>
          </ul>
          <p style={{margin:0, color:'#64748b', fontSize:14}}>Tip: Keep posts public for 72h to lock rewards.</p>
        </div>

        <div style={{border:'1px solid #e2e8f0', borderRadius:16, padding:'1rem'}}>
          <h3 style={{marginTop:0}}>Convert & spend</h3>
          <ul style={{margin:'0 0 0.5rem 1rem'}}>
            <li>Rate: <strong>100 BB → 1 SC</strong>.</li>
            <li>Convert in-app, pick up coins in-store.</li>
            <li>Spend coins like credit on menu & merch or join Coin Night events.</li>
          </ul>
          <p style={{margin:0, color:'#64748b', fontSize:14}}>Min convert: 5 SC • Max per day: 50 SC.</p>
        </div>

        <div style={{border:'1px solid #e2e8f0', borderRadius:16, padding:'1rem'}}>
          <h3 style={{marginTop:0}}>Fair‑play rules</h3>
          <ul style={{margin:'0 0 0.5rem 1rem'}}>
            <li>One account per person (email + phone verify).</li>
            <li>Receipts have one‑time QR; no manual entry.</li>
            <li>Public post verification required; duplicates & spam denied.</li>
            <li>Coins have QR + PIN and are single‑use once scanned.</li>
          </ul>
          <p style={{margin:0, color:'#64748b', fontSize:14}}>We audit for abuse to keep it fun and fair.</p>
        </div>
      </div>

      <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))'}}>
        <figure style={{margin:0}}>
          <img src="/images/theo-app.png" alt="Theo app shows BurgerBytes and SnapCoin alert" style={{width:'100%', height:'auto', borderRadius:16}} />
          <figcaption style={{fontSize:14, color:'#64748b', marginTop:8}}>Theo notifies you when your post earns BurgerBytes.</figcaption>
        </figure>
        <figure style={{margin:0}}>
          <img src="/images/snapcoins.png" alt="Physical SnapCoins" style={{width:'100%', height:'auto', borderRadius:16}} />
          <figcaption style={{fontSize:14, color:'#64748b', marginTop:8}}>Convert BB to physical SnapCoins and spend in‑store.</figcaption>
        </figure>
      </div>
    </section>
  )
}