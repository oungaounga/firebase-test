/** @format */
import {useRef} from 'react'
import {Card, Col, Text, Row, Button} from '@nextui-org/react'

function makeCard(img, index) {
  return (
    <Card key={index} css={{minWidth: '20rem', h: '40vh'}}>
      <Card.Header css={{position: 'absolute', zIndex: 1, top: 5}}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            New
          </Text>
          <Text h3 color="black">
            Acme camera
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{p: 0}}>
        <Card.Image
          src={img}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#ffffff66',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              Available soon.
            </Text>
            <Text color="#000" size={12}>
              Get notified.
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="secondary">
                <Text
                  css={{color: 'inherit'}}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Notify Me
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

function Upcoming() {
  const divRef = useRef()
  const imgs = [
    './cardImg.jpg',
    './cardImg2.jpg',
    './cardImg3.jpg',
    './cardImg4.jpg',
    './cardImg5.jpg',
    './cardImg6.jpg',
  ]
  const cards = imgs.map((item, index) => {
    return makeCard(item, index)
  })

  function handleRightClick() {
    let byW = divRef.current.firstChild.clientWidth
    divRef.current.scrollBy({top: 0, left: byW + 12, behavior: 'smooth'})
  }
  function handleLeftClick() {
    let byW = -divRef.current.firstChild.clientWidth
    divRef.current.scrollBy({top: 0, left: byW - 12, behavior: 'smooth'})
  }
  return (
    <div>
      <div className="relative scroll-smooth">
        <Button
          css={{
            position: 'absolute',
            top: '5rem',
            left: 0,
            zIndex: 10,
          }}
          onPress={() => handleLeftClick()}
        >
          left
        </Button>
        <Button
          css={{
            position: 'absolute',
            top: '5rem',
            right: 0,
            zIndex: 10,
          }}
          onPress={() => handleRightClick()}
        >
          right
        </Button>
      </div>

      <div ref={divRef} className="flex flex-nowrap gap-x-3 overflow-x-scroll">
        {cards}
      </div>
    </div>
  )
}

export default Upcoming
