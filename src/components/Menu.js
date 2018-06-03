import React from 'react'
import Link  from 'gatsby-link'
import result from './MenuContent';

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
              <li>
                <Link className={result.home[1]} onClick={props.onToggleMenu} to={result.home[2]}>
                {result.home[0]}
                </Link>
              </li>
              <li>
                <Link className={result.facebook[1]} onClick={props.onToggleMenu} to={result.facebook[2]}>
                {result.facebook[0]}
                </Link>
              </li>
              <li>
                <Link className={result.signup[1]} onClick={props.onToggleMenu} to={result.signup[2]}>
                {result.signup[0]}
                </Link>
              </li>
              <li>
                <Link className={result.elements[1]} onClick={props.onToggleMenu} to={result.elements[2]}>
                {result.elements[0]}
                </Link>
              </li>
              <li>
                <Link className={result.contacts[1]} onClick={props.onToggleMenu} to={result.contacts[2]}>
                 {result.contacts[0]}
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
