interface props {
    icon: string;
    size: number;
    a?: string;
    title?: string;
    hideTitleOnMobile?: boolean;
    badge?: number;
    titleClassName?: string;
    path?: number;
    aClassName?: string;
}

export function IconBox({icon, size = 22, a, title, hideTitleOnMobile = false, badge = 0, titleClassName = '', path = 0, aClassName = ''}: props) {

    let span = [];
    for (let i = 1; i <= path; i++) {
        span.push(<span className={`path${i}`}></span>)
    }
    if (a) {
        return (
            <a className={`flex items-center cursor-pointer ${aClassName}`} href={a ?? '#'}>
                {
                    badge ?
                        <div className="relative">
                            <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
                            <i className={`${icon} text-[${size}px]`}>{span}</i>
                        </div>
                        :
                        <i className={`${icon} text-[${size}px]`}>{span}</i>
                }

                {title && <div className={`ml-1 ${hideTitleOnMobile ? 'hidden xl:inline-block' : 'inline-block'} ${titleClassName}`}>{title}</div>}
            </a>
        );

    } else {
        return (
            <>
                {
                    badge ?
                        <div className="relative">
                            <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
                            <i className={`${icon} text-[${size}px]`}>{span}</i>
                        </div>
                        :
                        <i className={`${icon} text-[${size}px]`}>{span}</i>
                }

                {title && <div className={`ml-1 ${hideTitleOnMobile ? 'hidden xl:inline-block' : 'inline-block'} ${titleClassName}`}>{title}</div>}
            </>
        );
    }
}
