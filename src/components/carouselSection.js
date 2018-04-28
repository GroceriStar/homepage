import React from 'react'
import Link  from 'gatsby-link'

import { Carousel } from 'react-bootstrap';

const sectionCarousel = ( props ) => (

	<div className="row">
		<div className="sectionthree col-md-6 col-md-push-3 col-md-pull-3">
			<Carousel>
				<Carousel.Item>
					<p className="caraouseltext">
						{props.data.item1[0]}
						{props.data.item1[1]}
						{props.data.item1[2]}
						{props.data.item1[3]}
						Food shoppers who reported “always” using a shopping list had significantly higher dietary quality. ... After applying a Bonferroni correction ... the association between those who always used a list and knowledge of eating fruits and vegetables, and trying to eat fewer calories [was eliminated].
					</p>
				</Carousel.Item>
				<Carousel.Item>
					<p className="caraouseltext">
					 Food shoppers who reported “always” using a shopping list had significantly higher dietary quality. ... After applying a Bonferroni correction ... the association between those who always used a list and knowledge of eating fruits and vegetables, and trying to eat fewer calories [was eliminated].
					 </p>
				</Carousel.Item>
				<Carousel.Item>
					<p className="caraouseltext">
						Food shoppers who reported “always” using a shopping list had significantly higher dietary quality. ... After applying a Bonferroni correction ... the association between those who always used a list and knowledge of eating fruits and vegetables, and trying to eat fewer calories [was eliminated].
					</p>
				</Carousel.Item>
			</Carousel>
		</div>
	</div>

);
export default sectionCarousel
