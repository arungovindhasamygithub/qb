import React from 'react'
import Home from './Home'
import Section from './Section'
import Section1 from './Section1'
import FeaturesSection from './FeaturesSection'
import Section2 from './Section2'
import Lastsection from './Lastsection'

const Main = () => {
  return (
    <div>
      <Home />
      <Section />
      {/* <Section1 /> */}
      <FeaturesSection />
      <Section2 />
      <Lastsection />
    </div>
  )
}

export default Main