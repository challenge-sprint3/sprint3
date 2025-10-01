import { useState } from "react";

type Step = {
  title: string;
  images?: { src: string; alt: string; caption: string }[];
  description: string;
};

const steps: Step[] = [
  {
    title: "1. Baixe o Aplicativo",
    images: [
      {
        src: "/playstore.png",
        alt: "Play Store",
        caption: "Ícone da Play Store, indicando onde baixar o aplicativo para Android.",
      },
      {
        src: "/appstore.png",
        alt: "App Store",
        caption: "Ícone da App Store, indicando onde baixar o aplicativo para iOS.",
      },
    ],
    description:
      'Procure por <b>Portal do Paciente HC</b> na Play Store (Android) ou App Store (iOS). Toque em <b>Instalar</b> e aguarde o download.',
  },
  {
    title: "2. Acesse o Portal",
    images: [
      {
        src: "/pagina-inicial.png",
        alt: "Tela Inicial do App",
        caption: "Tela inicial do aplicativo, onde você pode acessar o portal ou iniciar o cadastro.",
      },
    ],
    description:
      'Abra o aplicativo e toque em <b>Acessar o Portal</b>. Digite seu CPF e senha cadastrados para fazer login. Se for seu primeiro acesso, clique em <b>Primeiro Acesso</b> para cadastrar sua senha.',
  },
  {
    title: "3. Cadastro de Senha",
    images: [
      {
        src: "/cadastrar-senha.png",
        alt: "Cadastrar Senha",
        caption: "Tela para cadastrar uma nova senha.",
      },
      {
        src: "/cadastro-cpf.png",
        alt: "Cadastro de CPF",
        caption: "Campo para digitar o CPF e data de nascimento.",
      },
    ],
    description:
      'Antes do primeiro acesso, clique em <b>CADASTRAR SENHA</b>. Na tela seguinte, digite apenas os números do seu CPF e sua data de nascimento. Clique em <b>LOCALIZAR PACIENTE</b> para continuar.',
  },
  {
    title: "4. Confirmação de Dados e Nova Senha",
    images: [
      {
        src: "/pergunta-ano.png",
        alt: "Pergunta Ano de Nascimento",
        caption: "Pergunta sobre o ano de nascimento.",
      },
      {
        src: "/pergunta-mae.png",
        alt: "Pergunta Nome da Mãe",
        caption: "Pergunta sobre o nome da mãe.",
      },
      {
        src: "/campos-senha.png",
        alt: "Campos para Cadastrar Senha",
        caption: "Campos para cadastrar e confirmar a nova senha.",
      },
      {
        src: "/cadastro-sucesso.png",
        alt: "Senha Cadastrada com Sucesso",
        caption: "Mensagem de sucesso após o cadastro da senha.",
      },
    ],
    description:
      "Responda corretamente às perguntas de segurança, como ano de nascimento e nome da mãe. Após isso, cadastre sua nova senha e confirme. Você verá uma mensagem de sucesso ao finalizar.",
  },
  {
    title: "5. Atualize seus Dados",
    images: [
      {
        src: "/acessar-conta.png",
        alt: "Tela de Acessar Conta",
        caption: "Tela para acessar a conta.",
      },
      {
        src: "/menu-principal.png",
        alt: "Menu Principal",
        caption: "Menu principal do aplicativo.",
      },
      {
        src: "/campos-dados.png",
        alt: "Campos de Dados",
        caption: "Campos para atualizar e confirmar e-mail e telefone.",
      },
    ],
    description:
      "No menu principal, acesse <b>Meus Dados</b> para atualizar e confirmar seu e-mail e telefone. Mantenha seus dados sempre atualizados para garantir o recebimento de informações importantes.",
  },
  {
    title: "6. Veja e Entre na Consulta",
    images: [
      {
        src: "/entrar-teleconsulta.png",
        alt: "Entrar na Teleconsulta",
        caption: "Botão para entrar na teleconsulta.",
      },
      {
        src: "/sala-espera.png",
        alt: "Sala de Espera",
        caption: "Tela de sala de espera virtual.",
      },
      {
        src: "/card-teleconsulta.png",
        alt: "Card Teleconsulta",
        caption: "Card com detalhes da teleconsulta agendada.",
      },
    ],
    description:
      "Veja suas consultas em <b>Minhas Agendas</b> ou <b>Teleconsulta</b>. Confira os detalhes do agendamento e clique em <b>Entrar na Teleconsulta</b> no horário marcado. Aguarde na sala de espera até ser chamado pelo profissional de saúde.",
  },
  {
    title: "7. Participe da Teleconsulta",
    images: [
      {
        src: "/termo-aceite.png",
        alt: "Termo de Aceite",
        caption: "Aceite do termo de consentimento.",
      },
      {
        src: "/permissao-camera.png",
        alt: "Permissão de Câmera",
        caption: "Permissão para uso da câmera.",
      },
      {
        src: "/opcoes-webcam.png",
        alt: "Opções da Webcam",
        caption: "Opções de configuração da webcam.",
      },
      {
        src: "/permissao-microfone.png",
        alt: "Permissão de Microfone",
        caption: "Permissão para uso do microfone.",
      },
      {
        src: "/confirmar-audio.png",
        alt: "Confirmação de áudio",
        caption: "Confirmação do áudio.",
      },
      {
        src: "/conectando-audio.png",
        alt: "Conectando ao Teste de Áudio",
        caption: "Tela de conexão ao teste de áudio.",
      },
      {
        src: "/icone-camera-off.png",
        alt: "Ícone Câmera Desligada",
        caption: "Ícone indicando câmera desligada.",
      },
      {
        src: "/consulta-video.png",
        alt: "Consulta em Vídeo",
        caption: "Tela da consulta em vídeo.",
      },
      {
        src: "/dentro-da-teleconsulta.png",
        alt: "Participando da Teleconsulta",
        caption: "Participando da teleconsulta.",
      },
    ],
    description:
      "Leia e aceite o <b>Termo de Consentimento</b> para iniciar. Permita o uso da câmera e microfone quando solicitado. Configure as opções de webcam e microfone, se necessário. Você pode ativar/desativar sua câmera durante a consulta. Participe no horário agendado.",
  },
  {
    title: "8. Finalize e Avalie",
    images: [
      {
        src: "/fim-teleconsulta.png",
        alt: "Fim da Teleconsulta",
        caption: "Tela de finalização da teleconsulta.",
      },
      {
        src: "/resposta-registrada.png",
        alt: "Resposta Registrada",
        caption: "Confirmação de resposta registrada ou avaliação enviada.",
      },
    ],
    description:
      "Ao término, aparecerá uma mensagem de agradecimento. Você pode registrar sua resposta ou avaliação, se solicitado.",
  },
  {
    title: "9. Outras Funcionalidades",
    images: [
      {
        src: "/menu-principal.png",
        alt: "Menu Principal",
        caption:
          "Menu principal do aplicativo, onde é possível acessar outras funcionalidades como resultados, receitas e diário de saúde.",
      },
    ],
    description:
      "Acesse <b>Meus Resultados</b>, <b>Minhas Receitas</b> e <b>Diário de Saúde</b> pelo menu principal para acompanhar sua saúde de forma completa.",
  },
];

