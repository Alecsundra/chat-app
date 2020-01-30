import React, { Component } from 'react'
import './Contact.css'

function ContactList (props) {
   
      return (
        <div>
        <table className = "table">
          <thead className="table-thead">
            <tr>
              <th>Name</th>
              <th>Avatar</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className= "table-tbody">
            {props.list.map(person => {
                return (
                <tr>
                <td className = "name">{person.name}</td>  
                
                <td><img className ="avatar"src={person.avatar}></img>
                </td>
                <td>{person.online === true ? "Online" : "Offline"} 
                {/* perosn.online ? no eq true */}
                </td>
                </tr>
                )
            }) }
        
    
          </tbody>
        </table>
        </div>
      )
    }

  






export default ContactList