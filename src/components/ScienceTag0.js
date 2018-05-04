import React from 'react'
import Link  from 'gatsby-link'

import data from '../assets/data/second'


const ScienceTag = (  ) => (

	<section id="two2">
		<div className="inner">
			<header className="major">
				<h2>
					{data[1].title}
				</h2>
			</header>
			<p>
				{data[1].text[0]}
			</p>
			<p>
				{data[1].text[1]}
			</p>
			<p>
				{data[1].authors[0]}
			</p>
			<p>
				{data[1].authors[1]}
			</p>
			<p>
				{data[1].authors[2]}
			</p>
			<p>
				{data[1].authors[3]}
			</p>

			<ul className="actions">
					<li>
						<Link to="/landing" className="button next">Read full study</Link>
					</li>
			</ul>
		</div>
	</section>


);
export default ScienceTag
