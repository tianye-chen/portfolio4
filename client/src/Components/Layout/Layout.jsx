import React, { fragment } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
    return (
        <fragment>
            <Nav />
            {children}
            <Footer />
        </fragment>
    )    
}