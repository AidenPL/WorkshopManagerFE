import React from 'react';

const CompanyDropdown = (props) => {


    return (

        <div>
        <label>Customer:</label>
        <select className="form-control" value={props.CustomerId} onChange={props.handleChangeCustomer} id="Customer">
              {props.CompanyList.map(Company => {
                 return <option key={Company._id} value={Company._id}>{Company.company_name}</option>   
              })}
        </select>
    </div>
        

    )
}

export default CompanyDropdown;