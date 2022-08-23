import React from 'react'
import TLNlogo from './images/TLN_logo 1.svg'


function Header() {
  return (
    <>
      <div className=' w-full'>
        <img src={TLNlogo} alt="The Language Network"  />
      </div>
    </>
  )
}

export default Header
