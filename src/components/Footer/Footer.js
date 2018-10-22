import React from 'react'
import Link  from 'gatsby-link'
import data  from './dataArray'

const listItems = [];

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        if (i === 0) {
            listItems.push(
                    <li>
                        <Link className={data[i][j].linkClassName} to={data[i][j].to}>
                          <span className={data[i][j].spanClassName}>
                              data[i][j].spanContent
                          </span>
                        </Link>
                    </li>
                    );
        } else if (i === 1) {
            listItems.push(<li>
                <Link to={data[i][j].to}>
                  <span className={data[i][j].spanClassName}>
                      {data[i][j].spanContent}
                  </span>
                </Link>
            </li>
            );
        }
    }
}

const Footer = (props) => (
            <footer id="footer">
                <div className="inner">
                    <ul className="icons">
                        {listItems}
                    </ul>

                    <ul className="copyright">
                        <li>
                            &copy; Groceristar
                        </li>
                        <li>
                            Design: &nbsp;
                            <Link  to="https://html5up.net">
                            HTML5 UP
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
            )

export default Footer
