/** @format */

//---------------UI--------------//
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Collapse,
} from '@nextui-org/react'
//-------------------------------//

//---------------Firebase--------------//

import {auth} from '../App'
import {
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth'

const actionCodeSettings = {
  url: 'https://fire-test-3c6f5.web.app/', //TODO un lien du genre erasmusMTP.com/connexion
  // url: window.location.href,
  handleCodeInApp: true,
  dynamicLinkDomain: 'https://fire-test-3c6f5.web.app/',
  //TODO add personnalized email
}

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()
//---------------------------------------//

//-------------------------------//

function LoginModal(props) {
  const visible = props.visible.loginModalVisible
  const {setLoginModalVisible} = props.visible

  const handleEmailPasswordLogin = (e) => {
    e.preventDefault()
    console.log('submitted')
    const formData = new FormData(e.target)
    const formJson = Object.fromEntries(formData.entries())
    const email = formJson.email
    const password = formJson.password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('signed in user : ', user)
        closeHandler()
      })
      .catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
      })

    //TODO : If user's email is google or facebook, use them instead
  }

  const handleLoginWithGoogle = (e) => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        console.log('google sign in success')
      })
      .catch(() => {
        console.log('sign in with google error')
        //TODO : navigate to login error
        //TODO : OR : show an error modal in homePage
      })
    closeHandler()
  }

  function handleLoginWithFacebook() {
    signInWithPopup(auth, facebookProvider)
      .then(() => {
        console.log('facebook sign in success')
      })
      .catch((error) => {
        console.log('sign in with facebook error')
        console.log(error.message)
        console.log(FacebookAuthProvider.credentialFromError(error))
      })
    closeHandler()
  }

  const closeHandler = () => {
    setLoginModalVisible(false)
  }

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <p className="text-3xl font-semibold">
            Log In <br />
            <p className="text-lg mt-1">
              Access your profile, check and join events
            </p>
          </p>
        </Modal.Header>
        <Modal.Body>
          <Collapse.Group divider={false} bordered>
            <Collapse title="Email and Password">
              <form method="post" onSubmit={handleEmailPasswordLogin}>
                <div className="mt-3 p-0">
                  <Input
                    name="email"
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Email"
                    type="email"
                    css={{
                      padding: '0.3rem',
                      paddingTop: '0.5rem',
                      paddingBottom: '0.5rem',
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                    aria-label="string"
                  />
                  <Input
                    name="password"
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Password"
                    type="password"
                    css={{
                      padding: '0.3rem',
                      paddingTop: '0.5rem',
                      paddingBottom: '0.5rem',
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                    aria-label="string"
                  />
                  <Row
                    justify="space-between"
                    css={{
                      paddingTop: '0.5rem',
                      paddingLeft: '0.5rem',
                      paddingRight: '0.5rem',
                    }}
                  >
                    <Checkbox>
                      <Text size={14}>Remember me</Text>
                    </Checkbox>
                    <Text size={14}>Forgot password?</Text>
                  </Row>
                </div>
                <div className="flex flex-col mt-3 align-items-center">
                  <Button
                    aria-label="string"
                    onPress={closeHandler}
                    type="submit"
                    css={{width: 'fit-content', margin: '0.3rem'}}
                  >
                    Log in
                  </Button>
                </div>
              </form>
            </Collapse>
            <Collapse title="Log in with Google">
              <div className="flex justify-center">
                <Button
                  css={{
                    bg: 'white',
                    color: 'red',
                    margin: 0,
                  }}
                  onClick={handleLoginWithGoogle}
                >
                  Use your Google account
                </Button>
              </div>
            </Collapse>
            <Collapse disabled title="Log in with Facebook">
              <div className="flex justify-center">
                <Button
                  css={{
                    bg: 'blue',
                    color: 'white',
                  }}
                >
                  Use your Facebook account
                </Button>
              </div>
            </Collapse>
          </Collapse.Group>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  )
}

export default LoginModal
