import React from 'react'

function Progbar({index}) {
  return (
    <section className='progbar-container'>
      <div className='progbar'
      style={{width:`${(index+1)*10}%`}}></div>
    </section>
  )
}

export default Progbar