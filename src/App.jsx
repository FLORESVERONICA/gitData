import React from 'react'; 
import { UserProvider } from './context/UserContext'; 
import UserSearch from './components/UserSearch'; 
import UserProfile from './components/UserProfile'; 
import './App.css'; 

const App = () => { 
  return ( 
  <UserProvider> 
    <div className="app"> 
     <h1>GitHub User Search</h1> 
     <UserSearch /> 
     <UserProfile /> 
    </div> 
  </UserProvider> 
  ); 
}; 

export default App;