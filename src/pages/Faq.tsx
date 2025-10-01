import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

type FaqProps = {
  faqs: FaqItem[];
};
export default function Faq({ faqs }: FaqProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen font-sans">
      {/* Fundo degradê absoluto */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: "linear-gradient(120deg, #e3f0fb 0%, #fff1f2 50%, #ffd6d6 100%)",
          minHeight: "100vh",
          width: "100vw",
        }}
      />
      {/* Header */}
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
            <a href="/" className="font-semibold text-xl text-[#1976d2] hover:text-[#d32f2f] transition bg-clip-text">
              Início
            </a>
            <a href="/faq" className="font-semibold text-xl text-[#1976d2] hover:text-[#d32f2f] transition bg-clip-text">
              Perguntas
            </a>
            <a href="/integrantes" className="font-semibold text-xl text-[#1976d2] hover:text-[#d32f2f] transition bg-clip-text">
              Equipe
            </a>
            <a href="/contato" className="font-semibold text-xl text-[#1976d2] hover:text-[#d32f2f] transition bg-clip-text">
              Contato
            </a>
            <a href="/sobre" className="font-semibold text-xl text-[#1976d2] hover:text-[#d32f2f] transition bg-clip-text">
              Sobre
            </a>
          </nav>
          {/* Mobile menu button */}
          <button
            aria-label="Abrir menu"
            className="md:hidden bg-gradient-to-r from-[#1976d2] to-[#d32f2f] text-white rounded-full p-2 text-2xl shadow absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => setSidebarOpen(true)}
          >
            &#9776;
          </button>
        </div>
      </header>
      {/* Sidebar para mobile */}
      {sidebarOpen && (
        <nav
          id="sidebar"
          className="fixed top-0 left-0 h-full w-64 shadow-2xl z-[100] md:hidden transition-all border-r border-[#bbdefb]/60"
          style={{
            background: "linear-gradient(120deg, #e3f0fb 0%, #fff1f2 50%, #ffd6d6 100%)",
          }}
        >
          <ul className="flex flex-col items-start gap-6 p-8">
            <li>
              <img
                src="/src/assets/imagens/logo.png"
                className="logo h-14 w-auto mb-4"
                alt="Logo do Site"
                style={{ minWidth: 56, minHeight: 56, maxHeight: 56 }}
              />
            </li>
            <li>
              <a href="/" className="text-[#1976d2] font-semibold hover:text-[#d32f2f] text-lg">Início</a>
            </li>
            <li>
              <a href="/faq" className="text-[#1976d2] font-semibold hover:text-[#d32f2f] text-lg">Perguntas</a>
            </li>
            <li>
              <a href="/integrantes" className="text-[#1976d2] font-semibold hover:text-[#d32f2f] text-lg">Equipe</a>
            </li>
            <li>
              <a href="/contato" className="text-[#1976d2] font-semibold hover:text-[#d32f2f] text-lg">Contato</a>
            </li>
            <li>
              <a href="/sobre" className="text-[#1976d2] font-semibold hover:text-[#d32f2f] text-lg">Sobre</a>
            </li>
          </ul>
          <button
            aria-label="Fechar menu"
            className="absolute top-4 right-4 text-3xl"
            onClick={() => setSidebarOpen(false)}
          >
            &times;
          </button>
        </nav>
      )}
      {/* Main */}
      <main className="max-w-3xl mx-auto pt-32 pb-32 px-2 sm:px-6">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-12 bg-gradient-to-r from-[#1976d2] to-[#d32f2f] bg-clip-text text-transparent drop-shadow">
            Perguntas Frequentes (FAQ)
          </h1>
          <ul className="faq-list flex flex-col gap-6 items-stretch">
            {faqs.map((faq, idx) => (
              <li
                key={idx}
                className="faq-item rounded-2xl shadow bg-white/90 border border-[#bbdefb]/60 transition"
              >
                <button
                  className="faq-question w-full text-left px-6 py-5 text-lg md:text-xl font-bold text-[#1976d2] flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`ml-2 text-2xl transition-transform ${
                      openIndex === idx ? "rotate-90" : ""
                    }`}
                  >
                    ▶
                  </span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`faq-answer overflow-hidden transition-all duration-500 ${
                    openIndex === idx
                      ? "max-h-[500px] py-4 px-6 opacity-100"
                      : "max-h-0 py-0 px-6 opacity-0"
                  }`}
                  aria-hidden={openIndex !== idx}
                >
                  <div className="text-[#d32f2f] text-base md:text-lg text-left leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      {/* Footer */}
      <footer
        className="z-10 flex justify-center gap-16 items-center h-20 rounded-t-2xl text-[#1976d2] text-lg shadow-inner fixed bottom-0 left-0 w-full border-t border-[#bbdefb]"
        style={{
          background: "linear-gradient(120deg, #e3f0fb 0%, #fff1f2 50%, #ffd6d6 100%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <a href="/contato" className="hover:underline underline-offset-4 font-semibold text-[#1976d2]">
          Contato
        </a>
        <a href="/redes-sociais" className="hover:underline underline-offset-4 font-semibold text-[#1976d2]">
          Redes Sociais
        </a>
      </footer>
    </div>
  );
}

// Exemplo de configuração de rotas
const faqList: FaqItem[] = [ /* ...suas perguntas... */ ];
const steps: any[] = [/* ...your steps data... */];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home steps={steps} />} />
        <Route path="/faq" element={<Faq faqs={faqList} />} />
        {/* ...outras rotas... */}
      </Routes>
    </BrowserRouter>
  );
}

export { App };