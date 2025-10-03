// src/pages/SnapCoins.jsx
import React from "react";

export default function SnapCoins(){
  return (
    <div className="page" style={{padding:'28px 16px'}}>
      <style>{`
        .sc-hero{display:grid;gap:18px;grid-template-columns:1.2fr .8fr;align-items:center;max-width:1100px;margin:0 auto}
        .sc-title{margin:0;font-size:clamp(28px,4.2vw,44px);color:#0ea5e9}
        .sc-sub{margin:6px 0 0;color:#b8c2ff}
        .sc-card{background:#fff;border:1px solid rgba(10,15,30,.12);border-radius:18px;padding:18px;box-shadow:0 12px 28px rgba(0,0,0,.18);color:#0b1020}
        .sc-grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}
        .sc-img{border-radius:14px;border:1px solid rgba(10,15,30,.12);overflow:hidden}
        .sc-img img{width:100%;height:100%;object-fit:cover;display:block}
        .sc-badge{display:inline-block;background:#0c1326;color:#b8c2ff;border:1px solid #1f2a44;padding:6px 10px;border-radius:999px;font-size:12px;margin-right:8px}
        .sc-kpis{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}
        .sc-kpi{background:linear-gradient(135deg,#0ea5e912,#f9731612);border:1px solid rgba(10,15,30,.12);border-radius:14px;padding:12px}
        .sc-orange{color:#f97316;font-weight:800}
        @media (max-width:860px){ .sc-hero{grid-template-columns:1fr} }
      `}</style>

      {/* Hero */}
      <section className="sc-hero">
        <div className="sc-card">
          <h1 className="sc-title">SnapCoins</h1>
          <p className="sc-sub">Earn <b className="sc-orange">BurgerBytes</b>, cash them in for blind bags, and collect every coin in the series.</p>
          <div style={{marginTop:12}}>
            <span className="sc-badge">Earn while you dine</span>
            <span className="sc-badge">Trade for rewards</span>
            <span className="sc-badge">Ultra Rare → SnapVault</span>
          </div>
        </div>

        <div className="sc-img" aria-hidden="true">
          {/* SnapVault wall / poster */}
          <img src="/assets/snapcoins/snapvault-wall-1.jpg" alt="SnapVault Wall" />
        </div>
      </section>

      {/* How it works */}
      <section style={{maxWidth:1100, margin:'22px auto 0', display:'grid', gap:16, gridTemplateColumns:'1.1fr .9fr'}}>
        <div className="sc-card">
          <h2 style={{margin:'0 0 10px', color:'#0ea5e9'}}>How SnapCoins Work</h2>
          <ol style={{margin:'0 0 12px 18px', lineHeight:1.6}}>
            <li>Every purchase earns <b className="sc-orange">BurgerBytes</b>.</li>
            <li>Redeem BurgerBytes for <b className="sc-orange">SnapCoin Blind Bags</b>.</li>
            <li>Collect the full <b>Series</b>. Non–Ultra-Rare coins go into the public <b>SnapVault</b> display.</li>
            <li>Find an <b className="sc-orange">Ultra Rare</b>? Turn it in to be featured on the <b>SnapVault Wall</b> with your name & photo.</li>
            <li>Trade coins for <b>free menu items</b>, <b>merch</b>, or <b>chances at limited edition collectibles</b>.</li>
            <li>When the Vault reaches a secret fill level, the <b>Theo-Meter</b> triggers restaurant-wide prizes!</li>
          </ol>

          <div className="sc-kpis">
            <div className="sc-kpi"><b>Rarities</b><div>Common → Rare → <span className="sc-orange">Ultra Rare</span></div></div>
            <div className="sc-kpi"><b>Redemptions</b><div>Free food · Merch · Collectibles</div></div>
            <div className="sc-kpi"><b>Series</b><div>Collect all coins to complete a set</div></div>
          </div>
        </div>

        <div className="sc-grid">
          <div className="sc-img"><img src="/assets/snapcoins/snapvault-wall-2.jpg" alt="SnapVault wall alt"/></div>
          <div className="sc-img"><img src="/assets/snapcoins/snapvault-tube.jpg" alt="Vault tube of coins"/></div>
          <div className="sc-img"><img src="/assets/snapcoins/snapcoin-poster.jpg" alt="Coin poster"/></div>
        </div>
      </section>
    </div>
  );
}
