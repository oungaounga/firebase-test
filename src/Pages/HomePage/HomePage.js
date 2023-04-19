/** @format */
import {Spacer} from '@nextui-org/react'
import MyCarousel from './MyCarousel'
// import MyCarousel from './newCarousel'
import Upcoming from './Upcoming'
import AboutUsSection from './AboutUsSection'
import ContactUsSection from './ContactUsSection'

function HomePage() {
  return (
    <>
      <MyCarousel />
      <Spacer y={3} />
      <Upcoming />
      <Spacer y={3} />
      <AboutUsSection />
      <Spacer y={3} />
      <ContactUsSection />
    </>
  )
}

export default HomePage
