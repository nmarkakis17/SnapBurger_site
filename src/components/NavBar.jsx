// NavBar.jsx
import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar(){
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const buttonRef = useRef(null)   // NEW

  useEffect(() => {
    function onDocClick(e){
      if (!open) return
      if (!panelRef.current) return
      // If click was on the burger button or inside the panel, do nothing
      if (buttonRef.current?.contains(e.target)) return
      if (panelRef.current.contains(e.target)) return
      setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [open])

  return (
    <header style={{position:'sticky', top:0, zIndex:20, background:'white', borderBottom:'1px solid #e2e8f0'}}>
      <style>{`
        :root{ --blue:#0ea5e9; --orange:#f97316; }
        /* ... your existing styles ... */

        /* ensure panel sits above content */
        .mobile-panel{ z-index: 50; }  /* NEW */
      `}</style>

      {/* ...top row content... */}

      {/* Hamburger (mobile) */}
      <button
        ref={buttonRef}                         {/* NEW */}
        className="burger"
        aria-label="Open menu"
        aria-controls="mobile-menu"
        aria-expanded={open ? 'true' : 'false'}
        onClick={(e) => { e.stopPropagation(); setOpen(v => !v) }}  // stop bubbling
      >
        {/* svg icon */}
      </button>

      {/* Mobile slide-down panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`mobile-panel ${open ? 'open' : 'closed'}`}
        role="dialog"
        aria-modal="true"
      >
        {/* ...links + socials... */}
      </div>
    </header>
  )
}
