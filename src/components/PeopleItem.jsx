import React from 'react';

function PeopleItem (props){
    const {nume, prenume, meserie, salariu, data_angajarii } = props;
    return (
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
            <p className="mb-1 text-center">Nume: {nume}</p>
            <p>Prenume: {prenume}</p>
            <p>Meserie: {meserie}</p>
            <p>Salariu: {salariu}</p>
            <p>Data angajării: {data_angajarii}</p>
        </div>  
      );
}

export default PeopleItem;