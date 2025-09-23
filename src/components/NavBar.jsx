import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar(){
  return (
    <header style={{position:'sticky', top:0, zIndex:10, background:'white', borderBottom:'1px solid #e2e8f0'}}>
      <style>{`
        :root{ --blue:#0ea5e9; --orange:#f97316; }

        .navlink{
          display:inline-block;
          padding: 0.5rem 0.85rem;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 800;
          letter-spacing: .2px;
          color: #fff;

          /* Same gradient as "Order Now" */
          background: linear-gradient(135deg, var(--blue), var(--orange));
          background-size: 200% 200%;
          background-position: 0% 50%;

          border: none;
          box-shadow: 0 2px 0 rgba(2,6,23,.06), 0 10px 20px rgba(14,165,233,.20);
          opacity: .88;
          transition:
            opacity .15s ease,
            transform .15s ease,
            box-shadow .15s ease,
            background-position .30s ease;
        }
        .navlink:hover{
          opacity: 1;
          transform: translateY(-1px);
          box-shadow: 0 8px 22px rgba(14,165,233,.28);
          background-position: 100% 50%; /* gentle sweep */
        }
        .navlink.active{
          opacity: 1;
          box-shadow:
            0 0 0 2px rgba(255,255,255,.15) inset,
            0 12px 28px rgba(249,115,22,.25);
        }
        .navlink:focus-visible{
          outline: 3px solid var(--blue);
          outline-offset: 2px;
        }
        .social-links {
  display: flex;
  align-items: center;
  gap: 12px;
}

.social-links span {
  font-weight: 700;
  font-size: 0.9rem;
  background: linear-gradient(135deg, var(--blue), var(--orange));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* for Firefox */
  text-fill-color: transparent;
}

.social-links a img {
  width: 22px;
  height: 22px;
  transition: transform 0.2s ease, filter 0.3s ease;
}

/* Hover effect: gradient overlay with SnapBurger colors */
.social-links a:hover img {
  transform: scale(1.15);
  filter: drop-shadow(0 0 6px var(--blue)) drop-shadow(0 0 10px var(--orange));
}
      `}</style>

      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem', padding:'0.75rem 1rem', maxWidth:1200, margin:'0 auto'}}>
      <Link to="/" style={{display:'flex', alignItems:'center', gap:10, textDecoration:'none'}}>
          {/* your burger icon/logo */}
          <img
            src="/images/burger-logo.png"
            alt="SnapBurger logo"
            style={{ width:50, height:50, borderRadius:12 }}
          />
          {/* new duotone wordmark */}
          <img
            src="/images/snap-burger-duotone.png"
            srcSet="/images/snap-burger-duotone.png 1x, /images/snap-burger-duotone@2x.png 2x"
            alt="SnapBurger"
            style={{ height:28, width:'auto', display:'block' }}
          />
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
              <div className="social-links">
        <span>Follow Us:</span>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/tiktok.svg" alt="TikTok" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/youtube.svg" alt="YouTube" />
        </a>
      </div>
      </div>
    </header>
  )
}
