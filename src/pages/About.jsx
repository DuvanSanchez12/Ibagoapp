import { useState, useEffect } from 'react'

const team = [
  {
    name: 'Duvan Camilo Rodriguez',
    role: 'Líder del proyecto | Backend Developer',
    description: 'Apasionado por la programación y el aprendizaje constante. Responsable de la arquitectura del sistema y la integración de tecnologías clave para IbaGO.',
    image: '/images/duvan.jpg',
    linkedin: 'https://www.linkedin.com/in/duvan-camilo-rodriguez-sanchez-810433270',
    instagram: 'https://www.instagram.com/duvan_sanchez547'
  },
  {
    name: 'Jonatan Stiven Fernández',
    role: 'Backend Developer | Lógica de programación',
    description: 'Especialista en lógica y resolución de problemas. Se encarga de garantizar la eficiencia y escalabilidad del backend de IbaGO.',
    image: '/images/jonatan.jpg',
    linkedin: 'https://linkedin.com/in/jonatan',
    instagram: 'https://www.instagram.com/kirojsfv'
  },
  {
    name: 'John Anderson Lozada',
    role: 'Frontend Designer | UX/UI',
    description: 'Diseñador de interfaces intuitivas y atractivas. Responsable de conectar la experiencia de usuario con la visión tecnológica del proyecto.',
    image: '/images/john.jpg',
    linkedin: 'https://linkedin.com/in/john-anderson-lozada-chala-a251129a',
    instagram: 'https://www.instagram.com/john_anderson0406'
  },
  {
    name: 'Jhonatan Mauricio Trujillo',
    role: 'Gestor de documentación',
    description: 'Encargado de la documentación técnica e investigativa. Garantiza que cada avance esté registrado y preparado para difusión académica.',
    image: '/images/jhonatan.jpg',
    linkedin: 'https://linkedin.com/in/jhonatan-mauricio-trujillo-parra-5b9a8b337',
    instagram: 'https://www.instagram.com/xdvalixd'
  },
  {
    name: 'Esteban Ernesto Morales Castro',
    role: 'Asesor en desarrollo',
    description: 'Asesor área de programación y mentor académico del proyecto IbaGO.',
    image: '/images/esteban.jpg',
    linkedin: 'https://linkedin.com/in/estebanmorales84'
  },
  {
    name: 'Juan Carlos Gonzales',
    role: 'Asesor en documentación',
    description: 'Asesor del área de documentación y mentor académico del proyecto IbaGO.',
    image: '/images/Juan_Carlos.png',
    linkedin: 'https://www.linkedin.com/in/duvan-camilo-rodriguez-sanchez-810433270'
  }
]

const phases = [
  {
    title: 'Fase de análisis',
    description: 'IbaGO incorpora grandes recursos para gestionar la información de la app.',
    image: '/images/blog1.jpeg',
    docUrl: '/images/ProyectoIbaGo.docx'
  },
  {
    title: 'Fase de desarrollo',
    description: 'IbaGO ya cuenta con gran parte del sistema y se puede avanzar con el desarrollo.',
    image: '/images/blog.jpg',
    docUrl: '/images/ProyectoIbaGo.docx'
  },
  {
    title: 'Fase de ejecución',
    description: 'IbaGO incorpora grandes recursos para gestionar la información de la app.',
    image: '/images/index.png',
    docUrl: 'https://github.com/DuvanSanchez12/Ibagoapp/releases/download/IbaGO/IbaGO.apk'
  }
]

const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={className} style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 0.8s ease-out'
    }}>
      {children}
    </div>
  )
}

const TeamCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200 + index * 150)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'white',
        borderRadius: '24px',
        padding: '30px 25px',
        textAlign: 'center',
        boxShadow: isHovered 
          ? '0 25px 60px rgba(232, 168, 106, 0.3)' 
          : '0 15px 40px rgba(0,0,0,0.08)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: isHovered ? 'translateY(-15px) scale(1.02)' : 'translateY(0) scale(1)',
        opacity: isVisible ? 1 : 0,
        border: isHovered ? '2px solid #e8a86a' : '2px solid transparent',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '300px'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100px',
        background: 'linear-gradient(135deg, #f3c99c30 0%, transparent 100%)',
        zIndex: 0
      }} />
      
      <div style={{
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          position: 'relative',
          display: 'inline-block'
        }}>
          <img 
            src={member.image} 
            alt={member.name}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid white',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'all 0.4s ease'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '5px',
            right: '5px',
            width: '25px',
            height: '25px',
            backgroundColor: '#4CAF50',
            borderRadius: '50%',
            border: '3px solid white'
          }} />
        </div>
        
        <h5 style={{
          fontSize: '18px',
          fontWeight: 700,
          fontFamily: 'Manrope, sans-serif',
          color: '#1a1a1a',
          marginTop: '20px',
          marginBottom: '8px'
        }}>
          {member.name}
        </h5>
        
        <span style={{
          display: 'inline-block',
          backgroundColor: '#f3c99c30',
          color: '#d4954a',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 600,
          fontFamily: 'Manrope, sans-serif',
          marginBottom: '12px'
        }}>
          {member.role}
        </span>
        
        <p style={{
          fontSize: '13px',
          color: '#666',
          fontFamily: 'Manrope, sans-serif',
          lineHeight: '1.6',
          marginBottom: '20px'
        }}>
          {member.description}
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
          opacity: isHovered ? 1 : 0.7,
          transition: 'all 0.3s ease'
        }}>
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noreferrer"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#0077b5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          {member.instagram && (
            <a 
              href={member.instagram} 
              target="_blank" 
              rel="noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#E4405F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const PhaseCard = ({ phase, index, isEven }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500 + index * 300)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div 
      className="row align-items-center g-5"
      style={{
        marginBottom: index < phases.length - 1 ? '80px' : '0'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`col-12 col-lg-5 ${isEven ? 'order-lg-2' : ''}`} style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : (isEven ? 'translateX(50px)' : 'translateX(-50px)'),
        transition: 'all 0.8s ease-out'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '35px',
          boxShadow: isHovered 
            ? '0 25px 60px rgba(232, 168, 106, 0.25)' 
            : '0 15px 40px rgba(0,0,0,0.08)',
          border: isHovered ? '2px solid #e8a86a' : '2px solid transparent',
          transition: 'all 0.4s ease',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-30px',
            right: '-30px',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, #f3c99c40 0%, transparent 100%)',
            borderRadius: '50%'
          }} />
          
          <span style={{
            display: 'inline-block',
            backgroundColor: '#e8a86a',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 600,
            fontFamily: 'Manrope, sans-serif',
            marginBottom: '15px'
          }}>
            0{index + 1}
          </span>
          
          <h3 style={{
            fontSize: '28px',
            fontWeight: 800,
            fontFamily: 'Manrope, sans-serif',
            color: '#1a1a1a',
            marginBottom: '10px'
          }}>
            {phase.title}
          </h3>
          
          <p style={{
            fontSize: '15px',
            color: '#666',
            fontFamily: 'Manrope, sans-serif',
            lineHeight: '1.7',
            marginBottom: '25px'
          }}>
            {phase.description}
          </p>
          
          <a 
            href={phase.docUrl}
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#1a1a1a',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'Manrope, sans-serif',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Descargar
          </a>
        </div>
      </div>
      
      <div className={`col-12 col-lg-6 ${isEven ? 'order-lg-1' : ''}`} style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : (isEven ? 'translateX(-50px)' : 'translateX(50px)'),
        transition: 'all 0.8s ease-out 0.2s'
      }}>
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: isHovered 
            ? '0 30px 70px rgba(232, 168, 106, 0.3)' 
            : '0 20px 50px rgba(0,0,0,0.15)',
          transition: 'all 0.4s ease',
          transform: isHovered ? 'scale(1.02)' : 'scale(1)'
        }}>
          <img 
            src={phase.image} 
            alt={phase.title}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
          }} />
        </div>
      </div>
    </div>
  )
}

