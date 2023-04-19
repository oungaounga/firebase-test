/** @format */
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import {events} from '../../App'

import EventSmallCard from './EventSmallCard'

function Upcoming(props) {
  // function handleRightClick() {
  //   let byW = divRef.current.firstChild.clientWidth
  //   divRef.current.scrollBy({top: 0, left: byW + 12, behavior: 'smooth'})
  // }
  // function handleLeftClick() {
  //   let byW = -divRef.current.firstChild.clientWidth
  //   divRef.current.scrollBy({top: 0, left: byW - 12, behavior: 'smooth'})
  // }
  return (
    <div className="h-screen sm:h-1/2">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {/* <SwiperSlide>
          <EventSmallCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventSmallCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventSmallCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventSmallCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventSmallCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventSmallCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventSmallCard />
        </SwiperSlide> */}
        {Object.keys(events).map((event) => {
          return (
            <SwiperSlide>
              <EventSmallCard eventData={events[event]} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Upcoming
