"use client"

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils';
import toast from 'react-hot-toast';
import Link from "next/link"
import Image from "next/image"
import { FormData } from '@/lib/types'; // Importando do novo local centralizado

export default function Form() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    const promise = sendEmail(data);

    toast.promise(promise, {
      loading: 'Enviando sua mensagem...',
      success: () => {
        reset(); 
        return 'Mensagem enviada com sucesso! Obrigado pelo contato.';
      },
      error: 'Algo deu errado. Por favor, tente novamente.',
    });
  }

  return (
    <>
      <div className="flex flex-col xl:flex-row-reverse mx-6 md:mx-10 space-y-12 xl:space-y-0 mb-20 xl:h-[84vh]">
        {/* Seção de contatos */}
        <div className="flex justify-center md:justify-end h-auto md:h-[425px]">
          <div className="flex flex-col mt-12 md:mt-24 space-y-10 md:bg-slate-950/25 p-4 rounded-2xl drop-shadow-2xl">
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
                  <Link href="https://github.com/brunoguima7" target="_blank"><Image className="drop-shadow-2xl hover:opacity-75" src="/images/github-icon.png" width="32" height="32" alt="GitHub icon" unoptimized /></Link>
                  <Link href="https://www.linkedin.com/in/bruno-guimar%C3%A3es77/" target="_blank"><Image className="drop-shadow-2xl hover:opacity-75 " src="/images/linkedin-icon.png" width="32" height="32" alt="LinkedIn icon" unoptimized /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:hidden">
          <span className="text-2xl text-blue-200">Ou</span>
        </div>

        {/* Formulário */}
        <div className="xl:absolute xl:left-1/3 xl:right-1/3 xl:pt-24">
          <div className="flex flex-col space-y-10">
            <div className="flex justify-center">
              <p className="text-2xl md:text-3xl">Contate-me aqui</p>
            </div>
            <div className="flex justify-center">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-4 rounded-3xl w-full max-w-lg p-4 md:p-8 drop-shadow-2xl border border-blue-950"
                id="container"
              >
                {/* Honeypot field (hidden) */}
                <input
                  type="text"
                  {...register('honeypot')}
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Nome */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-lg mb-1">Seu Nome</label>
                  <input
                    id="name"
                    className="text-slate-400 rounded-md placeholder-slate-600 bg-slate-950 h-10 border-2 border-blue-900 focus:border-cyan-400 focus:outline-none px-3 transition"
                    type="text"
                    placeholder="Nome para contato"
                    {...register('name', { required: 'Seu nome é obrigatório' })}
                  />
                  {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                </div>

                {/* E-mail */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-lg mb-1">E-mail</label>
                  <input
                    id="email"
                    className={`text-slate-400 rounded-md placeholder-slate-600 bg-slate-950 h-10 border-2 ${errors.email ? 'border-red-500' : 'border-blue-900'} focus:border-cyan-400 focus:outline-none px-3 transition`}
                    type="email"
                    placeholder="seu@email.com"
                    {...register('email', {
                      required: 'Seu e-mail é obrigatório',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Por favor, insira um e-mail válido',
                      },
                    })}
                  />
                  {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                </div>

                {/* Mensagem */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-lg mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    className="text-slate-400 rounded-md placeholder-slate-600 bg-slate-950 h-24 border-2 border-blue-900 focus:border-cyan-400 focus:outline-none p-3 transition"
                    placeholder="Vamos conversar..."
                    {...register('message', { required: 'A mensagem não pode estar vazia' })}
                  />
                  {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
                </div>
                
                {/* Botão de Envio */}
                <div className="flex justify-center pt-2">
                  <button
                    disabled={isSubmitting}
                    className="hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg w-full py-2 text-center text-lg bg-[#45C0F6] shadow-lg transition"
                    type="submit"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
