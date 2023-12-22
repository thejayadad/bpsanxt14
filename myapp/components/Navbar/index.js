import React from 'react'
import Logo from '../Logo/Logo'
import AuthLinks from './AuthLinks'

const Navbar = async () => {

  return (
    <header className='px-4 py-8'>
        <nav className='flex justify-between mx-auto max-w-screen-xl'>
            <Logo/>
            <AuthLinks  />
        </nav>
    </header>
  )
}

export default Navbar