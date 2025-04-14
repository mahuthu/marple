import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import UserProfile from '../components/UserProfile'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Subscription from '../components/Subscription'

const Profile = () => {
  return (
    <div className='container'>
      <Announcement/>
      <Navbar/>
      <UserProfile/>
      <Subscription/>
      <Footer/>
    </div>
  )
}

export default Profile