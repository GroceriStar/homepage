import React from 'react'
import Link  from 'gatsby-link'
import pic01 from '../assets/images/pic01.jpg'

const Bottom = ({  }) => (

  <section id="one1" className="tiles">
    <article style={{backgroundImage: `url(${pic01})`}}>
        <header className="major">
            <h3>
              Dont take our word for it.<br/>Try it out yourself.
            </h3>
            <p>Still not Convinced?</p>
            <span>Here is how our app can help you!</span>
            <ul>
              <li>
              
              </li>
            </ul>
        </header>
        <Link to="/landing" className="link primary">Placeholder</Link>
    </article>
  </section>

);
export default Bottom
