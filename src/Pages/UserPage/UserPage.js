/** @format */
import {Fragment, useState} from 'react'
import {Card, Text, Input, Button} from '@nextui-org/react'

function UserPage(props) {
  //   const [authCreds, setAuthCreds] = useState({email: '', password: ''})
  //   const {auth} = props
  //   const authCreds = auth.authCreds
  //   const setAuthCreds = auth.setAuthCreds
  const {authCreds} = props.auth
  const {setAuthCreds} = props.auth
  function handleClick(e) {
    console.log(
      `email : ${authCreds.email} \npassword : ${authCreds.password} `
    )
  }
  return (
    <>
      <Card variant="bordered" css={{width: 'fit-content'}}>
        <Card.Header>
          <Text h3>Sign-In to participate to events</Text>
        </Card.Header>
        <Card.Body>
          <Input
            type="email"
            placeholder="dupot@hotmail.fr"
            label="Email"
            initialValue={authCreds.email}
            onChange={(e) =>
              setAuthCreds({...authCreds, email: e.target.value})
            }
            bordered
          />
          <Input
            type="password"
            placeholder="********"
            label="Password"
            initialValue={authCreds.password}
            onChange={(e) =>
              setAuthCreds({...authCreds, password: e.target.value})
            }
            bordered
            css={{paddingBottom: '1rem'}}
          />
          <Button
            bordered
            color="gradient"
            type="button"
            size={'lg'}
            onPress={handleClick}
            auto
          >
            Sign In
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default UserPage
