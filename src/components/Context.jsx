import React, { createContext } from "react";

export const UserContext = createContext({ 
    username: '',
    email: '',
    password: '',
    theme: 'dark',
    loggedIn: false
});
