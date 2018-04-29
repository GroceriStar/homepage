import React  from 'react'
import Helmet from 'react-helmet'
import { Link, withPrefix } from 'gatsby-link'

import '../assets/scss/main.scss'

import Header  from '../components/Header'
import Menu    from '../components/Menu'
import Contact from '../components/Contact'
import Footer  from '../components/Footer'


// const Layout = ({ children, data }) => {
//
//
//
// };



class Template extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        }, 100);
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    // {/*title={data.site.siteMetadata.title}*/}
    render() {
        const { children } = this.props
        // const { data }     = this.data
        // console.log(data);
        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>

                <Helmet

                  meta={[
                    { charset: 'utf-8' },
                    { name: 'description', content: 'GS' },
                    { name: 'keywords', content: 'grocery list, shopping list template' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
                    { name: 'theme-color', content: '#000000' }
                  ]}
                >
                  <link rel="stylesheet" href={withPrefix('skel.css')} />

                  {/*}<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                  <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />



                  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                  <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>*/}

                </Helmet>
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {children()}
                    {/*}<Contact />*/}
                    <Footer />
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />
            </div>
        )
    }
}

Template.propTypes = {
    children: React.PropTypes.func
}

export default Template

//
// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
