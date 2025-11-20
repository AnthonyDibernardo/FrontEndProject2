import React, { useState, useContext } from "react";
import { UserContext } from "./Context.jsx";

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        theme: 'dark',
        loggedIn: false
    });   
    const login = (user, email, pass) => {
        setUser(prev => ({
            ...prev, 
            username: user, 
            email: email, 
            password: pass, 
            loggedIn: true 
        }));
    };
    const logout = () => {
        setUser(prev => ({ ...prev, username: "", email: "", password: "", loggedIn: false }));
    };
    const toggleTheme = () => {
        setUser(prev => ({
            ...prev,
            theme: prev.theme === 'light' ? 'dark' : 'light'
        }));
    }
    return(
        <UserContext.Provider value={{ user, login, logout, toggleTheme }}>
            {children}
        </UserContext.Provider>
    );
}
export const useUser = () => useContext(UserContext);  

