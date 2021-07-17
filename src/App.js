// import './App.css';

import { Component } from "react";
import Form from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";

class App extends Component {

  state = {
    
  };
render() {
    

    return (
      <div>
        <h1>Phonebook</h1>
        <Form />
      
        <h2>Contacts</h2>
        <Filter/>
        
        <ContactsList />
        
      </div>

    );
  }
}


export default App;
