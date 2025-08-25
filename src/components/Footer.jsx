import React from 'react'

export default function Footer(){
  return (
    <footer style={{borderTop:'1px solid #e2e8f0', padding:'1rem'}}>
      <div style={{maxWidth:1200, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12}}>
        <p style={{margin:0, color:'#334155'}}>
          © {new Date().getFullYear()} SnapBurger — Where technology meets dining
        </p>
        <div style={{display:'flex', gap:12}}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
        </div>
      </div>
    </footer>
  )
}
