import React from 'react'

function Progbar({index}) {
  return (
    <div className='progbar-container'>
      <div className='progbar'
      style={{width:`${(index+1)*10}%`}}></div>
    </div>
  )
}

export default Progbar