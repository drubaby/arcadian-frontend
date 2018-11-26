import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const styleDefault = {
  "color": "white"
}

const styleActive = {
  "backgroundColor" : "grey"
}

const NavBar = (props) => {
  return(
    <div className={`ui inverted visible menu navbar`}>
     <a className="item">
       <h2 className="ui header">
         <i className={`${props.icon} icon`}></i>
         <div className="content">{props.title}</div>
         <div className="sub header">{props.subtitle}</div>
       </h2>
     </a>
     <NavLink className="item" exact to="/">About</NavLink>
     <NavLink className="item" exact to='/locations'>Locations</NavLink>
   </div>
  )
}

export default NavBar
