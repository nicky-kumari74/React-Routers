import React from 'react'
import {Table} from 'react-bootstrap'

function Tables(){
    const students=[
        {name:'nicky',email:'nicky@gmail.com',contact:111},
        {name:'ajay',email:'ajay@gmail.com',contact:8743567},
        {name:'kiran',email:'kiran@gmail.com',contact:111},
      ]
 return (
        <div>
          <Table striped bordered variant='dark'>
            <tbody>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            </tr>
            {
              students.map((item,i)=>
                item.contact===111?
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                </tr>:null
              )
            }
            </tbody>
          </Table>
        </div>
      );
}
export default Tables