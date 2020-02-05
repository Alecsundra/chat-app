import React from 'react';
import './components/Contact.js'
import Contact from './components/Contact.js';
// import ContactList from './components/ContactList'

// let list= [
//   {name: "Sandra Davis", 
//   avatar: "https://avatars2.githubusercontent.com/u/59797566?s=400&v=4",
//   online: true },
//   {name: "Ilona Dany",
//   avatar: "https://avatars2.githubusercontent.com/u/59797566?s=400&v=4",
//   online: true},
//   {name: "John Boy",
//   avatar: "https://avatars2.githubusercontent.com/u/59797566?s=400&v=4",
//   online: false},
//   {name: "Iza Dan",
//   avatar: "https://avatars2.githubusercontent.com/u/59797566?s=400&v=4",
//   online: true},
//   {name: "Ilona Dany",
//   avatar: "https://avatars2.githubusercontent.com/u/59797566?s=400&v=4",
//   online: false},
//   ];

function App(props) {
  return (
    <div>
      <Contact />
      {/* <ContactList list={list} /> */}
    </div>
  );
}

export default App;
