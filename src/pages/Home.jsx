import React, { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [coins, setCoins] = useState(12480)
  const [posts, setPosts] = useState(312)
  const [hype, setHype] = useState(68)
  const heroRef = useRef(null)

  // Animate counters on mount
  useEffect(() => {
    const animate = (setter, start, end, ms = 900) => {
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / ms)
        const v = Math.floor(start + (end - start) * (1 - Math.pow(1 - p, 3)))
        setter(v)
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
    animate(setCoins, 0, coins)
    animate(setPosts, 0, posts)
  }, [])

  // SnapCoin rain
  const fireCoins = () => {
    const root = heroRef.current
    if (!root) return
    for (let i = 0; i < 28; i++) {
      const s = document.createElement('span')
      s.className = 'coin'
      s.style.left = Math.random() * 100 + '%'
      s.style.setProperty('--rx', (Math.random() * 360) + 'deg')
      s.style.setProperty('--delay', Math.random() * 0.5 + 's')
      root.appendChild(s)
      s.addEventListener('animationend', () => s.remove())
    }
  }

  return (
    <>
      <style>{`
        :root {
          --cyan:#06b6d4;
          --teal:#22d3ee;
          --blue:#0ea5e9;
          --orange:#f97316;
          --slate:#0f172a;
          --grid: rgba(255,255,255,0.06);
        }

        /* Canvas setup */
        html { background:#0b1220; }
        body, #root { background: transparent; }

        /* Full-page blue→orange haze (now above the page background) */
        .global-haze{
          position: fixed;
          inset: 0;
          z-index: 0;               /* was -1 (hidden) */
          pointer-events: none;
          background:
            /* cyan glow TL */
            radial-gradient(1100px 700px at 10% -10%, rgba(34,211,238,.34), transparent 60%),
            /* blue glow TR */
            radial-gradient(900px 600px at 95% 0%, rgba(14,165,233,.30), transparent 60%),
            /* ORANGE glow mid-right (visible on load) */
            radial-gradient(1100px 700px at 65% 55%, rgba(249,115,22,.40), transparent 62%),
            /* secondary warm glow BL */
            radial-gradient(900px 600px at 0% 100%, rgba(251,146,60,.28), transparent 60%),
            /* gentle wash in button direction */
            linear-gradient(135deg, rgba(14,165,233,.18), rgba(249,115,22,.22) 60%),
            #0b1220;
          background-attachment: fixed, fixed, fixed, fixed, fixed, fixed;
          filter: saturate(1.08);
        }
        .global-haze::after{
          content:"";
          position:absolute; inset:0;
          background:
            linear-gradient(transparent 95%, rgba(255,255,255,.06) 95%) 0 0/ 100% 28px,
            linear-gradient(90deg, transparent 95%, rgba(255,255,255,.06) 95%) 0 0/ 28px 100%;
          mix-blend-mode: screen;
          opacity: .22;
        }

        /* All page content sits above the haze */
        .page { position: relative; z-index: 1; }

        .hero {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          padding: clamp(20px, 6vw, 48px);
          background: transparent; /* let haze show through */
          color: white;
          box-shadow: 0 30px 60px rgba(2,6,23,.45) inset, 0 10px 30px rgba(2,6,23,.3);
          isolation: isolate;
        }
        .grid-overlay::before {
          content:"";
          position:absolute; inset:0;
          background:
            linear-gradient(transparent 95%, var(--grid) 95%) 0 0/ 100% 28px,
            linear-gradient(90deg, transparent 95%, var(--grid) 95%) 0 0/ 28px 100%;
          pointer-events:none;
          mix-blend-mode: screen;
        }
        .orbs > i {
          position:absolute; width:12px; height:12px; border-radius:50%;
          background: radial-gradient(circle at 30% 30%, white, var(--teal) 40%, rgba(0,0,0,0));
          opacity:.7; filter: blur(0.2px); animation: float 12s linear infinite;
        }
        @keyframes float {
          from { transform: translateY(20vh) translateX(0) }
          to   { transform: translateY(-40vh) translateX(10vw) }
        }
        .logo { width:min(220px, 40vw); height:auto; display:block; margin:0 auto 12px; filter: drop-shadow(0 10px 45px rgba(14,165,233,.55)); }
        .title {
          text-align:center; margin: 0 0 6px 0;
          font-size: clamp(30px, 6vw, 56px); font-weight: 900; letter-spacing:.4px;
          text-shadow:
            0 0 12px rgba(34,211,238,.65),
            0 0 32px rgba(14,165,233,.35);
        }
        .subtitle { text-align:center; margin:0 auto; max-width:900px; color:#e2f4ff; opacity:.9; font-size:clamp(16px,2.4vw,20px) }
        .accent { color: var(--teal); text-shadow: 0 0 10px rgba(34,211,238,.6) }
        .ctaRow { display:flex; gap:12px; justify-content:center; margin:18px 0 10px 0; flex-wrap:wrap }
        .btn {
          --ring: rgba(14,165,233,.65);
          position:relative; border:1px solid rgba(255,255,255,.2); background:transparent;
          color:white; padding:12px 18px; border-radius:12px; cursor:pointer; font-weight:700;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease;
          box-shadow: 0 0 0 0 var(--ring);
        }
        .btn:hover { transform: translateY(-2px) scale(1.02); border-color: rgba(255,255,255,.4); box-shadow: 0 10px 26px rgba(14,165,233,.25) }
        .btn-primary { background: linear-gradient(135deg, var(--blue), var(--orange)); border:none }
        .stats {
          display:grid; grid-template-columns: repeat(2, minmax(140px, 1fr)); gap:12px;
          max-width:740px; margin: 12px auto 0; text-align:center;
        }
        .pill {
          background: rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.12);
          border-radius: 999px; padding: 10px 14px; display:flex; gap:10px; justify-content:center; align-items:center;
          backdrop-filter: blur(6px);
        }
        .statNum { font-weight:900; letter-spacing:.3px; text-shadow: 0 0 12px rgba(34,211,238,.4) }
        .marquee { overflow:hidden; border-radius:12px; border:1px solid rgba(255,255,255,.08); background: rgba(255,255,255,.03); margin-top:16px }
        .track { display:inline-block; white-space:nowrap; padding:10px 0; animation: slide 18s linear infinite; }
        @keyframes slide { from { transform:translateX(0) } to { transform: translateX(-50%) } }

        /* Feature cards */
        .section { max-width:1200px; margin:30px auto 0; padding: 0 4px }
        .h2 {
        font-size: clamp(22px, 3.5vw, 30px);
        margin: 0 0 12px 0;
        background: linear-gradient(135deg, var(--blue), var(--orange));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        text-shadow: none; /* gradients look cleaner without the glow */
         }
        .cards { display:grid; gap:16px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)) }
        .card {
          background:#fff; border:1px solid #e2e8f0; border-radius:18px; padding:16px;
          transition: transform .18s ease, box-shadow .18s ease;
          transform-style: preserve-3d; perspective: 600px;
        }
        .card:hover { transform: translateY(-4px) rotateX(2deg) rotateY(-2deg); box-shadow: 0 18px 40px rgba(2,6,23,.12) }
        .card h3 { margin:10px 0 6px 0 }
        .badge { font-size:12px; font-weight:800; color:#0ea5e9; background:#e0f2fe; padding:4px 8px; border-radius:999px }

        /* Theo-meter */
        .meterWrap { margin-top: 26px; display:grid; gap:12px; align-items:center; justify-items:center }
        .pulse {
          --h: 68;
          width: 120px; height:120px; border-radius:50%;
          display:grid; place-items:center; color:#0f172a; font-weight:900;
          background: radial-gradient(circle at 50% 50%, rgba(14,165,233,.25), rgba(14,165,233,.05) 60%, transparent 62%),
                      white;
          border: 2px solid #bae6fd;
          box-shadow:
            0 0 calc(2px + var(--h) * .2px) rgba(14,165,233,.45),
            0 0 calc(8px + var(--h) * .4px) rgba(6,182,212,.35),
            0 0 calc(14px + var(--h) * .6px) rgba(249,115,22,.35) inset;
          transition: box-shadow .2s ease, transform .2s ease;
          transform: scale(calc(0.98 + var(--h)/600));
        }
        .meter { width: min(620px, 90%); accent-color: #0ea5e9 }

        /* Gallery */
        .gallery { display:grid; gap:12px; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); margin-top:20px }
        .gallery img { width:100%; height:260px; object-fit:cover; border-radius:16px; border:1px solid #e2e8f0 }

        /* Coins (confetti) */
        .coin {
          position:absolute; top:-40px; width:14px; height:14px; border-radius:50%;
          background: radial-gradient(circle at 30% 30%, #fff, #f9a23a 40%, #f97316 70%);
          box-shadow: 0 0 12px rgba(249,115,22,.6);
          animation: drop 1.2s var(--delay) ease-in forwards, spin 1.2s var(--delay) linear;
          will-change: transform, opacity;
        }
        @keyframes drop { to { transform: translateY(85vh); opacity: .2 } }
        @keyframes spin { to { transform: translateY(85vh) rotate(var(--rx)) } }
      `}</style>

      {/* Haze behind everything */}
      <div className="global-haze" aria-hidden />

      {/* All content lives above haze */}
      <div className="page">
        {/* HERO */}
        <section className="hero grid-overlay" ref={heroRef}>
          <div className="orbs" aria-hidden>
            {Array.from({ length: 18 }).map((_, i) => (
              <i key={i} style={{
                left: `${(i * 53) % 100}%`,
                bottom: `${(i * 37) % 100}%`,
                animationDelay: `${(i % 7) * 0.6}s`,
                opacity: 0.45 + (i % 5) * 0.08
              }} />
            ))}
          </div>
          <div className="ctaRow">
             <button className="btn btn-primary" onClick={fireCoins}>CLICK ME</button>
           </div>
          <img className="logo" src="/images/snapburger-logo.png" alt="SnapBurger logo" />
          <h1 className="title">High-Tech + Great Taste = <span style={{color:'#22d3ee'}}>Supercharged Experience</span>.</h1>
          <p className="subtitle">
            Order at smart kiosks, earn <span className="accent">SnapCoins</span>, trigger the <span className="accent">Theo-meter</span>,
            and see your moment on the <span className="accent">SnapBoard</span>.
          </p>

          <div className="ctaRow">
            <a className="btn btn-primary" href="/rewards">Earn SnapCoins</a>
            <a className="btn btn-primary" href="/snapboard">See SnapBoard</a>
          </div>

          <div className="stats">
            <div className="pill">
              <span className="badge">Today</span>
              <span className="statNum">{coins.toLocaleString()} SnapCoins minted</span>
            </div>
            <div className="pill">
              <span className="badge">Live</span>
              <span className="statNum">{posts.toLocaleString()} Snap & Share posts</span>
            </div>
          </div>

          <div className="marquee" role="marquee" aria-label="Live tags">
            <div className="track">
              &nbsp;#SnapBurger&nbsp;•&nbsp;#BurgerBytes&nbsp;•&nbsp;#TheoMeter&nbsp;•&nbsp;#SnapCoins&nbsp;•&nbsp;
              #SnapBoard&nbsp;•&nbsp;#SnapBurger&nbsp;•&nbsp;#BurgerBytes&nbsp;•&nbsp;#TheoMeter&nbsp;•&nbsp;#SnapCoins&nbsp;•&nbsp;
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <h2 className="h2">How it works</h2>
          <div className="cards">
            <div className="card">
              <span className="badge">1</span>
              <h3>Meet Theo at the door</h3>
              <p>Our AI host greets you, routes lines, and keeps the vibe high.</p>
            </div>
            <div className="card">
              <span className="badge">2</span>
              <h3>Order fast at kiosks</h3>
              <p>Personalized upsell, allergy flags, and real-time prep timing.</p>
            </div>
            <div className="card">
              <span className="badge">3</span>
              <h3>Snap & Share</h3>
              <p>Post with your code to earn <b>BurgerBytes</b> and convert to physical <b>SnapCoins</b>.</p>
            </div>
            <div className="card">
              <span className="badge">4</span>
              <h3>Make the SnapBoard</h3>
              <p>Top posts get featured on our in-store wall. Fame + fries.</p>
            </div>
          </div>
        </section>

        {/* THEO-METER */}
        <section className="section">
          <h2 className="h2">Theo-meter</h2>
          <div className="meterWrap">
            <div className="pulse" style={{ '--h': hype }} aria-label="Theo-meter display">
              {hype}
            </div>
            <input
              className="meter"
              type="range"
              min="0" max="100" value={hype}
              onChange={(e) => setHype(parseInt(e.target.value))}
            />
            <div style={{color:'#475569'}}>Drag to set the hype. When it spikes, Theo celebrates.</div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section">
          <h2 className="h2">In action</h2>
          <div className="gallery">
            <img src="/images/theo-app.png" alt="Theo app shows BurgerBytes and SnapCoin alert" />
            <img src="/images/snapcoins.png" alt="Physical SnapCoins" />
            <img src="/images/snapburger-logo.png" alt="SnapBurger neon logo" style={{objectFit:'contain', background:'#0b1220'}}/>
          </div>
        </section>
      </div>
    </>
  )
}