const About = () => {
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setHeaderVisible(true), 100)
  }, [])

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#fef9f3',
      paddingTop: '70px',
      paddingBottom: '80px'
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Decorative Elements */}
      <div style={{
        position: 'fixed',
        top: '20%',
        left: '-50px',
        width: '100px',
        height: '100px',
        background: 'linear-gradient(135deg, #f3c99c40 0%, transparent 100%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'fixed',
        top: '60%',
        right: '-30px',
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #e8a86a30 0%, transparent 100%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite 1s',
        pointerEvents: 'none'
      }} />

      {/* Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #fef9f3 0%, #fff5eb 100%)',
        padding: '80px 20px 60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(243, 201, 156, 0.2) 0%, transparent 70%)',
          animation: 'pulse 4s ease-in-out infinite'
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: 1
        }}>
          <span style={{
            display: 'inline-block',
            fontSize: '14px',
            color: '#e8a86a',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 600,
            marginBottom: '10px',
            animation: 'fadeInUp 0.8s ease-out forwards',
            animationDelay: '0.1s',
            opacity: headerVisible ? 1 : 0,
            letterSpacing: '2px'
          }}>
            CONÓCENOS
          </span>
          
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            fontFamily: 'Manrope, sans-serif',
            background: 'linear-gradient(135deg, #e8a86a 0%, #d4954a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px',
            animation: 'fadeInUp 0.8s ease-out forwards',
            animationDelay: '0.2s',
            opacity: headerVisible ? 1 : 0
          }}>
            Quiénes Somos
          </h1>
          
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#e8a86a',
            borderRadius: '2px',
            margin: '0 auto 25px',
            animation: 'scaleIn 0.8s ease-out forwards',
            animationDelay: '0.4s',
            transform: headerVisible ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'center'
          }} />
          
          <p style={{
            fontSize: 'clamp(14px, 2vw, 18px)',
            color: '#666',
            fontFamily: 'Manrope, sans-serif',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto 30px',
            animation: 'fadeInUp 0.8s ease-out forwards',
            animationDelay: '0.6s',
            opacity: headerVisible ? 1 : 0
          }}>
            Somos IbaGO, un proyecto del semillero de investigación 
            <span style={{ color: '#e8a86a', fontWeight: 700 }}> QUANTUM</span> de la 
            Corporación Universitaria Minuto de Dios (UNIMINUTO), enfocado en el 
            desarrollo de soluciones tecnológicas innovadoras para potenciar 
            el turismo cultural en Ibagué.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease-out forwards',
            animationDelay: '0.8s',
            opacity: headerVisible ? 1 : 0
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '20px 30px',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#e8a86a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '24px' }}>🎓</span>
              </div>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#1a1a1a', display: 'block' }}>6</span>
                <span style={{ fontSize: '12px', color: '#888', fontFamily: 'Manrope, sans-serif' }}>Integrantes</span>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '20px 30px',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#4CAF50',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '24px' }}>🚀</span>
              </div>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#1a1a1a', display: 'block' }}>En desarrollo</span>
                <span style={{ fontSize: '12px', color: '#888', fontFamily: 'Manrope, sans-serif' }}>Fase actual</span>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '20px 30px',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#7E57C2',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '24px' }}>💡</span>
              </div>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#1a1a1a', display: 'block' }}>AR + IA</span>
                <span style={{ fontSize: '12px', color: '#888', fontFamily: 'Manrope, sans-serif' }}>Tecnologías</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div style={{
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <AnimatedSection delay={200}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 800,
            fontFamily: 'Manrope, sans-serif',
            color: '#1a1a1a',
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            Nuestro Equipo
          </h2>
        </AnimatedSection>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          justifyItems: 'center'
        }}>
          {team.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>

      {/* Phases Section */}
      <div style={{
        padding: '60px 20px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <AnimatedSection delay={400}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 800,
            fontFamily: 'Manrope, sans-serif',
            color: '#1a1a1a',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            Desarrollo del Proyecto
          </h2>
        </AnimatedSection>
        
        <div style={{
          backgroundColor: 'white',
          borderRadius: '30px',
          padding: '50px 40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
        }}>
          {phases.map((phase, index) => (
            <PhaseCard 
              key={index} 
              phase={phase} 
              index={index} 
              isEven={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About