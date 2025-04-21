export { ChapterPreamble, Chapter };
function ChapterPreamble(props) {
    const anchorClass = "menu back-to-top chnav"
    return(
        <>
            <span className="chapter-preamble">
                <h2 className="text-gradient chapter-title" style={{'padding-right': "2rem",}}>
                    {props.chapterNameHeading}
                </h2>
                { props.previousChapterSrc ? <a className={anchorClass} href={props.previousChapterSrc}>{'\u2190'} Previous Chapter</a> : <p className={`w-[20ch]`}></p> }
                { props.nextChapterSrc ? <a className={anchorClass} href={props.nextChapterSrc}>Next Chapter {'\u2192'}</a> : <p className={`w-[15ch]`}></p> }
                <a className={anchorClass} href="#top">Back to top {'\u2191'}</a>
            </span>
        </>
    );
}

function Chapter(props){
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