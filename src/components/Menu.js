import React from 'react'
import Link  from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
              <li>
                <Link onClick={props.onToggleMenu} to="/">
                Home
                </Link>
              </li>
              <li>
                <Link onClick={props.onToggleMenu} to="/#">
                Facebook Login
                </Link>
              </li>
              <li>
                <Link onClick={props.onToggleMenu} to="/#">
                Signup
                </Link>
              </li>
              <li>
                <Link onClick={props.onToggleMenu} to="/#">
                Elements
                </Link>
              </li>
              <li>
                <Link onClick={props.onToggleMenu} to="/Contacts">
                Contacts
                </Link>
              </li>
            </ul>
            <ul className="actions vertical">
            <li>
              <a href="" className="button special fit">
              Get Started
              </a>
            </li>
            <li>
              <a href="" className="button fit">
              Facebook Login
              </a>
            </li>

            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu}
           href="javascript:;">
          Close
        </a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
