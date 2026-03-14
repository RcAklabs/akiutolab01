import { motion } from 'motion/react';
import { Cpu, Code, Zap, Rocket, Terminal, ChevronRight, Menu, X, Microchip } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-neon-cyan selection:text-black">
      {/* Background Grid */}
      <div className="fixed inset-0 grid-bg radial-mask pointer-events-none z-0"></div>
      
      {/* Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-8 h-8 text-neon-cyan" />
            <span className="font-mono font-bold text-xl tracking-tighter">ROBO<span className="text-neon-cyan">CAMP</span></span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#cursos" className="hover:text-neon-cyan transition-colors">/cursos</a>
            <a href="#beneficios" className="hover:text-neon-cyan transition-colors">/beneficios</a>
            <a href="#metodologia" className="hover:text-neon-cyan transition-colors">/metodología</a>
            <button className="px-6 py-2 bg-white/5 hover:bg-neon-cyan hover:text-black border border-white/10 hover:border-neon-cyan transition-all duration-300 uppercase tracking-widest text-xs font-bold">
              Inscribirse
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-dark-surface border-b border-white/5 py-4 px-6 flex flex-col gap-4 font-mono text-sm">
            <a href="#cursos" onClick={() => setIsMenuOpen(false)} className="hover:text-neon-cyan p-2">/cursos</a>
            <a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="hover:text-neon-cyan p-2">/beneficios</a>
            <a href="#metodologia" onClick={() => setIsMenuOpen(false)} className="hover:text-neon-cyan p-2">/metodología</a>
            <button className="px-6 py-3 bg-neon-cyan text-black uppercase tracking-widest text-xs font-bold mt-2">
              Inscribirse
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 min-h-[80vh] flex flex-col justify-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-neon-purple"></span>
              <span className="font-mono text-neon-purple text-sm uppercase tracking-widest">Temporada de Vacaciones 2026</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Hackea <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple glow-text-cyan">
                El Futuro
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-light leading-relaxed">
              Cursos intensivos de robótica y programación con Arduino para estudiantes. 
              Transforma tus vacaciones construyendo tecnología real, desde circuitos básicos hasta robots autónomos.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 font-mono">
              <button className="px-8 py-4 bg-neon-cyan text-black hover:bg-white transition-colors uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 group">
                Ver Cursos
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/20 hover:border-white transition-colors uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2">
                <Terminal className="w-4 h-4" />
                Saber Más
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="beneficios" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-mono text-neon-cyan text-sm uppercase tracking-widest mb-4">/ Beneficios</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Por qué aprender<br/>robótica ahora.</h3>
            </div>
            <p className="text-gray-400 max-w-md">
              No solo enseñamos a conectar cables. Desarrollamos pensamiento lógico, resolución de problemas y creatividad aplicada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Code />, title: "Lógica de Programación", desc: "Aprende C++ adaptado para Arduino. Escribe código que interactúa con el mundo físico." },
              { icon: <Zap />, title: "Electrónica Práctica", desc: "Entiende cómo funcionan los sensores, motores y componentes electrónicos desde cero." },
              { icon: <Rocket />, title: "Proyectos Reales", desc: "Construye brazos robóticos, sistemas de alarma y vehículos autónomos. Nada de teoría aburrida." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-dark-surface border border-white/5 p-8 hover:border-neon-purple/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-neon-purple mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section id="cursos" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="mb-16">
            <h2 className="font-mono text-neon-purple text-sm uppercase tracking-widest mb-4">/ Módulos</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Niveles de Entrenamiento</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Level 1 */}
            <div className="relative p-8 border border-white/10 bg-gradient-to-b from-dark-surface to-dark-bg group hover:border-neon-cyan/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 font-mono text-6xl font-black text-white/5 group-hover:text-neon-cyan/10 transition-colors">01</div>
              <div className="font-mono text-xs text-neon-cyan mb-4 px-3 py-1 bg-neon-cyan/10 inline-block rounded-full">EDADES 10-13</div>
              <h4 className="text-2xl font-bold mb-2">Iniciación Maker</h4>
              <p className="text-gray-400 text-sm mb-8 min-h-[60px]">Primeros pasos con electrónica básica, LEDs, botones y programación en bloques/C++ básico.</p>
              
              <ul className="space-y-3 mb-8 text-sm text-gray-300 font-mono">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-neon-cyan" /> Sintaxis básica</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-neon-cyan" /> Circuitos simples</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-neon-cyan" /> Semáforo inteligente</li>
              </ul>
              
              <button className="w-full py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm uppercase tracking-widest">
                Detalles
              </button>
            </div>

            {/* Level 2 */}
            <div className="relative p-8 border border-neon-purple/30 bg-gradient-to-b from-neon-purple/5 to-dark-bg glow-box group">
              <div className="absolute top-0 right-0 p-4 font-mono text-6xl font-black text-white/5 group-hover:text-neon-purple/10 transition-colors">02</div>
              <div className="font-mono text-xs text-neon-purple mb-4 px-3 py-1 bg-neon-purple/10 inline-block rounded-full">EDADES 13-16</div>
              <h4 className="text-2xl font-bold mb-2">Robótica Intermedia</h4>
              <p className="text-gray-400 text-sm mb-8 min-h-[60px]">Integración de sensores ultrasónicos, servomotores y lógica condicional avanzada.</p>
              
              <ul className="space-y-3 mb-8 text-sm text-gray-300 font-mono">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-neon-purple" /> Control de motores</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-neon-purple" /> Sensores de distancia</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-neon-purple" /> Robot evasor de obstáculos</li>
              </ul>
              
              <button className="w-full py-3 bg-neon-purple text-white hover:bg-white hover:text-black transition-colors font-mono text-sm uppercase tracking-widest">
                Detalles
              </button>
            </div>

            {/* Level 3 */}
            <div className="relative p-8 border border-white/10 bg-gradient-to-b from-dark-surface to-dark-bg group hover:border-neon-cyan/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 font-mono text-6xl font-black text-white/5 group-hover:text-neon-cyan/10 transition-colors">03</div>
              <div className="font-mono text-xs text-gray-400 mb-4 px-3 py-1 bg-white/5 inline-block rounded-full">EDADES 15-18</div>
              <h4 className="text-2xl font-bold mb-2">Sistemas Autónomos</h4>
              <p className="text-gray-400 text-sm mb-8 min-h-[60px]">Comunicaciones Bluetooth, módulos WiFi (ESP32), IoT y brazos robóticos complejos.</p>
              
              <ul className="space-y-3 mb-8 text-sm text-gray-300 font-mono">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-neon-cyan" /> Internet of Things (IoT)</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-neon-cyan" /> Control por App</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-neon-cyan" /> Brazo robótico 4DOF</li>
              </ul>
              
              <button className="w-full py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm uppercase tracking-widest">
                Detalles
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="bg-neon-cyan text-black p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-20"></div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 relative z-10">
              Cupos Limitados
            </h2>
            <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 relative z-10">
              Asegura el lugar de tu hijo/a en el campamento de robótica más avanzado de la ciudad. Las clases inician en julio.
            </p>
            <button className="px-10 py-5 bg-black text-white hover:bg-transparent hover:text-black border-2 border-black transition-colors uppercase tracking-widest font-bold text-lg relative z-10">
              Reservar Matrícula
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-dark-surface py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-neon-cyan" />
            <span className="font-mono font-bold tracking-tighter">ROBO<span className="text-neon-cyan">CAMP</span></span>
          </div>
          
          <div className="flex gap-6 font-mono text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
          
          <div className="font-mono text-xs text-gray-600">
            © 2026 RoboCamp. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
