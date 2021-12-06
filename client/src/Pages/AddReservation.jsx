import React, {useState} from "react"
import Form from "../utils/form";



function AddReservation (props) {
   const [formstate, setState] = useState({
       firstname : "",
       lastname : "",
       email : "",
       guest : "",
       date : "",
       time: "",
       color: "",

   })
const {postReservation, errors, successmsg} = props;
   
    return(
        <div className="reservation">
        <div >
            <h1 style={{textAlign:"center", color:"white", paddingTop:"2em"}}>Resevation form </h1>
            <hr/>
            {successmsg ? <h4 className="success">{successmsg}</h4>:<h4 className="error">{errors}</h4> }
            <Form state={formstate} handleSubmit={postReservation} />
        </div>
        </div>
    )
}

export default AddReservation;