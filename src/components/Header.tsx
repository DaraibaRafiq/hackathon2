import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='header-container'>
      {/* Navigation Links */}
      <ul className='nav-links'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="shop">Shop</Link></li>
        <li>About</li>
        <li><Link href="contact">Contact</Link></li>
      </ul>

      {/* Icons */}
      <div className='icons'>
        <Image 
          src="/icons.png" 
          alt="icons" 
          width={150} 
          height={150} 
        />    
      </div>
    </div>
  )
}

export default Header
