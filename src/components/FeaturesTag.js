import React from 'react'
import Link  from 'gatsby-link'
// import data  from '../assets/data/second'

const FeaturesTag = (  ) => (

  <section id="two2">
    <div className="inner">
    <h3>
      Dont take our word for it.<br/>Try it out yourself.
    </h3>
    <h4>
      Still not Convinced?
    </h4>
    <span>May be this all list of features will help!</span>

    <ul className="alt">
        <li className="icon fa-tumblr"><span className="label">Instant Handles (coming soon)</span</li>
        <li className="icon fa-tumblr"><span className="label">Save and share your lists (coming soon)</span</li>
        <li className="icon fa-tumblr"><span className="label">Plan your family budget (coming soon)</span</li>
        <li className="icon fa-tumblr"><span className="label">Improve your health and live longer</span</li>
        <li className="icon fa-tumblr"><span className="label">Save time by cloning Ultimate Template</span</li>
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
