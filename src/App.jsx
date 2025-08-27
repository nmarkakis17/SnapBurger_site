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
      `}</style>

      <div className="global-haze" aria-hidden />
      <NavBar />
      <main className="page">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  )
}
