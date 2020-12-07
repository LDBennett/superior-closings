// import { useState } from 'react'
import { Fade } from "react-awesome-reveal";

import Navigation from './Navbar'

const Header = () => {

  const HeaderBackground = () => {
    return (
      <div className="background">
        <video className="background__video" autoPlay loop muted id="bgvid">
          <source src="//staging.superiorclosings.com/assets/video_bg.mp4" />
        </video>
      </div>
    )
  }

  return (
    <header className="header">
      <Navigation/>
      <HeaderBackground/>
      <div className="header__content">
        <Fade triggerOnce>
          <h1 className="text-center">Superior Closings <small>Superior Service</small></h1>
        </Fade>
      </div>
    </header>
  )
}

export default Header
