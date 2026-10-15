import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brandon Gustavo Casasola Orellana | Ingeniería en Sistemas",
  description: "Portafolio profesional de Brandon Gustavo Casasola Orellana, enfocado en soporte, redes, despliegues y desarrollo.",
};

export default function Home() {
  const profilePicUrl = "/perfil.png";
  const fullName = "Brandon Gustavo Casasola Orellana";

  return (
    <main className="min-h-screen bg-[#070b14] text-gray-200 font-sans p-3 sm:p-6 md:p-8 selection:bg-blue-500 selection:text-white transition-all duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
        
        {/* Columna Izquierda: Perfil y Contacto */}
        <aside className="profile-card lg:col-span-4 bg-[#0c1222] border border-blue-900/40 rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col items-center text-center relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 group-hover:scale-105 transition-transform"></div>
          
          {/* Contenedor de la imagen */}
          <div className="profile-photo relative w-36 h-36 sm:w-44 sm:h-44 mb-4 rounded-full p-[3px] bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-600 shadow-lg shadow-blue-500/20 flex-shrink-0 transform group-hover:scale-[1.03] transition-transform duration-500">
            <img 
              src={profilePicUrl}
              alt={`Foto de perfil de ${fullName}`}
              className="w-full h-full object-cover object-[center_30%] rounded-full bg-gray-800"
              width={601}
              height={602}
              fetchPriority="high"
            />
          </div>

          <h1 className="text-lg sm:text-xl font-bold text-white tracking-wide mt-2">
            {fullName}
          </h1>
          <p className="text-[11px] sm:text-xs font-medium text-blue-400 mt-1 uppercase tracking-widest bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
            Ingeniería en Sistemas
          </p>

          <div className="w-full border-t border-blue-900/30 my-5"></div>

          <address className="w-full space-y-3 text-left text-xs text-gray-300 not-italic">
            <div className="flex items-center gap-3 hover:text-blue-400 transition-colors">
              <span aria-hidden="true" className="text-blue-400 font-semibold text-sm">⌖</span>
              <span>El Progreso, Guatemala</span>
            </div>
            <div className="flex items-center gap-3 hover:text-blue-400 transition-colors">
              <span aria-hidden="true" className="text-blue-400 font-semibold text-sm">▣</span>
              <span>Soporte, Redes & Despliegues</span>
            </div>
            <div className="flex items-center gap-3 hover:text-blue-400 transition-colors">
              <span aria-hidden="true" className="text-blue-400 font-semibold text-sm">✉</span>
              <a href={`mailto:brandoncasasolacv@micv.net`} className="truncate hover:underline">brandoncasasolacv@micv.net</a>
            </div>
          </address>
        </aside>

        {/* Columna derecha: terminal y presentación */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Terminal simulada */}
          <section className="bg-[#0c1222] border border-blue-900/40 rounded-xl overflow-hidden shadow-xl hover:border-blue-500/40 transition-all duration-300">
            <header className="bg-[#111827] px-4 py-2 border-b border-blue-900/30 flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block animate-pulse"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              </div>
              <span className="font-mono text-[11px] text-gray-400">root@system:~/cv</span>
              <span className="text-[10px] text-blue-400 font-mono">Next.js v14.2</span>
            </header>
            <div className="p-4 font-mono text-xs text-blue-300 bg-[#070b14]/80 overflow-x-auto">
              <p className="text-gray-400">root@system:~$ whoami</p>
              <p className="text-cyan-400 font-bold mt-1">&gt; {fullName}_</p>
            </div>
          </section>

          {/* Presentación y rol */}
          <article className="bg-[#0c1222] border border-blue-900/40 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500 pointer-events-none"></div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 mb-3">
              Desarrollo de Software &amp; Arquitectura Cloud
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Estudiante apasionado por la tecnología con sólida formación técnica en mantenimiento de equipos, seguridad informática, respaldo de datos y desarrollo de software. Experiencia práctica en soluciones tecnológicas orientadas a la optimización de procesos y despliegues en infraestructura propia.
            </p>
            <footer className="mt-4 inline-flex items-center gap-2 text-xs text-blue-300 bg-blue-950/80 px-3 py-1.5 rounded-lg border border-blue-800/40 font-mono shadow-sm">
              <span>✦</span>
              <span>&quot;Todo lo que puedes imaginar lo puedes lograr&quot;</span>
            </footer>
          </article>

        </div>
      </div>

      {/* Competencias */}
      <section className="max-w-6xl mx-auto mt-8">
        <div className="flex items-center gap-2 mb-6">
          <span aria-hidden="true" className="text-blue-400 text-lg">✳</span>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">Stack Tecnológico &amp; Competencias</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Lenguajes & Base", items: ["Python / PHP", "C# / SQL", "JavaScript / HTML & CSS"] },
            { title: "Infraestructura & Cloud", items: ["Docker Engine / LXC", "Git & GitHub Actions", "Despliegue en Homelab"] },
            { title: "Sistemas & Soporte", items: ["Mantenimiento de Equipos", "Seguridad Informática", "Respaldo de Datos"] },
            { title: "Habilidades", items: ["Resolución de Problemas", "Optimización de Procesos", "Documentación Técnica"] }
          ].map(cat => (
            <article key={cat.title} className="bg-[#0c1222] border border-blue-900/40 rounded-xl p-5 shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4 pb-2 border-b border-blue-900/40">
                {cat.title}
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-300">
                {cat.items.map(item => (
                  <li key={item} className="flex items-center gap-2 hover:translate-x-1 transition-transform"><span aria-hidden="true" className="text-cyan-400">✓</span>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Trayectoria y educación */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-[#0c1222] border border-blue-900/40 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-blue-500/50 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <span aria-hidden="true" className="text-blue-400 text-lg">◷</span>
            <h3 className="text-sm sm:text-md font-bold text-white tracking-wide">Trayectoria &amp; Experiencia</h3>
          </div>
          <div className="space-y-4 border-l border-blue-900/60 pl-4 ml-2">
            <article className="hover:translate-x-1 transition-transform">
              <time className="text-xs text-blue-400 font-mono">2023 - Presente</time>
              <h4 className="text-sm font-bold text-white mt-0.5">Suministros y Más</h4>
              <p className="text-xs text-gray-300 mt-1">
                Mantenimiento de sistemas, seguridad informática, respaldo de datos y desarrollo de software aplicado a la optimización operativa.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-[#0c1222] border border-blue-900/40 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-blue-500/50 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <span aria-hidden="true" className="text-blue-400 text-lg">▤</span>
            <h3 className="text-sm sm:text-md font-bold text-white tracking-wide">Educación &amp; Formación</h3>
          </div>
          <div className="space-y-4 border-l border-blue-900/60 pl-4 ml-2">
            <article className="hover:translate-x-1 transition-transform">
              <time className="text-xs text-blue-400 font-mono">En curso</time>
              <h4 className="text-sm font-bold text-white mt-0.5">Ingeniería en Sistemas (UMG)</h4>
              <p className="text-xs text-gray-300 mt-1">
                Formación académica orientada al desarrollo de software, bases de datos y arquitectura de sistemas modernos.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
