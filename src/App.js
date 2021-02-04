import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/Pages/About';
import { connect } from 'react-redux';
import LoginForm from './components/Pages/Login';
import DashBoard from './components/Pages/DashBoard'
import { Component } from 'react';
import AdminWrapper from './components/AdminWrapper';
import LoginWrapper from './components/LoginWrapper'
import Users from './components/Pages/Admin/Users'
import Post from './components/Pages/Admin/Post'
class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/admin'  exact render={props => (<div>{this.props.auth.token ? <AdminWrapper><DashBoard ></DashBoard></AdminWrapper>: <LoginWrapper><LoginForm /></LoginWrapper>}</div>)}/>
        <Route path='/about' exact component={About} />
        <Route path='/login' component={this.props.auth.token ? DashBoard : LoginForm} />
        <Route path='/admin/users' exact render ={props => (<AdminWrapper><DashBoard ><Users /></DashBoard></AdminWrapper>)} />
        <Route path='/admin/post' exact render ={props => (<AdminWrapper><DashBoard ><Post /></DashBoard></AdminWrapper>)} />
      </Router>
    );
  }

}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
