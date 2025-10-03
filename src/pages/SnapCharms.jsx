// src/pages/SnapCharms.jsx
import React from "react";

export default function SnapCharms(){
  return (
    <div className="page" style={{padding:'28px 16px'}}>
      <style>{`
        .sh-hero{display:grid;gap:18px;grid-template-columns:1.1fr .9fr;align-items:center;max-width:1100px;margin:0 auto}
        .sh-title{margin:0;font-size:clamp(28px,4.2vw,44px);color:#0ea5e9}
        .sh-sub{margin:6px 0 0;color:#b8c2ff}
        .sh-card{background:#fff;border:1px solid rgba(10,15,30,.12);border-radius:18px;padding:18px;box-shadow:0 12px 28px rgba(0,0,0,.18);color:#0b1020}
        .sh-grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}
        .sh-img{border-radius:14px;border:1px solid rgba(10,15,30,.12);overflow:hidden}
        .sh-img img{width:100%;height:100%;object-fit:cover;display:block}
        .badge{display:inline-block;background:#0c1326;color:#b8c2ff;border:1px solid #1f2a44;padding:6px 10px;border-radius:999px;font-size:12px;margin-right:8px}
        .pill{display:inline-block;background:linear-gradient(135deg,#0ea5e9,#f97316);color:#001018;border:none;border-radius:999px;padding:8px 12px;font-weight:800}
        @media (max-width:860px){ .sh-hero{grid-template-columns:1fr} }
      `}</style>

      {/* Hero */}
      <section className="sh-hero">
        <div className="sh-card">
          <h1 className="sh-title">SnapCharms</h1>
          <p className="sh-sub">
            Every kids meal includes a <b style={{color:'#f97316'}}>SnapCharm Blind Bag</b>. Mix, match, and clip them to your clothes, bookbag, purse—anything!
          </p>
          <div style={{marginTop:12}}>
            <span className="badge">Common → Rare → <b style={{color:'#f97316'}}>Ultra Rare</b></span>
            <span className="badge">Bracelet · Lanyard · Display Board</span>
          </div>
        </div>

        <div className="sh-img"><img src="/assets/snapcharms/pack-hero.jpg" alt="SnapCharms pack" /></div>
      </section>

      {/* How it works & accessories */}
      <section style={{maxWidth:1100, margin:'22px auto 0', display:'grid', gap:16, gridTemplateColumns:'1fr 1fr'}}>
        <div className="sh-card">
          <h2 style={{margin:'0 0 10px', color:'#0ea5e9'}}>How SnapCharms Work</h2>
          <ul style={{margin:'0 0 12px 18px', lineHeight:1.6}}>
            <li>Each kids meal includes one <b style={{color:'#f97316'}}>blind bag</b> charm.</li>
            <li>Each series features multiple types and rarities.</li>
            <li>Clip charms to clothing, backpacks, lanyards, or a display board.</li>
            <li>Collectors can complete an entire series—ranked from Common to <b style={{color:'#f97316'}}>Ultra Rare</b>.</li>
            <li>We’ll feature every series on a <b>SnapCharm Wall</b> in-store.</li>
          </ul>
          <button className="pill">Shop Accessories</button>
        </div>

        <div className="sh-grid">
          <div className="sh-img"><img src="/assets/snapcharms/lanyard-bracelet.jpg" alt="Lanyard and bracelet"/></div>
          <div className="sh-img"><img src="/assets/snapcharms/bracelet-display.jpg" alt="Bracelet & display"/></div>
          <div className="sh-img"><img src="/assets/snapcharms/series-board.jpg" alt="Series display board"/></div>
          <div className="sh-img"><img src="/assets/snapcharms/pack-tiles.jpg" alt="Pack art & charms"/></div>
        </div>
      </section>
    </div>
  );
}
