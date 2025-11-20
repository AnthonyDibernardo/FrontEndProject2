import React, { createContext } from "react";

export const UserContext = createContext({ 
    username: '',
    password: '',
    theme: 'dark',
    loggedIn: false
});
