import React, { useEffect, useState } from 'react'
import './Header.css'
import InforHeader from './InforHeader/InforHeader'
import MenuItem from './MenuItem/MenuItem'
import Responsive from './Responsive/Responsive'

function Header() {
  const [menuState, setMenuState] = useState(false);

  const responsiveMenu = () => {
    if (window.innerWidth >= 1080) {
      setMenuState(false);
    }
    else setMenuState(false);
  }

  useEffect(() => {
    document.body.onresize = () => responsiveMenu();
  }, [])
  return (
    <header>
      <InforHeader />
      <MenuItem setMenuState={setMenuState} />
      {window.innerWidth < 1080 && <Responsive setMenuState={setMenuState} menuState={menuState} />}
    </header>

  )
}

export default Header
