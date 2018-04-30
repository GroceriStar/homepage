import React from 'react'
import Link  from 'gatsby-link'
import data  from '../assets/data/second'



const ScienceTagBlockquote = (  ) => (

  <section id="two2">
    <div className="inner">
  <h3>
  Blockquote
  				{data[0][3]}
  </h3>
  <blockquote>
  {data[0][0]} <br />
  {data[0][1]} <br />
  	{data[0][2]} <br />
    {data[0][3]} <br />
     </blockquote>
     <ul className="actions">
         <li>
           <Link to="/landing" className="button next">Read full study</Link>
         </li>
     </ul>
     </div>
     </section>

);
export default ScienceTagBlockquote
