import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Banner from '../components/banner'
import '../assets/styles/app.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <main className='main-container'>
      <section><Banner /></section>
      <section>
        {children()}
      </section>
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
