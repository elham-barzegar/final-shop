import {Header} from "@/components";
import {Footer} from "@/components";
import {ReactNode} from "react";

interface props {
    children: ReactNode
}

export function Layout({children} : props) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}

