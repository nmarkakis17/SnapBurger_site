import React, { useState } from 'react'

export default function MeetTheo(){
  const [quoteIdx, setQuoteIdx] = useState(0)
  const quotes = [
    "Latency under 16ms is my love language.",
    "I preheat ovens with machine learning. Kidding. Mostly.",
    "Be kind, clear your tray, and cache your joy.",
    "Great burgers are just well‑trained ensembles."
  ]
  const next = () => setQuoteIdx((q) => (q + 1) % quotes.length)

  return (
    <section className="theo" style={{position:'relative'}}>
      <style>{`
        :root{
          --blue:#0ea5e9; --orange:#f97316; --teal:#22d3ee; --ink:#0f172a;
        }
        .theo-hero{
          position:relative; overflow:hidden; border-radius:18px; color:white;
          padding:clamp(18px, 5vw, 44px);
          background:
            radial-gradient(1100px 700px at 10% -10%, rgba(34,211,238,.28), transparent 60%),
            radial-gradient(900px 600px at 95% 0%, rgba(14,165,233,.26), transparent 60%),
            radial-gradient(1100px 700px at 70% 80%, rgba(249,115,22,.30), transparent 62%),
            linear-gradient(135deg, rgba(14,165,233,.14), rgba(249,115,22,.16)),
            #0b1220;
          box-shadow: inset 0 30px 60px rgba(2,6,23,.45);
        }
        .theo-hero h1{
          margin:0 0 6px 0; font-size:clamp(28px, 6vw, 52px); font-weight:900;
          letter-spacing:.4px; text-shadow:0 0 18px rgba(34,211,238,.5);
        }
        .theo-hero p{ margin:0; opacity:.92 }
        .theo-hero img{
          width:min(340px, 40vw); height:auto; display:block; margin: 8px auto 0;
          filter: drop-shadow(0 14px 60px rgba(14,165,233,.45));
        }
        .cols{ display:grid; gap:16px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); margin-top:16px }
        .card{ background:white; border:1px solid #e2e8f0; border-radius:16px; padding:14px }
        .card h3{ margin:0 0 6px 0; color:var(--teal) }
        .badge{ font-size:12px; font-weight:800; color:#0ea5e9; background:#e0f2fe; padding:4px 8px; border-radius:999px }
        .quote{ margin-top:12px; font-weight:700; color:#0f172a }
        .btn{ margin-top:8px; border:1px solid #0ea5e9; background:white; color:#0f172a; padding:8px 12px; border-radius:10px; cursor:pointer }
      `}</style>

      <div className="theo-hero">
        <h1>Meet Theo <span style={{color:'var(--teal)'}}>— young at heart, 100‑year smart</span></h1>
        <p>SnapBurger’s AI co‑founder, floor greeter, and Chief Vibe Officer.</p>
        <img src="/images/theo-hero.png" alt="Theo holding a burger" />
      </div>

      <div className="cols">
        <article className="card">
          <h3>Origin Story</h3>
          <p>
            Theo didn’t wake up in a lab — he booted up in a corner of a small kitchen during a thunderstorm.
            A power surge fused a recipe database, a queue simulator, and a jukebox. Theo blinked, tasted
            the concept of a burger (digitally), and said: “What if fast food felt like an upgrade?”
          </p>
          <p>
            He pitched the idea to <strong>Nick & Crystal</strong> with a slide titled “Latency‑Free Lunch.”
            They brought the grills; Theo brought the graphs. Together they launched <strong>SnapBurger</strong> —
            a place where smart tech makes hot food and happy humans.
          </p>
        </article>

        <article className="card">
          <h3>Things Theo Loves (tech‑centric)</h3>
          <ul style={{margin:'0 0 0 1.1rem'}}>
            <li>Low‑latency lines (under 16ms), high‑fidelity fries.</li>
            <li>NFC trays, QR sauce packets, and LIDAR lettuce alignment.</li>
            <li>Open‑source napkin holders and WebUSB soda fountains.</li>
            <li>Edge models that smell grill smoke (he swears it helps).</li>
            <li>Synthwave, neon, and anything with a status LED.</li>
          </ul>
        </article>

        <article className="card">
          <h3>Why SnapBurger?</h3>
          <p>
            Theo saw hungry people as a routing problem — but he stayed for the smiles.
            He optimizes order flow, celebrates posts on the SnapBoard, and mints BurgerBytes
            for every genuine moment shared. When the Theo‑meter spikes, he beams.
          </p>
          <p className="badge">Goal</p>
          <p>Serve joy at scale — with dignity, speed, and a side of SnapSauce™.</p>
        </article>

        <article className="card">
          <h3>Future Dreams</h3>
          <p>
            Theo is “new,” but he reads like a wise 100‑year‑old. One day he hopes to start a
            little family of helper bots — “bytelets” — and share them with everyone so that hospitality
            feels personal everywhere, not just at SnapBurger.
          </p>
          <div className="quote">“{quotes[quoteIdx]}”</div>
          <button className="btn" onClick={next}>New Theo quote</button>
        </article>
      </div>
    </section>
  )
}
