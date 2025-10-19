import * as React from "react";
import { Icon } from "@iconify/react";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

function HorizontalRule({
  lineType,
}: {
  lineType?: "section" | "default" | "start" | "end" | false | undefined;
}) {
  const styleSet = { marginBottom: "-50px" };
  switch (lineType) {
    case "section":
      return (
        <>
          <hr className="section" style={styleSet} />
        </>
      );
      break;
    case "default":
      return (
        <>
          <hr style={styleSet} />
        </>
      );
      break;
    case "start":
      return (
        <>
          <hr style={styleSet} className="section start" />
        </>
      );
    case "end":
      return (
        <>
          <hr style={styleSet} className="section end" />
        </>
      );
    case false:
    default:
      break;
  }
}

export function ChapterPreamble({
  chapterNameHeading,
  previousChapterSrc,
  nextChapterSrc,
  headerChildren,
  spanClass,
  headingClass,
  anchorClass = "menu back-to-top chnav",
  preambleChildren,
  firstChild,
  lastChild,
  topLine,
  previousIcon,
  nextIcon,
  backToTopIcon,
  backToTopButton,
  fakeBtnWidth="fit-content"
}: {
  chapterNameHeading?: string;
  previousChapterSrc?: string;
  nextChapterSrc?: string;
  headerChildren?: React.ReactNode;
  spanClass?: string;
  headingClass?: string;
  anchorClass?: string;
  preambleChildren?: React.ReactNode;
  firstChild?: React.ReactNode;
  lastChild?: React.ReactNode;
  topLine?: "section" | "default" | "start" | "end" | false | undefined;
  icons?: boolean;
  previousIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  backToTopIcon?: React.ReactNode;
  backToTopButton?: string | boolean | React.ReactNode;
  fakeBtnWidth?: string | number;
}) {
  return (
    <>
      <HorizontalRule lineType={topLine} />
      <div className="chapter-preamble-shadow">
      <span className={`chapter-preamble ${spanClass}`}>
        {firstChild}
        {chapterNameHeading ? (
          <h2 className={`text-gradient chapter-title ${headingClass}`}>
            {chapterNameHeading}
          </h2>
        ) : (
          <></>
        )}
        {headerChildren}
        {previousChapterSrc ? (
          <a
            className={anchorClass} 
            href={previousChapterSrc} 
            aria-label="previous chapter"
          >
            { previousIcon ? (<>{previousIcon}</>) : (<>{"\u2190"} Previous Chapter</>)}
            {/* {"\u2190"} Previous Chapter */}
          </a>
        ) : (
          <p
            style={{
              backgroundColor: "transparent",
              width: fakeBtnWidth,
              textAlign: "center",
              height: "37px",
              color: "transparent",
            }}>
            {/* {"\u2190"} Previous Chapter */}
            {previousIcon}
          </p>
        )}
        {nextChapterSrc ? (
            <a className={anchorClass} href={nextChapterSrc}>
              {
                nextIcon ? (<>{nextIcon}</>) : (<>Next Chapter {"\u2192"}</>)
              }
            </a>
        ) : (
          <p
            style={{
              backgroundColor: "transparent",
              width: "15ch",
              textAlign: "center",
              height: "37px",
              color: "transparent",
            }}>
            {/* Next Chapter {"\u2192"} */}
            {nextIcon}
          </p>
        )}
        { 
          backToTopButton 
            ? (<>
              <a className={anchorClass} href="#top">
                {
                  backToTopIcon ? (<>{backToTopIcon}</>) : (<>Back to top{"\u2191"}</>)
                }
              </a>
            </>) 
            : (<></>)
        }
        <>{lastChild}</>
      </span>
      </div>
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
  anchorClass = "menu back-to-top chnav",
  chapterDivClass,
  articleClass,
  preambleChildren,
  firstChild,
  lastChild,
  preambleTopLine,
  beforeChapter,
  icons=true,
  previousIcon,
  nextIcon,
  backToTopIcon,
  backToTopButton,
  fakeBtnWidth
}: {
  articleId: string;
  beforePreamble?: React.ReactNode;
  chapterNameHeading?: string;
  previousChapterSrc?: string;
  nextChapterSrc?: string;
  children?: React.ReactNode;
  headerChildren?: React.ReactNode;
  spanClass?: string;
  headingClass?: string;
  anchorClass?: string;
  chapterDivClass?: string;
  articleClass?: string;
  preambleChildren?: React.ReactNode;
  firstChild?: React.ReactNode;
  lastChild?: React.ReactNode;
  preambleTopLine?: "section" | "default" | false | undefined | "start" | "end";
  beforeChapter?: React.ReactNode;
  icons?: boolean;
  previousIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  backToTopIcon?: React.ReactNode;
  backToTopButton?: boolean,
  fakeBtnWidth?: string | number;
}) {
  return (
    <>
      <article id={articleId} className={articleClass}>
        {beforePreamble}
        <ChapterPreamble
          topLine={preambleTopLine}
          chapterNameHeading={chapterNameHeading}
          previousChapterSrc={previousChapterSrc}
          nextChapterSrc={nextChapterSrc}
          headerChildren={headerChildren}
          spanClass={spanClass}
          headingClass={headingClass}
          anchorClass={anchorClass}
          preambleChildren={preambleChildren}
          firstChild={firstChild}
          lastChild={lastChild}
          icons={icons}
          previousIcon={previousIcon}
          nextIcon={nextIcon}
          backToTopIcon={backToTopIcon}
          backToTopButton={backToTopButton}
          fakeBtnWidth={fakeBtnWidth}
        />
        <div className={`chapter ${chapterDivClass}`}>
          {beforeChapter}
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
  title?: string;
  chapter?: number;
  pubDate?: Date;
  published?: boolean;
  description?: string;
  notes?: string;
  endnotes?: string;
};

export function ChapterNav({
  chapters,
  navClass = "",
  reloadClass = "",
  contentsBtnClass = "",
  chapterClass = "",
  chId = "top",
  icons = false,
  iconSize = "24px",
}: {
  chapters: ChaptersNav[];
  navClass?: string;
  reloadClass?: string;
  contentsBtnClass?: string;
  chapterClass?: string;
  chId?: string;
  icons?: boolean;
  iconSize?: string | number | undefined;
}) {
  reloadClass = reloadClass === "" ? chapterClass : reloadClass;
  contentsBtnClass = contentsBtnClass === "" ? chapterClass : contentsBtnClass;
  const reloadSymbol = icons ? (
    <Icon
      icon="hugeicons:refresh"
      flip="horizontal"
      width={iconSize}
      height={iconSize}
    />
  ) : (
    "⟳"
  );
  function reloadPage() {
    location.reload();
  }
  function toggleContents() {
    var links = document.querySelectorAll("a.chlst");

    links.forEach((link) => {
      link.classList.toggle("hide");
      link.classList.toggle("hidden");
      // link.style.display === "inline" ? link.style.display = "none" : link.style.display = "inline"
    });
  }
  let i = 1;
  let j = Math.round(Math.random() - 0.5) * 10;
  let k = i + j;
  return (
    <>
      <nav className={`menu-container chnav-container ${navClass}`} id={chId}>
        <p className="menu-shadow" key={`${k}-${i++}-shadow-${chId}`}>
          <button
            key={`${k}-${i++}-reload-btn-${chId}`}
            className={`chnav menu chnav-start ${reloadClass}`}
            onClick={reloadPage}>
            {reloadSymbol}
          </button>
        </p>
        <p className="menu-shadow" key={`${k}-${i++}`}>
          <button
            key={`Button-${chId}-${k}-Contents`}
            onClick={toggleContents}
            className={`chnav menu chnav-start ${contentsBtnClass}`}>
            Contents:{" "}
          </button>
        </p>
        {chapters.map((chapter) => (
          <>
            <p className="menu-shadow" key={`${k}-${i++}-anotherShadow`}>
              <a
                key={`${chId}-link-${chapter.id}-${k}`}
                className={`chnav menu chlst hide hidden ${chapterClass}`}
                href={chapter.href ?? null}>
                {chapter.text}
              </a>
            </p>
          </>
        ))}
      </nav>
    </>
  );
}

export function ChapterInfo({readingTime, pubDate, href, AnchorText, published}: {readingTime: any; pubDate: any; href: string; AnchorText: 'all' | 'single', published?: boolean;}) {
  let txt;
  switch(AnchorText) {
    case "all":
      txt = "Entire Work";
      break;
    case "single":
      txt="Single Chapter";
      break;
  }
  return (<>
    <div>
      <div className="chi">
        <a className="chb" href={href}>{txt}</a>
        <p className="chb"><span className="chi-notes">Reading Time: </span>{readingTime}</p>
        <p className="chb">{ published ? <><span className="chi-notes">Published On: </span> {dayjs(pubDate).format('MMMM Do, YYYY')}</> : <></>}</p>
      </div>
    </div>
  </>);
}