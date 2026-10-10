export default function Footer() {
    return(
        <footer className="flex shrink-0 items-center justify-center bg-black bg-opacity-50 min-h-[4.6rem] w-full px-6 py-7 text-center text-slate-500 text-xs md:text-sm">
            <div>
                <span>© {new Date().getFullYear()} Bruno Guimarães.</span>
            </div>
        </footer>
    )
}
