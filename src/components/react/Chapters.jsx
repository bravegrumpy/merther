export function ChapterPreamble(props) {
    const anchorClass = "menu back-to-top chnav"
    return(
        <>
            <span className="chapter-preamble">
                <h2 className="text-gradient chapter-title" style={{paddingRight: "2rem",}}>
                    {props.chapterNameHeading}
                </h2>
                { props.previousChapterSrc ? <a className={anchorClass} href={props.previousChapterSrc}>{'\u2190'} Previous Chapter</a> : <p style={{backgroundColor: "transparent", width: "25ch", textAlign: "center", height: "37px"}}></p> }
                { props.nextChapterSrc ? <a className={anchorClass} href={props.nextChapterSrc}>Next Chapter {'\u2192'}</a> : <p style={{backgroundColor: "transparent", width: "15ch", textAlign: "center", height: "37px"}}></p> }
                <a className={anchorClass} href="#top">Back to top {'\u2191'}</a>
            </span>
        </>
    );
}

export function Chapter(props){
    return(
        <>
            <article id={props.articleId}>
                <ChapterPreamble chapterNameHeading={props.chapterNameHeading} previousChapterSrc={props.previousChapterSrc} nextChapterSrc={props.nextChapterSrc} />
                <div className="chapter">
                    {props.children}
                </div>
            </article>
        </>
    );
}

export function ChapterNav({ chapters, navClass='', reloadClass='', contentsBtnClass='', chapterClass='', chId='top' }) {
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