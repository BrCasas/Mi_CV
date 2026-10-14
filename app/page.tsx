export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 py-8 px-4 sm:px-6 lg:px-8 font-mono selection:bg-emerald-500 selection:text-black">
      <div className="max-w-xl mx-auto space-y-6">
        
        {/* Barra superior de Estado / Entorno */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-emerald-400 font-semibold tracking-wider">NODE_ENV: PRODUCTION // HOST: GUAGUASTATOYA</span>
          </div>
          <div className="flex gap-2">
            <span className="px-2.5 py-1 bg-zinc-800 text-zinc-200 rounded font-bold border border-zinc-700">ES</span>
            <span className="px-2.5 py-1 bg-zinc-900 text-zinc-500 rounded border border-zinc-800">EN</span>
          </div>
        </div>

        {/* Header Principal con Tarjeta de Resumen Técnico */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-sm">
          
          {/* Datos Personales */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Brandon Gustavo Casasola Orellana
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400">
              Ingeniería en Sistemas & Desarrollo de Software | El Progreso, Guatemala
            </p>
          </div>

          {/* Grid de Métricas / Stack */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-3.5">
              <p className="text-[10px] tracking-wider text-zinc-500 uppercase font-semibold">STACK PRINCIPAL</p>
              <p className="text-sm font-bold text-zinc-200 mt-1">Python / PHP / C# / SQL</p>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-3.5">
              <p className="text-[10px] tracking-wider text-zinc-500 uppercase font-semibold">ENTORNO</p>
              <p className="text-sm font-bold text-zinc-200 mt-1">Docker Engine / LXC</p>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-3.5">
              <p className="text-[10px] tracking-wider text-zinc-500 uppercase font-semibold">DISPONIBILIDAD</p>
              <p className="text-sm font-bold text-emerald-400 mt-1">99.98%</p>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-3.5">
              <p className="text-[10px] tracking-wider text-zinc-500 uppercase font-semibold">ENFOQUE PROTOCOLO</p>
              <p className="text-sm font-bold text-cyan-400 mt-1">FULL-STACK & INFRA</p>
            </div>
          </div>
        </div>

        {/* Sección: Resumen Ejecutivo */}
        <section className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
            <span className="text-emerald-500">//</span> RESUMEN EJECUTIVO & DIRECTIVA
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Estudiante de Ingeniería en Sistemas con sólida formación técnica en mantenimiento de equipos, seguridad informática, respaldo de datos y desarrollo de software. Experiencia práctica en soluciones tecnológicas orientadas a la optimización de procesos y despliegues en infraestructura propia.
          </p>
        </section>

        {/* Sección: Trayectoria */}
        <section className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
            <span className="text-emerald-500">//</span> TRAYECTORIA Y ESTUDIOS
          </h2>
          
          <div className="space-y-6 border-l border-zinc-800 pl-4 ml-1">
            <div className="space-y-1 relative">
              <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
              <h3 className="text-sm font-bold text-white">Suministros y Más (2023)</h3>
              <p className="text-xs text-cyan-400 font-medium">Mantenimiento de sistemas, seguridad informática y respaldo de datos.</p>
              <p className="text-xs text-zinc-400 pt-1">Soporte técnico integral y gestión de infraestructura tecnológica local.</p>
            </div>

            <div className="space-y-1 relative">
              <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
              <h3 className="text-sm font-bold text-white">Universidad Mariano Gálvez de Guatemala</h3>
              <p className="text-xs text-cyan-400 font-medium">Estudiante de la carrera de Ingeniería en Sistemas.</p>
              <p className="text-xs text-zinc-400 pt-1">Formación en bases de datos, sistemas operativos, investigación de operaciones y desarrollo.</p>
            </div>
          </div>
        </section>

        {/* Sección: Canales de Contacto */}
        <section className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
            <span className="text-emerald-500">//</span> PROTOCOLOS DE COMUNICACIÓN
          </h2>
          
          <div className="space-y-3">
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-4 flex justify-between items-center">
              <div>
                <p className="text-[10px] tracking-wider text-zinc-500 uppercase font-semibold">SECURE_CHANNEL (EMAIL)</p>
                <a href="mailto:brangusta@gmail.com" className="text-xs sm:text-sm font-bold text-cyan-400 hover:underline">
                  brangusta@gmail.com
                </a>
              </div>
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            </div>

            <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-4 flex justify-between items-center">
              <div>
                <p className="text-[10px] tracking-wider text-zinc-500 uppercase font-semibold">VOICE_LINK (PHONE)</p>
                <span className="text-xs sm:text-sm font-bold text-zinc-200">
                  +502 3766-4237
                </span>
              </div>
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            </div>
          </div>
        </section>

        <footer className="text-center text-[11px] text-zinc-600 pt-2 pb-6">
          System deployed via Docker & GitHub Actions // Homelab LXC Container
        </footer>

      </div>
    </main>
  );
}