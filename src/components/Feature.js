import React from 'react'
import Link  from 'gatsby-link'


const Feature = ( props ) => (
	<div className="col-md-3 col-xs-12 col-sm-12 col-lg-3 col-xl-3">
		<div className="feature-container">
			{ props.img === ""
				? <span></span>
				: <div className="icon-container"> <i className={props.img}></i> </div> }
			<p className="feature-heading">{props.heading}</p>
			<p className="feature-content">{props.content}</p>
		</div>
	</div>
);
export default Feature
