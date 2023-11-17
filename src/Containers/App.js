import React from "react";
import './App.css';
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      searchField: ""
    };
  }

  onSearchChange = (event)=>{
    this.setState({searchField:event.target.value});
  }

  componentDidMount(){
    fetch("https://reqres.in/api/users")
        .then((resp)=>resp.json())
        .then(users=>{
            this.setState({employees: users.data});
        })
  }

  render() {
    const { employees, searchField } = this.state;

    const filteredEmployees = employees.filter((employee)=>{
        return employee.first_name.toLowerCase().includes(searchField.toLowerCase());
    })
    console.log(filteredEmployees);

    return (
        <div className="tc">
            <h1 id="heading">My Employees</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList employees={filteredEmployees} />
        </div>
    );
  }
}

export default App;
