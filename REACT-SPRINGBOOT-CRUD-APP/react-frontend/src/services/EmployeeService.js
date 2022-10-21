import axios from 'axios';

const EMPLOYEE_API_BASR_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASR_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASR_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASR_URL + '/' + employeeId);
    }

}



export default new EmployeeService()