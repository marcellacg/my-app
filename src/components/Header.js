import React from 'react'


const Header = (props) => {
  return (
    <header>
      <img src={props.logoImg} alt="_"/>
      {props.logoName}
    </header>
  )
}

export default Header