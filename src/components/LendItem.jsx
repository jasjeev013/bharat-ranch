import axios from 'axios';
import {  Form } from 'react-bootstrap';
import React, {  useState } from 'react'
import { useRecoilValue } from 'recoil';
import { isLoggedIn, userDetails } from '../state/atoms/atoms';


const LendItem = ({equipment,index}) => {
    const isLoggedin = useRecoilValue(isLoggedIn);
  const userDet = useRecoilValue(userDetails);

    const [quantity,setQuantity] = useState(1);

    const changeInput = (e) => {
        if(e.target.value>0 && e.target.value<=equipment.qty)
        setQuantity(e.target.value);
      }

      const lendItem = async (equipment_id, time_period) => {
        console.log({ equipment_id, time_period,quantity})
        const response = await axios.post('http://localhost:5000/borrow-requests/add', { equipment_id, time_period, qty:quantity }, {
          withCredentials: true // This is important to handle cookies
        });
        if (response.data.result) {
          console.log(response.data.message);
    
        }
      }

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            {console.log(equipment)}
            <div className="card  h-100 ">
              <img
                src={equipment.image}
                className="card-img-top"
                alt={equipment.name}
                style={{ height: '200px', objectFit: 'cover', padding: '0.2rem', borderRadius: '' }}
              />
              <div className="card-body">
                <div className='d-flex justify-content-between'>

                  <h5 className="card-title">{equipment.name}</h5>
                  <p className="card-text">Price: {equipment.Price} </p>
                  <p className="card-text">Total Quantity: {equipment.qty} </p>
                </div>
                <p style={{
                  fontSize: '14px',
                }}>{equipment.description}</p>
                <br />
                <br />
                <div className="d-flex justify-content-end">
                <div className='d-flex justify-content-center'>
                  {isLoggedin && userDet.role === 'farmer' && userDet.email !== equipment.user_email && <button style={{
                    height: '70%',
                  }} onClick={() => lendItem(equipment._id, 12, 1)} className="btn btn-primary my-2">
                    
                    Lend Item
                  </button>}
                  {isLoggedin && userDet.role === 'farmer' && userDet.email !== equipment.user_email && <Form.Control
                      type="number"
                      name='min_qty'
                      style={{
                        width: '50%',
                        height: '50%',
                        borderRadius: '10px',
                        border: '1px solid black'
                      }}
                      className='mx-2 my-3'
                      value={quantity}
                      onChange={(e) => changeInput(e)}     
                      required
                    />}
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default LendItem
