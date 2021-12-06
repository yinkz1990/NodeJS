import{useState, useEffect, useCallback} from "react"
import {abortHttpReservation, postHttpReservation, getHttpReservation, completeHttpReservation, } from "./request";


function useReservation () {
    
    const[reservation, setReservation] = useState([]);
    const[error, setError]= useState();
    const[successmsg, setSuccess] = useState();



    const getReservation = useCallback(async () => {
        const reservation = await getHttpReservation();
        setReservation(reservation.data);
    }, []);

    useEffect(() => {
          getReservation()
        },[getReservation]);
            
    
      
    const postReservation = useCallback(async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const response = await postHttpReservation(data)
        
        const success = response.statusText
    if(success === "Created"){
       getReservation()
       setSuccess("You have successfully submitted!")
    }else{
       setError("There is a missing data in your form")
    }
    },[getReservation])
 
    const abortReservation = useCallback (async (id) => {
        const response = await abortHttpReservation(id);
         
        getReservation();
    
     
    },[getReservation])
    
    const completeReservation = useCallback( async (id) => {
        const response = await completeHttpReservation(id);
   
        getReservation();
        
    }, [getReservation])
    
  return{
     reservation,
     error,
     successmsg,
     getReservation,
     postReservation,
     completeReservation,
     abortReservation
     
 }
}


export default useReservation;