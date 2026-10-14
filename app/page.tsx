export default function CVPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6 font-mono">
      <div className="max-w-xl mx-auto space-y-6">
        
        {/* Barra superior de estado */}
        <div className="flex justify-between items-center text-xs text-emerald-400 border-b border-zinc-800 pb-2">
          <span>🟢 NODE_ENV: PRODUCTION // HOST: GUATEMALA</span>
          <span className="bg-zinc-900 px-2 py-1 rounded text-zinc-300">GUASTATOYA</span>
        </div>

        {/* Encabezado Principal */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Brandon Gustavo Casasola Orellana</h1>
          <p className="text-sm text-zinc-400">
            Ingeniería en Sistemas &amp; Desarrollo de Software | El Progreso, Guatemala
          </p>
        </div>

        {/* Tarjeta de Métricas Técnicas */}
        <div className="grid grid-cols-2 gap-4 bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl text-xs">
          <div>
            <span className="text-zinc-500 block">STACK PRINCIPAL</span>
            <span className="text-zinc-200 font-semibold">Python / PHP / C# / SQL</span>
          </div>
          <div>
            <span className="text-zinc-500 block">ESTADO ACADÉMICO</span>
            <span className="text-zinc-200 font-semibold">Universidad Mariano Gálvez</span>
          </div>
          <div>
            <span className="text-zinc-500 block">DISPONIBILIDAD</span>
            <span className="text-emerald-400 font-semibold">99.98%</span>
          </div>
          <div>
            <span className="text-zinc-500 block">ENFOQUE</span>
            <span className="text-cyan-400 font-semibold">Full-Stack &amp; Infraestructura</span>
          </div>
        </div>

        {/* Resumen Ejecutivo */}
        <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl space-y-2">
          <h2 className="text-xs text-zinc-500 tracking-wider">// RESUMEN EJECUTIVO</h2>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Estudiante de Ingeniería en Sistemas con formación técnica en mantenimiento de equipos, seguridad informática, respaldo de datos y desarrollo de software. Experiencia práctica en soporte técnico, redes y despliegue de soluciones tecnológicas orientadas a la optimización de procesos.
          </p>
        </div>

        {/* Experiencia y Educación */}
        <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl space-y-3">
          <h2 className="text-xs text-zinc-500 tracking-wider">// TRAYECTORIA Y ESTUDIOS</h2>
          <div className="space-y-2 text-xs">
            <div>
              <span className="text-emerald-400 font-semibold">Suministros y Más (2023)</span>
              <p className="text-zinc-400">Mantenimiento de sistemas, seguridad informática y respaldos de datos.</p>
            </div>
            <div className="border-t border-zinc-800 pt-2">
              <span className="text-cyan-400 font-semibold">Universidad Mariano Gálvez de Guatemala</span>
              <p className="text-zinc-400">Estudiante de la carrera de Ingeniería en Sistemas.</p>
            </div>
          </div>
        </div>

        {/* Canales de Contacto */}
        <div className="space-y-2">
          <h2 className="text-xs text-zinc-500 tracking-wider">// CANALES DE CONTACTO</h2>
          <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-lg text-xs flex justify-between items-center">
            <span className="text-cyan-400">brangusta@gmail.com</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-lg text-xs flex justify-between items-center">
            <span className="text-cyan-400">+502 3766-4237</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          </div>
        </div>

      </div>
    </main>
  );
}