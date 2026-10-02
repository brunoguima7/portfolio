export default function Footer() {
    return(
        <div className="flex justify-center bg-black bg-opacity-50 h-[4.6rem] w-full text-slate-500 text-xs md:text-sm py-7 ">
            <div>
                <span>© {new Date().getFullYear()} Bruno Guimarães.</span>
            </div>
        </div>
    )
}
