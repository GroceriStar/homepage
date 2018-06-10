import React  from 'react'
import Link   from 'gatsby-link'
import Helmet from 'react-helmet'


import Banner      from '../components/Banner'

import ScienceTag  from '../components/ScienceTag/ScienceTag'


import FeaturesTag from '../components/Features/FeaturesTag'
import FeaturesTag2 from '../components/Features/FeaturesTag2'


import FFList from '../components/Features/FFList'

// import Featureslist from '../components/FeaturesList'

import Bottom from '../components/Bottom'

import data   from '../data/first'


//
//
// import picz01 from '../assets/images/food-1.jpg'
// import picz02 from '../assets/images/food-2.jpg'
// import picz03 from '../assets/images/food-3.jpg'
// import picz04 from '../assets/images/food-4.jpg'
// import picz05 from '../assets/images/food-5.jpg'
// import picz06 from '../assets/images/food-6.jpg'
// import picz07 from '../assets/images/food-7.jpg'
// import picz08 from '../assets/images/food-8.jpg'
//
// import picz010 from '../assets/images/food-10.jpg'
// import picz011 from '../assets/images/food-11.jpg'
// import picz012 from '../assets/images/food-12.jpg'
// import picz013 from '../assets/images/food-13.jpg'

const HomeIndex = ({ data }) => {

  const siteTitle       = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description

  return (
      <div>
        <Helmet>
          <title>
            {siteTitle}
          </title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <Banner />

        <div id="main">
          <FFList />
          <ScienceTag />

          <FeaturesTag2 />

          <section id="two2">
            <div className="inner">
              <header className="major">
              <h2>Dont take our word for it.
              Try it out yourself.
              </h2>
              </header>
                <ul className="actions">
    							<li>
                    <a href="#" className="button next">
                        Create your grocery list
                        </a>
                  </li>
    						</ul>
              </div>
          </section>

          <FeaturesTag />

          </div>

      </div>
  )
};

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
