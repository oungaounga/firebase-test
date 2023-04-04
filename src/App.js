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
import Navbar from './Navbar'
import ElCarousel from './Carousel'
import LeCarousel from './leCarousel'
import LaNavbar from './laNavbar'
import {Carousel} from 'react-bootstrap'

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
// - Adding data
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
        <LaNavbar />
        <Spacer y={1} />

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
            src="./img3.jpg"
            objectFit="cover"
            width="100%"
            height={340}
            alt="Card image background"
          />
        </Card>
        <Spacer y={1} />
        <LeCarousel />

        <Spacer y={1} />

        <p className=" text-white text-justify">
          Eu do est officia dolore eu qui labore adipisicing quis sint magna.
          Minim magna reprehenderit exercitation duis Lorem culpa do. Ad
          voluptate non dolor sint sit. Reprehenderit laboris deserunt quis
          fugiat. Duis veniam laborum cillum reprehenderit elit velit elit anim
          do magna duis dolor. Qui voluptate anim commodo adipisicing veniam
          mollit laborum irure ut ipsum deserunt. Eiusmod velit esse sint ad
          culpa non eiusmod. Eiusmod ea Lorem consectetur anim officia culpa
          dolore velit irure occaecat nostrud. Dolore quis veniam consequat
          labore sunt dolore eiusmod. Ut incididunt sint proident pariatur
          laboris cupidatat irure excepteur anim ipsum consequat eiusmod
          proident. Pariatur incididunt officia deserunt mollit esse voluptate
          sint commodo elit nostrud ullamco exercitation laborum deserunt. Est
          sit consectetur non tempor Lorem ex ea consectetur aute. Deserunt eu
          ad aliquip eiusmod excepteur ea velit duis ullamco. Ullamco ex est
          dolore ipsum id velit et mollit dolore pariatur. Laboris nisi magna
          dolore laborum irure nulla aute. Aliquip nostrud elit ex proident duis
          sunt sunt. Incididunt anim laborum sunt ullamco. Ullamco adipisicing
          voluptate deserunt tempor eiusmod duis cillum. Sit cillum deserunt
          commodo anim elit dolor ad adipisicing mollit. Fugiat quis nostrud
          laboris commodo dolor in et cupidatat reprehenderit excepteur
          incididunt. Eu commodo cillum adipisicing qui mollit quis enim
          consectetur. Excepteur pariatur voluptate adipisicing aliqua
          incididunt fugiat aliquip veniam sit veniam excepteur. Laborum velit
          ullamco dolore sit qui aute ea dolore commodo commodo duis minim
          dolore. Incididunt amet tempor nulla et pariatur reprehenderit. Ad
          nulla cillum sunt elit. Incididunt commodo fugiat proident in aliquip
          deserunt enim cillum reprehenderit amet. Consequat magna non eu ad sit
          cillum Lorem cupidatat ullamco ex. Nisi laboris pariatur proident
          tempor deserunt et commodo enim excepteur quis aliqua minim eiusmod.
          Veniam enim duis proident culpa pariatur tempor. Ut nulla aute
          reprehenderit irure anim velit ipsum minim ut commodo esse. Minim
          veniam proident laboris esse Lorem est qui duis consequat eu. Magna
          laboris laborum mollit dolor aliquip ut nulla quis eiusmod occaecat
          esse dolor magna quis. Quis tempor incididunt sit pariatur consequat
          ullamco cupidatat est. Cupidatat nostrud amet pariatur quis laborum
          deserunt. Reprehenderit cillum cupidatat tempor fugiat anim deserunt
          fugiat exercitation magna tempor ad voluptate magna. Commodo consequat
          ea fugiat irure ipsum adipisicing voluptate do duis quis laboris qui.
          Ipsum magna sit culpa incididunt dolore amet sit. Dolor dolore
          excepteur nisi qui et qui ipsum sit ad. Aute sit aliqua nisi enim.
          Exercitation mollit mollit laborum ullamco aliquip in pariatur sunt ea
          dolor. Officia qui voluptate eu deserunt sunt quis id cupidatat.
          Consectetur incididunt velit velit tempor dolore id. Eiusmod sint enim
          incididunt exercitation commodo eu incididunt culpa anim velit sint.
          Non incididunt officia sint in sint ad amet enim magna velit ut sunt
          cupidatat sunt. Consequat aliquip Lorem ad duis tempor magna in
          consectetur voluptate. Nisi labore ex veniam duis sint. Dolore sint
          nulla sit dolore. Incididunt cillum veniam consequat labore elit
          labore officia proident proident. Id reprehenderit do elit aute est.
          Aute commodo sint in ipsum proident eu pariatur nisi. Ex ea laborum
          reprehenderit minim commodo nulla mollit exercitation aliquip. Laborum
          esse incididunt sunt est dolore ex sint ut aute reprehenderit. Sunt
          aliquip laborum excepteur cillum ea cillum sunt fugiat incididunt enim
          eiusmod velit sint ad. Mollit ad eiusmod eiusmod tempor cupidatat
          Lorem ad amet pariatur. Velit proident velit aute aute velit Lorem
          elit eu. Exercitation ea consectetur tempor incididunt velit ad aute
          dolore. Amet deserunt excepteur excepteur ad reprehenderit adipisicing
          mollit enim deserunt aliquip aliquip Lorem qui. Ullamco eiusmod
          consectetur aute qui aliquip duis. Ut consequat id tempor velit ea
          officia consectetur nostrud velit commodo. Incididunt do nostrud
          mollit excepteur eiusmod enim voluptate nisi. Aute id adipisicing
          tempor nisi non minim dolor labore eiusmod amet irure. Qui proident
          commodo ullamco cupidatat eiusmod tempor occaecat enim eiusmod sint
          magna labore. Officia est duis nostrud minim Lorem irure dolore
          occaecat dolor labore et excepteur duis laborum. Incididunt et ea
          proident tempor. Labore eiusmod pariatur adipisicing sit ad
          reprehenderit deserunt nulla Lorem qui mollit aute Lorem ut. Sunt ad
          enim dolor occaecat qui cillum proident mollit dolor ex in dolor
          mollit veniam. Aliqua excepteur proident dolor laborum aute minim.
          Tempor ex enim tempor reprehenderit. Culpa sunt deserunt deserunt
          minim ipsum irure aliquip dolor dolor non exercitation proident
          tempor. Duis amet anim non minim ea proident enim sit elit tempor anim
          pariatur duis. Labore eu ullamco aliqua elit enim aliquip aliqua.
          Nostrud culpa commodo fugiat ut irure. Nostrud velit commodo enim sit
          irure aliquip. Elit commodo laboris adipisicing nulla. Exercitation
          excepteur ex magna ipsum velit voluptate commodo magna nostrud
          officia. Ex sit et enim occaecat consequat minim fugiat id. Deserunt
          reprehenderit quis Lorem ut proident minim eiusmod exercitation
          incididunt ipsum adipisicing ex. Anim aliquip labore Lorem anim
          officia cupidatat ea anim ullamco. Id veniam incididunt nisi nostrud
          exercitation aliquip reprehenderit ullamco aute exercitation.
          Adipisicing enim non ullamco aute magna magna ipsum esse velit cillum
          reprehenderit non. Dolor ut ipsum Lorem voluptate ex. Ex voluptate
          irure sunt sunt. Voluptate irure aliqua eu laboris ex incididunt sit
          excepteur nulla reprehenderit laboris reprehenderit elit nulla. Esse
          voluptate tempor ullamco laboris dolor minim non elit sint duis. Aute
          aliqua qui duis tempor officia esse aute culpa. Occaecat aute elit
          labore eu occaecat reprehenderit et ex minim cillum nisi. In cupidatat
          enim nulla laboris Lorem elit in esse commodo dolore. Aliqua voluptate
          minim aliquip fugiat Lorem et cillum ullamco minim nostrud officia
          tempor. Fugiat exercitation ullamco quis anim et anim do voluptate
          consectetur do sunt nostrud. Ut irure eiusmod sunt sint qui. Ullamco
          magna qui aute proident nisi fugiat aliqua laboris proident cupidatat
          eiusmod voluptate cillum. Nostrud irure sit incididunt occaecat. Ipsum
          et consectetur minim aliqua nisi amet mollit ullamco ipsum laborum
          laborum aute. Nostrud culpa pariatur sint fugiat eu Lorem aliquip elit
          magna consequat tempor dolore elit sit. Exercitation sunt sunt et
          mollit dolore voluptate voluptate minim ipsum. Laborum est non velit
          duis Lorem qui minim enim esse quis commodo. Ad fugiat duis enim
          commodo velit deserunt laborum elit velit voluptate irure ullamco.
          Mollit adipisicing est ex ex et. Qui nostrud nulla sint in aliquip
          nisi aliqua labore consequat nisi minim reprehenderit proident eu.
          Nulla dolor culpa ut mollit tempor Lorem et mollit. Laborum eiusmod
          laborum exercitation mollit incididunt cupidatat occaecat laborum sit
          sunt pariatur minim. Magna voluptate reprehenderit et ad minim in.
          Deserunt quis anim nostrud eu ullamco irure officia sit. Nostrud sunt
          tempor eu culpa in do ea sunt.
        </p>
        <Spacer y={1} />
        <p className=" text-white text-justify">
          Minim dolor proident amet cillum adipisicing in adipisicing pariatur
          est id cillum ut aute laboris. Quis sunt cillum mollit adipisicing id
          proident excepteur eiusmod et in. Aliquip nostrud reprehenderit est
          exercitation aliqua. Sunt qui ex cillum magna eiusmod cupidatat dolore
          ut. Fugiat ad labore veniam eu et. Quis qui commodo culpa
          reprehenderit amet aliqua dolor nostrud adipisicing ea. Ad in elit
          eiusmod deserunt velit qui officia sit exercitation ea aute eu est.
          Sunt ea amet ullamco mollit. Ipsum proident aute nisi sint id ea ex
          esse velit aliquip duis nulla. Incididunt culpa id anim adipisicing
          aliquip dolore. Sunt velit excepteur adipisicing adipisicing elit
          dolor adipisicing. Sint laboris irure nisi enim cupidatat. Adipisicing
          amet veniam anim veniam eiusmod ut. Pariatur labore laboris sint id.
          Eiusmod pariatur nulla id tempor incididunt duis est in aute proident.
          Aute minim velit incididunt occaecat enim incididunt aliqua enim sunt
          in nulla. Incididunt et in in enim laborum in do veniam non sint
          adipisicing nisi ad. Eiusmod eiusmod magna dolore adipisicing labore.
          Deserunt mollit culpa in minim aliqua reprehenderit exercitation. Elit
          cillum exercitation ad in quis elit esse ullamco in ex elit irure
          incididunt laborum. Quis in commodo eu in voluptate quis nisi ipsum
          culpa. Do veniam non minim consectetur in excepteur incididunt
          occaecat Lorem ad. Qui aliquip amet Lorem quis ullamco deserunt enim
          ullamco excepteur irure proident officia. Sint laboris ea ad aliqua
          labore elit Lorem in qui. Est ut ex sit adipisicing quis adipisicing.
          Nulla id consequat tempor ut officia excepteur ullamco laboris dolor.
          Reprehenderit aliqua tempor eiusmod voluptate laborum officia id
          reprehenderit reprehenderit. Veniam enim anim aliquip nisi quis sit do
          occaecat dolore mollit irure proident sint. Enim ut adipisicing amet
          excepteur voluptate amet veniam. Reprehenderit fugiat proident aliquip
          mollit nostrud. Do aliquip sint pariatur quis irure. Cillum est
          incididunt qui culpa excepteur exercitation do. In excepteur nostrud
          id consectetur commodo. Duis nisi cupidatat officia nostrud laboris
          occaecat deserunt ullamco culpa magna in magna. Laborum commodo
          aliquip reprehenderit cillum fugiat ipsum tempor sit consectetur
          occaecat culpa adipisicing culpa. Elit consectetur aliqua cillum nulla
          cupidatat dolore excepteur tempor duis elit. Veniam eiusmod laboris
          reprehenderit cupidatat non pariatur dolor eiusmod adipisicing.
          Excepteur amet mollit aliquip do aliquip sint est occaecat elit.
          Exercitation esse sit sunt est voluptate. Amet elit in id in id eu
          mollit duis officia. In ullamco ad veniam anim ullamco non ut laboris
          in adipisicing adipisicing mollit do. Velit id aliquip eiusmod mollit
          duis veniam eu minim sit laborum sit laborum do magna. Qui adipisicing
          Lorem in duis ipsum laboris. Et qui in laborum aute culpa officia sunt
          tempor esse consectetur elit consectetur labore. Irure ipsum elit
          voluptate aliquip pariatur. Nulla occaecat esse deserunt mollit et
          duis magna deserunt. Aliquip sunt id minim sunt. Occaecat tempor anim
          est Lorem magna Lorem aliqua reprehenderit nisi sit officia dolor.
          Commodo nisi eu elit in laboris laborum do sint duis deserunt ut
          aliqua pariatur eiusmod. Ullamco veniam anim nisi mollit laborum do
          anim sint ad enim quis irure consectetur officia. Cillum nulla magna
          laborum incididunt dolor nisi laboris Lorem reprehenderit duis
          pariatur. Consequat nulla sint pariatur aute occaecat adipisicing
          consectetur duis cupidatat ut. Excepteur tempor consectetur ipsum
          tempor.
        </p>
      </Container>
    </>
  )
}

export default App
