import React from 'react';
import './App.css';

const Person = (props) =>{
 const {img,name,job} = props.person;
 const {children} = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return <div className="person">
      <img src = {url} alt = "thumnail"/>
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <p>{children}</p>
      </div>
    </div>}


const PersonList = () =>{
const people = [
  {
    img: 22,name :"George",  job:"developer"
},
{
    img: 10,name : "Joseph",  job : "designer"
},
{
  img: 30,name : "John",  job : "artist"
},
{
}
];
  return(
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
      lorem ipsumm dolor
      </Person>
      <Person person={people[2]} />
    </section>

  )
    
  

  
};

const App = () => (<PersonList />);

export default App;
