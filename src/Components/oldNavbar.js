/** @format */
import {useState} from 'react'
import {Link as RLink} from 'react-router-dom'

//-------------firebase--------------//
import {auth} from '../App'
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth'
//----------------------------------//

//-------------UI-------------------//
import Mail from './Mail'
import Password from './Password'
import {
  Navbar,
  Button,
  Link,
  Text,
  User,
  Card,
  Input,
  Modal,
  Row,
  Checkbox,
  css,
  Grid,
  Collapse,
} from '@nextui-org/react'
//----------------------------------//

//-------------firebase Config---------//
const actionCodeSettings = {
  url: 'https://fire-test-3c6f5.web.app/', //TODO un lien du genre erasmusMTP.com/connexion
  // url: window.location.href,
  handleCodeInApp: true,
  dynamicLinkDomain: 'https://fire-test-3c6f5.web.app/',
  //TODO add personnalized email
}
const googleProvider = new GoogleAuthProvider()
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly')
const facebookProvider = new FacebookAuthProvider()

//-------------firebase--------------//

function MyNavbar(props) {
  const collapseItems = ['Event', 'Products', 'Contact us', 'About']
  // //props
  // const {whichPage} = props.whichPage
  // const {setWhichPage} = props.whichPage
  const {userConnected} = props.userConnected
  const {setUserConnected} = props.userConnected
  const {signUpCreds} = props.signUpCreds
  const {setSignUpCreds} = props.signUpCreds
  const {loginCreds} = props.loginCreds
  const {setLoginCreds} = props.loginCreds

  //states
  const [loginModalVisible, setLoginModalVisible] = useState(false)
  const [signUpModalVisible, setSignUpModalVisible] = useState(false)

  function handleLoginClick(e) {
    // console.log(
    //   `email : ${authCreds.email} \npassword : ${authCreds.password} `
    // )
    signInWithEmailAndPassword(auth, loginCreds.email, loginCreds.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('signed in user : ', user)
        // console.log('whichPage : ', whichPage)
        // setWhichPage('HomePage')
        setUserConnected(true)
        setLoginModalVisible(false)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }

  function handleSignInWithEmailLink(e) {
    //TODO this dont work, verify
    sendSignInLinkToEmail(auth, 'oungaounga@gmail.com', actionCodeSettings)
      .then(() => {
        // window.localStorage.setItem('signInemail', signUpCreds.email)
        console.log('sent')
      })
      .catch(() => {
        console.log('problem')
      })
  }

  function handleLoginWithGoogle() {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        console.log('google sign in success')
      })
      .catch(() => {
        console.log('sign in with google error')
      })
    closeSignUpModal()
  }

  function handleLoginWithFacebook() {
    signInWithPopup(auth, facebookProvider)
      .then(() => {
        console.log('facebook sign in success')
      })
      .catch((error) => {
        console.log('sign in with facebook error')
        console.log(error.code)
        console.log(error.message)
        // The email of the user's account used.
        console.log(error.customData.email)
        // The AuthCredential type that was used.
        console.log(FacebookAuthProvider.credentialFromError(error))
      })
    closeSignUpModal()
  }

  const handleLoginModalClick = () => {
    setLoginModalVisible(true)
  }

  const closeLoginModal = () => {
    setLoginModalVisible(false)
    console.log('closed')
  }
  const handleSignUpModalClick = () => {
    setSignUpModalVisible(true)
  }
  const closeSignUpModal = () => {
    setSignUpModalVisible(false)
    console.log('closed')
  }

  function handleClickEmailVerif(e) {
    e.preventDefault() //TODO change and adapt the whole function
    sendSignInLinkToEmail(auth, signUpCreds.email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        // window.localStorage.setItem('emailForSignIn', authCreds.email)
        closeSignUpModal()
        console.log('sent')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('probleme')
        // ...
      })
  }

  function handleSignUpWithEmailPassword(e) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, signUpCreds.email, signUpCreds.email)
      .then((userCredential) => {
        const user = userCredential.user
        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log('verification email sent')
          })
          .catch(() => {
            console.log(
              'couldnt send verification email after profile creation'
            )
          })
      })
      .catch((error) => {
        const errorMessage = error.message
        console.log('sign up problem \n', error.message)
      })
  }

  function handleLogOutButton(e) {
    signOut(auth)
      .then(() => {
        setUserConnected(!userConnected)
        // setWhichPage('HomePage')
        console.log('user succesfuly signed out')
      })
      .catch((e) => console.log(e.message))
  }
  const userDisconnectedNavbarUI = (
    <Navbar.Content>
      <Navbar.Link
        color="inherit"
        href="#"
        // onClick={() => setWhichPage('LoginPage')}
        onClick={handleLoginModalClick}
      >
        Log in
      </Navbar.Link>
      <Navbar.Item>
        <Button auto flat as={Link} href="#" onPress={handleSignUpModalClick}>
          Sign Up
        </Button>
      </Navbar.Item>
    </Navbar.Content>
  )

  const userConnectedNavbarUI = (
    <Navbar.Content>
      <User
        src="./cardImg6.jpg"
        name="Dupont"
        description="user at TMPT"
        pointer
        squared
        onClick={() => {
          console.log('go to user Page')
          // setWhichPage('ProfilePage')
        }}
      />
      <Button auto flat>
        <RLink to="Dupont">Your Profile</RLink>
      </Button>
      <Button auto flat as={Link} href="#" onPress={handleLogOutButton}>
        Log out
      </Button>
    </Navbar.Content>
  )

  return (
    <>
      <Navbar isBordered variant="floating">
        <Navbar.Brand
          onClick={() => {
            // setWhichPage('HomePage')
            window.scrollTo(0, 0)
          }}
          css={{'&:hover': {cursor: 'pointer', scrollBehavior: 'smooth'}}}
        >
          <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
          <Text
            b
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
            }}
            hideIn="xs"
          >
            TURING MTP
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link href="#Upcoming">Events</Navbar.Link>
          <Navbar.Link href="#AboutUsSection">About</Navbar.Link>
          <Navbar.Link href="#ContactUsSection">Contact Us</Navbar.Link>
        </Navbar.Content>
        {/* 
        <Navbar.Content>
        <Navbar.Link
          color="inherit"
          href="#"
          onPress={() => setWhichPage('LoginPage')}
        >
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button
            auto
            flat
            as={Link}
            href="#"
            onPress={() => setWhichPage('SignUpPage')}
          >
            Sign Up
          </Button>
        </Navbar.Item> 
        </Navbar.Content>
        */}
        {userConnected ? userConnectedNavbarUI : userDisconnectedNavbarUI}
        <Navbar.Collapse>
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
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={loginModalVisible}
        onClose={closeLoginModal}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Login and join{' '}
            <Text b size={18}>
              Abroad
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Collapse.Group css={{minHeight: 'fit-content', padding: 0}}>
            <Collapse title="Email and Password" css={{padding: 0}}>
              <div className="p-2 pb-0">
                <Input
                  css={{padding: '0.5rem'}}
                  clearable
                  bordered
                  fullWidth
                  type="email"
                  color="primary"
                  size="lg"
                  placeholder="Email"
                  initialValue={loginCreds.email}
                  onChange={(e) =>
                    setLoginCreds({...loginCreds, email: e.target.value})
                  }
                  contentLeft={<Mail fill="currentColor" />}
                />
                <Input
                  css={{padding: '0.5rem'}}
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  type="password"
                  placeholder="Password"
                  contentLeft={<Password fill="currentColor" />}
                  onChange={(e) =>
                    setLoginCreds({...loginCreds, password: e.target.value})
                  }
                />
                <Row justify="space-between">
                  <Checkbox>
                    <Text size={14}>Remember me</Text>
                  </Checkbox>
                  <Text size={14}>Forgot password?</Text>
                  {/* //TODO add password reset */}
                </Row>
                <div className="flex justify-center mt-2">
                  <Button auto onPress={handleLoginClick}>
                    Log in
                  </Button>
                </div>
              </div>
            </Collapse>
            <Collapse title="Google" subtitle="Disabled option">
              <div className="flex justify-center">
                <Button
                  css={{bg: 'white', color: 'red'}}
                  type="button"
                  onClick={handleLoginWithGoogle}
                >
                  Sign Up with Google
                </Button>
              </div>
            </Collapse>
            <Collapse title="Facebook" subtitle="Disabled option">
              <div className="flex justify-center">
                <Button css={{bg: 'blue'}} onClick={handleLoginWithFacebook}>
                  Sign in with Facebook{' '}
                </Button>
              </div>
            </Collapse>
          </Collapse.Group>
        </Modal.Body>
      </Modal>

      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={signUpModalVisible}
        onClose={closeSignUpModal}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Sign Up, Join{' '}
            <Text b size={18}>
              Abroad in Montpellier
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className="p-2 pb-0">
            <Input
              css={{padding: '0.5rem'}}
              clearable
              bordered
              fullWidth
              type="email"
              color="primary"
              size="lg"
              placeholder="Email"
              initialValue={signUpCreds.email}
              onChange={(e) =>
                setSignUpCreds({...signUpCreds, email: e.target.value})
              }
              contentLeft={<Mail fill="currentColor" />}
            />
            <Input
              css={{padding: '0.5rem'}}
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              type="password"
              placeholder="Password"
              contentLeft={<Password fill="currentColor" />}
              onChange={(e) =>
                setSignUpCreds({...signUpCreds, password: e.target.value})
              }
            />
            <div className="flex justify-center">
              <form method="post" onSubmit={handleSignUpWithEmailPassword}>
                {/* <Button auto flat color="error" onPress={closeSignUpModal}>
                    Close
                  </Button> */}
                <Button auto type="submit">
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
          <Modal.Footer></Modal.Footer>

          {/* <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row> */}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MyNavbar
