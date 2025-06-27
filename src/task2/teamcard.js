import React,{Component} from "react";
import './Teamcard.css';

class Teamcard extends Component{
    render(){
        const { profile,tname, tid, trole } = this.props;
        return(
        <div className="teamcard">
            <section className="header"><h3>Data Arc Ltd</h3></section>
            
            <img src={profile} alt='user-profile' className="profile-pic"/><br/>
            <span>Name: {tname} </span><br/>
            <span>Id: {tid}</span><br/>
            <span>Role:{trole} </span><br/>
    
        </div>
        );
    }
}
export  default Teamcard;