import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const UserSearch = () => {
    const [username, setUsername] = useState('');
    const { fetchUser } = useContext(UserContext);

    const handleSearch = () => {
        fetchUser(username);
    };
    return ( 
        <div> 
        <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter GitHub username" /> 
        <button onClick={handleSearch}>Search</button> 
        </div> 
        );
     };

     export default UserSearch;