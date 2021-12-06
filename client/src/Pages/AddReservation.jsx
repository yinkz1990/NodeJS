import React, {useState} from "react"
import Form from "../utils/form";



function AddReservation (props) {
   const [formstate, setState] = useState({
       firstname : "",
       lastname : "",
       email : "",
       guest : "",
       phone : "",
       date : "",
       time: "",
       color: "",

   })

   function handleChange (e) {
    const {name, type, value} = e.target;
    setState({
        [name]: value
    })
      
   }
const {postReservation, errors, successmsg} = props;
   
    return(
        <div className="reservation">
        <div >
            <h1 style={{textAlign:"center", color:"white", paddingTop:"2em"}}>Resevation form </h1>
            <hr/>
            {successmsg ? <h4 className="success">{successmsg}</h4>:<h4 className="error">{errors}</h4> }
            <Form state={formstate} handleSubmit={postReservation} handleChange ={handleChange} />
        </div>
        </div>
    )
}

export default AddReservation;