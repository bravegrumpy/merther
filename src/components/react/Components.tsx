import dayjs from 'dayjs';
import styles from "@/components/react/Components.module.css"

import { Button } from "@/components/react/ui/button";
import { AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/react/ui/alert-dialog"

export function Banner() {
    return(<>
        <p className="banner">For best results, view this content on a screen with resolution at least 1440px x 1080px</p>
    </>)
}

export function Footer({ footerClass, copyrightClass, disclaimerClass }: { footerClass?: string, copyrightClass?: string, disclaimerClass?: string }) {
    const today = dayjs();
    return (<>
    <footer className={footerClass}>
        <p className={copyrightClass}>
            Copyright &copy; {today.format('YYYY')}
            <a href="www.bravegrumpy.com" target='_blank'> Bravegrumpy</a>
        </p>
        <p className={disclaimerClass} style={{ fontSize: '0.85rem', width: '35ch', textAlign: 'center'}}>
            This is an unofficial fan site and is not affiliated with <em>BBC Merlin</em> or <abbr title='Organization for Transformative Works'><a href="https://transformativeworks.org" target='_blank'>OTW</a></abbr>
        </p>
        <p>All Rights Reserved</p>
    </footer>
    </>);
}

export function FallbackContent({heading, message, children }:{heading?: string | React.ReactNode; message?: string | React.ReactNode; children?: React.ReactNode}) {
    return (<>
    {heading 
        ? <>{ 
            typeof(heading) === 'string' 
            ? <h2>{heading}</h2> 
            : <>{heading}</>
            }</> 
        : <></>}
    <br />
    {message ?? <></>}
    <br />
    {children}
    </>);
}

export function AdultContentDialog() {
    return (<>
        <AlertDialog defaultOpen>
            <AlertDialogTrigger asChild>
                <Button variant={'default'} className='bg-[beige]'>Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className='bg-[url(/api/images/textures/TCom_PaperPage0016_2_masked_XXL_cropped.png)] bg-center bg-contain bg-origin-border bg-linear-to-br from-merther-header/10 to-violet-200/5'>
                <AlertDialogHeader>
                    <AlertDialogTitle className='text-9xl'>Adult Content</AlertDialogTitle>
                    <AlertDialogDescription className='text-section-100' asChild>
                        <h3>Do you consent to see adult content?</h3>
                        <p>By clicking continue, you are agreeing that you are over the age of 18, adn consent to view adult content.</p>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                        <Button className='bg-sky-400' onClick={() => {history.back()}}>Go Back</Button>
                    </AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </>);
}

export function UL({ children }: { children?: React.ReactNode }){
    return(<>
        <ul className={styles.unorderedList}>
            {children}
        </ul>
    </>);
}
export function LI({children}: {children?: React.ReactNode}) {
    return(<>
        <li className={styles.listItem}>{children}</li>
    </>);
}
export function DL({children}:{children?: React.ReactNode}){
    return (<>
        <dl className={styles.dictList}>
            {children}
        </dl>
    </>)
}
export function DT({children}:{children?: React.ReactNode}) {
    return(<>
        <dt className={styles.dictTerm}>
            {children}
        </dt>
    </>);
}
export function DD({children}:{children?: React.ReactNode}) {
    return (<>
        <dd className={styles.dictDef}>{children}</dd>
    </>);
}
export function A({children, ...props}: {children?: React.ReactNode}) {
    return (<>
        <a className={styles.anchor} {...props}>{children}</a>
    </>);
}
export function H1({children}: {children?: React.ReactNode}){
    return(<>
        <h1>{children}</h1>
    </>);
}
export function H2({children}: {children?: React.ReactNode}){
    return(<>
        <h2>{children}</h2>
    </>);
}
export function H3({children}: {children?: React.ReactNode}){
    return(<>
        <h3>{children}</h3>
    </>);
}
export function H4({children}: {children?: React.ReactNode}){
    return(<>
        <h4>{children}</h4>
    </>);
}
export function H5({children}: {children?: React.ReactNode}){
    return(<>
        <h5>{children}</h5>
    </>);
}
export function H6({children}: {children?: React.ReactNode}){
    return(<>
        <h6>{children}</h6>
    </>);
}