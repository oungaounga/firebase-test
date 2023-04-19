/** @format */

import {Spacer, Button} from '@nextui-org/react'
import {auth} from '../../App'
import {sendEmailVerification} from 'firebase/auth'

const actionCodeSettings = {
  url: window.location.href,
  handleCodeInApp: true,
  // dynamicLinkDomain: 'https://fire-test-3c6f5.firebaseapp.com/',
}

function handleSenEmailVerification(e) {
  if (auth.currentUser) {
    console.log('connected, see current User Object and sendEmailVerification')
    // sendEmailVerification(auth.currentUser).then(() => {
    //   console.log('sent')
    // })

    sendEmailVerification('omarwayen5@gmail.com')

    //this works, all i need to do is to redirect the user to relogin directly

    console.log(auth.currentUser.emailVerified)
  } else {
    console.log('non connected')
  }
}

//to sign Up, need to verify immediatly, so, sign up is going to be
// User provides Email,

function ProfilePage(props) {
  //TODO user Icon
  return (
    <div className="h-screen">
      <Spacer y={2} />
      <h1>User Profile Page</h1>
      <h2>User Data or Tableau de Bord over here</h2>
      <Button type="button" onClick={handleSenEmailVerification}>
        Verify your account{' '}
      </Button>
    </div>
  )
}

export default ProfilePage
