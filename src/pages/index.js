import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import FacebookIcon from '../assets/svg/facebook.svg'
import InstagramIcon from '../assets/svg/instagram.svg'
import EmailIcon from '../assets/svg/email.svg'

import Logo from '../assets/svg/logo_white.svg'
import VideoMp4 from '../assets/video/banner.mp4'

import PriceList from '../files/price_list_2018.pdf'

const googleMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.962019525125!2d' +
  '144.95957241580814!3d-37.767488739170915!2m3!1f0!2f0!3f0!3m2!1i1024!2i7' +
  '68!4f13.1!3m3!1m2!1s0x6ad6434d28c5ce7b%3A0xb1fec0938929d909!2sSoma!5e0!3m2!1sen!2sau!4v1524118262628'

console.log('test', PriceList)

const IndexPage = (data) => (
  <div>
    <section>
      <div className='hero-banner'>
        <h1>Dehumanization by Paul K Lynch</h1>
        <Logo className='banner-title' />
        <video width='900' height='470' autoPlay loop muted>
          <source src={VideoMp4} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='banner-img'>
          <Img resolutions={data.data.bannerImg.resolutions} />
        </div>
      </div>
    </section>
    <section>

      <article className="content">

        <section className='content-block promo'>
          <h2>New Exhibtion</h2>
          <h3>May 2nd - May 12th</h3>
        </section>

        <section className='content-block'>

          <h2>About Dehumanization</h2>

          <p>
            Our society rapidly transforms into a state where the connections we share with each other are increasingly faceless,
            and with this we become the soulless vessels for other people’s projections.  Our collective fears, shames and hate
            only grow and in time these mindsets give birth to monsters.
          </p>

          <p>
            In this collection of works Paul K Lynch depicts figures stripped of their tools for emotional connection, becoming little
            more than subhumans.  Its goal is to shine a light on what we all try to hide in the shadows of our minds, both our external
            projections and our internal fears.
          </p>

          <p>
            This exhibition is a collection of work spanning over five years with pieces in oils and acrylic on large canvases.
          </p>

          <p>
            Opening event will include live music by Finn Baulch
          </p>

          <p className='price-list'>
            <a href={PriceList} className='download-btn'>Download Price List</a>
          </p>

        </section>

        <section className='content-block gallery'>
          <div className='gallery-images'>
            <Img resolutions={data.data.imageOne.resolutions} />
            <Img resolutions={data.data.imageTwo.resolutions} />
            <Img resolutions={data.data.imageThree.resolutions} />
          </div>
        </section>

        <section className='content-block'>
          <h2>Details</h2>

          <div className='flex-blocks'>

            <div className='flex-block'>
              <h3>Exhibition Dates</h3>

              <p>
                2nd of May till 12th of May<br />
                Wednesday - Saturday, 11am - 5pm
              </p>
            </div>

            <div className='flex-block'>
              <h3>Opening Event</h3>

              <p>
                <time dateTime="2018-05-04 18:00">Friday 4th of May, 6pm till 9pm</time><br />
                <a href="https://www.facebook.com/events/617417728608812/">Facebook Event</a>
              </p>
            </div>

            <div className='flex-block'>
              <h3>Where</h3>

              <address>
                <strong>Soma Gallery</strong><br />
                421 sydney rd, Bunswick
              </address>
            </div>

            <div className='flex-block'>
              <iframe
                className='google-map'
                src={googleMapUrl}
                frameBorder='0'
              />
            </div>

          </div>
        </section>

        <section className='content-block'>
          <h2>Find more</h2>

          <hr />

          <h3>Paul K Lynch</h3>

          <div className='flex-blocks'>

            <div className='flex-block'>
              <a href='https://www.facebook.com/artofpkl/' className='social-link'><FacebookIcon className='svg-icon' /><span>Facebook @artofpkl</span></a>
            </div>

            <div className='flex-block'>
              <a href='https://www.instagram.com/artofpkl/' className='social-link'><InstagramIcon className='svg-icon' /><span>Instagram @artofpkl</span></a>
            </div>

            <div className='flex-block'>
              <a href='mailto:paul@artofpkl.com' className='social-link'><EmailIcon className='svg-icon' /><span>paul@artofpkl.com</span></a>
            </div>

          </div>

          <hr />

          <h3>Soma Gallery</h3>

          <div className='flex-blocks'>

            <div className='flex-block'>
              <a href='https://www.facebook.com/soma.brunswick/' className='social-link'><FacebookIcon className='svg-icon' /><span>Facebook @soma.brunswick</span></a>
            </div>

          </div>

          <hr />

          <h3>Finn Baulch</h3>

          <div className='flex-blocks'>

            <div className='flex-block'>
              <a href='https://www.facebook.com/thefinnbaulch/' className='social-link'><FacebookIcon className='svg-icon' /><span>Facebook @thefinnbaulch</span></a>
            </div>

          </div>

        </section>
      </article>

    </section>
  </div>
)

export default IndexPage

export const query = graphql`
  query BlurUpQuery {
    imageOne: imageSharp(id: { regex: "/hare.jpg/" }) {
      resolutions(width: 250, height: 320) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageTwo: imageSharp(id: { regex: "/reach.jpg/" }) {
      resolutions(width: 250, height: 320) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageThree: imageSharp(id: { regex: "/flower.jpg/" }) {
      resolutions(width: 250, height: 320) {
        ...GatsbyImageSharpResolutions
      }
    }
    bannerImg: imageSharp(id: { regex: "/banner_mob.jpg/" }) {
      resolutions(width: 900, height: 270) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`
