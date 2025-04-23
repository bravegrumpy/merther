import { mainLinks } from "@/scripts/data"

export function Navigation ({ className="menu-container pages-container", id, line=false, displayStyle="flex", children}) {
    return (
        <>
            <nav className={className} id={id ? id : ""} style={{ marginBottom: "60px", marginLeft:'50px', width: "100%", display: displayStyle}}>
                {
                    line ? <hr style={{ marginLeft: '-90px'}} /> : <></>
                }
                {children}
            </nav>
        </>
    );
}

export function Anchor({ href, className="menu pages", text, keyId }) {
    return (
        <a key={`anchor_key-${keyId}`} href={href} className={className}>{text}</a>
    );
}

// export const defaultLinks =[
//     {
//         key: "00_Home",
//         href: "/pages",
//         text: "Home",
//     },
//     {
//         key: "01_Misunderstood",
//         href: "/misunderstood",
//         text: "Misunderstood",
//     },
//     {
//         key: "02_Muses",
//         href: "/muses",
//         text: "Muses",
//     },
//     {
//         key: "03_Kinks",
//         href: "/external/iron",
//         text: "Kinks",
//     },
// ] 

export const defaultLinks = mainLinks;

export function StyleToggle({ buttonText="Toggle Styling Options", showText="Show Style Options", hideText="Hide Style Options", btnId="toggle", target='top-nav', className='' }) {
    function toggleStyle() {
        const nav = document.getElementById(target);
        const btn = document.getElementById(btnId);
        nav.style.display === 'none' ? nav.style.display = 'flex' : nav.style.display = 'none';
        nav.style.display === 'none' ? btn.innerText = showText : btn.innerText = hideText;
    }
    return (<>
        {/* <div className="chnav-container menu-container" style={{justifyContent: "between", alignContent: "center"}}> */}
            <button onClick={toggleStyle} id={btnId} className={`chnav chnav-start chlist menu ${className}`}>{buttonText}</button>
        {/* </div> */}
    </>);
}