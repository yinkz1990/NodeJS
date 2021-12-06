import React,{useMemo} from "react";
import{Link} from "react-router-dom";


function ReservationList (props) {
  const {reservation, abortReservation, completeReservation} = props ;
    const tableData = useMemo(()=>{
          return reservation?.filter((reserve) => !reserve.completed)
          .map(reservation => {
             return(
                   <tr key={reservation._id}>
                   <td>{reservation.firstname} {reservation.lastname}</td>
                   <td>{reservation.email}</td>
                   <td>{reservation.phone}</td>
                   <td>{reservation.guest}</td>
                   <td>{reservation.time}</td>
                   <td>{new Date(reservation.date).toDateString()}</td>
                   <td style={{color:"red"}}>
                       <Link to="/reservation-list" style={{TextDecoration: "none", color:"red", padding:"5px"}} onClick={()=>{abortReservation(reservation._id)}}>
                            ✖
                       </Link>
                   </td>
                   <td style={{color:"green"}}>
                        <Link to="/reservation/complete" style={{TextDecoration: "none", color:"green", padding:"5px"}} onClick={()=> {completeReservation(reservation._id)}}>
                            ✔
                        </Link>
                   </td>
                        
               </tr>)
          })
    }, [reservation, completeReservation, abortReservation]) 
return(
    <div className="reservation-list">
<table className="reservation-table" style={{textAlign:"left"}}>
    <thead >
        <tr className="upcoming" style={{marginBottom:"10px", padding:"5px"}}>
            <th style={{width: "14rem"}}>Name</th>
            <th style={{width: "14rem"}}>Email</th>
            <th style={{width: "8rem"}}>Phone Number</th>
            <th style={{width: "8rem"}}>No of Guest</th>
            <th style={{width: "10rem"}}>Time</th>
            <th style={{width: "10rem"}}>Date</th>
            <th style={{width: "5rem"}}>Cancel</th>
            <th style={{width: "5rem"}}>Done</th>
        </tr>
    </thead>
    <tbody>
        {tableData}
    </tbody>
</table>
    </div>
)
}



export default ReservationList;