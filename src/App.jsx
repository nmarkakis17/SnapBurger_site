import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div style={{display:'flex', minHeight:'100vh', flexDirection:'column', fontFamily:'Inter, system-ui, Arial'}}>
      <NavBar />
      <main style={{flex:1, padding:'1.5rem', maxWidth:1200, margin:'0 auto'}}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
