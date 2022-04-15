import React from 'react'
import Image from './Image'
import './header.css'
import MainText from './MainText'

export default function Header() {
  return (
    <div className='header'>
      <MainText />
      <Image  />
    </div>
  )
}
