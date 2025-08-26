import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const linkStyle = ({ isActive }) => ({
  padding: '0.5rem 0.75rem',
  borderRadius: '999px',
  textDecoration: 'none',
  fontWeight: 600,
  background: isActive ? '#0ea5e9' : 'transparent',
  color: isActive ? 'white' : '#0f172a',
})

export default function NavBar(){
  return (
    <header style={{position:'sticky', top:0, zIndex:10, background:'white', borderBottom:'1px solid #e2e8f0'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem', padding:'0.75rem 1rem', maxWidth:1200, margin:'0 auto'}}>
        <Link to="/" style={{display:'flex', alignItems:'center', gap:8, textDecoration:'none'}}>
          <div style={{width:36, height:36, borderRadius:12, background:'#f97316', display:'grid', placeItems:'center', color:'white', fontWeight:800}}>SB</div>
          <img
              src="/images/burger-logo.png"
              alt="SnapBurger logo"
              width={220}              // intrinsic size (px) – helps prevent layout shift
              height={220}
              style={{ width: 220, height: 220, objectFit: 'contain' }} // CSS control
          />
        </Link>
        <nav style={{display:'flex', gap:8, flexWrap:'wrap'}}>
          <NavLink to="/" style={linkStyle} end>Home</NavLink>
          <NavLink to="/menu" style={linkStyle}>Menu</NavLink>
          <NavLink to="/rewards" style={linkStyle}>SnapCoins</NavLink>
          <NavLink to="/merch" style={linkStyle}>Merch</NavLink>
          <NavLink to="/snapboard" style={linkStyle}>SnapBoard</NavLink>
          <NavLink to="/about" style={linkStyle}>About</NavLink>
        </nav>
      </div>
    </header>
  )
}
