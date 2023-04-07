/** @format */
import {css} from '@nextui-org/react'
import {Navbar, Button, Link, Text} from '@nextui-org/react'
import {media} from '/home/razal/projects/fire-test/src/media.js'

function MyNavbar() {
  const collapseItems = ['Event', 'Products', 'Contact us', 'About']
  const HideIn = 'xsMax' | 'smMax' | 'mdMax' | 'lgMax' | 'xlMax'

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="highlight-rounded">
        <Navbar.Link href="#">Event</Navbar.Link>
        <Navbar.Link href="#">Products</Navbar.Link>
        <Navbar.Link href="#">Contact us</Navbar.Link>
        <Navbar.Link href="#"> About</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
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
  )
}

export default MyNavbar
