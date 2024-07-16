import React from 'react'

const Lending = () => {
  const categories = [
    { id: 1, name: 'Tomatoes', image: 'https://via.placeholder.com/300', qty: '44', Price: 108, description: 'Hello this is a test card. working on the lending item' },
    { id: 2, name: 'Apples', image: 'https://via.placeholder.com/300', qty: '44', Price: 59, description: 'Hello this is a test card. working on the lending item' },
    { id: 3, name: 'Bottle Gourd', image: 'https://via.placeholder.com/300', qty: '44', Price: 23, description: 'Hello this is a test card. working on the lending item' },
    { id: 4, name: 'Beetroot', image: 'https://via.placeholder.com/300', qty: '44', Price: 78, description: 'Hello this is a test card. working on the lending item' },
    { id: 5, name: 'Broccoli', image: 'https://via.placeholder.com/300', qty: '44', Price: 12, description: 'Hello this is a test card. working on the lending item' },
    { id: 6, name: 'Cabbage', image: 'https://via.placeholder.com/300', qty: '44', Price: 8, description: 'Hello this is a test card. working on the lending item' },
    { id: 7, name: 'Wheat', image: 'https://via.placeholder.com/300', qty: '44', Price: 78, description: 'Hello this is a test card. working on the lending item' },
    { id: 8, name: 'Maize', image: 'https://via.placeholder.com/300', qty: '44', Price: 48, description: 'Hello this is a test card. working on the lending item' },
    { id: 9, name: 'Rice', image: 'https://via.placeholder.com/300', qty: '44', Price: 48, description: 'Hello this is a test card. working on the lending item' },
    { id: 10, name: 'Oats', image: 'https://via.placeholder.com/300', qty: '44', Price: 48, description: 'Hello this is a test card. working on the lending item' },
    { id: 11, name: 'Barley', image: 'https://via.placeholder.com/300', qty: '44', Price: 48, description: 'Hello this is a test card. working on the lending item' },
  ];

  return (
    <div className="container mt-5 addMargin" >
      <div className="row" style={{
        marginBottom: '90px'
      }}>
        {categories.map(category => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={category.id}>
            <div className="card  h-100 ">
              <img
                src={category.image}
                className="card-img-top"
                alt={category.name}
                style={{ height: '200px', objectFit: 'cover', padding: '0.2rem', borderRadius: '' }}
              />
              <div className="card-body">
                <div className='d-flex justify-content-between'>

                  <h5 className="card-title">{category.name}</h5>
                  <p className="card-text">Price: {category.Price} </p>
                  <p className="card-text">Qty: {category.qty} </p>
                </div>
                <p style={{
                  fontSize: '14px',
                }}>{category.description}</p>
                <br />
                <br />
                <div className="d-flex justify-content-end">

                  <a href="/" className="btn btn-primary ">
                    More Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lending
