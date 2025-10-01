import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contato() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    if (
      form.name.trim() === "" ||
      form.email.trim() === "" ||
      form.message.trim() === ""
    ) {
      setEnviado(false);
      setErro("Por favor, preencha todos os campos!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setEnviado(false);
      setErro("Digite um e-mail válido!");
      return;
    }
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  }

  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      {/* Fundo animado */}
      <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#e3f0fb] via-[#fff1f2] to-[#ffd6d6]" />
      {/* Avatar animado */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 z-10">
        <img
          src="/src/assets/imagens/logo.png"
          alt="Avatar Portal HC"
          className="w-28 h-28 rounded-full shadow-lg border-4 border-[#1976d2] animate-bounce"
        />
      </div>
      <header className="w-full fixed top-0 left-0 z-40">
        <div
          className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 rounded-b-2xl shadow-lg border-b border-[#bbdefb]/60"
          style={{
            minHeight: 64,
            backdropFilter: "blur(8px)",
            background: "linear-gradient(120deg, #e3f0fb 0%, #fff1f2 50%, #ffd6d6 100%)",
          }}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/src/assets/imagens/logo.png"
              alt="Logo do Site"
              className="h-12 sm:h-14 w-auto drop-shadow-lg"
              style={{ minWidth: 48, minHeight: 48, maxHeight: 56 }}
            />
            <span className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-[#1976d2] to-[#d32f2f] bg-clip-text text-transparent select-none hidden sm:inline">
              Portal HC
            </span>
          </div>
          <nav className="flex gap-6 sm:gap-8">
            <Link to="/" className="font-semibold text-xl text-[#1976d2] hover:text-[#d32f2f] transition bg-clip-text">
              Início
            </Link>
            <Link to="/faq" className="font-semibold text-xl text-[#1976d2] hover:text-[#d32f2f] transition bg-clip-text">
              Perguntas
            </Link>
            <Link to="/integrantes" className="font-semibold text-xl text-[#1976d2] hover:text-[#d32f2f] transition bg-clip-text">
              Integrantes
            </Link>
            <Link to="/contato" className="font-semibold text-xl text-[#1976d2] hover:text-[#d32f2f] transition bg-clip-text">
              Contato
            </Link>
          </nav>
        </div>
      </header>
      <main className="max-w-3xl mx-auto pt-40 pb-32 px-2 sm:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-12" /> {/* Espaço extra entre avatar e título */}
          <h1 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-[#1976d2] to-[#d32f2f] bg-clip-text text-transparent drop-shadow text-center">
            <span className="inline-block mr-8">Fale Conosco!</span>
          </h1>
        </div>
        <p className="text-xl text-[#1976d2] text-center mb-12 font-semibold">
          Sua mensagem é importante para nós. <br />
          <span className="text-[#d32f2f]">Vamos responder rapidinho!</span>
        </p>
        <div className="flex flex-col md:flex-row gap-10 bg-white/80 rounded-3xl shadow-xl border-2 border-[#1976d2]/20 p-8">
          <div className="flex-1 mb-8 md:mb-0 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#1976d2] mb-4 flex items-center gap-2">
              <FaPaperPlane className="text-[#d32f2f]" /> Contato direto
            </h2>
            <ul className="space-y-4 text-[#1976d2] font-medium">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#d32f2f]" />
                <span>
                  <span className="font-bold">E-mail:</span>{" "}
                  <a href="mailto:contato@portalhc.com" className="underline hover:text-[#d32f2f]">contato@portalhc.com</a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#d32f2f]" />
                <span>
                  <span className="font-bold">Telefone:</span>{" "}
                  <a href="tel:+5511999999999" className="underline hover:text-[#d32f2f]">(11) 99999-9999</a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#d32f2f]" />
                <span>
                  <span className="font-bold">Endereço:</span> Av. Exemplo, 123 - São Paulo, SP
                </span>
              </li>
            </ul>
            <div className="mt-8 text-[#1976d2] text-lg font-semibold">
              <span className="bg-[#e3f0fb] px-3 py-1 rounded-xl shadow">
                Atendimento: Seg a Sex, 8h às 18h
              </span>
            </div>
          </div>
          <form className="flex-1 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name" className="font-semibold text-[#1976d2]">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              required
              className="border border-[#bbdefb] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
              value={form.name}
              onChange={handleChange}
            />

            <label htmlFor="email" className="font-semibold text-[#1976d2]">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
              className="border border-[#bbdefb] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
              value={form.email}
              onChange={handleChange}
            />

            <label htmlFor="message" className="font-semibold text-[#1976d2]">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Digite sua mensagem"
              required
              className="border border-[#bbdefb] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976d2] resize-none"
              value={form.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-[#1976d2] to-[#d32f2f] text-white font-bold py-2 rounded-lg shadow hover:scale-105 transition flex items-center justify-center gap-2"
            >
              <FaPaperPlane /> Enviar
            </button>
            {erro && (
              <span className="text-red-600 font-semibold mt-2 animate-shake block">
                {erro}
              </span>
            )}
            {enviado && (
              <span className="text-green-600 font-semibold mt-2 animate-pulse">
                Mensagem enviada! Obrigado pelo contato.
              </span>
            )}
          </form>
        </div>
      </main>
      <footer
        className="z-10 flex flex-col md:flex-row justify-center md:gap-16 items-center h-auto md:h-20 rounded-t-2xl text-[#1976d2] text-lg shadow-inner fixed bottom-0 left-0 w-full border-t border-[#bbdefb]"
        style={{
          background: "linear-gradient(120deg, #e3f0fb 0%, #fff1f2 50%, #ffd6d6 100%)",
          backdropFilter: "blur(8px)",
          padding: "1rem 0",
        }}
      >
        <div className="flex gap-8">
          <Link to="/contato" className="hover:underline underline-offset-4 font-semibold text-[#1976d2]">
            Contato
          </Link>
          <Link to="/integrantes" className="hover:underline underline-offset-4 font-semibold text-[#1976d2]">
            Integrantes
          </Link>
          <Link to="/redes-sociais" className="hover:underline underline-offset-4 font-semibold text-[#1976d2]">
            Redes Sociais
          </Link>
        </div>
      </footer>
      {/* Animação do fundo */}
      <style>
        {`
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientMove 8s ease-in-out infinite;
          }
          @keyframes gradientMove {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
          .animate-shake {
            animation: shake 0.5s;
          }
          @keyframes shake {
            0% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-8px); }
            80% { transform: translateX(8px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
}