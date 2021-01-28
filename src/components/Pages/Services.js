import React, { Component } from 'react'
import SingleService from './SingleService'

export default class Services extends Component {
    constructor(props){
        super(props)
        this.state ={services : [
            {title : 'E-Commerce' , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' , icon  : 'fa-shopping-cart'},
            {title : 'Responsive Design' , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' , icon  : 'fa-laptop'},
            {title : 'Web Security' , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' , icon  : 'fa-lock'}
    ]}
    }
    render() {
        return (
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row text-center">
                        {this.state.services.map((service , index) => {
                            return <SingleService title={service.title} description={service.description} icon={service.icon}/>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}