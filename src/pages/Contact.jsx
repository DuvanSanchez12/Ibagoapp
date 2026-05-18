import { useState, useEffect } from 'react'

const team = [
  {
    name: 'Duvan Camilo Rodriguez',
    role: 'Líder del proyecto | Backend Developer',
    instagram: 'https://www.instagram.com/duvan_sanchez547'
  },
  {
    name: 'Jonatan Stiven Fernández',
    role: 'Backend Developer | Lógica de programación',
    instagram: 'https://www.instagram.com/kirojsfv'
  },
  {
    name: 'John Anderson Lozada',
    role: 'Frontend Designer | UX/UI',
    instagram: 'https://www.instagram.com/john_anderson0406'
  },
  {
    name: 'Jhonatan Mauricio Trujillo',
    role: 'Gestor de documentación',
    instagram: 'https://www.instagram.com/xdvalixd'
  }
]

const Contact = () => {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' })
  const [submitted, setSubmitted] = useState(false)
  const [activeTeam, setActiveTeam] = useState(0)

  useEffect(() => {
    setTimeout(() => setHeaderVisible(true), 100)
    
    const interval = setInterval(() => {
      setActiveTeam(prev => (prev + 1) % team.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ nombre: '', correo: '', mensaje: '' })
      setSubmitted(false)
    }, 3000)
  }

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
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes highlight {
          0%, 100% { box-shadow: 0 0 0 0 rgba(232, 168, 106, 0); }
          50% { box-shadow: 0 0 30px 10px rgba(232, 168, 106, 0.3); }
        }
      `}</style>

      {/* Decorative Elements */}
      <div style={{
        position: 'fixed',
        top: '25%',
        left: '-50px',
        width: '100px',
        height: '100px',
        background: 'linear-gradient(135deg, #f3c99c40 0%, transparent 100%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '25%',
        right: '-30px',
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #e8a86a30 0%, transparent 100%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite 1s',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #fef9f3 0%, #fff5eb 100%)',
        padding: '50px 20px 40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(243, 201, 156, 0.2) 0%, transparent 70%)',
          animation: 'pulse 4s ease-in-out infinite'
        }} />
        
        <span style={{
          display: 'inline-block',
          fontSize: '14px',
          color: '#e8a86a',
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600,
          marginBottom: '10px',
          letterSpacing: '2px',
          animation: 'fadeInUp 0.8s ease-out forwards',
          animationDelay: '0.1s',
          opacity: headerVisible ? 1 : 0
        }}>
          CONÉCTATE CON NOSOTROS
        </span>
        
        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 900,
          fontFamily: 'Manrope, sans-serif',
          background: 'linear-gradient(135deg, #e8a86a 0%, #d4954a 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '15px',
          animation: 'fadeInUp 0.8s ease-out forwards',
          animationDelay: '0.2s',
          opacity: headerVisible ? 1 : 0
        }}>
          Contáctanos
        </h1>
        
        <div style={{
          width: '80px',
          height: '4px',
          backgroundColor: '#e8a86a',
          borderRadius: '2px',
          margin: '0 auto'
        }} />
      </div>

      {/* Contact Info Cards */}
      <div style={{
        padding: '40px 20px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
          marginBottom: '50px'
        }}>
          {/* Email */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '30px',
            textAlign: 'center',
            boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            border: '2px solid transparent',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)'
            e.currentTarget.style.borderColor = '#e8a86a'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.borderColor = 'transparent'
          }}>
            <div style={{
              width: '70px',
              height: '70px',
              backgroundColor: '#EA4335',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 700,
              fontFamily: 'Manrope, sans-serif',
              color: '#1a1a1a',
              marginBottom: '10px'
            }}>
              Correo Electrónico
            </h3>
            <a href="mailto:ibagoapp@gmail.com" style={{
              fontSize: '14px',
              color: '#e8a86a',
              fontFamily: 'Manrope, sans-serif',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              ibagoapp@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '30px',
            textAlign: 'center',
            boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            border: '2px solid transparent',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)'
            e.currentTarget.style.borderColor = '#e8a86a'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.borderColor = 'transparent'
          }}>
            <div style={{
              width: '70px',
              height: '70px',
              backgroundColor: '#4CAF50',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 700,
              fontFamily: 'Manrope, sans-serif',
              color: '#1a1a1a',
              marginBottom: '10px'
            }}>
              Teléfono / WhatsApp
            </h3>
            <a href="https://wa.me/573103216365" target="_blank" rel="noreferrer" style={{
              fontSize: '14px',
              color: '#4CAF50',
              fontFamily: 'Manrope, sans-serif',
              textDecoration: 'none',
              fontWeight: 600,
              display: 'block',
              marginBottom: '5px'
            }}>
              310 321 6365
            </a>
            <a href="https://wa.me/573150707521" target="_blank" rel="noreferrer" style={{
              fontSize: '14px',
              color: '#4CAF50',
              fontFamily: 'Manrope, sans-serif',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              315 070 7521
            </a>
          </div>

          {/* Website */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '30px',
            textAlign: 'center',
            boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            border: '2px solid transparent',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)'
            e.currentTarget.style.borderColor = '#e8a86a'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.borderColor = 'transparent'
          }}>
            <div style={{
              width: '70px',
              height: '70px',
              backgroundColor: '#7E57C2',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 700,
              fontFamily: 'Manrope, sans-serif',
              color: '#1a1a1a',
              marginBottom: '10px'
            }}>
              Sitio Web
            </h3>
            <a href="https://ibagoapp.vercel.app" target="_blank" rel="noreferrer" style={{
              fontSize: '14px',
              color: '#7E57C2',
              fontFamily: 'Manrope, sans-serif',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              ibagoapp.vercel.app
            </a>
          </div>
        </div>
      </div>

      {/* Team Instagram */}
      <div style={{
        padding: '30px 20px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(26px, 4vw, 36px)',
          fontWeight: 800,
          fontFamily: 'Manrope, sans-serif',
          color: '#1a1a1a',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          Nuestro Equipo en Instagram
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '25px'
        }}>
          {team.map((member, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                padding: '30px 20px',
                textAlign: 'center',
                boxShadow: activeTeam === index ? '0 20px 50px rgba(232, 168, 106, 0.3)' : '0 15px 40px rgba(0,0,0,0.08)',
                border: activeTeam === index ? '3px solid #e8a86a' : '2px solid transparent',
                transition: 'all 0.4s ease',
                transform: activeTeam === index ? 'scale(1.03)' : 'scale(1)',
                animation: activeTeam === index ? 'highlight 2s ease-in-out infinite' : 'none'
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#E4405F',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 10px 30px rgba(228, 64, 95, 0.3)'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              
              <h3 style={{
                fontSize: '16px',
                fontWeight: 700,
                fontFamily: 'Manrope, sans-serif',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                {member.name}
              </h3>
              
              <span style={{
                display: 'inline-block',
                backgroundColor: '#f3c99c30',
                color: '#d4954a',
                padding: '4px 12px',
                borderRadius: '15px',
                fontSize: '11px',
                fontWeight: 600,
                fontFamily: 'Manrope, sans-serif',
                marginBottom: '15px'
              }}>
                {member.role}
              </span>
              
              <a 
                href={member.instagram} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#E4405F',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: 'Manrope, sans-serif',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)'
                  e.target.style.boxShadow = '0 5px 20px rgba(228, 64, 95, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
                Seguir en Instagram
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div style={{
        padding: '30px 20px',
        maxWidth: '600px',
        margin: '40px auto 0'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '30px',
          padding: '40px 35px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 800,
            fontFamily: 'Manrope, sans-serif',
            color: '#1a1a1a',
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            Envíanos un mensaje
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                required
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  borderRadius: '15px',
                  border: '2px solid #e0e0e0',
                  fontSize: '15px',
                  fontFamily: 'Manrope, sans-serif',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#e8a86a'
                  e.target.style.boxShadow = '0 0 0 4px rgba(232, 168, 106, 0.2)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={formData.correo}
                onChange={(e) => setFormData({...formData, correo: e.target.value})}
                required
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  borderRadius: '15px',
                  border: '2px solid #e0e0e0',
                  fontSize: '15px',
                  fontFamily: 'Manrope, sans-serif',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#e8a86a'
                  e.target.style.boxShadow = '0 0 0 4px rgba(232, 168, 106, 0.2)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '25px' }}>
              <textarea
                placeholder="Tu mensaje..."
                value={formData.mensaje}
                onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                required
                rows="4"
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  borderRadius: '15px',
                  border: '2px solid #e0e0e0',
                  fontSize: '15px',
                  fontFamily: 'Manrope, sans-serif',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                  resize: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#e8a86a'
                  e.target.style.boxShadow = '0 0 0 4px rgba(232, 168, 106, 0.2)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>
            
            <button
              type="submit"
              disabled={submitted}
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: submitted ? '#4CAF50' : '#e8a86a',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                fontSize: '16px',
                fontWeight: 700,
                fontFamily: 'Manrope, sans-serif',
                cursor: submitted ? 'default' : 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                if (!submitted) {
                  e.target.style.transform = 'scale(1.02)'
                  e.target.style.boxShadow = '0 10px 30px rgba(232, 168, 106, 0.4)'
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'
                e.target.style.boxShadow = 'none'
              }}
            >
              {submitted ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  ¡Mensaje enviado!
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Enviar mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact