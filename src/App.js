import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/createEmployee';
import ViewEmployee from './components/ViewEmployee';
// import UpdateEmployee from './components/updateEmployee';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <Routes>
            <Route path="/" element={<EmployeeList/>}/>
            <Route path="/add-employee/" element={<CreateEmployee/>}/>
            <Route path="/add-employee/:id" element={<CreateEmployee/>}/>
            <Route path="/view-employee/:id" element={<ViewEmployee/>}/>

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
