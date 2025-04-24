import * as React from 'react';

export function ChapterPreamble(
    { 
        chapterNameHeading, 
        previousChapterSrc, 
        nextChapterSrc, 
        headerChildren }: {
            chapterNameHeading?: string,
            previousChapterSrc?: string,
            nextChapterSrc?: string,
            headerChildren?: React.ReactNode
        }) {
    const anchorClass = "menu back-to-top chnav"
    return(
        <>
            <span className="chapter-preamble">
                <h2 className="text-gradient chapter-title" style={{paddingRight: "2rem",}}>
                    {chapterNameHeading}
                </h2>
                {headerChildren}
                { previousChapterSrc ? <a className={anchorClass} href={previousChapterSrc}>{'\u2190'} Previous Chapter</a> : <p style={{backgroundColor: "transparent", width: "25ch", textAlign: "center", height: "37px"}}></p> }
                { nextChapterSrc ? <a className={anchorClass} href={nextChapterSrc}>Next Chapter {'\u2192'}</a> : <p style={{backgroundColor: "transparent", width: "15ch", textAlign: "center", height: "37px"}}></p> }
                <a className={anchorClass} href="#top">Back to top {'\u2191'}</a>
            </span>
        </>
    );
}

export function Chapter({ 
    articleId, 
    chapterNameHeading, 
    previousChapterSrc, 
    nextChapterSrc, 
    children, 
    headerChildren }: {
        articleId: string,
        chapterNameHeading?: string,
        previousChapterSrc?: string,
        nextChapterSrc?: string,
        children?: React.ReactNode,
        headerChildren?: React.ReactNode
    }){
    return(
        <>
            <article id={articleId}>
                <ChapterPreamble chapterNameHeading={chapterNameHeading} previousChapterSrc={previousChapterSrc} nextChapterSrc={nextChapterSrc} headerChildren={headerChildren} />
                <div className="chapter">
                    {children}
                </div>
            </article>
        </>
    );
}

export function ChapterNav({ chapters, navClass='', reloadClass='', contentsBtnClass='', chapterClass='', chId='top' }: {
    chapters: any[],
    navClass?: string,
    reloadClass?: string,
    contentsBtnClass?: string,
    chapterClass?: string,
    chId?: string
}) {
    reloadClass = reloadClass === '' ? chapterClass : reloadClass;
    contentsBtnClass = contentsBtnClass === '' ? chapterClass : contentsBtnClass;
    function reloadPage() {
        location.reload();
    }
    function toggleContents() {
        var links = document.querySelectorAll("a.chlst");

        links.forEach((link) => {
            link.classList.toggle('hide');
            link.classList.toggle('hidden');
            // link.style.display === "inline" ? link.style.display = "none" : link.style.display = "inline"
        })
    }
    return(<>
        <nav className={`menu-container chnav-container ${navClass}`} id={chId}>
            <button className={`chnav menu chnav-start ${reloadClass}`} onClick={reloadPage}>⟳</button>
            <button onClick={toggleContents} className={`chnav menu chnav-start ${contentsBtnClass}`}>Contents: </button>
            {
                chapters.map((chapter) => (<>
                    <a key={`link-${chapter.id}`} className={`chnav menu chlst hide ${chapterClass}`} href={chapter.href}>{chapter.text}</a>
                </>))
            }
        </nav>
    </>);
}