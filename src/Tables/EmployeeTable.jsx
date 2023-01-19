import { useEffect, useState } from 'react';
import jsonData from '../Data';
function EmployeeTable() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const employees = jsonData.map(team => team.employees).reduce((a, b) => a.concat(b));
    setEmployees(employees)
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Employee</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;