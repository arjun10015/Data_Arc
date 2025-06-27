import React,{Component} from "react";
import userprofile from './usericon.png';
import Teamcard from "./teamcard.js";
import './Task2.css'

class Task2 extends Component{
     constructor(props){
        super(props)

        this.state = {
        teamMembers:[
        {
            tname:'Arjun R',
            teamid:'DARC123',
            teamrole:'frontend developer'
        },
        {
            tname:'Kirubaharan S K',
            teamid:'DARC125',
            teamrole:'frontend developer'
        },
        {
            tname:'Preeti S',
            teamid:'DARC129',
            teamrole:'frontend developer'
        },
        {
            tname:'Surya D',
            teamid:'DARC135',
            teamrole:'frontend developer'
        }
    ]}
}
    render(){
        const { teamMembers } = this.state
        return(
        <div className="card-container">
        {teamMembers.map((member, index) => (
          <Teamcard
            key={index}
            profile={userprofile}
            tname={member.tname}
            tid={member.teamid}
            trole={member.teamrole}
            />
        ))}
        </div>
        );
    }
}
export  default Task2;