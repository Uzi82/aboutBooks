
import Header from "libs/components/Header";
import {  Outlet } from "react-router-dom";


export default function Layout () {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>   
    )
}