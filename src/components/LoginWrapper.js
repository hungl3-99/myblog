
import React ,{Component} from 'react'

export default class AdminWrapper extends Component {
    render(){
        return (
        <div id = "login-page">
            {this.props.children}
        </div>
        )
    }
}