export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-gray-200 font-sans p-4 md:p-8 selection:bg-blue-500 selection:text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Columna Izquierda: Perfil y Contacto */}
        <div className="lg:col-span-4 bg-[#0c1222] border border-blue-900/40 rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"></div>
          
          <div className="relative w-36 h-36 mb-4 rounded-full p-1 bg-gradient-to-b from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20 overflow-hidden">
            <img 
              src="/perfil.jpg" 
              alt="Brandon Gustavo Casasola Orellana" 
              className="w-full h-full object-cover rounded-full bg-slate-800"
              onError={(e) => {
                // Fallback si la imagen tarda o no carga
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <h1 className="text-xl font-bold text-white tracking-wide mt-2">
            Brandon Gustavo Casasola Orellana
          </h1>
          <p className="text-xs font-medium text-blue-400 mt-1 uppercase tracking-widest bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
            Ingeniería en Sistemas
          </p>

          <div className="w-full border-t border-blue-900/30 my-6"></div>

          <div className="w-full space-y-3 text-left text-xs text-gray-300">
            <div className="flex items-center gap-3">
              <span className="text-blue-400 font-semibold">📍</span>
              <span>El Progreso, Guatemala</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400 font-semibold">💼</span>
              <span>Soporte, Redes & Despliegues</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400 font-semibold">✉️</span>
              <span className="truncate">brandoncasasolacv@micv.net</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Terminal y Título Principal */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Terminal simulada */}
          <div className="bg-[#0c1222] border border-blue-900/40 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-[#111827] px-4 py-2 border-b border-blue-900/30 flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              </div>
              <span className="font-mono text-[11px] text-gray-400">root@system:~/cv</span>
              <span className="text-[10px] text-blue-400 font-mono">Next.js v14.2</span>
            </div>
            <div className="p-4 font-mono text-xs text-blue-300 bg-[#070b14]/80">
              <p className="text-gray-400">root@system:~$ whoami</p>
              <p className="text-cyan-400 font-bold mt-1">&gt; Brandon Gustavo Casasola Orellana_</p>
            </div>
          </div>

          {/* Bloque de Presentación / Rol */}
          <div className="bg-[#0c1222] border border-blue-900/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 mb-3">
              Desarrollo de Software &amp; Arquitectura Cloud
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Estudiante apasionado por la tecnología con sólida formación técnica en mantenimiento de equipos, seguridad informática, respaldo de datos y desarrollo de software. Experiencia práctica en soluciones tecnológicas orientadas a la optimización de procesos y despliegues en infraestructura propia.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-blue-300 bg-blue-950/80 px-3 py-1.5 rounded-lg border border-blue-800/40 font-mono">
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
          <h3 className="text-lg font-bold text-white tracking-wide">Stack Tecnológico &amp; Competencias</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Lenguajes */}
          <div className="bg-[#0c1222] border border-blue-900/40 rounded-xl p-5 shadow-lg hover:border-blue-500/50 transition-all">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4 pb-2 border-b border-blue-900/40">
              Lenguajes &amp; Base
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-center gap-2">✓ Python / PHP</li>
              <li className="flex items-center gap-2">✓ C# / SQL</li>
              <li className="flex items-center gap-2">✓ JavaScript / HTML &amp; CSS</li>
            </ul>
          </div>

          {/* Card 2: Entorno & Infraestructura */}
          <div className="bg-[#0c1222] border border-blue-900/40 rounded-xl p-5 shadow-lg hover:border-blue-500/50 transition-all">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4 pb-2 border-b border-blue-900/40">
              Infraestructura &amp; Cloud
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-center gap-2">✓ Docker Engine / LXC</li>
              <li className="flex items-center gap-2">✓ Git &amp; GitHub Actions</li>
              <li className="flex items-center gap-2">✓ Despliegue en Homelab</li>
            </ul>
          </div>

          {/* Card 3: Sistemas & Mantenimiento */}
          <div className="bg-[#0c1222] border border-blue-900/40 rounded-xl p-5 shadow-lg hover:border-blue-500/50 transition-all">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4 pb-2 border-b border-blue-900/40">
              Sistemas &amp; Soporte
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-center gap-2">✓ Mantenimiento de Equipos</li>
              <li className="flex items-center gap-2">✓ Seguridad Informática</li>
              <li className="flex items-center gap-2">✓ Respaldo de Datos</li>
            </ul>
          </div>

          {/* Card 4: Habilidades Profesionales */}
          <div className="bg-[#0c1222] border border-blue-900/40 rounded-xl p-5 shadow-lg hover:border-blue-500/50 transition-all">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4 pb-2 border-b border-blue-900/40">
              Habilidades
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-center gap-2">✓ Resolución de Problemas</li>
              <li className="flex items-center gap-2">✓ Optimización de Procesos</li>
              <li className="flex items-center gap-2">✓ Documentación Técnica</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Sección inferior: Trayectoria y Educación */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Trayectoria */}
        <div className="bg-[#0c1222] border border-blue-900/40 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-400 text-lg">📂</span>
            <h3 className="text-md font-bold text-white tracking-wide">Trayectoria &amp; Experiencia</h3>
          </div>
          <div className="space-y-4 border-l border-blue-900/60 pl-4 ml-2">
            <div>
              <span className="text-xs text-blue-400 font-mono">2023 - Presente</span>
              <h4 className="text-sm font-bold text-white mt-0.5">Suministros y Más</h4>
              <p className="text-xs text-gray-300 mt-1">
                Mantenimiento de sistemas, seguridad informática, respaldo de datos y desarrollo de software aplicado a la optimización operativa.
              </p>
            </div>
          </div>
        </div>

        {/* Educación */}
        <div className="bg-[#0c1222] border border-blue-900/40 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-400 text-lg">🎓</span>
            <h3 className="text-md font-bold text-white tracking-wide">Educación &amp; Formación</h3>
          </div>
          <div className="space-y-4 border-l border-blue-900/60 pl-4 ml-2">
            <div>
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