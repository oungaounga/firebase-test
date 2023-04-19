/** @format */
import {initializeApp} from 'firebase/app'
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore/lite'
import {getAuth, connectAuthEmulator, onAuthStateChanged} from 'firebase/auth'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from 'react'
import {Container, Spacer} from '@nextui-org/react'
// import {useMediaQuery} from './useMediaQuery'

import {Route, Routes, Navigate} from 'react-router-dom'

//------------------------Components----------------------//
import MyNavbar from './Components/MyNavbar'
// import MyNavbar from './Components/oldNavbar'
import HomePage from './Pages/HomePage/HomePage'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import MainLayout from './Pages/EventPage/MainLayout'
import FooterSection from './Components/FooterSection'

//--------------------------------------------------------//

//-------------------Firebase Functions and variables------------------//

const firebaseConfig = {
  apiKey: 'AIzaSyDDDSPSpUYtkSOdbOg5Yyuoc5VME_gjv5Q',
  authDomain: 'fire-test-3c6f5.firebaseapp.com',
  projectId: 'fire-test-3c6f5',
  storageBucket: 'fire-test-3c6f5.appspot.com',
  messagingSenderId: '878068415264',
  appId: '1:878068415264:web:81faae9b0a10b7c484f545',
}
export const app = initializeApp(firebaseConfig)
// export const db = getFirestore(app)
// export const usersCollection = collection(db, 'users')
// export const docRef = doc(db, 'users', '8blZVi95oK8CceTwsYi3')
export const auth = getAuth(app)

function authTest() {
  console.log('EXEC : auth testing func')
  connectAuthEmulator(auth, 'http://localhost:3000/')
}
function addDataToCollection(collection, data) {
  addDoc(collection, data)
    .then(() => {
      console.log('data added')
    })
    .catch((e) => {
      console.log(e)
    })
}
function addDocToCollection(collection, docName, doc) {
  setDoc(doc(collection, docName), doc)
    .then(() => {
      console.log(`${docName} added`)
    })
    .catch((e) => {
      console.log(e)
    })
}
const userQuentin = {
  name: 'quentin',
  email: 'quentin@example.com',
  tel: '777-777-777',
}
const userIris = {
  name: 'iris',
  email: 'iris@example.com',
  tel: '777-777-777',
}
const userJeev = {
  name: 'jeev',
  email: 'jeev@example.com',
  tel: '777-777-777',
}
//--------------------------------------------------------//

//TODOs :
// make functions that push pull data from firestore
// function will be called when page's loaded
// no point of making it work before components mounted
// using forms

//the adding or ommiting data from database shouldnt be
// in hooks, runs twice, only if manage to exec hooks
// once

//Database tools to master :
// - Adding data DONE
// - Deleting data
// - Updating : Careful, data can be overwritten, uses careful IDs
// - Creating collections
// - Query Data, i.e. all the query methods in firestore
// - compute on data maybe
// - Render elements from data : 1. Data must be loaded to variables
//                                before components mounts
//                                Feed components the data
//                                 we good
//

//Google Cloud's Cloud SQL for a relational database

//---------------------Functions, variables----------------------//
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'Septembre',
  'November',
  'December',
]
// function getFormatedDate(date) {
//   let day = days[date.getDay()]
//   let month = months[date.getMonth()]
//   let value = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`
//   return value
// }
export let getFormatedDateString = (date) => {
  return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`
}
export let inHowManyDays = (date) => {
  return Math.floor((new Date('2023-04-15') - new Date()) / 86400000) + 1
}
export let inHowManyDaysString = (days) => {
  return `In ${days} Days`
}
export let getWhatTimeString = (dateObject) => {
  let string = dateObject.toLocaleTimeString()
  let value = ''
  for (let i = 0; i <= 4; i++) {
    value = value.concat(string[i])
  }
  return value
}
export const events = {
  event1: {
    eventTitle: 'Via Ferrata',
    eventImage: './viaFerrata.jpg',
    eventMapPosition: [43.6047981, 3.8807164],
    eventDescription: {
      ang: 'Live a unique and thrilling adventure in the heights with via ferrata! Attached to a secure cable, you will progress through ladders, suspension bridges, and walkways while discovering breathtaking views of nature. This activity combining climbing with a mountain walk is accessible to everyone.',
      fr: "Vivez une aventure unique et palpitante dans les hauteurs avec la via ferrata ! Attaché à un câble sécurisé, vous progresserez à travers des échelles, ponts suspendus et passerelles tout en découvrant des vues à couper le souffle sur la nature. Cette activité alliant l'escalade à une promenade en montagne est accessible à tous.",
    },
    eventInfo: {
      location: {
        name: 'Montpellier Saint-Roch Train Station',
        street: 'Pl. Auguste Gibert',
        postalCode: '34000 Montpellier',
      },
      time: {
        dateObject: new Date('2023-04-15T21:00:00'),
        date: getFormatedDateString(new Date('2023-04-15')),
        whatTime: new Date('2023-04-15T21:00:00').toLocaleTimeString(),
        inHowManyDays: inHowManyDays(new Date('2023-04-15')),
      },
    },
  },
}

//---------------------------------------------------------//

function App() {
  // getDoc(docRef).then((result) => {
  //   console.log('no use effect', result.data())
  // })
  // setDoc(doc(collection(db, 'users'), 'Molly'), {
  //   email: 'molly@example.com',
  //   name: 'new molly',
  //   tel: '111-222-333',
  //   overwritten: true,
  // })
  //   .then(() => {
  //     console.log('data added')
  //   })
  //   .catch((e) => {
  //     console.log(e)
  //   })
  const [signUpCreds, setSignUpCreds] = useState({email: '', password: ''})
  const [loginCreds, setLoginCreds] = useState({email: '', password: ''})
  // const [whichPage, setWhichPage] = useState('HomePage') //name follows component name
  const [userConnected, setUserConnected] = useState(false)
  // let page = <HomePage goto={{whichPage, setWhichPage}} />
  // let page = null
  onAuthStateChanged(auth, (user) => {
    user ? setUserConnected(true) : setUserConnected(false)
  })

  return (
    <div className="min-h-screen mx-auto">
      {/* <Container xl> */}
      <MyNavbar
        // whichPage={{whichPage, setWhichPage}}
        userConnected={{userConnected, setUserConnected}} //TODO no need, just use onAutgStateChanged
        signUpCreds={{signUpCreds, setSignUpCreds}}
        loginCreds={{loginCreds, setLoginCreds}}
      />
      <Spacer y={1} />
      <Container css={{minHeight: '100vh', position: 'relative'}}>
        {/* {(() => {
            switch (whichPage) {
              case 'HomePage':
                page = <HomePage goto={{whichPage, setWhichPage}} />
                break
              case 'ProfilePage':
                page = <ProfilePage />
                break
              // case 'EventPage': //TODO add setWhichPage('EventPage') to Upcoming
              //   page = <EventPage eventData={events.event1} />
              //   break
              case 'MainLayout':
                page = <MainLayout eventData={events.event1} />
                break
              // case 'EventLayoutPage':
              //   page = <EventLayoutPage eventData={events.event1} />
              //   break
            }
            return page
          })()} */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/Dupont"
            element={
              userConnected ? <ProfilePage /> : <Navigate replace to={'/'} />
            }
          />
          <Route
            exact
            path="/Event1"
            element={<MainLayout eventData={events.event1} />}
          />
        </Routes>

        <Spacer y={3} />
        <FooterSection />
      </Container>
      {/* </Container> */}
    </div>
  )
}

export default App
