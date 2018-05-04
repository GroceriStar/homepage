import React  from 'react'
import Link   from 'gatsby-link'
import Helmet from 'react-helmet'

import Banner      from '../components/Banner'
import ScienceTag  from '../components/ScienceTag'
import ScienceTag2 from '../components/ScienceTag2'
import ScienceTagBlockquote from '../components/ScienceTagBlockquote'

import Feature from '../components/Feature'
import FeaturesTag from '../components/FeaturesTag'
import FeaturesTag2 from '../components/FeaturesTag2'


// import Featureslist from '../components/FeaturesList'

import Bottom      from '../components/Bottom'

import data  from '../assets/data/first'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        const siteTitle       = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

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

                <ScienceTag />
                <ScienceTag2 />
                <ScienceTagBlockquote />




                 <FeaturesTag />
                 <FeaturesTag2 />


                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>
                              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero.
                               Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.
                           </p>
                            <ul className="actions">
                                <li>
                                  <Link to="/landing" className="button next">Get Started</Link>
                                </li>
                            </ul>
                        </div>
                    </section>

                </div>

            </div>
        )
    }
}

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
