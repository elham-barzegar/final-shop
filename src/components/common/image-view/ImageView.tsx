import Image from "next/image";

interface props {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}
export function ImageView({src, alt, width, height, className = ''}: props) {
    return (
        <Image src={src} alt={alt} width={width} height={height} className={className}/>
    );
}
