/** @format */

import {Button, Image} from '@nextui-org/react'
import {useNavigate} from 'react-router-dom'

function EventSmallCard(props) {
  const navigate = useNavigate()
  const img = props.eventData.eventImage
  const title = props.eventData.eventTitle
  const description = props.eventData.smallCardDescribe.ang
  const joinLink = props.eventData.joinLink
  const route = props.eventData.route

  return (
    <div className="max-w-sm border rounded-lg shadow h-full dark:border-gray-700">
      <a href="#">
        <Image
          width="100%"
          height="15rem"
          objectFit="cover"
          className="rounded-t-lg "
          src={img}
          alt="image"
        />
      </a>
      <div className="p-3 w-full">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="h-[7rem] sm:h-[5rem]">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {/* Live a unique and thrilling adventure in the heights during a Via
          Ferrata! */}
            {description}
          </p>
        </div>

        <div className="flex-col justify-items-center m-1 p-0">
          <div className="flex justify-center m-0 p-0">
            <Button
              type="button"
              color="success"
              css={{
                zIndex: 1,
                width: 'fit-content',
                fontSize: '$lg',
                marginTop: '0.5rem',
              }}
              onPress={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'instant',
                })
                navigate(route)
              }}
            >
              See Event
            </Button>
          </div>
          <div className="flex justify-center m-0 p-0">
            <Button
              ripple
              color="success"
              as="a"
              css={{
                zIndex: 1,
                width: 'fit-content',
                fontSize: '$xl',
                marginTop: '0.5rem',
              }}
              rel="noopener noreferrer"
              target="_blank"
              href={joinLink}
            >
              Join !
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventSmallCard
