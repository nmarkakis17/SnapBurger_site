import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
// optional: import Footer from './components/Footer.jsx'

export default function App(){
  return (
    <>
      <style>{`
        :root {
          --cyan:#06b6d4; --teal:#22d3ee; --blue:#0ea5e9; --orange:#f97316; --slate:#0f172a;
        }
        html { background:#0b1220; }
        body, #root { background: transparent; }

        /* Site-wide blue→orange haze */
        .global-haze{
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background:
            radial-gradient(1100px 700px at 10% -10%, rgba(34,211,238,.34), transparent 60%),
            radial-gradient(900px 600px at 95% 0%, rgba(14,165,233,.30), transparent 60%),
            radial-gradient(1100px 700px at 65% 55%, rgba(249,115,22,.40), transparent 62%),
            radial-gradient(900px 600px at 0% 100%, rgba(251,146,60,.28), transparent 60%),
            linear-gradient(135deg, rgba(14,165,233,.18), rgba(249,115,22,.22) 60%),
            #0b1220;
          background-attachment: fixed, fixed, fixed, fixed, fixed, fixed;
          filter: saturate(1.08);
        }
        .global-haze::after{
          content:""; position:absolute; inset:0;
          background:
            linear-gradient(transparent 95%, rgba(255,255,255,.06) 95%) 0 0/ 100% 28px,
            linear-gradient(90deg, transparent 95%, rgba(255,255,255,.06) 95%) 0 0/ 28px 100%;
          mix-blend-mode: screen; opacity: .22;
        }

        /* All routed content sits above the haze */
        .page { position: relative; z-index: 1; }
        
        /* Hide floating CTA by default (desktop) */
        .mobile-cta{ display:none; }
        
        /* ===== Responsive ===== */
        @media (max-width: 640px){
          /* Nav: keep pills readable and scrollable */
          nav{ display:flex; gap:8px; overflow-x:auto; padding:0 8px; -webkit-overflow-scrolling:touch }
          .navlink{ padding:10px 12px; font-weight:800; min-width:max-content }

          /* Hero sizing */
          .hero{ padding:16px }
          .logo{ width:min(160px, 60vw) }
          .title{ font-size: clamp(24px, 7vw, 36px) }
          .subtitle{ font-size: clamp(14px, 4vw, 18px) }

          /* CTAs full width on phone */
          .ctaRow .btn{ width:100%; justify-content:center }

          /* Stats stack */
          .stats{ grid-template-columns: 1fr }

          /* How it Works: 4 across becomes horizontal scroll row */
          .cards{ 
            grid-auto-flow: column;
            grid-template-columns: repeat(4, 80vw);
            overflow-x:auto; scroll-snap-type:x proximity; gap:12px; padding-bottom:6px
          }
          .card{ scroll-snap-align:center }

          /* Step images + gallery sizes */
          .step-img{ height: clamp(140px, 45vw, 220px) }
          .gallery{ grid-template-columns: 1fr }
          .gallery img{ height: clamp(200px, 60vw, 320px) }

          /* Theo-meter: slightly smaller */
          .pulse{ width:104px; height:104px }

          /* Mobile floating CTA */
          .mobile-cta{
            position:fixed; left:12px; right:12px;
            bottom: calc(12px + env(safe-area-inset-bottom));
            background: linear-gradient(135deg, #0ea5e9, #f97316);
            color:#fff; text-align:center; font-weight:900;
            padding:14px 16px; border-radius:999px; z-index:1000;
            box-shadow:0 10px 30px rgba(14,165,233,.28)
          }
        }
      `}</style>

      <div className="global-haze" aria-hidden="true" />
      <NavBar />
      <main className="page">
        <Outlet />
      </main>
      <a href="/menu" className="mobile-cta">Order Now</a>
      {/* <Footer /> */}
    </>
  )
}
