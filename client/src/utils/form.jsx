import React from "react";
import "./form.css"

function Form (props) {
return(
    <div className="centered">
        <div className="form">
            <form onSubmit={props.handleSubmit}> 
                <div className="name">        
                    <div>
                        <label htmlFor = "firstname">Firstname:</label>
                        <input type="text" value={props.state.firstname} name="firstname" onChange ={props.handleChange} placeholder="firstname"/>
                    </div>
                    <div>
                        <label htmlFor = "lastname">Lastname:</label>
                        <input type="text" value={props.state.lastname} name="lastname" onChange ={props.handleChange} placeholder="lastname"/>
                    </div>
                </div>
               <div style ={{display:"grid", marginTop:"10px"}}>
                    <div style={{marginBottom:"20px"}}>
                        <label htmlFor = "email">Email: </label>
                        <input style = {{width:"20em"}} type="text" value={props.state.email} name="email" onChange ={props.handleChange} placeholder="xxx@gmail.com"/>
                    </div>
                
                    <div style={{marginBottom:"20px"}}>
                        <label htmlFor = "phone">Phone Number: </label>
                        <input type="tel" value={props.state.phone} name="phone" onChange ={props.handleChange} placeholder=""/>
                    </div>
                    <div style={{marginBottom:"20px"}}>
                        <label htmlFor = "guest">No of Guest: </label>
                        <input  type="text" value={props.state.guest} name="guest" onChange ={props.handleChange} placeholder=""/>
                    </div>
                </div>
                <div className = "schedule">
                    <div>
                        <label htmlFor = "date">Reservation Date</label>
                        <input type="Date" value={props.state.date} name="date" onChange ={props.handleChange} placeholder=""/>
                    
                    </div>
                    <div>
                        <label htmlFor = "time">Time</label>
                        <input type="text" value={props.state.time} name="time" onChange ={props.handleChange} placeholder=""/>
                        
                    </div>        
                </div>
                
                <div style={{marginTop:"10px", marginBottom:"3em"}}>
                    <h4 style={{marginBottom:"10px"}}>Select the color of your table:</h4>
                    <select value={props.state.colour} name="colour" onChange={props.handleChange}>
                        <option>--choose a colour--</option>
                        <option style={{color:'blue'}} value="blue">Blue</option>
                        <option style={{color:'yellow', backgroundColor:'gray'}} value="yellow">Yellow</option>
                        <option style={{color:'green'}} value="green">Green</option>
                        <option style={{color:'purple'}} value="purple">Purple</option>
                        <option style={{color:'red'}} value="red">Red</option> 
                    </select>
                </div>
              <button type="submit" style={{backgroundColor:"blue", color:"white", marginLeft:"10em", marginBottom: "3em", padding:"10px"}}>Submit</button>
            </form>
        </div>
    </div>

)
}


export default Form;