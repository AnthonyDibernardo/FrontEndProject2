import React from "react";
import { useUser } from "./Provider";

function Footer(){
    const { user, login, logout, toggleTheme } = useUser();
    const theme = user.theme;
    return (
        <footer className={theme}>
             <p>Copyright (c) 2025 Anthony DiBernardo, Andrew Hooker. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
