import dayjs from 'dayjs';
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