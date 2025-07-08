import { useTranslation } from "react-i18next";

export const Header = () => {
    const { t } = useTranslation("header");
    return (
        <header className="bg-slate-50 py-4 border-b border-slate-200 w-full">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 text-center">
                <h1 className="text-2xl font-bold text-slate-900 w-full">{t('title')}</h1>
            </div>
        </header>
    );
};