export default function Home() {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f4f9] font-roboto">
      {/* Header/Menu Superior */}
      <header className="w-full bg-white shadow-lg fixed top-0 left-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo do Site" className="h-12" />
            <span className="text-[#039be5] font-bold text-xl hidden sm:inline">Portal do Paciente HC</span>
          </div>
          <nav className="flex gap-8">
            <a href="#" className="text-[#039be5] font-semibold hover:underline transition">Home</a>
            <a href="#" className="text-[#039be5] font-semibold hover:underline transition">FAQ</a>
            <a href="#" className="text-[#039be5] font-semibold hover:underline transition">Integrantes</a>
            <a href="#" className="text-[#039be5] font-semibold hover:underline transition">Contato</a>
            <a href="#" className="text-[#039be5] font-semibold hover:underline transition">Redes Sociais</a>
          </nav>
          {/* Mobile menu button */}
          <button
            aria-label="Abrir menu"
            className="md:hidden bg-[#039be5] text-white rounded-full p-2 text-2xl"
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
          className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 md:hidden transition-all"
        >
          <ul className="flex flex-col items-start gap-6 p-8">
            <li>
              <img src="/logo.png" className="logo h-12 mb-4" alt="Logo do Site" />
            </li>
            <li>
              <a href="#" className="text-[#039be5] font-semibold hover:underline text-lg">Home</a>
            </li>
            <li>
              <a href="#" className="text-[#039be5] font-semibold hover:underline text-lg">FAQ</a>
            </li>
            <li>
              <a href="#" className="text-[#039be5] font-semibold hover:underline text-lg">Integrantes</a>
            </li>
            <li>
              <a href="#" className="text-[#039be5] font-semibold hover:underline text-lg">Contato</a>
            </li>
            <li>
              <a href="#" className="text-[#039be5] font-semibold hover:underline text-lg">Redes Sociais</a>
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
      <main className="max-w-4xl mx-auto pt-32 pb-20 px-4">
        {/* pt-32 aumenta o espaço superior para não ficar atrás do header */}
        <section id="tutorial-portal-paciente">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#039be5]">
            Como Utilizar o Portal do Paciente HC
          </h1>
          <ol className="tutorial-list flex flex-col gap-4">
            {steps.map((step, idx) => (
              <li key={idx} className="rounded-2xl shadow bg-white">
                <button
                  className="tutorial-toggle w-full text-left px-6 py-4 text-lg font-semibold text-[#0288d1] flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenStep(openStep === idx ? null : idx)}
                  aria-expanded={openStep === idx}
                  aria-controls={`tutorial-content-${idx}`}
                >
                  <span>{step.title}</span>
                  <span
                    className={`ml-2 text-2xl transition-transform ${
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
                      ? "max-h-[1000px] py-6 px-6 opacity-100"
                      : "max-h-0 py-0 px-6 opacity-0"
                  }`}
                  aria-hidden={openStep !== idx}
                >
                  <div className="step-row flex flex-col md:flex-row gap-6">
                    {step.images && (
                      <div className="step-img-col flex flex-row md:flex-col gap-4 md:w-1/3">
                        {step.images.map((img, i) => (
                          <div key={i} className="img-explain flex flex-col items-center">
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="rounded shadow max-h-32 object-contain bg-[#f7fbfd] p-2"
                            />
                            <span className="text-xs text-gray-500 text-center mt-1">{img.caption}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="step-desc md:w-2/3 flex items-center">
                      <p
                        className="text-[#0277bd] text-base"
                        dangerouslySetInnerHTML={{ __html: step.description }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="tutorial-help text-center mt-10 text-[#039be5]">
            Em caso de dúvidas, consulte o manual completo ou entre em contato com o suporte da instituição.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white flex justify-center gap-16 items-center h-20 rounded-t-3xl text-[#039be5] text-lg shadow-inner fixed bottom-0 left-0 w-full">
        <a href="#" className="hover:underline">
          Contato
        </a>
        <a href="#" className="hover:underline">
          Redes Sociais
        </a>
      </footer>
    </div>
  );
}