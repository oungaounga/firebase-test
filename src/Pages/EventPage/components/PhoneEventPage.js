/** @format */
import {Card, Spacer, Text, Image, Button} from '@nextui-org/react'
import {Map, Marker} from 'pigeon-maps'
import {useMediaQuery} from '../../../useMediaQuery'
// import {getWhatTimeString} from '../../../App'
import {getWhatTimeString} from '../../../App'
// import {inHowManyDaysString} from '../../../App'
import {inHowManyDays} from '../../../App'
import {inHowManyDaysString} from '../../../App'
const mediaCardStyle = {
  minHeight: 'inherit',
  width: '100%',
  border: 'none',
}
const textCardStyle = {...mediaCardStyle, padding: '0.5rem'}
const MakeTimeLine = (props) => {
  return (
    <ul className="relative border-l border-gray-200 dark:border-gray-700">
      {Object.keys(props.eventData.eventInfo.plan).map((item, index) => {
        return (
          <li className="mb-0 ml-3">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time
              dateTime="08:00"
              className="mb-1 text-sm font-normal leading-none"
            >
              {props.eventData.eventInfo.plan[item].when}
            </time>
            <h3 className="text-md mb-0">
              {props.eventData.eventInfo.plan[item].ang.what}
            </h3>
            <p className="mb-2 text-base font-normal ">
              {props.eventData.eventInfo.plan[item].ang.where}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

function PhoneEventPage(props) {
  const {eventData} = props
  const eventTitle = eventData.eventTitle
  const eventImage = eventData.eventImage
  const eventMapPosition = eventData.eventMapPosition
  const eventDescription = eventData.eventDescription
  const eventInfoLocation = eventData.eventInfo.location
  const eventInfoTime = eventData.eventInfo.time

  return (
    <>
      <p className="text-6xl font-semibold text-center text-transparent bg-clip-text  bg-gradient-to-r from-purple-600 to-pink-600">
        {eventTitle}
      </p>
      <div className="flex-col">
        <Spacer y={1} />
        <div>
          <Card variant="flat" css={mediaCardStyle}>
            <Card.Header
              css={{
                bgBlur: '#181312',
                zIndex: 1,
                borderBottom:
                  '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                margin: 0,
                padding: '0.5rem',
              }}
            >
              <h4 className="text-justify mb-0 font-semibold sm:text-3xl">
                {`Join us on the ${eventTitle} event !`}
              </h4>
            </Card.Header>
            <Card.Body css={{padding: 0, margin: 0}}>
              <Image src={eventImage} />
            </Card.Body>
            <Button
              ripple
              color="success"
              css={{
                position: 'absolute',
                zIndex: 1,
                bottom: '1rem',
                left: '50%',
                transform: 'translate(-50%, 0)',
                fontSize: '$xl',
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
              Join !
            </Button>
          </Card>
        </div>
        <Spacer y={0.5} />
        <div>
          <Card
            css={{
              ...textCardStyle,
              height: 'fit-content',
              marginTop: '0.1rem',
              padding: '1rem',
            }}
          >
            <h3 className="m-0 sm:text-4xl">{eventInfoTime.date}</h3>
            <h3 className="m-0">
              {getWhatTimeString(eventInfoTime.dateObject)}
            </h3>
            <h3 className="m-0">
              {inHowManyDaysString(eventInfoTime.inHowManyDays)}
            </h3>
          </Card>
        </div>
        <Spacer y={0.5} />
        <div>
          <Card css={textCardStyle}>
            <Card.Header>
              <h3 className="text-justify mb-0 mt-0 font-semibold sm:text-3xl">
                What are we doing ?
              </h3>
            </Card.Header>
            <Card.Body css={{padding: '0.5rem', paddingTop: 0}}>
              <Text className="text-sm text-justify md:text-lg md:font-semibold xl:text-2xl">
                {eventDescription.ang}
              </Text>
            </Card.Body>
            <Card.Footer
              css={{
                // position: 'absolute',
                // bottom: 0,
                padding: 0,
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                '@xs': {
                  flexDirection: 'row',
                },
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
                  display: 'block',
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
                  display: 'block',
                  fontSize: '$xl',
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
                Join !
              </Button>
            </Card.Footer>
          </Card>
        </div>
        <Spacer y={0.5} />
        <div>
          <Card
            css={{
              ...textCardStyle,
              height: 'fit-content',
              padding: '0.5rem',
              marginBottom: '0.1rem',
            }}
          >
            <Card.Header css={{paddingBottom: 0}}>
              <h3 className="text-justify mb-0 mt-0 font-semibold sm:text-3xl">
                Where ?
              </h3>
            </Card.Header>
            <Card.Body css={{paddingTop: '0.7rem', paddingBottom: 0}}>
              <p className="font-bold">{eventInfoLocation.name}</p>
              <p>{eventInfoLocation.street}</p>
              <p>{eventInfoLocation.postalCode}</p>
            </Card.Body>
          </Card>
        </div>
        <Spacer y={0.5} />
        <div>
          <Card id="detailsStart" css={mediaCardStyle}>
            <Map
              height="24rem"
              defaultCenter={eventMapPosition}
              defaultZoom={17}
            >
              <Marker width={50} anchor={eventMapPosition} />
            </Map>
          </Card>
        </div>
        <Spacer y={0.5} />
        <div>
          <Card css={{minHeight: 'fit-content', width: '100%', border: 'none'}}>
            <h3 className="text-justify mt-3 ml-5 font-semibold sm:text-3xl">
              Plan
            </h3>
            <MakeTimeLine eventData={props.eventData} />
          </Card>
        </div>
        <Spacer y={0.5} />
        <div>
          <Card css={textCardStyle}>
            <Card.Header
              css={{
                '@xs': {
                  paddingLeft: '0.3rem',
                },
              }}
            >
              <h3 className="text-center mb-0 mt-0 font-semibold sm:text3xl">
                Event Details
              </h3>
            </Card.Header>
            <Card.Body css={{padding: '0.5rem', paddingTop: 0}}>
              <Text className="text-sm text-justify md:text-lg md:font-semibold xl:text-2xl">
                Some details about the event, things for the participants to
                know, practical extra information
              </Text>
            </Card.Body>
          </Card>
        </div>
        <Spacer y={0.5} />
        <div>
          <Card css={textCardStyle}>
            <Card.Header
              css={{
                '@xs': {
                  paddingLeft: '0.3rem',
                },
              }}
            >
              <h3 className="text-justify mb-0 mt-0 font-semibold sm:text-3xl">
                What's Included ?
              </h3>
            </Card.Header>
            <Card.Body css={{padding: '0.5rem', paddingTop: 0}}>
              <ul
                className={`m-0 p-0 max-w-md list-inside ${
                  eventData.eventInfo.included.ang.length === 1
                    ? 'list-none'
                    : 'list-disc'
                }`}
              >
                {eventData.eventInfo.included.ang.map((item) => {
                  return <li className="m-0 p-0 text-sm">{item}</li>
                })}
              </ul>
            </Card.Body>
          </Card>
        </div>
        <Spacer y={0.5} />
        <div>
          <Card css={textCardStyle}>
            <Card.Header
              css={{
                '@xs': {
                  paddingLeft: '0.3rem',
                },
              }}
            >
              <h3 className="text-justify mb-0 mt-0 font-semibold sm:text-3xl">
                Bring With
              </h3>
            </Card.Header>
            <Card.Body css={{padding: '0.5rem', paddingTop: 0}}>
              <ul
                className={`m-0 p-0 max-w-md list-inside ${
                  eventData.eventInfo.bringWith.ang.length === 1
                    ? 'list-none'
                    : 'list-disc'
                }`}
              >
                {eventData.eventInfo.bringWith.ang.map((item) => {
                  return <li className="m-0 p-0 text-sm">{item}</li>
                })}
              </ul>
            </Card.Body>
          </Card>
        </div>
        <Spacer y={0.5} />
        <div>
          <Card css={{...textCardStyle, height: 'fit-content'}}>
            <Card.Header
              css={{
                '@xs': {
                  paddingLeft: '0.3rem',
                },
              }}
            >
              <h3 className="text-justify mb-0 mt-0 font-semibold sm:text-3xl">
                Contact Us
              </h3>
            </Card.Header>
            <div class="max-w-mdivide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <p className=" pl-4 text-md font-thin">
                erasmusMontpellier@email.fr
              </p>
              <p className="pl-4  text-md font-thin">+33 7 77 99 99 99</p>
              <div>
                <h3 className="pl-3 pt-2 pb-0 md:text-md">Adress</h3>
                <p className="pl-4  text-md font-thin">
                  Bureau de l'Assoc à la fac
                </p>
                <p className="pl-4  text-md font-thin">
                  Faculté des Sciences de Montpellier
                </p>
                <p className="pl-4  text-md font-thin">Place E. Bataillon </p>
                <p className="pl-4  text-md font-thin">34095 Montpellier</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default PhoneEventPage
