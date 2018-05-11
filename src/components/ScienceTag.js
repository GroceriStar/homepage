import React from 'react'
import Link  from 'gatsby-link'

import data  from '../assets/data/second'

// <div className="row">
// </div>

const ScienceTag = (  ) => (

	<section id="two2">
		<div className="inner">

				<header className="major">
					<h2>
						{data[0].title}
					</h2>
				</header>

<div className="content">
			<p>
				{data[0].text[0]}
			</p>
			<p>
				{data[0].authors[0]}
			</p>
			<p>
				{data[0].authors[1]}
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
export default ScienceTag
