import { useState } from "react";
import { Link } from "react-router-dom";

type Step = {
  title: string;
  images?: { src: string; alt: string; caption: string }[];
  description: string;
};

type HomeProps = {
  steps: Step[];
};

export default function Home({ steps }: HomeProps) {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen font-sans">
      {/* Fundo absoluto cobrindo tudo */}
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
          className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 rounded-b-2xl shadow-lg border-b border-[#bbdefb]/60`}
          style={{
            minHeight: 64,
            backdropFilter: "blur(8px)",
            background: "linear-gradient(120deg, #e3f0fb 0%, #fff1f2 50%, #ffd6d6 100%)",
          }}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="src/assets/imagens/logo.png"
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
              Equipe
            </Link>
            <Link to="/contato" className="font-semibold text-xl text-[#1976d2] hover:text-[#d32f2f] transition bg-clip-text">
              Contato
            </Link>
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
                src="src/assets/imagens/logo.png"
                className="logo h-14 w-auto mb-4"
                alt="Logo do Site"
                style={{ minWidth: 56, minHeight: 56, maxHeight: 56 }}
              />
            </li>
            <li>
              <Link to="/" className="text-[#1976d2] font-semibold hover:text-[#d32f2f] text-lg">Início</Link>
            </li>
            <li>
              <Link to="/faq" className="text-[#1976d2] font-semibold hover:text-[#d32f2f] text-lg">Perguntas</Link>
            </li>
            <li>
              <Link to="/integrantes" className="text-[#1976d2] font-semibold hover:text-[#d32f2f] text-lg">Equipe</Link>
            </li>
            <li>
              <Link to="/contato" className="text-[#1976d2] font-semibold hover:text-[#d32f2f] text-lg">Contato</Link>
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
      <main className="max-w-5xl mx-auto pt-32 pb-32 px-2 sm:px-6">
        <section id="tutorial-portal-paciente" className="text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-14 bg-gradient-to-r from-[#1976d2] to-[#d32f2f] bg-clip-text text-transparent drop-shadow">
            Guia Visual do Portal
          </h1>
          <ol className="tutorial-list flex flex-col gap-10 items-center">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className={`relative group w-full rounded-3xl shadow-xl bg-white/90 border border-[#bbdefb]/60 hover:scale-[1.02] transition-transform`}
              >
                <button
                  className="tutorial-toggle w-full px-10 py-6 text-2xl font-extrabold text-[#1976d2] flex items-center gap-4 focus:outline-none transition bg-gradient-to-r from-[#e3f0fb] to-[#ffd6d6] rounded-t-3xl"
                  onClick={() => setOpenStep(openStep === idx ? null : idx)}
                  aria-expanded={openStep === idx}
                  aria-controls={`tutorial-content-${idx}`}
                >
                  <span className="flex-1 text-left">{step.title}</span>
                  <span
                    className={`text-3xl transition-transform ${
                      openStep === idx ? "rotate-90" : ""
                    }`}
                  >
                    ▶
                  </span>
                </button>
                <div
                  id={`tutorial-content-${idx}`}
                  className={`tutorial-content overflow-hidden transition-all duration-500 ${
                    openStep === idx
                      ? "max-h-[2000px] py-10 px-8 opacity-100"
                      : "max-h-0 py-0 px-8 opacity-0"
                  }`}
                  aria-hidden={openStep !== idx}
                >
                  <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                    {/* Imagens à esquerda */}
                    {step.images && (
                      <div className="flex flex-row md:flex-col gap-4 md:w-1/3 w-full justify-center md:justify-start md:items-start">
                        {step.images.map((img, i) => (
                          <div key={i} className="flex flex-col items-center md:items-start">
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="rounded-xl shadow-lg h-36 w-auto object-contain bg-[#e3f0fb] p-2 border border-[#bbdefb]"
                              style={{ minWidth: 80, maxWidth: 220 }}
                            />
                            <span className="text-xs text-[#1976d2] text-center md:text-left mt-1">{img.caption}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Texto à direita */}
                    <div className="md:w-2/3 w-full flex items-center justify-center md:justify-start">
                      <p
                        className="text-[#d32f2f] text-lg md:text-xl text-center md:text-left leading-relaxed font-medium"
                        dangerouslySetInnerHTML={{ __html: step.description }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-16 flex flex-col items-center gap-2">
            <p className="text-[#1976d2] text-xl font-bold">
              Precisa de ajuda?
            </p>
            <Link
              to="/faq"
              className="inline-block mt-1 px-6 py-2 rounded-full bg-gradient-to-r from-[#1976d2] to-[#d32f2f] text-white font-semibold shadow hover:scale-105 transition"
            >
              Acesse o FAQ
            </Link>
          </div>
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
        <Link to="/contato" className="hover:underline underline-offset-4 font-semibold text-[#1976d2]">
          Contato
        </Link>
        <Link to="/redes-sociais" className="hover:underline underline-offset-4 font-semibold text-[#1976d2]">
          Redes Sociais
        </Link>
      </footer>
    </div>
  );
}