import {ImageView} from "@/components";

export function Logo() {
    return (
        <a href={'/'}>
            <ImageView width={242} height={66} src={"/assets/images/Logo.png"} alt={"logo"} className={"w-[117px] lg:w-[242px]"}/>
        </a>
    );
}

