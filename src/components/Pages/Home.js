import React, { Component } from 'react'
import Header from '../Common/Header'
import Services from './Services'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header 
                    title = "Welcome To Our Studio!"
                    subtitle = "Nice To Meet You"
                    buttonText = "Tell Me More"
                    link = "/service"
                    showButton ={true}
                />

                <Services />
            </div>
        )
    }
}