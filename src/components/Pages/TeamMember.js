import React, { Component } from 'react'
import TeamMemberItem from './TeamMemberItem'

export default class TeamMember extends Component {
    
    constructor(){
        super()

        this.state = {members : [
            {name : "Kay Garland" , position : "Lead Designer" , image : "assets/img/team/1.jpg"},
            {name : "Larry Parker" , position : "Lead Marketer" , image : "assets/img/team/2.jpg"},
            {name : "Diana Petersen" , position : "Lead Developer" , image : "assets/img/team/3.jpg"}
        ]}
    }


    render() {
        return (
            <div>
                <section class="page-section bg-light" id="team">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div class="row">
                            {this.state.members.map((member) => {
                                return <TeamMemberItem name = {member.name} position = {member.position} image ={member.image} />
                            })}
                        </div>
                        <div class="row">
                            <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}