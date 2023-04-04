/** @format */

import {Card, Col, Text, Button} from '@nextui-org/react'
import {useEffect, useRef} from 'react'

const images = ['./img1.jpg', './img2.jpg', './img3.jpg']

function LeCarousel() {
  const divRef = useRef()
  //   console.log(divRef.current.clientHeight)
  //   let leftButtonStyle = {
  //     position: 'Absolute',
  //     left: 0,
  //     top: `${divRef.current.clientHeight / 2}px`,
  //     zIndex: 10,
  //   }
  //   let rightButtonStyle = {
  //     position: 'Absolute',
  //     right: 0,
  //     top: `${divRef.current.clientHeight / 2}px`,
  //     zIndex: 10,
  //   }
  return (
    <div ref={divRef} className="relative">
      <Button
        size="xs"
        css={{
          position: 'Absolute',
          left: 0,
          top: `${366 / 2 - 15}px`,
          //   top: `${divRef.current.clientHeight / 2}px`,
          zIndex: 10,
        }}
      >
        button1
      </Button>
      <Button
        size="xs"
        css={{
          position: 'Absolute',
          right: 0,
          top: `${366 / 2 - 15}px`,
          //   top: `${divRef.current.clientHeight / 2}px`,

          zIndex: 10,
        }}
      >
        button2
      </Button>
      {/* <Card>
        <Card.Header css={{position: 'absolute', zIndex: 1, top: 5}}>
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
            >
              What to watch
            </Text>
            <Text h4 color="white">
              Stream the Acme event
            </Text>
          </Col>
        </Card.Header>
        <Card.Image
          src="./img3.jpg"
          objectFit="cover"
          width="100%"
          height={340}
          alt="Card image background"
        />
      </Card> */}
      {images.map((item) => {
        return (
          <Card>
            <Card.Header css={{position: 'absolute', zIndex: 1, top: 5}}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#ffffffAA"
                >
                  What to watch
                </Text>
                <Text h4 color="white">
                  Stream the Acme event
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              src={item}
              objectFit="cover"
              width="100%"
              height={340}
              alt="Card image background"
            />
          </Card>
        )
      })}
    </div>
  )
}

export default LeCarousel
