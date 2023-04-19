/** @format */
import {useMediaQuery} from '../../useMediaQuery'

import {
  Container,
  Row,
  Col,
  Card,
  Text,
  Image,
  Spacer,
  Button,
  Grid,
} from '@nextui-org/react'
import {Map, Marker} from 'pigeon-maps'
import {inHowManyDaysString, getWhatTimeString} from '../../App'

const mediaCardStyle = {
  // minHeight: 'inherit',
  height: '24rem',
  width: '100%',
  border: 'none',
}
const textCardStyle = {...mediaCardStyle, padding: '0.5rem'}

function EventPage(props) {
  const isMd = useMediaQuery(960)

  const {eventData} = props
  const eventTitle = eventData.eventTitle
  const eventImage = eventData.eventImage
  const eventMapPosition = eventData.eventMapPosition
  const eventDescription = eventData.eventDescription
  const eventInfoLocation = eventData.eventInfo.location
  const eventInfoTime = eventData.eventInfo.time

  return (
    <>
      <Container>
        {/* gap={0.5} */}
        <Text
          h1
          weight="bold"
          css={{
            textGradient: '45deg, $purple600 -20%, $pink600 100%',
          }}
          className="text-center"
          size={60}
        >
          {eventTitle}
        </Text>
        <Row gap={0.5}>
          <Col css={{minHeight: '24rem', width: '100%'}}>
            <Card variant="flat" css={mediaCardStyle}>
              <Card.Header
                css={{
                  bgBlur: '#181312',
                  zIndex: 1,
                  borderBottom:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Text
                  h2
                  weight="bold"
                  color="white"
                  //   css={{
                  //     textGradient: '20deg, $green600 50%, $purple600 100%',
                  //   }}
                >
                  Join us on the Via Ferrata event !
                </Text>
              </Card.Header>
              <Card.Body css={{padding: 0, margin: 0}}>
                <Image src="./viaFerrata.jpg" autoResize />
              </Card.Body>

              {/* <Card.Footer css={{position: 'absolute', bottom: 0, zIndex: 1}}> */}
              <Button
                flat
                animated={false}
                color="warning"
                css={{
                  position: 'absolute',
                  zIndex: 1,
                  bottom: '1rem',
                  right: '1rem',
                }}
              >
                In 2 Days
              </Button>
              {/* </Card.Footer> */}
            </Card>
          </Col>
          {/* Height of column must be responsive */}
          {/* <Col css={{height: '24rem', width: '100%'}}> */}
          <Col css={{minHeight: '24rem', width: '100%'}}>
            <Card css={textCardStyle}>
              <Card.Header>
                {/* I can put some responsive
                size in here  */}
                <h2 className="font-xs">What are we doing ?</h2>
              </Card.Header>
              <Card.Body css={{paddingTop: 0}}>
                {/* responsive size */}
                <Text className=" text-sm text-justify md:text-lg md:font-semibold xl:text-2xl">
                  {eventDescription.ang}
                </Text>
              </Card.Body>
              <Card.Footer
                css={{
                  // position: 'absolute',
                  // bottom: 0,
                  zIndex: 1,
                }}
              >
                <Button
                  auto
                  //   size="xl"
                  light
                  css={{
                    width: 'fit-content',
                    margin: '0.25rem',
                    alignSelf: 'center',
                  }}
                  onPress={() => {
                    document.getElementById('detailsStart').scrollIntoView()
                  }}
                >
                  Details
                </Button>
                <Button
                  ripple
                  color="success"
                  css={{
                    margin: '0.25rem',
                    alignSelf: 'center',
                    '@lg': {
                      width: 'xl',
                    },
                    '@xs': {
                      width: 'auto',
                    },
                  }}
                  as="a"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://my.weezevent.com/via-ferrata-1"
                >
                  Join!
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Spacer y={0.5} />
        <Row gap={0.5}>
          <Col css={{height: '24rem', width: '100%'}}>
            <Card id="detailsStart" css={mediaCardStyle}>
              <Map
                height="24rem"
                defaultCenter={eventMapPosition}
                defaultZoom={17}
              >
                <Marker width={50} anchor={eventMapPosition} />
              </Map>
            </Card>
          </Col>
          <Col css={{height: '24rem', width: '100%'}}>
            <Col>
              <Card
                css={{
                  ...textCardStyle,
                  height: '12rem',
                  padding: '0.5rem',
                  marginBottom: '0.1rem',
                }}
              >
                <Text h2>Where ?</Text>
                <Text b>{eventInfoLocation.name}</Text>
                <Text>{eventInfoLocation.street}</Text>
                <Text>{eventInfoLocation.postalCode}</Text>
              </Card>
            </Col>
            <Col>
              <Card
                css={{
                  ...textCardStyle,
                  height: '12rem',
                  marginTop: '0.1rem',
                }}
              >
                {/* <Text h2>When ?</Text> */}
                <Text h2>{eventInfoTime.date}</Text>
                <Text h2>{getWhatTimeString(eventInfoTime.dateObject)}</Text>
                <Text h2>
                  {inHowManyDaysString(eventInfoTime.inHowManyDays)}
                </Text>
              </Card>
            </Col>
          </Col>
          <Col css={{height: '24rem', width: '100%'}}>
            <Card css={mediaCardStyle}>
              {/* <Text h1>Plan</Text> */}
              <ul className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-0 ml-3">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time
                    dateTime="08:00"
                    className="mb-1 text-sm font-normal leading-none"
                  >
                    08:00
                  </time>
                  <h3 className="text-md mb-0">Meet at Place de L'Europe</h3>
                  <p className="mb-2 text-base font-normal ">adresse link</p>
                </li>
                <li className="mb-0 ml-3">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time
                    dateTime="08:00"
                    className="mb-1 text-sm font-normal leading-none"
                  >
                    08:30
                  </time>
                  <h3 className="text-md mb-0 ">Bus Leaves</h3>
                </li>
                <li className="mb-0 mt-3 ml-3">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time
                    dateTime="08:00"
                    className="mb-1  text-sm font-normal leading-none"
                  >
                    10:00 to 14:00
                  </time>
                  <h3 className="text-md mb-0">Via Ferrata excursion</h3>
                  <p className="mb-4 text-base font-normal ">Pic Saint Loup</p>
                </li>
                <li className="mb-0 mt-3 ml-3">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time
                    dateTime="08:00"
                    className="mb-1  text-sm font-normal leading-none"
                  >
                    Between 15:00 and 16:00
                  </time>
                  <h3 className="text-md mb-0 ">Back to Montpellier</h3>
                  <p className="mb-4 text-base font-normal">
                    Place de L'Europe
                  </p>
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
        <Spacer y={0.5} />
        <Row gap={0.1}>
          <Grid.Container gap={1} justify="center">
            <Grid xs={3}>
              <Card css={{...textCardStyle, height: '20rem'}}>
                <Text h3>Event Details</Text>
                <Text className="text-justify">
                  Some details about the event, things for the participants to
                  know, practical extra information
                </Text>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card css={{...textCardStyle, height: '20rem'}}>
                <Text h3>Included</Text>
                <ul className="m-0 p-0 max-w-md list-disc list-inside ">
                  <li className="m-0 p-0">Round trip </li>
                  <li className="m-0 p-0">
                    Equipment (Harness, via-ferrata lanyards, helmet){' '}
                  </li>
                  <li className="m-0 p-0">Professional instructor.</li>
                </ul>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card css={{...textCardStyle, height: '20rem'}}>
                <Text h3>Bring With</Text>
                <ul className="m-0 p-0 max-w-md list-disc list-inside ">
                  <li className="m-0 p-0">Sneakers</li>
                  <li className="m-0 p-0">Backpack</li>
                  <li className="m-0 p-0">Snacks and Food</li>
                </ul>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card css={{...textCardStyle, height: '20rem'}}>
                <Text h3>Contact</Text>
                <div class="max-w-mdivide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                  <Text weight="normal">erasmusMontpellier@email.fr</Text>
                  <Text weight="normal" className="text-md font-semibold">
                    +33 7 77 99 99 99
                  </Text>
                  <div>
                    <Text h3 className="mb-0 mt-3 md:text-md">
                      Adress
                    </Text>
                    <Text weight="normal" className="text-md font-semibold">
                      Bureau de l'Assoc à la fac
                    </Text>
                    <Text>Faculté des Sciences de Montpellier </Text>
                    <Text>Place E. Bataillon </Text>
                    <Text>34095 Montpellier</Text>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid.Container>
        </Row>
      </Container>
      <Spacer y={3} />
    </>
  )
}

export default EventPage
