import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component{
  state = {
    users: [],
    loading: false
  }
  // componentDidMount() {
  //   axios.get("https://api.github.com/users")
  //   .then(res => {
  //     console.log(res.data);
  //   })
  // }
  async componentDidMount() {
    this.setState({loading: true});   //cant just do this.state.loading = true
    const res = await axios.get("https://api.github.com/users")
    this.setState({users: res.data, loading: false})
    console.log(res.data)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
        
      </div>
    );
  }
}

export default App;


