import React, { Component } from 'react';
//import CardList from '../components/CardList';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pictures: [],
    }
  }

   componentDidMount()
   {
    fetch('https://swapi.co/api/people')
    .then(results =>{
      
      return results.json();
    }).then(data =>{
      
      
      let pictures = data.results.map((pic)=>{
        console.log(pic);
        return(
        
        <div key={pic.name}>
        <p>Name:{pic.name}</p>
        <p>Height:{pic.height}</p>
       
        </div>)
         })
         

         this.setState({pictures:pictures});
         
        
        
   })
}

render(){
  return(
    <table>{this.state.pictures}</table>
    
    
  
  )

}
}
export default App;