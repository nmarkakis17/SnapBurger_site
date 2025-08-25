import React from 'react'

export default function SnapBoard(){
  return (
    <section style={{display:'grid', gap:12}}>
      <h2 style={{margin:'0 0 0.5rem 0'}}>SnapBoard</h2>
      <p>Live wall of customer photos. In production, this would stream approved images from your social hashtag.</p>
      <div style={{display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))'}}>
        {Array.from({length:12}).map((_,i)=>(
          <div key={i} style={{aspectRatio:'1/1', background:'#e2e8f0', borderRadius:12}}/>
        ))}
      </div>
    </section>
  )
}
