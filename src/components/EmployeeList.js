import React, { Component } from "react";
import { Link, redirect } from "react-router-dom";
import EmployeeServices from "./EmployeeServices";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    EmployeeServices.getEmployees().then((res) => {
      this.setState({
        employees: res.data.users,
      });

    });
  }
 deleteEmployee=(id,event)=>{
    event.preventDefault();
    console.log(id);
    EmployeeServices.deleteEmployee(id).then(res=>{
      console.log(res.data);
      this.setState({
        employees:this.state.employees.filter(employee=>employee.id!==id)
      })
    })
  }
  render() {
    return (
      <>
        <h2 className="text-center">Employee List</h2>
        <div className="row">
          <Link to="add-employee/_add" className="btn btn-primary">
            Add Employee
          </Link>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => {
                return (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <Link to ={`add-employee/${employee.id}`}><button className="btn btn-info">Update</button></Link>
                    <button className="btn btn-danger" onClick={(e)=>this.deleteEmployee(employee.id,e)}>Delete</button>
                    <Link to ={`view-employee/${employee.id}`}><button className="btn btn-info">View</button></Link>              
                  </td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default EmployeeList;
