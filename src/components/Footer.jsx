const Footer = () => {
    return (
        <footer className="bg-slate-100 border-t border-slate-200 py-4 mt-8 w-full">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
                <span>&copy; {new Date().getFullYear()} copyright: www.mathinenglish.com</span>
            </div>
        </footer>
    );
};

export default Footer;
