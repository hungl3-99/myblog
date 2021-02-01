import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

class DashBoard extends Component {
    render(){
        return (
            <h1>You are Looged in with token : {this.props.auth.token}</h1>
        )
    }
}

const mapStateToProps = state => {
    return {
      auth : state.auth
    }
  }
  
  const mapDispatchToProps = dispatch => {
    
  }

  export default connect(mapStateToProps , mapDispatchToProps)(withRouter(DashBoard))
