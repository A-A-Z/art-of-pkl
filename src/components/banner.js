import React from 'react'
import Logo from '../assets/svg/logo_white.svg'

import VideoMp4 from '../assets/video/banner.mp4'

const Banner = () => (
  <div className='hero-banner'>
    <h1>Dehumanization by Paul K Lynch</h1>
    <Logo className='banner-title' />
    <video width='900' height='470' autoPlay loop muted>
      <source src={VideoMp4} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  </div>
)

export default Banner
