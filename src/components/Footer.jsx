import { useTranslation, Trans } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation("footer");
    return (
        <footer className="bg-slate-100 border-t border-slate-200 py-4 mt-8 w-full">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-center text-slate-500 text-sm">
                <span>&copy; {new Date().getFullYear()} <Trans i18nKey="copyright" ns="footer" components={{ a: <a className="underline hover:text-blue-600 transition-colors" href="https://www.mathinenglish.com" target="_blank" rel="noopener noreferrer" /> }} />
                </span>
            </div>
        </footer>
    );
};
