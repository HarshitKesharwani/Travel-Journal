import React from "react";
export default function Journey(props)
{
    return(
        
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-3"><img  className="img-fluid"src={props.img}/></div>
        
        
            <div className="col-12 col-sm-7">
            <img className="loc" src="./img/loc.png"/>
            <h5 className="city">{props.city}</h5>
            <h3 className="name">{props.name}</h3>
            <p className="para">{props.about}</p>
        </div>
         </div>
         </div>
         
    
    
    )
}