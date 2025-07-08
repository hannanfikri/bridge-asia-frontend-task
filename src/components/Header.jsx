import { useTranslation } from "react-i18next";

export const Header = () => {
    const { t } = useTranslation("header");
    return (
        <header className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 shadow-md py-6 w-full">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg w-full">
                    {t('title')}
                </h1>
            </div>
        </header>
    );
};