export default function VortexShop() {
  const categories = [
    {
      title: 'Logos y Diseños',
      desc: 'Diseños personalizados para Discord, gaming y RP.',
      price: 'Desde $5'
    },
    {
      title: 'Bots y Sistemas',
      desc: 'Bots avanzados con comandos personalizados.',
      price: 'Desde $10'
    },
    {
      title: 'Configuración de Servidores',
      desc: 'Creamos y optimizamos tu servidor profesionalmente.',
      price: 'Desde $15'
    },
    {
      title: 'Canales y Roles',
      desc: 'Organización completa de categorías y permisos.',
      price: 'Desde $8'
    },
    {
      title: 'Servicios RP',
      desc: 'Sistemas exclusivos para comunidades RP.',
      price: 'Desde $20'
    },
    {
      title: 'Paquetes Premium',
      desc: 'Combos completos para servidores profesionales.',
      price: 'Desde $35'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <header className="border-b border-red-700 sticky top-0 bg-black/90 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Vortex Shop"
              className="w-16 h-16 object-cover rounded-xl border border-red-600"
            />
            <div>
              <h1 className="text-2xl font-black text-red-500 tracking-wider">
                VORTEX SHOP
              </h1>
              <p className="text-gray-400 text-sm">Discord • Gaming • RP</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 font-semibold text-sm uppercase">
            <a href="#inicio" className="hover:text-red-500 transition">Inicio</a>
            <a href="#categorias" className="hover:text-red-500 transition">Categorías</a>
            <a href="#beneficios" className="hover:text-red-500 transition">Beneficios</a>
            <a href="#comprar" className="hover:text-red-500 transition">Comprar</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden py-24 px-6 border-b border-red-900"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-black"></div>

        <div className="max-w-7xl mx-auto relative grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-500 uppercase tracking-[6px] mb-4 font-bold">
              Bienvenido a
            </p>

            <h2 className="text-6xl md:text-7xl font-black leading-none mb-6">
              <span className="text-red-600">VORTEX</span>
              <br />
              <span className="text-white">SHOP</span>
            </h2>

            <p className="text-gray-300 text-lg max-w-xl leading-relaxed mb-8">
              Tu tienda profesional para servicios de Discord, Gaming y comunidades RP.
              Diseños, bots, configuraciones y sistemas premium.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold shadow-lg shadow-red-900/40 transition">
                Ver Servicios
              </button>

              <button className="border border-red-600 hover:bg-red-600/20 px-8 py-4 rounded-2xl font-bold transition">
                Entrar al Discord
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 blur-3xl opacity-30 rounded-full"></div>

              <img
                src="/logo.png"
                alt="Vortex Shop"
                className="relative w-[420px] rounded-3xl border border-red-700 shadow-2xl shadow-red-900/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="categorias" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[5px] font-bold mb-3">
              Tienda
            </p>

            <h3 className="text-5xl font-black mb-4">Categorías</h3>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Explora nuestros servicios profesionales para Discord, gaming y comunidades RP.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {categories.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-red-900 rounded-3xl p-8 hover:-translate-y-2 hover:border-red-600 transition duration-300 shadow-xl shadow-black"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-600/20 border border-red-700 flex items-center justify-center text-3xl mb-6">
                  🔥
                </div>

                <h4 className="text-3xl font-black mb-4 text-red-500">
                  {item.title}
                </h4>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black">{item.price}</span>

                  <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-bold transition">
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section
        id="beneficios"
        className="py-24 px-6 border-y border-red-900 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500 uppercase tracking-[5px] font-bold mb-3">
            ¿Por qué elegirnos?
          </p>

          <h3 className="text-5xl font-black mb-14">Beneficios</h3>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              '⚡ Atención rápida',
              '🛡️ Seguridad y confianza',
              '🎨 Diseños premium',
              '💯 Servicio garantizado'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-red-800 rounded-3xl p-8"
              >
                <h4 className="text-2xl font-bold text-red-500 mb-4">{item}</h4>

                <p className="text-gray-400">
                  Servicio profesional enfocado en calidad y satisfacción del cliente.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO COMPRAR */}
      <section id="comprar" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-500 uppercase tracking-[5px] font-bold mb-3">
            Fácil y rápido
          </p>

          <h3 className="text-5xl font-black mb-16">¿Cómo Comprar?</h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              '🎫 Abre Ticket',
              '📝 Explica tu pedido',
              '👨‍💻 Espera respuesta',
              '⚡ Recibe tu pedido'
            ].map((step, index) => (
              <div
                key={index}
                className="relative bg-zinc-950 border border-red-900 rounded-3xl p-8"
              >
                <div className="absolute -top-4 left-6 bg-red-600 px-4 py-1 rounded-full font-black">
                  {index + 1}
                </div>

                <h4 className="text-2xl font-black mt-4 mb-4 text-red-500">
                  {step}
                </h4>

                <p className="text-gray-400">
                  Proceso rápido y sencillo para todos nuestros clientes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-red-900 bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          <div>
            <h4 className="text-4xl font-black text-red-600 mb-3">
              VORTEX SHOP
            </h4>

            <p className="text-gray-400 max-w-sm">
              Tu tienda profesional para servicios Discord, Gaming y RP.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-wider">
              Navegación
            </h5>

            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#inicio" className="hover:text-red-500 transition">Inicio</a>
              <a href="#categorias" className="hover:text-red-500 transition">Categorías</a>
              <a href="#beneficios" className="hover:text-red-500 transition">Beneficios</a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-wider">
              Comunidad
            </h5>

            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-black transition shadow-lg shadow-red-900/40">
              UNIRSE AL DISCORD
            </button>
          </div>
        </div>

        <div className="text-center text-gray-600 mt-12 border-t border-zinc-900 pt-8">
          © 2025 Vortex Shop — Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
