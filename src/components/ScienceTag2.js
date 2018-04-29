import React from 'react'
import Link  from 'gatsby-link'


import data from '../assets/data/second'


const ScienceTag2 = (  ) => (
	
	<section id="two3">
			<div className="inner">
					<header className="major">
							<h2>Massa libero</h2>
					</header>
					<p>
					{data[1][0]}
				 </p>
				 <p>
				 {data[1][1]}
				 </p>
				 <p>
				 {data[1][2]}
				 </p>
				 <p>
				 {data[1][3]}
				 </p>
					<ul className="actions">
							<li>
								<Link to="/landing" className="button next">Read full study</Link>
							</li>
					</ul>
			</div>
	</section>

);
export default ScienceTag2
