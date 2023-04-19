/** @format */

import {Button, Image} from '@nextui-org/react'
import {useNavigate} from 'react-router-dom'

function EventSmallCard(props) {
  const navigate = useNavigate()

  return (
    <div className="max-w-sm border rounded-lg shadow  dark:border-gray-700">
      <a href="#">
        <Image
          width="100%"
          className="rounded-t-lg "
          src="./viaFerrata.jpg"
          alt=""
        />
      </a>
      <div className="p-3 w-full">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Via Ferrata
        </h3>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Live a unique and thrilling adventure in the heights during a Via
          Ferrata!
        </p>

        <div className="flex-col justify-items-center">
          <div>
            <Button
              type="button"
              color="success"
              css={{
                zIndex: 1,
                width: 'fit-content',
                fontSize: '$lg',
                marginTop: '1rem',
              }}
              onPress={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'instant',
                })
                navigate('/Event1')
              }}
            >
              See Event
            </Button>
          </div>
          <div>
            <Button
              ripple
              color="success"
              as="a"
              css={{
                zIndex: 1,
                width: 'fit-content',
                fontSize: '$xl',
                marginTop: '1rem',
              }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://my.weezevent.com/via-ferrata-1"
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
