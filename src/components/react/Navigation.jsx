function Navigation ({ className="menu-container pages-container", id, children }) {
    return (
        <>
            <nav className={className} id={id ? id : ""}>
                {children}
            </nav>
        </>
    );
}

function Anchor({ href, className="menu pages", text }) {
    return (
        <a href={href} className={className}>{text}</a>
    );
}

const defaultLinks =[
    {
        key: "00_Home",
        href: "/pages",
        text: "Home",
    },
    {
        key: "01_Misunderstood",
        href: "/misunderstood",
        text: "Misunderstood",
    },
    {
        key: "02_Muses",
        href: "/muses",
        text: "Muses",
    },
    {
        key: "03_Kinks",
        href: "/external/iron",
        text: "Kinks",
    },
] 

export { Navigation, Anchor, defaultLinks }