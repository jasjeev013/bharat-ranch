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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAoeNy208a3GpQdrQ6C_S0bhgQ90sCRu2Hgw&s"
              
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
              src="https://www.schoolofguitar.ie/wp-content/uploads/2013/05/200x100.gif"
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
              src="https://www.schoolofguitar.ie/wp-content/uploads/2013/05/200x100.gif"
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