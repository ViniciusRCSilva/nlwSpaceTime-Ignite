import { User } from "lucide-react";
import Image from "next/image";

import Logo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Esquerda */}
      <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 rounded-full blur-full animate-pulse-slow" />

        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

        {/* Entrar */}
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="text-sm leading-snug max-w-[140px]"><span className="underline">Crie sua conta</span> e salve suas memórias!</p>
        </a>

        {/* Sessão Hero */}
        <div className="space-y-5">
          <Image src={Logo} alt="NLW Logo" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="mt-5 text-[2.5rem] font-bold leading-tight text-gray-50">Sua cápsula do tempo</h1>
            <p className="text-lg leading-relaxed">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          </div>

          <a className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600 transition-colors" href="">CADASTRAR LEMBRANÇA</a>
        </div>

        {/* Copyright */}
        <div>
          Feito com 💜 no NLW da <a target="_blank" rel="noreferrer" className="underline hover:text-gray-50 transition-colors" href="https://rocketseat.com.br">Rocketseat</a>
        </div>
      </div>

      {/* Direita */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, começe a <a href="" className="underline hover:text-gray-50 transition-colors">criar agora</a>!
          </p>
        </div>
      </div>
    </main>
  )
}
