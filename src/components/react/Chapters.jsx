export { ChapterPreamble, Chapter };
function ChapterPreamble(props) {
    const anchorClass = "menu back-to-top"
    return(
        <>
            <span className="chapter-preamble">
                <h2 className="text-gradient chapter-title" style={{'padding-right': "2rem",}}>
                    {props.chapterNameHeading}
                </h2>
                <a className={anchorClass} href={props.previousChapterSrc}>{'\u2190'} Previous Chapter</a>
                <a className={anchorClass} href={props.nextChapterSrc}>Next Chapter {'\u2192'}</a>
                <a className={anchorClass} href="#top">Back to top {'\u2191'}</a>
            </span>
        </>
    );
}

function Chapter(props){
    return(
        <>
            <ChapterPreamble chapterNameHeading={props.chapterNameHeading} previousChapterSrc={props.previousChapterSrc} nextChapterSrc={props.nextChapterSrc} />
            <article>
                {props.children}
            </article>
        </>
    );
}