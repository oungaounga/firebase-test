/** @format */
import {useRef} from 'react'
import {Card, Col, Text, Row, Button} from '@nextui-org/react'
import {ReactComponent as ChevronRight} from './icons/Chevron Right.svg'
import {ReactComponent as ChevronLeft} from './icons/Chevron Left.svg'
import EventSmallCard from './EventSmallCard'

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

function Upcoming(props) {
  // const {whichPage} = props.goto
  // const {setWhichPage} = props.goto
  // console.log(setWhichPage)
  const divRef = useRef()
  // const imgs = [
  //   './cardImg.jpg',
  //   './cardImg2.jpg',
  //   './cardImg3.jpg',
  //   './cardImg4.jpg',
  //   './cardImg5.jpg',
  //   './cardImg6.jpg',
  // ]
  // const cards = imgs.map((item, index) => {
  //   return makeCard(item, index)
  // })

  // const cards = <EventSmallCard goto={{whichPage, setWhichPage}} />
  const cards = <EventSmallCard />

  function handleRightClick() {
    let byW = divRef.current.firstChild.clientWidth
    divRef.current.scrollBy({top: 0, left: byW + 12, behavior: 'smooth'})
  }
  function handleLeftClick() {
    let byW = -divRef.current.firstChild.clientWidth
    divRef.current.scrollBy({top: 0, left: byW - 12, behavior: 'smooth'})
  }
  return (
    <div className="relative">
      <div id="Upcoming">
        <Button
          auto
          color="gradient"
          css={{
            position: 'absolute',
            top: '50%',
            transform: 'translate(0, 50%)',
            left: 0,
            zIndex: 10,
            borderRadius: '50%',
          }}
          onPress={() => handleLeftClick()}
          icon={<ChevronLeft set="curved" primaryColor="blueviolet" />}
        />
        <Button
          auto
          color="gradient"
          css={{
            position: 'absolute',
            top: '50%',
            transform: 'translate(0, 50%)',
            right: 0,
            zIndex: 10,
            borderRadius: '50%',
          }}
          onPress={() => handleRightClick()}
          icon={<ChevronRight set="curved" primaryColor="blueviolet" />}
        />
      </div>

      <div
        ref={divRef}
        className="relative flex flex-nowrap gap-x-3 overflow-x-scroll scrollbar-hide scroll-smooth"
        // >
        //   <Button
        //     auto
        //     color="gradient"
        //     css={{
        //       top: '50%',
        //       transform: 'translate(0, 50%)',
        //       left: 0,
        //       zIndex: 10,
        //       borderRadius: '50%',
        //     }}
        //     onPress={() => handleLeftClick()}
        //     icon={<ChevronLeft set="curved" primaryColor="blueviolet" />}
      >
        <EventSmallCard />
        <EventSmallCard />
        <EventSmallCard />
        <EventSmallCard />
        <EventSmallCard />
        <EventSmallCard />
        <EventSmallCard />
        <EventSmallCard />
        <EventSmallCard />
        <EventSmallCard />
      </div>
    </div>
  )
}

export default Upcoming
