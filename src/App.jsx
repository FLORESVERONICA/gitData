import React from "react";
import { UserProvider } from "./context/userContext";


function App () {
  
  
  const getUser = async () => {
    try {
     const response = await fetch(`https://api.github.com/users/${username}`);
     const data = await response.json(); 
     console.log(data);
    } catch (err) { 
   
    } 
  }
getUser()

  return (
    <UserProvider>
      <div>
        
      </div>
    </UserProvider>

  );
}

export default App;
