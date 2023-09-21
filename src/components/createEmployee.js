import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeServices from "./EmployeeServices";

const CreateEmployee = (props) => {
  
  const { id } = useParams();
  const [userId, setUserId] = useState(id);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email,setEmail] = useState('');

  const navigate = useNavigate();  
  useEffect(() => {
    if(userId==='_add'){
      return
    }else{
      EmployeeServices.getEmployeeById(userId)
      .then(res=>{
        let data = res.data;
         setFirstName(data.firstName);
         setLastName(data.lastName);
         setEmail(data.email);
      })
    }
  },[]);
  const saveOrUpdateEmployee =(e)=>{
    e.preventDefault();
    let employee ={
        firstName:firstName,
        lastName:lastName,
        email:email,
    }
    if(userId ==='_add'){
        EmployeeServices.createEmployee(employee)
        .then((res)=>{
            // console.log(res.data);
            navigate('/');
        })
        // axios.post('https://dummyjson.com/users/add',employee)
        // .then((res)=>{
        //   console.log(res.data);
        //   
        // })
      }else{
        EmployeeServices.updateEmployee(employee,userId)
        .then((res)=>{
          console.log(res.data);
          navigate('/');
        })
      }
  }
  const cancel =()=>{
    navigate('/')
  }
  const getTitle = () => {
    if (userId === "_add") {
      return <h3 className="text-center">Add Employee</h3>;
    } else {
      return <h3 className="text-center">Update Employee</h3>;
    }
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name: </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    onChange={(e)=>setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name: </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    onChange={(e)=>setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
                <div className="form-group">
                  <label>Email Id: </label>
                  <input
                    type="email"
                    placeholder="Email Id"
                    className="form-control"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>
                <button className="btn btn-danger" onClick={cancel}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
