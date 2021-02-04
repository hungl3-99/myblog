
import React ,{Component} from 'react'
import AppBar from "@material-ui/core/AppBar"
import  Toolbar  from '@material-ui/core/Toolbar'
export default class AdminWrapper extends Component {
    render(){
        return (
        <div id = "admin-page">         
            {this.props.children}
        </div>
        )
    }
}