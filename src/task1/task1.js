import React,{Component} from "react";
import mypic from "./mypic.jpg";

class Task1 extends Component{
    render(){
        return(
        <div className="container">
        <h1>Hello Data Arc !!</h1>
        <div className='profile-container'>
        <img src={mypic} className="mypic" alt='profile pic' />
        <div className="profile-role">
            <h2>Arjun R</h2>
            <h3>Full Stack Developer</h3>
        </div>
            
        </div>
            <h3 className="para-heading">About me !</h3>
            <p>
            Passionate about continuous learning and professional growth, with a commitment tostaying 
            current with emerging technology trends. Dedicated to enhancing skills and driv-ing innovation
            to deliver impactful, forward-thinking solutions.
            Master Full-Stack Development: Build seamless, impactful applications.
            Craft MeaningfulExperiences: Design technology that solves problems and tells stories. 
            Stay Ahead ofTrends: Continuously learn and innovate with emerging technologies. 
            Drive Innovation:Collaborate on projects that make a real-world impact.
            </p>
        </div>
        );
    }
}
export default Task1;