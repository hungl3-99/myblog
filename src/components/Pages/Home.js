import React, { Component } from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import About from './About'
import Client from './Client'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Services from './Services'
import TeamMember from './TeamMember'

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
                <Portfolio />
                <About />
                <TeamMember/>
                <Client />
                <Contact />
                <Footer />
            </div>
        )
    }
}