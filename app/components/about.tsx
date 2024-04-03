"use client"

import Link from "next/link"
import Image from "next/image"

export default function About() {

    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col-reverse justify-center xl:flex-row pb-24 md:py-[35vh] px-12 md:px-0 md:h-[100vh]">
                    <div className="md:space-y-12 xl:w-2/5">
                        <div className="space-y-8 md:space-y-20">
                            <div className="flex justify-center xl:justify-start">
                                <h1 className="text-4xl xl:text-5xl flex flex-wrap gap-4">
                                    <span>Prazer,</span> 
                                    <div className="space-x-4">
                                        <span>Sou o</span>
                                        <span className=" text-sky-300 xl:text-white xl:bg-gradient-to-r from-blue-500 to-sky-300">Bruno</span>
                                    </div>
                                </h1>
                            </div>
                            <div className="md:mx-16 xl:mx-0">
                                <p className="text-md text-blue-200 xl:text-lg xl:w-3/4">
                                    Sou um Desenvolvedor com foco em Front-End, que ama criar e desenvolver sites e interfaces.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row">
                            <div className="flex justify-center md:justify-start md:mx-16 xl:mx-4 space-x-4 mt-12 md:mt-0">
                                <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-500 hover:to-sky-300 rounded-xl w-32 py-2 xl:w-36 text-sm xl:text-lg text-center px-4 xl:py-1 drop-shadow-lg border-2 border-slate-950" >Contate-me</Link>
                                <Link href="https://www.dropbox.com/scl/fi/fzz29m1r3rka8zbe6zc5p/Curriculo.pdf?rlkey=ymyjgzx5s4ob3ld9i0r0jme4y&dl=1" className="hover:bg-sky-400 rounded-xl w-32 py-2 xl:w-36 text-sm max-[365px]:text-xs xl:text-lg text-center px-4 xl:py-1 drop-shadow-lg border-2 border-sky-400" >Baixar CV</Link>
                            </div>
                            <div className="flex justify-end md:justify-center space-x-5 mr-4 mt-8 md:mt-0 md:ml-8">
                                <Link href="https://github.com/brunoguima7" target="_blank"><Image className="drop-shadow-2xl hover:opacity-75" src="/images/github-icon.png" width="35" height="35" alt="Foto de perfil" unoptimized /></Link>
                                <Link href="https://www.linkedin.com/in/bruno-guimar%C3%A3es-4b6348209/" target="_blank"><Image className="drop-shadow-2xl hover:opacity-75" src="/images/linkedin-icon.png" width="35" height="35" alt="Foto de perfil" unoptimized /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-center pt-28 mb-16 md:pt-0">
                            <Image className="rounded-full drop-shadow-2xl" src="/images/pfp.png" width="250" height="250" alt="Foto de perfil" unoptimized />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-32 bg-black bg-opacity-50 px-12 py-16 md:py-[25vh] h-110 md:h-[100vh]" id="about">
                    <div className="text-center">
                        <h1 className="text-3xl xl:text-5xl">Sobre Mim</h1>
                    </div>
                    <div className="flex flex-col-reverse xl:flex-row justify-center xl:space-x-12">
                        <div className="flex items-center justify-center">
                            <ul className="flex flex-wrap gap-x-3 text-center justify-center md:w-60">
                                <li className="text-black bg-yellow-400 w-28 drop-shadow-lg rounded-md md:mx-3 my-2">javascript</li>
                                <li className="text-white bg-sky-600 w-28 drop-shadow-lg rounded-md my-2">typescript</li>
                                <li className="text-black bg-cyan-400 w-20 drop-shadow-lg rounded-md my-2">react</li>
                                <li className="text-white bg-black w-20 drop-shadow-lg rounded-md my-2">next.js</li>
                                <li className="text-white bg-orange-600 drop-shadow-lg w-16 rounded-md my-2">html</li>
                                <li className="text-white bg-blue-700 w-14 drop-shadow-lg rounded-md my-2">css</li>
                                <li className="text-cyan-400 bg-white w-28 drop-shadow-lg rounded-md my-2">tailwind</li>
                            </ul>
                        </div>
                        <div className="flex items-stretch text-blue-200 xl:text-lg xl:w-3/5">
                            <div className="self-center space-y-10 md:space-y-20 mb-10 max-[365px]:text-sm">
                                <div>
                                    <p>
                                        Sou um Desenvolvedor Front-End Formado em Análise e Desenvolvimento de Sistemas, e estou atualmente
                                        trabalhando em projetos autônomos com o objetivo de aprimorar minhas habilidades e conseguir minha
                                        primeira vaga na área da Programação.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Estudo desde 2022, focado no desenvolvimento Web com JavaScript/Typescript,
                                        junto ao React e aos Principais frameworks e bibliotecas como Next, Node, Tailwind e etc... Além da
                                        plena utilização de ferramentas de versionamento de código, API REST e Bancos de dados.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}