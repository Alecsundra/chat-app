import React, { Component } from 'react'
import './Contact.css';


class Contact extends Component {
    constructor(){
      super()
      this.state = {
        list:[
          {name: "Sandra Davis", 
          avatar: "https://avatars2.githubusercontent.com/u/59797566?s=400&v=4",
          online: true },
          {name: "Ilona Dany",
          avatar: "https://avatars2.githubusercontent.com/u/59797566?s=400&v=4",
          online: true},
          {name: "John Boy",
          avatar: "https://avatars2.githubusercontent.com/u/59797566?s=400&v=4",
          online: false}
          ]
      };
    }
  
    handleClick= (e) => {
      let list1=[...this.state.list];
      list1[e.target.id].online = !list1[e.target.id].online
      this.setState ({
        list: list1
      })
    };
      
  render() {
  return (
  <div>
  {this.state.list.map( (person, i) =>{
          return (
        <div className="Contact" key={i}>
          
          <img className="avatar" src={person.avatar}/>
            <div>
             <h4 className="name">{person.name}</h4>
             
          <div className='status' onClick={this.handleClick} >
           {person.online
            ? <div>
                <div className="status-online"></div>
                <button ><span id={i} className='status-text'>Online</span></button>     
              </div>   
            :
              <div>
                <div className="status-offline"></div>
                <button ><span id={i} className='status-text'>Offline</span></button>
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
}
}

export default Contact