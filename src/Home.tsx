export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f9] font-roboto">
      {/* Header */}
      <header className="bg-[#8ee0fc] flex items-center justify-between px-8 py-4 shadow-none">
        <img src="/logo.png" alt="Logo" className="h-12" />
        <nav className="space-x-12">
          <a href="#" className="text-white text-lg font-normal hover:underline">Home</a>
          <a href="#" className="text-white text-lg font-normal hover:underline">FAQ</a>
          <a href="#" className="text-white text-lg font-normal hover:underline">Integrantes</a>
          <a href="#" className="text-white text-lg font-normal hover:underline">Contato</a>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-12 mb-8">
          Como Utilizar o Portal do Paciente HC
        </h1>
        <div className="w-full max-w-5xl flex flex-col gap-6 px-4 mb-8">
          {/* 1 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="bg-[#03a9f4] text-white font-bold text-center rounded-lg py-3 mb-6 text-lg">
              1. Baixe o Aplicativo
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col gap-6 md:w-1/2">
                <div className="flex items-center gap-4 bg-[#f7fbfd] rounded-lg p-3">
                  <img src="/playstore.png" alt="Play Store" className="w-32 rounded" />
                  <span className="text-base">Ícone da Play Store, indicando onde baixar o aplicativo para Android.</span>
                </div>
                <div className="flex items-center gap-4 bg-[#f7fbfd] rounded-lg p-3">
                  <img src="/appstore.png" alt="App Store" className="w-32 rounded" />
                  <span className="text-base">Ícone da App Store, indicando onde baixar o aplicativo para iOS.</span>
                </div>
              </div>
              <div className="flex items-center md:w-1/2">
                <p className="text-base">
                  Procure por <b>Portal do Paciente HC</b> na Play Store (Android) ou App Store (iOS).
                  Toque em <b>Instalar</b> e aguarde o download.
                </p>
              </div>
            </div>
          </section>
          {/* 2 */}
          <section className="bg-[#eaf8ff] rounded-2xl p-6">
            <div className="text-[#039be5] font-bold text-center rounded-lg py-3 text-lg">
              2. Acesse o Portal
            </div>
          </section>
          {/* 3 */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <div className="bg-[#03a9f4] text-white font-bold text-center rounded-lg py-3 text-lg mb-2">
              3. Cadastro de Senha
            </div>
            <p className="text-center text-base">
              Realize o cadastro de uma senha segura para acessar o portal.
            </p>
          </section>
          {/* 4 */}
          <section className="bg-[#eaf8ff] rounded-2xl p-6">
            <div className="text-[#039be5] font-bold text-center rounded-lg py-3 text-lg mb-2">
              4. Confirmação de Dados e Nova Senha
            </div>
            <p className="text-center text-base">
              Confirme seus dados pessoais e defina uma nova senha, se necessário.
            </p>
          </section>
          {/* 5 */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <div className="bg-[#03a9f4] text-white font-bold text-center rounded-lg py-3 text-lg mb-2">
              5. Atualize seus Dados
            </div>
            <p className="text-center text-base">
              Mantenha suas informações sempre atualizadas no portal.
            </p>
          </section>
          {/* 6 */}
          <section className="bg-[#eaf8ff] rounded-2xl p-6">
            <div className="text-[#039be5] font-bold text-center rounded-lg py-3 text-lg mb-2">
              6. Veja e Entre na Consulta
            </div>
            <p className="text-center text-base">
              Consulte seus agendamentos e acesse o link para entrar na consulta.
            </p>
          </section>
          {/* 7 */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <div className="bg-[#03a9f4] text-white font-bold text-center rounded-lg py-3 text-lg mb-2">
              7. Participe da Teleconsulta
            </div>
            <p className="text-center text-base">
              Participe da teleconsulta no horário agendado, seguindo as orientações do profissional.
            </p>
          </section>
          {/* 8 */}
          <section className="bg-[#eaf8ff] rounded-2xl p-6">
            <div className="text-[#039be5] font-bold text-center rounded-lg py-3 text-lg mb-2">
              8. Finalize e Avalie
            </div>
            <p className="text-center text-base">
              Ao final, avalie o atendimento e finalize sua consulta pelo portal.
            </p>
          </section>
          {/* 9 */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <div className="bg-[#03a9f4] text-white font-bold text-center rounded-lg py-3 text-lg mb-2">
              9. Outras Funcionalidades
            </div>
            <p className="text-center text-base">
              Explore outras funcionalidades disponíveis no Portal do Paciente HC.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#8ee0fc] flex justify-center gap-32 items-center h-16 rounded-t-3xl text-white text-lg mt-auto">
        <span className="cursor-pointer hover:underline">Contato</span>
        <span className="cursor-pointer hover:underline">Redes Sociais</span>
      </footer>
    </div>
  );
}