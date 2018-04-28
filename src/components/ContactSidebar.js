import React from 'react'
import Link from 'gatsby-link'

const ContactSidebar = (props) => (
  <section className="split">
      <section>
          <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              {/*}<h3>Email</h3>*/}
              <Link className="icon alt fa-envelope" to="mailto:arthur.tkachenko.netweight@gmail.com">
                <span className="label">Email Us</span>
              </Link>
              {/*}<a href="mailto:arthur.tkachenko.netweight@gmail.com">information@untitled.tld</a>*/}
          </div>
      </section>
      {/*}<section>
          <div className="contact-method">
              <span className="icon alt fa-phone"></span>
              <h3>Phone</h3>
              <span>(000) 000-0000 x12387</span>
          </div>
      </section>*/}
      {/*}<section>
          <div className="contact-method">
              <span className="icon alt fa-home"></span>
              <h3>Address</h3>
              <span>1234 Somewhere Road #5432<br />
              Nashville, TN 00000<br />
              United States of America</span>
          </div>
      </section>*/}
  </section>
)

export default Contact
