import React from 'react'
import Link  from 'gatsby-link'
// import data  from '../assets/data/second'

const FeaturesTag = (  ) => (

  <section id="two2">
    <div className="inner">
    <h3>
      Dont take our word for it.<br/>
      Try it out yourself.
    </h3>
    <h4>
      Still not Convinced?
    </h4>
    <span>May be this all list of features will help!</span>
    <div>
    <span className="icon fa-check"></span>
    <h3>Instant Handles (coming soon)</h3>
    </div>
    <ul className="alt">
        <li className="icon fa-check">

          Instant Handles (coming soon)

        </li>
        <li className="icon fa-check">

          Save and share your lists (coming soon)>

        </li>
        <li className="icon fa-check">

          Plan your family budget (coming soon)

        </li>
        <li className="icon fa-check">

          Improve your health and live longer

        </li>
        <li className="icon fa-check">

          Save time by cloning Ultimate Template

        </li>
    </ul>

     <ul className="actions">
         <li>
           <Link to="/landing" className="button next">Clone shopping list</Link>
         </li>
     </ul>
   </div>
 </section>

);
export default FeaturesTag
