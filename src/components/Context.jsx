import React, { createContext } from "react";

export const UserContext = createContext({ 
    user: {
        username: '',
        email: '',
        password: '',
        theme: 'dark',
        loggedIn: false
    },
    login: () => {},
    logout: () => {},
    toggleTheme: () => {}
});
