import React, { useState, useContext } from "react";
import { UserContext } from "./Context.jsx";

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(UserContext);
    const login = (user, pass) => {
        setUser({ username: user, password: pass, loggedIn: true });
    };
    const logout = () => {
        setUser({ username: "", password: "", loggedIn: false });
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

