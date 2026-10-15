export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-gray-200 font-sans p-3 sm:p-6 md:p-8 selection:bg-blue-500 selection:text-white transition-all duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start animate-fade-in">
        
        {/* Columna Izquierda: Perfil y Contacto con efecto hover */}
        <div className="lg:col-span-4 bg-[#0c1222] border border-blue-900/40 rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col items-center text-center relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 group-hover:scale-105 transition-transform"></div>
          
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-4 rounded-full p-1 bg-gradient-to-b from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20 overflow-hidden flex-shrink-0 transform group-hover:scale-105 transition-transform duration-500">
            <img 
              src="/perfil.jpg" 
              alt="Brandon Gustavo Casasola Orellana" 
              className="w-full h-full object-cover rounded-full bg-slate-800"
            />
          </div>

          <h1 className="text-lg sm:text-xl font-bold text-white tracking-wide mt-2">
            Brandon Gustavo Casasola Orellana
          </h1>
          <p className="text-[11px] sm:text-xs font-medium text-blue-400 mt-1 uppercase tracking-widest bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
            Ingeniería en Sistemas
          </p>

          <div className="w-full border-t border-blue-900/30 my-5"></div>

          <div className="w-full space-y-3 text-left text-xs text-gray-300">
            <div className="flex items-center gap-3 hover:text-blue-400 transition-colors">
              <span className="text-blue-400 font-semibold text-sm">📍</span>
              <span>El Progreso, Guatemala</span>
            </div>
            <div className="flex items-center gap-3 hover:text-blue-400 transition-colors">
              <span className="text-blue-400 font-semibold text-sm">💼</span>
              <span>Soporte, Redes & Despliegues</span>
            </div>
            <div className="flex items-center gap-3 hover:text-blue-400 transition-colors">
              <span className="text-blue-400 font-semibold text-sm">✉️</span>
              <span className="truncate">brandoncasasolacv@micv.net</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Terminal y Título Principal */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Terminal simulada con efecto interactivo */}
          <div className="bg-[#0c1222] border border-blue-900/40 rounded-xl overflow-hidden shadow-xl hover:border-blue-500/40 transition-all duration-300">
            <div className="bg-[#111827] px-4 py-2 border-b border-blue-900/30 flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block animate-pulse"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              </div>
              <span className="font-mono text-[11px] text-gray-400">root@system:~/cv</span>
              <span className="text-[10px] text-blue-400 font-mono">Next.js v14.2</span>
            </div>
            <div className="p-4 font-mono text-xs text-blue-300 bg-[#070b14]/80 overflow-x-auto">
              <p className="text-gray-400">root@system:~$ whoami</p>
              <p className="text-cyan-400 font-bold mt-1">&gt; Brandon Gustavo Casasola Orellana_</p>
            </div>
          </div>

          {/* Bloque de Presentación / Rol con brillo dinámico */}
          <div className="bg-[#0c1222] border border-blue-900/40 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500 pointer-events-none"></div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 mb-3">
              Desarrollo de Software &amp; Arquitectura Cloud
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Estudiante apasionado por la tecnología con sólida formación técnica en mantenimiento de equipos, seguridad informática, respaldo de datos y desarrollo de software. Experiencia práctica en soluciones tecnológicas orientadas a la optimización de procesos y despliegues en infraestructura propia.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-blue-300 bg-blue-950/80 px-3 py-1.5 rounded-lg border border-blue-800/40 font-mono shadow-sm">
              <span>⚡</span>
              <span>&quot;Todo lo que puedes imaginar lo puedes lograr&quot;</span>
            </div>
          </div>

        </div>
      </div>

      {/* Sección inferior: Competencias y Stack Tecnológico */}
      <div className="max-w-6xl mx-auto mt-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-blue-400 text-lg">⚙️</span>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">Stack Tecnológico &amp; Competencias</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Lenguajes */}
          <div className="bg-[#0c1222] border border-blue-900/40 rounded-xl p-5 shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4 pb-2 border-b border-blue-900/40">
              Lenguajes &amp; Base
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">✓ Python / PHP</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">✓ C# / SQL</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">✓ JavaScript / HTML &amp; CSS</li>
            </ul>
          </div>

          {/* Card 2: Entorno & Infraestructura */}
          <div className="bg-[#0c1222] border border-blue-900/40 rounded-xl p-5 shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4 pb-2 border-b border-blue-900/40">
              Infraestructura &amp; Cloud
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">✓ Docker Engine / LXC</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">✓ Git &amp; GitHub Actions</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">✓ Despliegue en Homelab</li>
            </ul>
          </div>

          {/* Card 3: Sistemas & Mantenimiento */}
          <div className="bg-[#0c1222] border border-blue-900/40 rounded-xl p-5 shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4 pb-2 border-b border-blue-900/40">
              Sistemas &amp; Soporte
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">✓ Mantenimiento de Equipos</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">✓ Seguridad Informática</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">✓ Respaldo de Datos</li>
            </ul>
          </div>

          {/* Card 4: Habilidades Profesionales */}
          <div className="bg-[#0c1222] border border-blue-900/40 rounded-xl p-5 shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4 pb-2 border-b border-blue-900/40">
              Habilidades
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">✓ Resolución de Problemas</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">✓ Optimización de Procesos</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">✓ Documentación Técnica</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Sección inferior: Trayectoria y Educación */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Trayectoria */}
        <div className="bg-[#0c1222] border border-blue-900/40 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-blue-500/50 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-400 text-lg">📂</span>
            <h3 className="text-sm sm:text-md font-bold text-white tracking-wide">Trayectoria &amp; Experiencia</h3>
          </div>
          <div className="space-y-4 border-l border-blue-900/60 pl-4 ml-2">
            <div className="hover:translate-x-1 transition-transform">
              <span className="text-xs text-blue-400 font-mono">2023 - Presente</span>
              <h4 className="text-sm font-bold text-white mt-0.5">Suministros y Más</h4>
              <p className="text-xs text-gray-300 mt-1">
                Mantenimiento de sistemas, seguridad informática, respaldo de datos y desarrollo de software aplicado a la optimización operativa.
              </p>
            </div>
          </div>
        </div>

        {/* Educación */}
        <div className="bg-[#0c1222] border border-blue-900/40 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-blue-500/50 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-400 text-lg">🎓</span>
            <h3 className="text-sm sm:text-md font-bold text-white tracking-wide">Educación &amp; Formación</h3>
          </div>
          <div className="space-y-4 border-l border-blue-900/60 pl-4 ml-2">
            <div className="hover:translate-x-1 transition-transform">
              <span className="text-xs text-blue-400 font-mono">En curso</span>
              <h4 className="text-sm font-bold text-white mt-0.5">Ingeniería en Sistemas (UMG)</h4>
              <p className="text-xs text-gray-300 mt-1">
                Formación académica orientada al desarrollo de software, bases de datos y arquitectura de sistemas modernos.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}