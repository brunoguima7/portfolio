"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import MenuIcon from "./icons/menuicon"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function changeMenu() {
    if (isMenuOpen == true) {
      setIsMenuOpen(false)
    } else {
      setIsMenuOpen(true)
    }
  }

  return (
    <>
    <header className={`${isMenuOpen ? 'flex-col h-48 md:h-[4.3rem] md:flex-row' : 'h-[4.3rem] flex-row '} text-md py-2 flex px-5 justify-between fixed w-full top-0 z-20 drop-shadow-md`}>
        <div className="flex">
          <Link href="/" onClick={()=> setIsMenuOpen(false)}>
            <Image src="/favicon.ico" alt="Logotipo com as iniciais de Bruno Guimarães." width="50" height="50" unoptimized />
          </Link>
          <button className="md:hidden rounded-md my-1 fixed right-3" id="menu" onClick={changeMenu}>
            <MenuIcon className="fill-white w-10 h-10" />
          </button>
        </div>
        <nav className="hidden md:flex gap-5 text-lg">
          <Link href="/#about" className="hover:text-slate-300 rounded-lg w-36 text-center px-4 py-1 my-2">Sobre mim</Link>
          <Link href="/contact" className="hover:bg-blue-900 rounded-lg w-32 text-center px-4 py-1 bg-[#45C0F6] my-2 shadow-lg mr-12">Contato</Link>
        </nav>
        {isMenuOpen == true && (
          <div className="flex">
            <nav className="md:hidden flex flex-col text-lg mb-10 space-y-3 fixed right-4 top-20 text-right">
              <Link href="/#about" className="text-blue-200" onClick={changeMenu}>Sobre mim</Link>
              <Link href="/contact" className="text-blue-200" onClick={changeMenu}>Contato</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
