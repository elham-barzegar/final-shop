import  Header from "@/components/layouts/header/Header";
import  Footer from "@/components/layouts/footer/Footer";
import {ReactNode} from "react";

interface props {
    children: React.ReactNode
}

function Layout({children} : props) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}

export default Layout;