import React from 'react'
import Banner from '../../components/Banner'
import TrustedBy from '../../components/SpaceOccupancy/TrustedBy'
import SecurityTabs from '../../components/SpaceOccupancy/SecurityTabs'
import SmartWorkspace from '../../components/SpaceOccupancy/SmartWorkspace'
import HighlightsSection from './HighlightsSection'
import InterestedSection from './InterestedSection'

const People_Counting = () => {
  return (
    <div>
      <Banner  
       backgroundImage='https://www.milesight.com/static/pc/en/solution/people-counting/occupancy-and-people-counting-solution.jpg?t=1754899499415'
      containerClass="top-1/3 left-10"
        h2Class="text-4xl font-bold text-left"
        pClass="text-lg max-w-lg text-left"
         title="Smart People Counting Solution for Different Applications"
        description="The Reliable People Counter Makes Decisions Smart"
/>
<TrustedBy/>
<SecurityTabs/>
<SmartWorkspace/>
<HighlightsSection/>
<InterestedSection/>
    </div>
  )
}

export default People_Counting
