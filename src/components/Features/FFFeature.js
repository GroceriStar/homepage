import React from 'react'
import Link  from 'gatsby-link'


const FFFeature = ( props ) => (
  <article style={{backgroundImage: `url(${props.img})`}}>
    <header className="major">
      <h3>{props.heading}</h3>
      <p>{props.content}</p>
    </header>
    <Link to={props.to} className="link primary"></Link>
  </article>
);
export default FFFeature
