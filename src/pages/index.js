import React  from 'react'
import Link   from 'gatsby-link'
import Helmet from 'react-helmet'

import Banner      from '../components/Banner'
import ScienceTag  from '../components/ScienceTag'
import ScienceTag2 from '../components/ScienceTag2'
import Bottom      from '../components/BottomChangeThis'

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


                  <Feature img="fas fa-shopping-cart fa-2x"
                  heading="Organize your shopping experience" content="Do you want to spend less? Do you want to reduce your impulse purchases? Grocery lists can help you. You'll buy only foods that you need."/>
                  <Feature img="fas fa-mobile-alt fa-2x"
                  heading="Mobile-oriented design (completed by Bootstrap)" content="You can manage all data from your phone. You always carry your smartphone, instead of paper lists. Your lists on your phone, period."/>
                  <Feature img="fas fa-cogs fa-2x"
                  heading="Customization" content="This is your own lists. You can do anything."/>



                  <Feature img="fas fa-cogs fa-2x"
                    heading="Quick access (coming soon)" content="Search ingredients in database, at your lists"/>
                  <Feature img="fas fa-cogs fa-2x"
                    heading="Favourite ingredients (Coming soon)" content="Save your favorite ingredients for fast access later"/>
                  <Feature img="fas fa-cogs fa-2x"
                    heading="Plan your family budget (coming soon)" content="You can calculate and plan your purchases. Control how much do you spend on this shopping session"/>




                  <div className="outer-container container">
                     <Featureslist content="Instant Handles (coming soon)" />
                     <Featureslist content="Save and share your lists (coming soon)" />
                     <Featureslist content="Plan your family budget (coming soon)" />
                     <Featureslist content="Improve your health and live longer" />
                     <Featureslist content="Save time by cloning Ultimate Template" />
                   </div>

                   <h3>Blockquote</h3>
                   <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.</blockquote>


                   <div className="row">
                       <div className="6u 12u(small)">

                           <h4>Unordered</h4>
                           <ul>
                               <li>Dolor etiam magna etiam.</li>
                               <li>Sagittis lorem eleifend.</li>
                               <li>Felis dolore viverra.</li>
                           </ul>

                           <h4>Alternate</h4>
                           <ul className="alt">
                               <li>Dolor etiam magna etiam.</li>
                               <li>Sagittis lorem eleifend.</li>
                               <li>Felis feugiat viverra.</li>
                           </ul>

                       </div>

                  <Bottom />

                    {/*}<section id="one" className="tiles">

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Aliquam</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Tempus</h3>
                                <p>feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Magna</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Ipsum</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                    </section>*/}
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
