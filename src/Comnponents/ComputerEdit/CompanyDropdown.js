import React from 'react';

const CompanyDropdown = (props) => {


    return (

        <div className="form-group col-md-8">
        <label>Customer:</label>
        <select className="form-control" value={props.CustomerName} onChange={props.handleChangeCustomer} id="Customer">
              {props.CompanyList.map(Company => {
                 return <option key={Company._id} iddd={Company._id} value={Company.company_name}>{Company.company_name}</option>   
              })}
        </select>
    </div>
        

    )
}

export default CompanyDropdown;