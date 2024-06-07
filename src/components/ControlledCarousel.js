import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  return (


    // data-bs-theme="dark" in <Carousel >
    <div className="container my-4">

      
        <Carousel  style={{
          height:'500px',
          width:'800px'
        }} >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/350x200?text=Card+Image+$%7Bcard%7D"
              
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/350x200?text=Card+Image+$%7Bcard%7D"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/350x200?text=Card+Image+$%7Bcard%7D"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>


  );
}

export default ControlledCarousel;