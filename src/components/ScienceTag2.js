import React from 'react'
import Link  from 'gatsby-link'

import data from '../assets/data/second'

const url = ''

const ScienceTag2 = (  ) => (

	<section id="two2">
		<div className="inner">
			<header className="major">
				<h2>
					{data[1].title}
				</h2>
			</header>
			<div className="content">
			<p>
				{data[1].text[0]}
				{data[1].text[1]}
			</p>
			<p>
				{data[1].authors[0]}
			</p>
			<p>
				{data[1].authors[1]} <br />
				{data[1].authors[2]} <br />
				{data[1].authors[3]} <br />
			</p>

			<ul className="actions">
					<li>
						<Link to="{url}" className="button next">Read full study</Link>
					</li>
			</ul>
			</div>
		</div>
	</section>

);
export default ScienceTag2
