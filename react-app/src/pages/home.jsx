import React from 'react'
import Navbar from '../components/Navbar'
// import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Category'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import WhyChooseUs from '../components/WhyChooseUs'
import Milestones from "../components/Milestones"
import Testimonials from "../components/Testimonials"
import Projects from "../components/Projects"
import Subscription from "../components/Subscription"
import CTA  from "../components/CallToAction"

const Home = () => {
  return (
    <div className='container'>
      {/* <Announcement/> */}
      <Navbar/>
      <Slider/>
      <Categories/>
      <WhyChooseUs/>
      <Milestones/>
      <Projects/>
      <Testimonials/>
      <CTA/>
      {/* <Subscription/> */}
      {/* <Products/> */}
      {/* <Newsletter/> */}
      <Footer/>
    </div>
  )
}

export default Home