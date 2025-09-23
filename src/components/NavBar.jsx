import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar(){
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  // Close menu if you click outside
  useEffect(() => {
    function onDocClick(e){
      if (!panelRef.current) return
      if (open && !panelRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [open])

  return (
    <header style={{position:'sticky', top:0, zIndex:20, background:'white', borderBottom:'1px solid #e2e8f0'}}>
      <style>{`
        :root{ --blue:#0ea5e9; --orange:#f97316; }

        .wrap{
          display:flex; align-items:center; justify-content:space-between;
          gap:1rem; padding:0.75rem 1rem; max-width:1200px; margin:0 auto;
        }

        /* gradient pill link */
        .navlink{
          display:inline-block; padding:.5rem .85rem; border-radius:999px;
          text-decoration:none; font-weight:800; letter-spacing:.2px; color:#fff;
          background: linear-gradient(135deg, var(--blue), var(--orange));
          background-size:200% 200%; background-position:0% 50%;
          border:none; box-shadow:0 2px 0 rgba(2,6,23,.06), 0 10px 20px rgba(14,165,233,.20);
          opacity:.88; transition: opacity .15s, transform .15s, box-shadow .15s, background-position .30s;
        }
        .navlink:hover{ opacity:1; transform:translateY(-1px); box-shadow:0 8px 22px rgba(14,165,233,.28); background-position:100% 50% }
        .navlink.active{ opacity:1; box-shadow: 0 0 0 2px rgba(255,255,255,.15) inset, 0 12px 28px rgba(249,115,22,.25) }
        .navlink:focus-visible{ outline:3px solid var(--blue); outline-offset:2px }

        /* desktop nav + socials */
        nav.links{ display:flex; gap:8px; flex-wrap:wrap }
        .social-links{ display:flex; align-items:center; gap:12px }
        .social-links span{
          font-weight:700; font-size:.9rem;
          background: linear-gradient(135deg, var(--blue), var(--orange));
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; text-fill-color:transparent;
        }
        .social-links img{ width:22px; height:22px; transition: transform .2s, filter .3s }
        .social-links a:hover img{ transform: scale(1.15); filter: drop-shadow(0 0 6px var(--blue)) drop-shadow(0 0 10px var(--orange)) }

        /* hamburger button (hidden on desktop) */
        .burger{
          display:none; background:transparent; border:0; padding:8px; border-radius:10px;
        }
        .burger:focus-visible{ outline:3px solid var(--blue) }

        /* mobile panel (hidden by default) */
        .mobile-panel{
          display:none;
          position:absolute; left:0; right:0; top:100%;
          background:#fff; border-bottom:1px solid #e5e7eb;
          box-shadow: 0 12px 30px rgba(2,6,23,.08);
        }
        .mobile-inner{ padding:10px 12px 16px; display:grid; gap:10px }
        .mobile-links{ display:grid; gap:8px }
        .mobile-socials{ display:flex; align-items:center; justify-content:center; gap:14px; padding-top:6px }

        /* responsive rules */
        @media (max-width: 768px){
          nav.links, .social-links{ display:none }  /* hide desktop sections */
          .burger{ display:inline-flex; align-items:center; justify-content:center }
          .mobile-panel{ display:block; }
          .mobile-panel.closed{ transform: translateY(-10px); opacity:0; pointer-events:none; transition: opacity .18s ease, transform .18s ease }
          .mobile-panel.open{ transform: translateY(0); opacity:1; transition: opacity .2s ease, transform .2s ease }
        }
      `}</style>

      <div className="wrap">
        {/* Brand */}
        <Link to="/" style={{display:'flex', alignItems:'center', gap:10, textDecoration:'none'}}>
          <img src="/images/burger-logo.png" alt="SnapBurger logo" style={{ width:50, height:50, borderRadius:12 }} />
          <img
            src="/images/snap-burger-duotone.png"
            srcSet="/images/snap-burger-duotone.png 1x, /images/snap-burger-duotone@2x.png 2x"
            alt="SnapBurger" style={{ height:28, width:'auto', display:'block' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="links">
          <NavLink to="/" end className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>Home</NavLink>
          <NavLink to="/menu" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>Menu</NavLink>
          <NavLink to="/rewards" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>SnapCoins</NavLink>
          <NavLink to="/merch" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>Merch</NavLink>
          <NavLink to="/snapboard" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>SnapBoard</NavLink>
          <NavLink to="/theo" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>Meet Theo</NavLink>
          <NavLink to="/about" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>About</NavLink>
        </nav>

        {/* Desktop socials */}
        <div className="social-links">
          <span>Follow Us:</span>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/images/facebook.svg" alt="Facebook" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/images/instagram.svg" alt="Instagram" /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><img src="/images/tiktok.svg" alt="TikTok" /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src="/images/youtube.svg" alt="YouTube" /></a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="burger"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open ? 'true' : 'false'}
          onClick={() => setOpen(v => !v)}
        >
          {/* simple inline svg icon */}
          {open ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M18 6L6 18" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round"/></svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round"/></svg>
          )}
        </button>
      </div>

      {/* Mobile slide-down panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`mobile-panel ${open ? 'open' : 'closed'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mobile-inner">
          <div className="mobile-links">
            <NavLink to="/" end className={({isActive}) => 'navlink' + (isActive ? ' active' : '')} onClick={()=>setOpen(false)}>Home</NavLink>
            <NavLink to="/menu" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')} onClick={()=>setOpen(false)}>Menu</NavLink>
            <NavLink to="/rewards" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')} onClick={()=>setOpen(false)}>SnapCoins</NavLink>
            <NavLink to="/merch" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')} onClick={()=>setOpen(false)}>Merch</NavLink>
            <NavLink to="/snapboard" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')} onClick={()=>setOpen(false)}>SnapBoard</NavLink>
            <NavLink to="/theo" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')} onClick={()=>setOpen(false)}>Meet Theo</NavLink>
            <NavLink to="/about" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')} onClick={()=>setOpen(false)}>About</NavLink>
          </div>

          <div className="mobile-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/images/facebook.svg" alt="Facebook" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/images/instagram.svg" alt="Instagram" /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><img src="/images/tiktok.svg" alt="TikTok" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src="/images/youtube.svg" alt="YouTube" /></a>
          </div>
        </div>
      </div>
    </header>
  )
}
