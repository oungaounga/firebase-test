/** @format */

//---------------Firebase--------------//

import {
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import {auth} from '../App'
import {
  Modal,
  Collapse,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
} from '@nextui-org/react'

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

function SignUpModal(props) {
  const visible = props.visible.signUpModalVisible
  const {setSignUpModalVisible} = props.visible

  const handleEmailPasswordSignUp = (e) => {
    e.preventDefault()
    console.log('email password sign up process')
    const formData = new FormData(e.target)
    const formJson = Object.fromEntries(formData.entries())
    const email = formJson.email
    const password = formJson.password
    createUserWithEmailAndPassword(auth, email, password)
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
        console.log('sign up problem \n', error.message)
      })
    closeHandler()
    //TODO add caseswhere email verified or not
  }

  const handleSignUpWithGoogle = (e) => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        console.log('google sign up success')
      })
      .catch(() => {
        console.log('sign up with google error')
        //TODO : navigate to login error
        //TODO : OR : show an error modal in homePage
      })
    closeHandler()
  }

  function handleSignUpWithFacebook() {
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
    setSignUpModalVisible(false)
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
            Sign Up <br />
            <p className="text-lg mt-1">Join us in the adventure Abroad !</p>
          </p>
        </Modal.Header>
        <Modal.Body>
          <Collapse.Group divider={false} bordered>
            <Collapse title="Email and Password">
              <form method="post" onSubmit={handleEmailPasswordSignUp}>
                <div className="mt-3 p-0">
                  <Input
                    name="email"
                    aria-label="email"
                    type="email"
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Email"
                    css={{
                      padding: '0.3rem',
                      paddingTop: '0.5rem',
                      paddingBottom: '0.5rem',
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                  />
                  <Input
                    name="password"
                    type="password"
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Password"
                    css={{
                      padding: '0.3rem',
                      paddingTop: '0.5rem',
                      paddingBottom: '0.5rem',
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                    aria-label="password"
                  />
                </div>
                <div className="flex flex-col mt-3 align-items-center">
                  <Button
                    type="submit"
                    css={{width: 'fit-content', margin: '0.3rem'}}
                  >
                    Sign up
                  </Button>
                </div>
              </form>
            </Collapse>
            <Collapse title="Sign up with Google">
              <div className="flex justify-center">
                <Button
                  css={{
                    bg: 'white',
                    color: 'red',
                  }}
                  onPress={handleSignUpWithGoogle}
                >
                  Use your Google account
                </Button>
              </div>
            </Collapse>
            <Collapse disabled title="Sign up with Facebook">
              <div className="flex justify-center">
                <Button
                  css={{
                    bg: 'blue',
                    color: 'white',
                  }}
                  onPress={handleSignUpWithFacebook}
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

export default SignUpModal
