"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import Link from "next/link"
import Image from "next/image"

export default function Form(){

    const initialState = {
        name: "",
        message: "",
        contact: "",
    }

    const [error, setError] = useState("")

    const [sender, setSender] = useState<Email>(initialState)

    const [sucessMessage, setSucessMessage] = useState(false)

    interface Email {
        name: string
        message: string
        contact: string
    }

    function setSenderName(ev: React.ChangeEvent<HTMLInputElement>) {
        setSender({ ...sender, name: ev.target.value})
        
    }

    function setSenderMessage(ev: React.ChangeEvent<HTMLTextAreaElement>) {
        setSender({ ...sender, message: ev.target.value})
        
    }

    function setSenderContact(ev: React.ChangeEvent<HTMLInputElement>) {
        setSender({ ...sender, contact: ev.target.value})
        
    } 

    const templateParams = {
        name: sender.name,
        message: sender.message,
        contact: sender.contact,
    }

    function validateEmail(value: string) {
        if (!value.match(/\w{2,}@[A-Za-z]{2,}\.[A-Za-z]{2,}/)) {
            const err = new Error("E-mail inválido. Favor digitar no formato: nome@email.com")
            err.name = "email"
            throw err
        }
    }

    function validateMessage(value: string) {
        if (!value.match(/\w/)) { //á fazer
            const err: Error = new Error("Favor digitar a mensagem")
            err.name = "message"
            throw err
        }
    }

    function sendEmail(ev: React.FormEvent<HTMLFormElement>) {

        ev.preventDefault()

        try {
            setError("")
            setSucessMessage(false)
            validateEmail(sender.contact)
            validateMessage(sender.message)
            emailjs.send("service_fnpubzr", "template_8pousgu", templateParams, "R6lvdpzoTbfd6EKBX")
            .then((response) => {
                console.log(response.status)
                setSucessMessage(true)
            })
        }
        catch (err: any) {
            setError(err.message)
        }
    }

    return (
        <>
            <div className="mx-6 md:mx-10 space-y-12 md:space-y-0 mb-20">
                <div className="flex justify-center md:justify-end">
                    <div className="flex flex-col mt-24 space-y-10 md:bg-slate-950/25 p-4 rounded-2xl drop-shadow-2xl">
                        <div className="flex justify-center">
                            <p className="text-2xl">Contatos</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col space-y-1 justify-start">
                                <span>E-mail</span> 
                                <a className="text-blue-200 text-sm" href="mailto:devbrunoguimaraes@gmail.com">devbrunoguimaraes@gmail.com</a>
                            </div>
                            <div className="flex flex-col space-y-1 justify-start">
                                <span>Whatsapp</span> 
                                <span className="text-blue-200 text-sm">+55 11 920002725</span>
                            </div>
                            <div className="flex flex-col justify-center mt-4 space-y-4">
                                <div className="flex justify-center">
                                    <span>Conecte-se comigo:</span>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <Link href="https://github.com/brunoguima7" target="_blank"><Image className="drop-shadow-2xl hover:opacity-75" src="/images/github-icon.png" width="32" height="32" alt="Foto de perfil" unoptimized /></Link>
                                    <Link href="https://www.linkedin.com/in/bruno-guimar%C3%A3es-4b6348209/" target="_blank"><Image className="drop-shadow-2xl hover:opacity-75 " src="/images/linkedin-icon.png" width="32" height="32" alt="Foto de perfil" unoptimized /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:hidden">
                    <span className="text-2xl text-blue-200">Ou</span>
                </div>
                <div className="flex flex-col space-y-10">
                    <div className="flex justify-center">
                        <p className="text-2xl md:text-3xl">Contate-me aqui</p>
                    </div>
                    <div className="flex justify-center">
                        <form className="flex flex-col space-y-6 rounded-3xl w-8[19rem] md:w-[49rem] p-4 md:p-8 drop-shadow-2xl border border-blue-950" id="container" onSubmit={sendEmail}>
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-lg">Seu Nome</label>
                                <input
                                    name="name"
                                    className="text-slate-400 rounded-md w-72 md:w-[45rem] placeholder-slate-600 bg-slate-950 h-10 my-2 border-2 border-blue-900"
                                    type="text"
                                    placeholder="Nome para contato"
                                    required
                                    onChange={(ev) => setSenderName(ev)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-lg">E-mail</label>
                                <input
                                    name="email"
                                    className="text-slate-400 rounded-md w-72 md:w-[45rem] placeholder-slate-600 bg-slate-950 h-10 my-2 border-2 border-blue-900"
                                    type="text"
                                    placeholder="recrutador@email.com"
                                    required
                                    onChange={(ev) => setSenderContact(ev)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-lg">Mensagem</label>
                                <textarea
                                    name="message"
                                    className="text-slate-400 rounded-md w-72 md:w-[45rem] placeholder-slate-600 bg-slate-950 h-20 my-2 border-2 border-blue-900"
                                    placeholder="Vamos conversar.."
                                    required
                                    onChange={(ev) => setSenderMessage(ev)}
                                />
                            </div>
                            <div className="flex justify-center">
                                <button className="hover:bg-blue-900 rounded-lg w-44 md:w-[45rem] py-[0.3rem] text-center text-lg bg-[#45C0F6] shadow-lg" type="submit">Enviar</button>
                            </div>
                            {error != null && (
                                <div className="flex justify-center">
                                    <span className="text-red-700">{error}</span>
                                </div>
                            )}
                            {sucessMessage == true && (
                                <div className="flex justify-center">
                                    <p className="text-blue-200">Sua mensagem foi enviada com sucesso, muito obrigado pelo contato!</p>
                                </div>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}