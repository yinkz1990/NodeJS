import React, {useMemo} from "react";



function CompletedReservation (props) {
    const {reservation} = props;
    const tableBody = useMemo(()=>{ 
       return reservation?.filter(booking => booking.completed)
       .map(reserves => {
          return <tr className="history" style={{color:"black"}}>
                    <td>{reserves.firstname} {reserves.lastname}</td>
                    <td>{reserves.email}</td>
                    <td>{reserves.phone}</td>
                    <td>{reserves.guest}</td>
                    <td>{reserves.time}</td>
                    <td>{new Date(reserves.date).toDateString()}</td>
                    <td>done</td>
           </tr>
       })
    },[reservation])

return(
    <div className="reservation-list">
      <table className="reservation-table" style={{textAlign:"left", borderCollapse:"collapse"}}>
          <thead>
          <tr>
              <th style={{width:"12rem"}}>Name</th>
              <th style={{width:"14rem"}}>Email</th>
              <th style={{width:"9rem"}}>Phone</th>
              <th style={{width:"9rem"}}>Guest</th>
              <th style={{width:"9rem"}}>Time</th>
              <th style={{width:"9rem"}}>Date</th>
              <th style={{width:"7rem"}}>Completed</th>
          </tr>
        </thead>
        <tbody>
            {tableBody}
        </tbody>
      </table>
      </div>
);
}

export default CompletedReservation;