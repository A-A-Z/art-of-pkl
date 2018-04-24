import React from 'react'
import Link from 'gatsby-link'

import Img from 'gatsby-image'

const IndexPage = (data) => (
  <article className="content">
    <section>
      About
    </section>

    <section>
      Images
      {data.props}
      <Img sizes={data.data.imageOne.sizes} />
    </section>

    <section>
      Info<br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.962019525125!2d144.95957241580814!3d-37.767488739170915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6434d28c5ce7b%3A0xb1fec0938929d909!2sSoma!5e0!3m2!1sen!2sau!4v1524118262628"
        width='600'
        height='450'
        frameBorder='0'
        style={{ border:0 }} />
    </section>
  </article>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    imageOne: imageSharp(id: { regex: "/hare.jpg/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
