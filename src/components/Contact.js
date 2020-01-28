import React, { Component } from 'react'
import './Contact.css';

let arr= [
{name: "Sandra Davis", 
avatar: "https://avatars2.githubusercontent.com/u/59797566?s=400&v=4",
online: true },
{name: "Ilona Dany",
avatar: "https://avatars2.githubusercontent.com/u/59797566?s=400&v=4",
online: true},
{name: "John Boy",
avatar: "https://avatars2.githubusercontent.com/u/59797566?s=400&v=4",
online: false}
];
function Contact() {
  return (
  <div>
  {
    arr.map( person =>{
          return (
        <div className="Contact">
          
          <img className="avatar" src={person.avatar}/>
            <div>
             <h4 className="name">{person.name}</h4>
             
          <div className='status'>
           {person.online ? <div>
            <div className="status-online"> </div>
              <span className='status-text'>Online</span>     
           </div>   
            :
            <div><div className="status-offline"></div>
              <span className='status-text'>Offline</span>
            </div>
          }
        
        </div>
        </div>
         </div>
          )
        
      })
    }
  
      </div>
  )
};

export default Contact