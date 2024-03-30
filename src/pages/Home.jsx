import React from 'react'
import Sidebar from '../componants/Sidebar'
import Chat from '../componants/Chat'

function Home() {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/> 
        <Chat/>
      </div> 
    </div>
  )
}

export default Home
