import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar(){
  return (
    <header style={{position:'sticky', top:0, zIndex:10, background:'white', borderBottom:'1px solid #e2e8f0'}}>
      {/* Nav styles */}
      <style>{`
        .navlink {
          background-position: 50% 50%; 
          display:inline-block;
          padding: 0.5rem 0.85rem;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 800;
          letter-spacing: .2px;
          color: #fff;
          border: none;

          /* Gradient pill like your Meet Theo button */
          background: linear-gradient(
          135deg,
          #0ea5e9 0%,
          #37bee9 12%,
          #ff9c3a 40%,
          #f97316 100%
        );

          /* Depth + motion */
          box-shadow: 0 2px 0 rgba(2,6,23,.06), 0 10px 20px rgba(14,165,233,.20);
          opacity: .82;
          transition:
            opacity .15s ease,
            transform .15s ease,
            box-shadow .15s ease,
            background-position .30s ease;
        }
        .navlink:hover {
          opacity: 1;
          transform: translateY(-1px);
          box-shadow: 0 8px 22px rgba(14,165,233,.28);
          background-position: 0% 50%; /* gentle gradient sweep */
        }
        .navlink.active {
          opacity: 1;
          box-shadow:
            0 0 0 2px rgba(255,255,255,.15) inset,
            0 12px 28px rgba(249,115,22,.25);
        }
        .navlink:focus-visible {
          outline: 3px solid #0ea5e9;
          outline-offset: 2px;
        }
      `}</style>

      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem', padding:'0.75rem 1rem', maxWidth:1200, margin:'0 auto'}}>
        <Link to="/" style={{display:'flex', alignItems:'center', gap:8, textDecoration:'none'}}>
          <div style={{width:36, height:36, borderRadius:12, background:'#f97316', display:'grid', placeItems:'center', color:'white', fontWeight:800}}>SB</div>
          <span style={{fontSize:'1.15rem', fontWeight:800, color:'#0f172a'}}>SnapBurger</span>
        </Link>

        <nav style={{display:'flex', gap:8, flexWrap:'wrap'}}>
          <NavLink to="/" end className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>Home</NavLink>
          <NavLink to="/menu" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>Menu</NavLink>
          <NavLink to="/rewards" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>SnapCoins</NavLink>
          <NavLink to="/merch" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>Merch</NavLink>
          <NavLink to="/snapboard" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>SnapBoard</NavLink>
          <NavLink to="/theo" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>Meet Theo</NavLink>
          <NavLink to="/about" className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}>About</NavLink>
        </nav>
      </div>
    </header>
  )
}
