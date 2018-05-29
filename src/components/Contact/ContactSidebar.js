import React from 'react'
import Link from 'gatsby-link'

const ContactSidebar = (props) => (
  <section className="split">
      <section>
          <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email the founder</h3>
              <Link className="icon alt fa-envelope" to="mailto:arthur.tkachenko.netweight@gmail.com">
                <span className="label">Email Us</span>
              </Link>
              {/*}<a href="mailto:arthur.tkachenko.netweight@gmail.com">information@untitled.tld</a>*/}
          </div>
      </section>
      
  </section>
)

export default ContactSidebar
