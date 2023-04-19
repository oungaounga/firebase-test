/** @format */
import {useState} from 'react'
import {auth} from '../App'
import {signOut} from 'firebase/auth'
import {Navbar, Button, Link, Text, User} from '@nextui-org/react'
import LoginModal from './login'
import SignUpModal from './signUp'
import {useNavigate} from 'react-router-dom'

// export const handleLogOutButton = (auth, signOut, userConnected) => {
//   signOut(auth)
//     .then(() => {
//       console.log('user succesfuly signed out')
//       console.log('from handleLogOut', userConnected)
//       //TODO redirect to home page
//     })
//     .catch((e) => console.log(e.message))
// }

function MyNavbar(props) {
  // const collapseItems = ['Event', 'Products', 'Contact us', 'About']
  const collapseItems = ['Event', 'Contact us', 'About']
  const [signUpModalVisible, setSignUpModalVisible] = useState(false)
  const [loginModalVisible, setLoginModalVisible] = useState(false)
  const {userConnected} = props.userConnected
  const authSignOut = signOut //have to do this if i want to reference it in the handler
  const navigate = useNavigate()

  function handleLogOutButton(e) {
    signOut(auth)
      .then(() => {
        console.log('user succesfuly signed out')
        console.log('from handleLogOut', userConnected)
        //TODO redirect to home page
      })
      .catch((e) => console.log(e.message))
    window.scrollTo(0, 0)
    navigate('/')
  }

  const userDisconnectedNavbarUI = (
    // <Navbar.Content>
    //   <Navbar.Link
    //     color="inherit"
    //     href="#"
    //     onClick={handleLoginModalClick}
    //   >
    //     Log in
    //   </Navbar.Link>
    //   <Navbar.Item>
    //     <Button auto flat as={Link} href="#" onPress={handleSignUpModalClick}>
    //       Sign Up
    //     </Button>
    //   </Navbar.Item>
    // </Navbar.Content>
    <div className="flex flex-row gap-1 md:visible">
      <Button
        auto
        flat
        onPress={() => {
          setLoginModalVisible(true)
        }}
        css={{
          margin: 0,
        }}
      >
        Log In
      </Button>
      <Button
        auto
        flat
        as={Link}
        href="#"
        onPress={() => {
          setSignUpModalVisible(true)
        }}
        css={{
          margin: 0,
        }}
      >
        Sign Up
      </Button>
    </div>
  )
  const userConnectedNavbarUI = (
    <div className="flex flex-row gap-1 md:visible">
      <User
        src="./cardImg6.jpg"
        name="Dupont"
        description="user at TMPT"
        pointer
        squared
        onClick={() => {
          console.log('go to user Page')
          window.scrollTo(0, 0)
          navigate('/Dupont')
        }}
        css={{
          margin: 0,
        }}
      />
      {/* <Button auto flat>
        <RLink to="Dupont">Your Profile</RLink>
        Your Profile
      </Button> */}
      <Button
        auto
        flat
        as={Link}
        href="#"
        onPress={handleLogOutButton}
        css={{
          paddingRight: '0.3rem',
          paddingLeft: '0.3rem',
        }}
      >
        Log out
      </Button>
    </div>
  )

  return (
    <>
      <Navbar isBordered variant="floating">
        <Navbar.Brand
          onClick={() => {
            window.scrollTo(0, 0)
            navigate('/')
          }}
          className=" hover:cursor-pointer"
        >
          <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
          <Text b color="inherit" hideIn="xs">
            ABROAD
          </Text>
          <Text b color="inherit" showIn="xs">
            AMTP
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link href="#Upcoming">Events</Navbar.Link>
          {/* <Navbar.Link href="#">Products</Navbar.Link> */}
          <Navbar.Link href="#ContactUsSection">Contact Us</Navbar.Link>
          <Navbar.Link href="#AboutUsSection">About</Navbar.Link>
        </Navbar.Content>
        {userConnected ? userConnectedNavbarUI : userDisconnectedNavbarUI}

        <Navbar.Collapse hideIn="960px">
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: '100%',
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <LoginModal visible={{loginModalVisible, setLoginModalVisible}} />
      <SignUpModal visible={{signUpModalVisible, setSignUpModalVisible}} />
    </>
  )
}

export default MyNavbar
