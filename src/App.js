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

import {Route, Routes, Navigate, createPath} from 'react-router-dom'

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
  return Math.floor((date - new Date()) / 86400000) + 1
}
export let inHowManyDaysString = (days) => {
  let string = ''
  if (days === 0) {
    string = 'Today !'
  } else if (days <= 0) {
    string = `This event was ${Math.abs(days)} days ago`
  } else {
    string = `In ${days} Days`
  }
  return string
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
    route: '/Event1',
    eventTitle: 'Via Ferrata',
    eventImage: './viaFerrata.jpg',
    joinLink: 'https://my.weezevent.com/via-ferrata-1',
    eventMapPosition: [43.6047981, 3.8807164],
    eventDescription: {
      ang: 'Live a unique and thrilling adventure in the heights with via ferrata! Attached to a secure cable, you will progress through ladders, suspension bridges, and walkways while discovering breathtaking views of nature. This activity combining climbing with a mountain walk is accessible to everyone.',
      fr: "Vivez une aventure unique et palpitante dans les hauteurs avec la via ferrata ! Attaché à un câble sécurisé, vous progresserez à travers des échelles, ponts suspendus et passerelles tout en découvrant des vues à couper le souffle sur la nature. Cette activité alliant l'escalade à une promenade en montagne est accessible à tous.",
    },
    smallCardDescribe: {
      ang: 'Live a unique and thrilling adventure in the heights with via ferrata! ',
      fr: 'Vivez une aventure unique et palpitante dans les hauteurs avec la via ferrata !',
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
      plan: {
        stepOne: {
          when: '08:00',
          ang: {
            what: "Meet at Place de L'Europe",
            where: "Place de l'Europe",
          },
          fr: {
            what: "RDV à Place de L'Europe",
            where: "Place de l'Europe",
          },
        },
        stepTwo: {
          when: '08:30',
          ang: {
            what: 'Bus to Pic Saint-Loup Leaves ',
            where: "Place de l'Europe",
          },
          fr: {
            what: 'Départ du Bus le Pic Saint-Loup',
            where: "Place de l'Europe",
          },
        },
        stepThree: {
          when: '10:00 to 14:00',
          ang: {
            what: 'Via Ferrata excursion',
            where: 'Pic Saint Loup',
          },
          fr: {
            what: 'Excursion Via Ferrata',
            where: 'Pic Saint Loup',
          },
        },
        stepFour: {
          when: 'Between 15:00 and 16:00',
          ang: {
            what: 'Bus back to Montpellier',
            where: "To Place de l'Europe",
          },
          fr: {
            what: 'Bus retour à Montpellier',
            where: "Arrêt Place de l'Europe",
          },
        },
      },
      details: {
        ang: 'Some details about the event, things for the participants to know, practical extra information',
        fr: 'Des informations destinées aux participants, details etc..',
      },
      bringWith: {
        ang: ['Sneakers', 'BackPack', 'Snack and food'],
        fr: ['Paire de basckets', 'Sac à dos', 'Snacks, Sandwichs, boissons'],
      },
      included: {
        ang: [
          'Round Trip',
          'Equipment (Harness, via-ferrata lanyards, helmet)',
          'Professional instructor',
        ],
        fr: [
          'Round Trip',
          'Equipment (Harness, via-ferrata lanyards, helmet)',
          'Instructeur',
        ],
      },
      disclaimer: {
        ang: ['Sneakers', 'BackPack', 'Snack and food'],
        fr: ['Paire de basckets', 'Sac à dos', 'Snacks, Sandwichs, boissons'],
      },
    },
  },
  event2: {
    route: '/Event2',
    eventTitle: 'Heat Club',
    eventImage: './heatClub.jpg',
    joinLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSd__ZukuPG9c_0xEfhNbrOyQv5oYpMO2TJPVycCKJF5BJMPfQ/viewform',
    eventMapPosition: [43.5720036, 3.8485765],
    eventDescription: {
      ang: "Far from home, anything goes! And it's at the Heat Club that we're going to prove this phrase true! Let's go!",
      fr: "Loin de chez nous, tout est permis ! Et c'est au Heat Club que l'on va prouver que cette phrase dit vraie ! Feu !!",
    },
    smallCardDescribe: {
      ang: "Far from home, anything goes! And it's at the Heat Club that we're going to prove this phrase true! Let's go!",
      fr: "Loin de chez nous, tout est permis ! Et c'est au Heat Club que l'on va prouver que cette phrase dit vraie ! Feu !!",
    },
    eventInfo: {
      location: {
        name: 'Heat Club',
        street: 'Rue du Mas de Grille',
        postalCode: '34430 Saint-Jean-de-Védas',
      },
      time: {
        dateObject: new Date('2023-04-21T23:00:00'),
        date: getFormatedDateString(new Date('2023-04-21')),
        whatTime: new Date('2023-04-21T23:00:00').toLocaleTimeString(),
        inHowManyDays: inHowManyDays(new Date('2023-04-21')),
      },
      plan: {
        stepOne: {
          when: '23:00',
          ang: {
            what: 'Meet for Check-in at Gare Saint Roch (Pont de Sète)',
            where: 'Saint-Roch Train Station, Pont de Sète entry',
          },
          fr: {
            what: 'RDV pour le check-in à Gare Saint Roch (Pont de Sète)',
            where: 'Gare Saint-Roch, entrée Pont de Sète',
          },
        },
        stepTwo: {
          when: '23:30',
          ang: {
            what: 'First shuttle to Heat Club',
            where: 'Saint-Roch Train Station, Pont de Sète entry',
          },
          fr: {
            what: 'Première navette direction le Heat Club',
            where: 'Gare Saint-Roch, entrée Pont de Sète',
          },
        },
        stepThree: {
          when: '00:00',
          ang: {
            what: 'Last shuttle to Heat Club',
            where: 'Saint-Roch Train Station, Pont de Sète entry',
          },
          fr: {
            what: 'Dernière navette direction le Heat Club',
            where: 'Gare Saint-Roch, entrée Pont de Sète',
          },
        },
        stepFour: {
          when: '02:40',
          ang: {
            what: 'First Shuttle from Heat Club to Gare Saint-Roch',
            where: 'Heat Club',
          },
          fr: {
            what: 'Première navette du Heat Club à Gare Saint-Roch',
            where: 'Heat Club',
          },
        },
        stepFive: {
          when: '03:55',
          ang: {
            what: 'Second Shuttle from Heat Club to Gare Saint-Roch',
            where: 'Heat Club',
          },
          fr: {
            what: 'Deuxième navette du Heat Club à Gare Saint-Roch',
            where: 'Heat Club',
          },
        },
        stepSix: {
          when: '05:10',
          ang: {
            what: 'Last Shuttle from Heat Club to Gare Saint-Roch',
            where: 'Heat Club',
          },
          fr: {
            what: 'Dernière navette du Heat Club à Gare Saint-Roch',
            where: 'Heat Club',
          },
        },
      },
      details: {
        ang: 'Some details about the event, things for the participants to know, practical extra information',
        fr: 'Des informations destinées aux participants, details etc..',
      },
      bringWith: {
        ang: ["It's Le Heat, please come on fleek"],
        fr: [
          "Nous allons au Heat, nous vous prions de venir plus frais qu'un glaçon",
        ],
      },
      included: {
        ang: ['Fast-Pass', '5 VIP tiquets to win !'],
        fr: ['Bracelet Prioritaire', '5 entrées VIP à gagner !'],
      },
      disclaimer: {
        ang: 'Proper attire required. Heat Club reserves the right to refuse entry if your attire is not adequate or if you are too intoxicated.',
        fr: "Tenue correcte exigée, le Heat Club se réserve le droit de refuser l'entrée si votre tenue n'est pas adéquate ou si vous êtes trop alcoolisé !",
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

  console.log(Object.keys(events))

  // console.log(JSON.stringify(events))
  // console.clear()
  const [signUpCreds, setSignUpCreds] = useState({email: '', password: ''})
  const [loginCreds, setLoginCreds] = useState({email: '', password: ''})
  const [userConnected, setUserConnected] = useState(false)
  onAuthStateChanged(auth, (user) => {
    user ? setUserConnected(true) : setUserConnected(false)
  })

  return (
    <div className="min-h-screen mx-auto">
      <MyNavbar
        userConnected={{userConnected, setUserConnected}} //TODO no need, just use onAutgStateChanged
        signUpCreds={{signUpCreds, setSignUpCreds}}
        loginCreds={{loginCreds, setLoginCreds}}
      />
      <Spacer y={1} />
      <Container css={{minHeight: '100vh', position: 'relative'}}>
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
          <Route
            exact
            path="/Event2"
            element={<MainLayout eventData={events.event2} />}
          />
        </Routes>

        <Spacer y={3} />
        <FooterSection />
      </Container>
    </div>
  )
}

export default App
