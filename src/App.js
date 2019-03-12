import React from 'react';
import './App.css';

const Person = () =>{
const url = "https://randomuser.me/api/portraits/thumb/men/01.jpg";
return <div className="person">
  I am person component
  </div>};

const PersonList = () =>{
const people = [{}];

  return(
    <Person></Person>
  )
};

const App = () => (<PersonList />);

export default App;
