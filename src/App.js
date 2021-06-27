import React, {Component, Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import User from './components/users/User';
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/pages/About';

class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false
  }

  async componentDidMount() {  
    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);

    this.setState({users: res.data, loading: false});
  }

  searchUser = async (text) => {
    console.log(text);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);

    this.setState({users: res.data.items, loading: false});
  }

  getUser = async (username) => {
    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);

    this.setState({user: res.data, loading: false});
  }

  clearUsers = () => {
    this.setState({users: []})
  }

  render() {    

    return (
      <Router>
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github"/>          
        <div className="container">
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search searchUser={this.searchUser} clearUsers={this.clearUsers} showClear={
                  this.state.users.length > 0 ? true : false
                }/>
                <Users loading={this.state.loading} users={this.state.users}/>
              </Fragment>)} />  
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => {
                return <User {...props} getUser={this.getUser} user={this.state.user} loading={this.state.loading} />
              }} />
          </Switch>          
        </div>        
      </div>
      </Router>
    );
  }  
}

export default App;
