import React from 'react';
import Row from './components/Row';
import Table from './components/Table';
import TableHeader from './components/TableHeader';
import employeesJson from './employees.json';
import TableBody from './components/TableBody';
import TableRow from './components/TableRow';
import FilterDropDown from './components/FilterDropDown';
import SortDropDown from './components/SortDropDown';

class App extends React.Component {

  state = {
    employees: employeesJson,
    depFilter: "None",
    sortSalary: "None"
  }

  changeDepartmentFilter = (e) => {
    this.setState({ employees: employeesJson, depFilter: e.target.value }, () => {
      if (this.state.depFilter === "None") {
        return;
      }
      const employees = this.state.employees.filter(employee => employee.department === this.state.depFilter);

      this.setState({ employees: employees });
    });
  }

  changeSort = (e) => {

    this.setState({ employees: employeesJson, sortSalary: e.target.value }, () => {
      console.log(this.state)

      if (this.state.sortSalary === "Ascending") {
        const employees = this.state.employees.sort(function (a, b) {
          return a.salary - b.salary;
        });
        this.setState({ employees: employees });
      }
      else if (this.state.sortSalary === "Descending") {
        const employees = this.state.employees.sort(function (a, b) {
          return b.salary - a.salary;
        });
        this.setState({ employees: employees });
      }
    });
  }


  render() {
    return (
      <div className="container">
        <Row format="justify-content-center mt-2">
          <h2>Employee List</h2>
        </Row>
        <Row format="justify-content-center mt-2">
          <FilterDropDown
            changeDepartmentFilter={this.changeDepartmentFilter}
          />
          <SortDropDown
            changeSort={this.changeSort} />
        </Row>
        <Table>
          <TableHeader />
          <TableBody>
            {this.state.employees.map(employee => (
              <TableRow
                id={employee.id}
                key={employee.id}
                name={employee.name}
                department={employee.department}
                role={employee.role}
                salary={employee.salary}
                onChange={this.changeDepartmentFilter}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

}

export default App;
