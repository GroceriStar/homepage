import React from 'react'
        import Link  from 'gatsby-link'
        import result from './MenuContent';
const items = [];

for (var i = 0; i < result.length; i++) {
    items.push(<li>
        <Link className={result[i][1]}  to={result[i][2]}>
        {result[i][0]}
        </Link>
    </li>);
}

const Menu = (props) => (
            <nav id="menu">
                <div className="inner">
                    <ul className="links" onClick={props.onToggleMenu}>
                        {items}
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
