import React from 'react'
import Hero from '../components/modules/Landing/Hero'
import Destination from '../components/modules/Landing/Destination'
import Packages from '../components/modules/Landing/Packages'
import Callback from '../components/modules/Landing/Callback'
import Activity from '../components/modules/Landing/Activity'
import Gallery from '../components/modules/Landing/Gallery'
import Holidayoffer from '../components/modules/Landing/Holidayoffer'
import Testimonial from '../components/modules/Landing/Testimonial'
import Footer from '../components/partials/Footer'
import Blog from '../components/modules/Landing/Blog'

const Landing = () => {
  return (
    <div>
      <Hero />
      <Destination />
      <Packages />
      <Callback />
      <Activity />
      <Gallery />
      <Holidayoffer />
      <Blog />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Landing