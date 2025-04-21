export function Navigation ({ className="menu-container pages-container", id, children }) {
    return (
        <>
            <nav className={className} id={id ? id : ""} style={{ marginBottom: "60px", marginLeft:'50px', width: "100%"}}>
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

export const defaultLinks =[
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