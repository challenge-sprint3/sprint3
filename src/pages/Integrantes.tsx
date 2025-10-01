import { Link } from "react-router-dom";

type Integrante = {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  github: string;
  linkedin: string;
};

const integrantes: Integrante[] = [
  {
    nome: "Mathaus Victor Souza",
    rm: "564146",
    turma: "1TDSPJ",
    foto: "/src/assets/imagens/Mathaus.jpg",
    github: "https://github.com/Mathausz",
    linkedin: "https://www.linkedin.com/in/mathaus-marcelino-677baa331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    nome: "Carlos Alberto Guedes",
    rm: "566022",
    turma: "1TDSPJ",
    foto: "/src/assets/imagens/Carlos.jpg",
    github: "https://github.com/carlosguedesneto",
    linkedin: "https://www.linkedin.com/in/carlos-alberto-13782a353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    nome: "Vinícius L. E. M. Garcia",
    rm: "563340",
    turma: "1TDSPJ",
    foto: "/src/assets/imagens/Vinicius.jpg",
    github: "https://github.com/vinxlux",
    linkedin: "https://linkedin.com/in/vinícius-luis-90ba05309",
  },
];

export default function Integrantes() {
  return (
    <div className="relative min-h-screen font-sans">
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: "linear-gradient(120deg, #e3f0fb 0%, #fff1f2 50%, #ffd6d6 100%)",
          minHeight: "100vh",
          width: "100vw",
        }}
      />
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
              Integrantes
            </Link>
            <Link to="/contato" className="font-semibold text-xl text-[#1976d2] hover:text-[#d32f2f] transition bg-clip-text">
              Contato
            </Link>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto pt-32 pb-32 px-2 sm:px-6">
        <h1 className="text-5xl md:text-6xl font-black mb-24 bg-gradient-to-r from-[#1976d2] to-[#d32f2f] bg-clip-text text-transparent drop-shadow integrantes-titulo">
          Lista de Integrantes
        </h1>
        <div className="flex flex-row justify-center gap-8 integrantes-lista">
          {integrantes.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-[#e3f0fb] via-[#fff1f2] to-[#ffd6d6] rounded-3xl shadow-xl border-2 border-[#1976d2]/20 p-8 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl hover:border-[#1976d2]/40 w-80"
              style={{
                minHeight: 380,
                maxWidth: 320,
                margin: "0 auto",
                boxSizing: "border-box",
              }}
            >
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  top: "-64px",
                  width: "128px",
                  height: "128px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #e3f0fb 60%, #ffd6d6 100%)",
                  borderRadius: "50%",
                  boxShadow: "0 4px 16px 0 #1976d233",
                }}
              >
                <img
                  src={item.foto}
                  alt={`Foto de ${item.nome}`}
                  className="rounded-full object-cover"
                  style={{
                    width: "112px",
                    height: "112px",
                    border: "4px solid #fff",
                    background: "#fff",
                  }}
                />
              </div>
              <div className="flex flex-col items-center mt-20">
                <span className="text-lg font-bold text-[#1976d2] text-center">{item.nome}</span>
                <span className="text-base text-[#d32f2f] mt-2">RM: {item.rm}</span>
                <span className="text-base text-[#1976d2]">Turma: {item.turma}</span>
                <div className="flex gap-4 mt-4">
                  <a href={item.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <img src="/src/assets/imagens/github-icon.png" alt="GitHub" className="w-8 h-8" />
                  </a>
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <img src="/src/assets/imagens/linkedin-icon.png" alt="LinkedIn" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          ))}
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
    </div>
  );
}