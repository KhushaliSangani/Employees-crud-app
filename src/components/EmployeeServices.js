import axios from 'axios';

const EMPLOYEE_API_BASE_URL ='https://dummyjson.com/users';
const options = {
    headers: { 
        'Content-Type': 'application/json',
    }
};
class EmployeeServices {
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL + '/add',employee,options);
    }
    updateEmployee(employee,id){
        return axios.put(EMPLOYEE_API_BASE_URL + `/${id}`,employee,options)
    }
    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL + `/${id}`)
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + `/${id}`) 
    }

}

export default new EmployeeServices();