import React, { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { fetchAllEquipments } from '../state/selectors/selectors';
import axios from 'axios';
import { isLoggedIn, userDetails } from '../state/atoms/atoms';

const Lending = () => {
  const isLoggedin = useRecoilValue(isLoggedIn);
  const userDet = useRecoilValue(userDetails);

  const [equipments, setEquipments] = useState([]);
  const equipmentsLoadable = useRecoilValueLoadable(fetchAllEquipments);


  useEffect(() => {
    if (equipmentsLoadable.state === 'hasValue') {

      setEquipments(equipmentsLoadable.contents);
    }

  }, [equipmentsLoadable, setEquipments]);

  if (equipmentsLoadable.state === 'loading') {
    return <div>Loading...</div>;
  }

  if (equipmentsLoadable.state === 'hasError') {
    return <div>Error loading categories.</div>;
  }



  const lendItem = async (equipment_id,time_period,qty) => {
    console.log({equipment_id,time_period,qty})
    const response = await axios.post('http://localhost:5000/borrow-requests/add',{equipment_id,time_period,qty},{
      withCredentials: true // This is important to handle cookies
    });
    if(response.data.result){
      console.log(response.data.message);

    }
  }

  return (
    <div className="container mt-5 addMargin" >
      <div className="row" style={{
        marginBottom: '90px'
      }}>
        {equipments.map((equipment, index) => (
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
                  <p className="card-text">Qty: {equipment.qty} </p>
                </div>
                <p style={{
                  fontSize: '14px',
                }}>{equipment.description}</p>
                <br />
                <br />
                <div className="d-flex justify-content-end">

                  {isLoggedin && userDet.role==='farmer' && userDet.email!==equipment.user_email &&   <button onClick={() => lendItem(equipment._id,12,1)} className="btn btn-primary ">
                    Lend Item
                  </button>}
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
