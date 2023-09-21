import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeServices from "./EmployeeServices";

const ViewEmployee = () => {
  const { id } = useParams();
  const [userId, setUserId] = useState(id);
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    EmployeeServices.getEmployeeById(userId).then((res) => {
      console.log(res.data);  
      setEmployee(res.data);
    });
  }, []);

  return (
    <div>
      <br></br>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center"> View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label> Employee First Name: </label>
            <div> {employee.firstName}</div>
          </div>
          <div className="row">
            <label> Employee Last Name: </label>
            <div> {employee.lastName}</div>
          </div>
          <div className="row">
            <label> Employee Email ID: </label>
            <div> {employee.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
