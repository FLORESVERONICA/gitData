import { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser ] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
       const fetchUser = async (username) => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json();
            setUser(data);
            setError(null);
        } catch (err) {
            setError('error')
            setError('Error al obtener los datos del usuario'); 
            setUser(null);
        } finally {
            setLoading(false);
        }
       };
    

    return (
        <UserContext.Provider value={{user, loading, error, fetchUser}}>
            {children}
        </UserContext.Provider>
    );
};