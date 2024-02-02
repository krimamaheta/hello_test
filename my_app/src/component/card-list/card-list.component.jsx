import { computeHeadingLevel } from "@testing-library/react";
import { Component } from "react";
import './card-list.style.css'

class CardList extends Component{
   render(){
   // console.log(this.props);
   //console.log(this.props.monsters);
    const {monsters}=this.props;

    return (
        <div className="card-list">
        {monsters.map(mon=>(
//const {name,id,email}=mon{return()}
            
                <div className="card-container" key={mon.id}>
                <img
                alt={`mon ${mon.name}`}
                src={`https://robohash.org/${mon.id}?set=set2&size120*120`} />
                <h2>{mon.name}</h2>
                <p>{mon.email}</p>
            </div>
        
            
            
    
        ))}
        </div>
    )
   }
}
export default CardList;