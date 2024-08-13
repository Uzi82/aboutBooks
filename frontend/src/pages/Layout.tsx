
import Header from "libs/components/Header";
import Menu from "libs/components/Menu";
import {  Outlet } from "react-router-dom";


export default function Layout () {
    
    return (
        <>
            <Header/>
            <Menu/>
            <main>
                <Outlet/>
            </main>
        </>   
    )
}