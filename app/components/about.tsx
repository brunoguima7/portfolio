"use client"

import Link from "next/link"
import Image from "next/image"

export default function About() {

    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col-reverse justify-center xl:flex-row py-16 md:pt-64 md:pb-48 px-12 md:px-0">
                    <div className="md:space-y-12 xl:w-2/5">
                        <div className="space-y-8 md:space-y-20">
                            <div className="flex justify-center xl:justify-start">
                                <h1 className="text-4xl xl:text-5xl flex flex-wrap gap-4">
                                    <span>Olá,</span>
                                    <div className="space-x-5 md:space-x-7">
                                        <span>sou o</span>
                                        <span className="max-md:bg-clip-text text-transparent md:text-white bg-gradient-to-r from-blue-500 to-cyan-300">Bruno</span>
                                    </div>
                                </h1>
                            </div>
                            <div className="md:mx-16 xl:mx-0">
                                <p className="text-md text-blue-200 xl:text-lg xl:w-3/4">
                                    Desenvolvedor Fullstack que transforma desafios em soluções tecnológicas que geram impacto real nos negócios.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row">
                            <div className="flex justify-center md:justify-start md:mx-16 xl:mx-4 space-x-4 mt-12 md:mt-0">
                                <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-500 hover:to-sky-300 rounded-xl w-32 py-2 xl:w-36 text-sm xl:text-lg text-center px-4 xl:py-1 drop-shadow-lg border-2 border-slate-950" >Contate-me</Link>
                                <Link href="https://www.dropbox.com/scl/fi/hmzdxikpjndhxzowbplke/Curr-culo.pdf?rlkey=wfwm80hhkvzrzj7retaprovqz&st=yy8cm4om&dl=1" className="hover:bg-sky-400 rounded-xl w-32 py-2 xl:w-36 text-sm max-[365px]:text-xs xl:text-lg text-center px-4 xl:py-1 drop-shadow-lg border-2 border-sky-400" >Baixar CV</Link>
                            </div>
                            <div className="flex justify-end md:justify-center space-x-5 mr-4 mt-8 md:mt-0 md:ml-8">
                                <Link href="https://github.com/brunoguima7" target="_blank"><Image className="drop-shadow-2xl hover:opacity-75" src="/images/github-icon.png" width="35" height="35" alt="Foto de perfil" unoptimized /></Link>
                                <Link href="https://www.linkedin.com/in/bruno-guimar%C3%A3es77/" target="_blank"><Image className="drop-shadow-2xl hover:opacity-75" src="/images/linkedin-icon.png" width="35" height="35" alt="Foto de perfil" unoptimized /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-center pt-12 mb-16 md:pt-0">
                            <Image className="rounded-full drop-shadow-2xl" src="/images/pfp.jpg" width="270" height="270" alt="Foto de perfil" unoptimized />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-16 md:space-y-32 bg-black bg-opacity-50 px-12 pb-16 pt-24 md:py-28" id="about">
                    <div className="text-center">
                        <h1 className="text-3xl xl:text-5xl">Sobre Mim</h1>
                    </div>
                    
                    {/* Bio + Habilidades */}
                    <div className="flex flex-col-reverse xl:flex-row justify-center xl:space-x-12">
                        <div className="flex items-center justify-center">
                            <ul className="flex flex-wrap gap-x-3 text-center justify-center md:w-96">
                                <li className="text-black bg-yellow-400 px-3 py-1 drop-shadow-lg rounded-md my-2 text-sm">javascript</li>
                                <li className="text-white bg-sky-600 px-3 py-1 drop-shadow-lg rounded-md my-2 text-sm">typescript</li>
                                <li className="text-black bg-cyan-400 px-3 py-1 drop-shadow-lg rounded-md my-2 text-sm">react</li>
                                <li className="text-white bg-black px-3 py-1 drop-shadow-lg rounded-md my-2 text-sm">next.js</li>
                                <li className="text-white bg-emerald-600 px-3 py-1 drop-shadow-lg rounded-md my-2 text-sm">node.js</li>
                                <li className="text-white bg-blue-800 px-3 py-1 drop-shadow-lg rounded-md my-2 text-sm">python</li>
                                <li className="text-white bg-orange-500 px-3 py-1 drop-shadow-lg rounded-md my-2 text-sm">SQL</li>
                                <li className="text-cyan-400 bg-white px-3 py-1 drop-shadow-lg rounded-md my-2 text-sm">tailwind</li>
                                <li className="text-white bg-gray-600 px-3 py-1 drop-shadow-lg rounded-md my-2 text-sm">selenium</li>
                                <li className="text-white bg-blue-950 px-3 py-1 drop-shadow-lg rounded-md my-2 text-sm">git</li>
                                <li className="text-white bg-red-600 px-3 py-1 drop-shadow-lg rounded-md my-2 text-sm">figma</li>
                            </ul>
                        </div>
                        <div className="flex items-stretch text-blue-200 xl:text-lg xl:w-3/5">
                            <div className="self-center space-y-10 md:space-y-14 mb-10 max-[365px]:text-sm">
                                <div>
                                    <p>
                                        Sou desenvolvedor fullstack formado em Análise e Desenvolvimento de Sistemas, cursando pós-graduação em Fullstack Development. Combino uma base técnica sólida com visão prática de negócios, construída a partir de experiências em áreas administrativa, de processos e TI.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Atuo como Técnico de TI desenvolvendo aplicações para eficiência operacional, participando do ciclo completo de desenvolvimento: lógica de negócio, backend e frontend. Também crio automações em Python com Selenium e Pandas, reduzindo tarefas manuais e otimizando fluxos.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Meu objetivo é unir desenvolvimento, automação e visão de negócio para criar soluções que gerem valor e impacto positivo nas organizações.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experiências */}
                    <div className="border-t border-blue-500 border-opacity-30 pt-16">
                        <h2 className="text-2xl xl:text-3xl mb-12 text-center">Experiência Profissional</h2>
                        <div className="space-y-10 max-w-4xl mx-auto">
                            <div className="bg-gradient-to-r from-blue-950 to-blue-900 bg-opacity-30 p-6 rounded-lg border border-blue-500 border-opacity-20 hover:border-opacity-50 transition">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-300">Técnico de TI</h3>
                                        <p className="text-blue-200 text-sm">Desenvolvimento e manutenção de aplicações</p>
                                    </div>
                                    <span className="text-sm text-blue-400 whitespace-nowrap">Atual</span>
                                </div>
                                <ul className="text-blue-200 space-y-2 text-sm md:text-base">
                                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span> Desenvolvimento fullstack: backend com Node.js e frontend com React/Next.js</li>
                                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span> Criação de automações em Python utilizando Selenium e Pandas para otimização de processos</li>
                                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span> Gestão de projetos com foco em usabilidade, inovação e segurança da informação</li>
                                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span> Participação em todo ciclo de desenvolvimento, da lógica de negócio à interface</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-r from-blue-950 to-blue-900 bg-opacity-30 p-6 rounded-lg border border-blue-500 border-opacity-20 hover:border-opacity-50 transition">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-300">Analista de Processos</h3>
                                        <p className="text-blue-200 text-sm">Análise, melhoria contínua e eficiência operacional</p>
                                    </div>
                                    <span className="text-sm text-blue-400 whitespace-nowrap">Anterior</span>
                                </div>
                                <ul className="text-blue-200 space-y-2 text-sm md:text-base">
                                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span> Análise de dados e organização de informações para identificar gargalos operacionais</li>
                                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span> Proposta e implementação de soluções tecnológicas para eficiência</li>
                                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span> Visão ampla de operações e processos de negócio</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-r from-blue-950 to-blue-900 bg-opacity-30 p-6 rounded-lg border border-blue-500 border-opacity-20 hover:border-opacity-50 transition">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-300">Analista Administrativo</h3>
                                        <p className="text-blue-200 text-sm">Gestão administrativa e processos</p>
                                    </div>
                                    <span className="text-sm text-blue-400 whitespace-nowrap">Anterior</span>
                                </div>
                                <ul className="text-blue-200 space-y-2 text-sm md:text-base">
                                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span> Desenvolvimento de habilidades em análise de dados e organização</li>
                                    <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">→</span> Base para compreensão completa dos processos de negócio</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Educação */}
                    <div className="border-t border-blue-500 border-opacity-30 pt-16">
                        <h2 className="text-2xl xl:text-3xl mb-12 text-center">Educação</h2>
                        <div className="space-y-8 max-w-4xl mx-auto">
                            <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 bg-opacity-30 p-6 rounded-lg border border-cyan-500 border-opacity-20 hover:border-opacity-50 transition">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                                    <div>
                                        <h3 className="text-xl font-semibold text-cyan-300">Pós-Graduação em Fullstack Development</h3>
                                        <p className="text-cyan-200 text-sm">Em andamento</p>
                                    </div>
                                    <span className="text-sm text-cyan-400 whitespace-nowrap">2024 - Presente</span>
                                </div>
                                <p className="text-cyan-200 text-sm mt-3">Especialização em desenvolvimento fullstack moderno com foco em arquitetura de software, padrões de design e práticas de desenvolvimento escalável.</p>
                            </div>

                            <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 bg-opacity-30 p-6 rounded-lg border border-cyan-500 border-opacity-20 hover:border-opacity-50 transition">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                                    <div>
                                        <h3 className="text-xl font-semibold text-cyan-300">Análise e Desenvolvimento de Sistemas</h3>
                                        <p className="text-cyan-200 text-sm">Tecnólogo</p>
                                    </div>
                                    <span className="text-sm text-cyan-400 whitespace-nowrap">2022 - 2024</span>
                                </div>
                                <p className="text-cyan-200 text-sm mt-3">Formação técnica em análise de sistemas, desenvolvimento de software, banco de dados, engenharia de software e conceitos fundamentais de programação.</p>
                            </div>
                        </div>
                    </div>

                    {/* Habilidades Técnicas Detalhadas */}
                    <div className="border-t border-blue-500 border-opacity-30 pt-16">
                        <h2 className="text-2xl xl:text-3xl mb-12 text-center">Habilidades Técnicas</h2>
                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            <div>
                                <h3 className="text-lg font-semibold text-blue-300 mb-4">Frontend</h3>
                                <ul className="text-blue-200 space-y-2 text-sm md:text-base">
                                    <li>• React & Next.js</li>
                                    <li>• JavaScript/TypeScript</li>
                                    <li>• HTML5 & CSS3</li>
                                    <li>• Tailwind CSS</li>
                                    <li>• Responsive Design</li>
                                    <li>• UI/UX Focused</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-cyan-300 mb-4">Backend</h3>
                                <ul className="text-blue-200 space-y-2 text-sm md:text-base">
                                    <li>• Node.js</li>
                                    <li>• Express.js</li>
                                    <li>• APIs REST</li>
                                    <li>• Bancos SQL</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-orange-300 mb-4">Automação & Scripts</h3>
                                <ul className="text-blue-200 space-y-2 text-sm md:text-base">
                                    <li>• Python</li>
                                    <li>• Selenium</li>
                                    <li>• Pandas</li>
                                    <li>• Automação de Processos</li>
                                    <li>• Web Scraping</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-sky-300 mb-4">Ferramentas & Outros</h3>
                                <ul className="text-blue-200 space-y-2 text-sm md:text-base">
                                    <li>• Git & GitHub</li>
                                    <li>• Figma</li>
                                    <li>• IA's</li>
                                    <li>• Docker</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
