import * as React from 'react';
import { Icon } from "@iconify/react"

export function ChapterPreamble(
    { 
        chapterNameHeading, 
        previousChapterSrc, 
        nextChapterSrc, 
        headerChildren,
        spanClass,
        headingClass,
        anchorClass='menu back-to-top chnav',
        preambleChildren,
        firstChild,
        lastChild,
     }: {
            chapterNameHeading?: string,
            previousChapterSrc?: string,
            nextChapterSrc?: string,
            headerChildren?: React.ReactNode,
            spanClass?:  string,
            headingClass?: string,
            anchorClass?: string,
            preambleChildren?: React.ReactNode,
            firstChild?: React.ReactNode,
            lastChild?: React.ReactNode
        }) {
    return(
        <>
            <span className={`chapter-preamble ${spanClass}`}>
                {firstChild}
                {chapterNameHeading ? <h2 className={`text-gradient chapter-title ${headingClass}`}>{chapterNameHeading}</h2> : <></> }
                {headerChildren}
                { previousChapterSrc ? <a className={anchorClass} href={previousChapterSrc}>{'\u2190'} Previous Chapter</a> : <p style={{backgroundColor: "transparent", width: "25ch", textAlign: "center", height: "37px", color: 'transparent'}}>{'\u2190'} Previous Chapter</p>}
                { nextChapterSrc ? <a className={anchorClass} href={nextChapterSrc}>Next Chapter {'\u2192'}</a> : <p style={{backgroundColor: "transparent", width: "15ch", textAlign: "center", height: "37px", color: "transparent"}}>Next Chapter {'\u2192'}</p> }
                <a className={anchorClass} href="#top">Back to top {'\u2191'}</a>
                <>{lastChild}</>
            </span>
            {preambleChildren}
        </>
    );
}

export function Chapter({ 
    articleId,
    beforePreamble,
    chapterNameHeading, 
    previousChapterSrc,
    nextChapterSrc,
    children, 
    headerChildren,
    spanClass,
    headingClass,
    anchorClass='menu back-to-top chnav',
    chapterDivClass,
    articleClass,
    preambleChildren,
    firstChild,
    lastChild
}: {
        articleId: string,
        beforePreamble?: React.ReactNode,
        chapterNameHeading?: string,
        previousChapterSrc?: string,
        nextChapterSrc?: string,
        children?: React.ReactNode,
        headerChildren?: React.ReactNode,
        spanClass?: string,
        headingClass?: string,
        anchorClass?: string,
        chapterDivClass?: string,
        articleClass?: string,
        preambleChildren?: React.ReactNode,
        firstChild?: React.ReactNode,
        lastChild?: React.ReactNode
    }){
    return(
        <>
            <hr className="section" />
            <article id={articleId} className={articleClass}>
                {beforePreamble}
                <ChapterPreamble chapterNameHeading={chapterNameHeading} previousChapterSrc={previousChapterSrc} nextChapterSrc={nextChapterSrc} headerChildren={headerChildren} spanClass={spanClass} headingClass={headingClass} anchorClass={anchorClass} preambleChildren={preambleChildren} firstChild={firstChild} lastChild={lastChild}/>
                <div className={`chapter ${chapterDivClass}`}>
                    {children}
                </div>
            </article>
        </>
    );
}

export type ChaptersNav = {
    id: string;
    href: string;
    text: string;
    title?: string,
    chapter?: number,
    pubDate?: Date,
    published?: boolean,
    description?: string
    notes?: string
    endnotes?: string,
}

export function ChapterNav({ chapters, navClass='', reloadClass='', contentsBtnClass='', chapterClass='', chId='top', icons=false, iconSize='24px' }: {
    chapters: ChaptersNav[],
    navClass?: string,
    reloadClass?: string,
    contentsBtnClass?: string,
    chapterClass?: string,
    chId?: string,
    icons?: boolean,
    iconSize?: string | number | undefined

}) {
    reloadClass = reloadClass === '' ? chapterClass : reloadClass;
    contentsBtnClass = contentsBtnClass === '' ? chapterClass : contentsBtnClass;
    const reloadSymbol = icons ? <Icon icon="hugeicons:refresh" flip='horizontal' width={iconSize} height={iconSize} /> : '⟳';
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
            <button className={`chnav menu chnav-start ${reloadClass}`} onClick={reloadPage}>{reloadSymbol}</button>
            <button onClick={toggleContents} className={`chnav menu chnav-start ${contentsBtnClass}`}>Contents: </button>
            {
                chapters.map((chapter) => (<>
                    <a key={`link-${chapter.id}`} className={`chnav menu chlst hide hidden ${chapterClass}`} href={chapter.href}>{chapter.text}</a>
                </>))
            }
        </nav>
    </>);
}