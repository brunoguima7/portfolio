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
      <div className={`${isMenuOpen ? 'w-full h-full bg-black fixed z-20 opacity-60 top-0 md:hidden' : 'hidden'}`} onClick={changeMenu}></div>
      <header className={`${isMenuOpen ? 'flex-col h-48 md:h-[4.3rem] md:flex-row' : 'h-[4.3rem] flex-row '} text-md py-2 flex px-5 justify-between fixed w-full top-0 z-20 drop-shadow-md`}>
        <div className="flex">
          <Link href="/" onClick={()=> setIsMenuOpen(false)}>
            <Image src="/favicon.ico" alt="Logotipo com as iniciais de Bruno Guimarães." width="50" height="50" unoptimized />
          </Link>
          <button className="md:hidden rounded-md my-2 fixed right-3" id="menu" onClick={changeMenu}>
            <MenuIcon className="fill-white w-10 h-10" />
          </button>
        </div>
        <nav className="hidden md:flex gap-10 itens-stretch">
          <Link href="/#portfolio" className="hover:text-slate-300 rounded-lg text-center py-1 self-center">Projetos</Link>
          <Link href="/#about" className="hover:text-slate-300 rounded-lg text-center py-1 self-center">Sobre mim</Link>
          <Link href="/contact" className="hover:bg-blue-900 rounded-lg w-32 text-center px-4 py-1 bg-[#45C0F6] shadow-lg ml-4 mr-12 text-lg self-center">Contato</Link>
        </nav>
        {isMenuOpen == true && (
          <div className="flex">
            <nav className="md:hidden flex flex-col text-lg mb-10 space-y-4 fixed right-4 top-20 text-right">
              <Link href="/#about" className="text-blue-200" onClick={changeMenu}>Sobre mim</Link>
              <Link href="/contact" className="text-blue-200" onClick={changeMenu}>Contato</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
