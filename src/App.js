/** @format */
import './Global.css'
import {FirebaseApp} from 'firebase/app'
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
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, Fragment} from 'react'
import {Container, Spacer, Text, Col, Card} from '@nextui-org/react'
import MyCarousel from './Components/MyCarousel'
import MyNavbar from './Components/MyNavbar'
import Upcoming from './Components/Upcoming'
import LoggedPage from './pages/Login'
const firebaseConfig = {
  apiKey: 'AIzaSyDDDSPSpUYtkSOdbOg5Yyuoc5VME_gjv5Q',
  authDomain: 'fire-test-3c6f5.firebaseapp.com',
  projectId: 'fire-test-3c6f5',
  storageBucket: 'fire-test-3c6f5.appspot.com',
  messagingSenderId: '878068415264',
  appId: '1:878068415264:web:81faae9b0a10b7c484f545',
}
console.clear()
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const usersCollection = collection(db, 'users')
const docRef = doc(db, 'users', '8blZVi95oK8CceTwsYi3')

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

  return (
    <>
      <Container>
        <MyNavbar />
        <Spacer y={0.5} />
        <LoggedPage />
        <MyCarousel />
        <Spacer y={1} />
        <Upcoming />
      </Container>
    </>
  )
}

export default App
