/** @format */

import {Image} from '@nextui-org/react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const images = ['./img1.jpg', './img2.jpg', './img3.jpg']

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          width="100%"
          height="85vh"
          src="img1.jpg"
          alt="First slide"
          objectFit="cover"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          width="100%"
          height="85vh"
          src="img2.jpg"
          alt="Third slide"
          objectFit="cover"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          width="100%"
          height="85vh"
          src="img3.jpg"
          alt="Third slide"
          objectFit="cover"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel
