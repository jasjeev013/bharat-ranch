import React, { useEffect, useState } from 'react'
import {  useRecoilValueLoadable } from 'recoil';
import { fetchAllEquipments } from '../state/selectors/selectors';
import LendItem from './LendItem';


const Lending = () => {
  

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

  



  

  return (
    <div className="container mt-5 addMargin" >
      <div className="row" style={{
        marginBottom: '90px'
      }}>
        {equipments.map((equipment, index) => (
          <LendItem equipment={equipment} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Lending
