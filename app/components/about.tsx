"use client"

import Link from "next/link"
import Image from "next/image"

export default function About() {

    return (
        <>
            <div className="flex flex-col space-y-12 justify-center mx-12 mt-28 xl:mx-16">
                <div className="flex flex-col-reverse justify-center mt-8 xl:flex-row xl:mt-32">
                    <div className="space-y-12 xl:w-1/2">
                        <div className="flex justify-center mt-4 xl:justify-start">
                            <h1 className="text-4xl xl:text-5xl">
                                Prazer, Sou o
                                <span className="ml-4 text-sky-300 xl:text-white xl:bg-gradient-to-r from-blue-500 to-sky-300">Bruno</span>
                            </h1>
                        </div>
                        <div>
                            <p className="text-md text-blue-200 xl:text-lg xl:w-3/4">
                                Sou um Desenvolvedor com foco em Front-End, que ama criar e desenvolver sites e interfaces.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-start xl:ml-4 space-x-4" id="about">
                            <Link href="/contact" className="hover:brightness-90 rounded-xl w-32 py-2 xl:w-40 text-sm xl:text-lg text-center px-4 xl:py-1 drop-shadow-lg border-2 border-slate-950 bg-gradient-to-r from-blue-500 to-sky-300" >Contate-me</Link>
                            <Link href="https://drive.usercontent.google.com/u/0/uc?id=1NlmZJuKC1XG4QSGIqmfwgx6cX76gIyMS&export=download" className="hover:bg-sky-300 rounded-xl w-32 py-2 xl:w-40 text-sm xl:text-lg text-center px-4 xl:py-1 drop-shadow-lg border-2 border-sky-300" >Baixar CV</Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <Image className="rounded-full drop-shadow-2xl mb-8 xl:mb-0" src="/images/perfil.png" width="250" height="250" alt="Foto de perfil" unoptimized />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-3xl xl:text-5xl mt-12 xl:mt-40 xl:mb-16">Sobre Mim</h1>
                </div>
                <div className="flex flex-col xl:flex-row justify-center xl:space-x-12">
                    <div className="flex justify-center">
                        <ul className="hidden xl:flex flex-wrap space-x-3 text-center justify-center w-60 xl:max-2xl:py-24 2xl:py-10">
                            <li className="text-black bg-yellow-400 w-28 drop-shadow-lg rounded-md ml-3 my-2">javascript</li>
                            <li className="text-white bg-sky-600 w-28 drop-shadow-lg rounded-md my-2">typescript</li>
                            <li className="text-black bg-cyan-400 w-24 drop-shadow-lg rounded-md my-2">react.js</li>
                            <li className="text-white bg-black w-20 drop-shadow-lg rounded-md my-2">next.js</li>
                            <li className="text-white bg-orange-600 drop-shadow-lg w-16 rounded-md my-2">html</li>
                            <li className="text-white bg-blue-700 w-14 drop-shadow-lg rounded-md my-2">css</li>
                            <li className="text-cyan-400 bg-white w-32 drop-shadow-lg rounded-md my-2">tailwind.css</li>
                        </ul>
                    </div>
                    <div className="text-md text-blue-200 xl:text-lg xl:w-3/5 space-y-8 xl:space-y-16">
                        <p>
                            Sou um Desenvolvedor Front-End Formado em Análise e Desenvolvimento de Sistemas, e estou atualmente
                            trabalhando em projetos autônomos com o objetivo de aprimorar minhas habilidades e conseguir minha
                            primeira vaga nessa incrível área da Programação.
                        </p>
                        <p>
                            Estudo desde o primeiro semestre de 2022, focado no desenvolvimento Web com JavaScript/Typescript,
                            junto ao React e aos Principais frameworks e bibliotecas como Next, Node, Tailwind e etc... Além da
                            plena utilização de ferramentas de versionamento de código, integração de APIs e Bancos de dados.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}