import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai';
import './Header.css'

const Header = () => {
  return (
    <div className='container'>
    <div className='header-wrapper'>
      <div className='h-content-wrapper'>
      <div>Instaread</div>
      <div className='text-wrapper'>
        <text className='text-style'>Discover</text>
        <text className='text-style'>Search</text>
        <text className='text-style'>Try Instaread</text>
        <text className='text-style2'>Login</text>
        <AiFillCaretDown />
      </div>
      </div>
    </div>
    </div>
  )
}
export default Header