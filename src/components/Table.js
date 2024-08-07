import React from 'react'

function Table(props) {

  
  
  
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>{props.array[0]}</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.array.slice(1).map((value)=>(
                        
                        <tr>
                            <td>{value}</td>
                        </tr>
                    ))
                    
                }
            </tbody>
        </table>
    )
}

export default Table
