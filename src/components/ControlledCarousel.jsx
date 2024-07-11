import Carousel from 'react-bootstrap/Carousel';
import farmer1 from '../images/farmer1.jpg'
import farmer2 from '../images/farmer2.avif'
import farmer3 from '../images/farmer3.jpg'
function ControlledCarousel() {
  return (


    // data-bs-theme="dark" in <Carousel >
    <div className="container my-4">

      
        <Carousel  style={{
          height:'400px',
          width:'800px',
        }} className='mx-5'  >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={farmer1}
              height={400}
              width={800}
              
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={farmer2}
              height={400}
              width={800}
              alt="Second slide"
            />
            {/* <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={farmer3}
              height={400}
              width={800}
              alt="Third slide"
            />
            {/* <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
    </div>


  );
}

export default ControlledCarousel;