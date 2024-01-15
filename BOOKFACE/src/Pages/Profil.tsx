import React from 'react'
import NavTop from '../Components/NavTop'
import Footer from '../Components/Footer'
import NavTopdesk from '../Components/NavTopdesk'
function Profil() {
  return (
    <div className='h-screen w-screen bg-beigel px-5 flex flex-col items-center overflow-y-auto overflow-x-hidden py-16'>
         <NavTop />
         <NavTopdesk />
      Profile
      <Footer />
    </div>
  )
}

export default Profil
