/** @format */

import {useMediaQuery} from '../../useMediaQuery'
import EventPage from './components/EventPage'
import PhoneEventPage from './components/PhoneEventPage'

function MainLayout(props) {
  const isMd = useMediaQuery(960)

  return (
    <div>
      {isMd ? (
        <EventPage eventData={props.eventData} />
      ) : (
        <PhoneEventPage eventData={props.eventData} />
      )}
    </div>
  )
}

export default MainLayout
