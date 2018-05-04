import React from 'react'
import Link from 'gatsby-link'


const Footer = ( props ) => (

  <footer id="footer">
      <div className="inner">
          <ul className="icons">
            <li>
              <Link className="icon alt fa-facebook" to="/auth/facebook">
                <span className="label">
                Continue with Facebook</span>
              </Link>
            </li>
            <li>
              <Link className="icon alt fa-github" to="https://github.com/GroceriStar">
                <span className="label">
                GitHub Project</span>
              </Link>
            </li>
            <li>
              <Link className="icon alt fa-linkedin" to="https://www.linkedin.com/company/11486092/">
                <span className="label">
                LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link className="icon alt fa-twitter" to="https://twitter.com/GroceriStar">
                <span className="label">
                Twitter
                </span>
              </Link>
            </li>
            <li>
              <Link className="icon alt fa-envelope" to="mailto:arthur.tkachenko.netweight@gmail.com">
                <span className="label">
                Email Us</span>
              </Link>
            </li>
            <li>
              <Link to="/terms">
                <span className="label">
                Terms</span>
              </Link>
            </li>
            <li>
              <Link to="/privacy">
                <span className="label">
                Privacy</span>
              </Link>
            </li>
            <li>
              <Link to="/credits">
                  <span className="label">
                  Credits
                  </span>
              </Link>
            </li>
          </ul>

          <ul className="copyright">
              <li>
                &copy; Groceristar
              </li>
              <li>
                Design:
                <Link  to="https://html5up.net">
                HTML5 UP
                </Link>

              </li>
          </ul>

      </div>
  </footer>
)

export default Footer
