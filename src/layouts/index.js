import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../assets/styles/app.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Artwork by Paul K Lynch' },
        { name: 'keywords', content: 'art' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' }
      ]}
    />

    <main className='main-container'>
      {children()}
    </main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
