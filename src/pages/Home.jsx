import { useEffect, useState } from 'react'
import { getPlaces, saveEmail } from '../firebase'

const ImageWithFallback = ({ src, alt, style, onClick, onMouseEnter, onMouseLeave }) => {
  const [hasError, setHasError] = useState(false)
  const [isEmpty, setIsEmpty] = useState(!src)

  const getInitial = (name) => {
    if (!name) return '?'
    const parts = String(name).split(' ')
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase()
    }
    return String(name).substring(0, 2).toUpperCase()
  }

  if (isEmpty || hasError) {
    return (
      <div style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f3c99c 0%, #e8b88a 100%)',
        color: 'white',
        fontWeight: 700,
        fontSize: style?.width ? `${Math.min(parseInt(style.width) * 0.4, 20)}px` : '14px',
        fontFamily: 'Manrope, sans-serif',
        borderRadius: style?.borderRadius || '0px'
      }}>
        {getInitial(alt)}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onError={() => setHasError(true)}
    />
  )
}

const Home = () => {
  const [visible, setVisible] = useState(false)
  const [lugares, setLugares] = useState([])
  const [filteredLugares, setFilteredLugares] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const [stats, setStats] = useState({})
  const [showNotificationModal, setShowNotificationModal] = useState(false)
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [mainImage, setMainImage] = useState(null)

  const typesConfig = {
    'parque': { label: 'Parques', icon: '🌳', color: '#4CAF50' },
    'museo': { label: 'Museos', icon: '🏛️', color: '#EF6C00' },
    'monumento': { label: 'Monumentos', icon: '🗿', color: '#FFC107' },
    'estadio': { label: 'Estadios', icon: '🏟️', color: '#3300FF' },
    'teatro': { label: 'Teatros', icon: '🎭', color: '#7E57C2' },
    'iglesia': { label: 'Iglesias', icon: '⛪', color: '#1E88E5' },
    'mirador': { label: 'Miradores', icon: '👁️', color: '#009688' },
    'jardin': { label: 'Jardines', icon: '🌺', color: '#81C784' },
    'plaza': { label: 'Plazas', icon: '🏛️', color: '#FF7043' },
    'quebrada': { label: 'Quebradas', icon: '💧', color: '#188B01' },
    'barrio': { label: 'Barrios', icon: '🏘️', color: '#9E9E9E' },
    'aeropuerto': { label: 'Aeropuerto', icon: '✈️', color: '#BFFF00' },
    'terminal': { label: 'Terminales', icon: '🚌', color: '#FF0062' },
    'banco': { label: 'Bancos', icon: '🏦', color: '#00BCD4' },
    'colegio': { label: 'Colegios', icon: '🎓', color: '#8D6E63' },
    'centro': { label: 'Centros', icon: '🏢', color: '#08C202' },
    'publico': { label: 'Públicos', icon: '🏛️', color: '#607D8B' },
    'otros': { label: 'Otros', icon: '📍', color: '#607D8B' }
  }

  const categories = [
    { key: 'all', label: 'Todos', icon: '🏠' },
    { key: 'parque', label: 'Parques', icon: '🌳' },
    { key: 'iglesia', label: 'Iglesias', icon: '⛪' },
    { key: 'museo', label: 'Museos', icon: '🏛️' },
    { key: 'teatro', label: 'Teatros', icon: '🎭' },
    { key: 'monumento', label: 'Monumentos', icon: '🗿' },
    { key: 'estadio', label: 'Estadios', icon: '🏟️' },
    { key: 'mirador', label: 'Miradores', icon: '👁️' },
    { key: 'jardin', label: 'Jardines', icon: '🌺' },
    { key: 'plaza', label: 'Plazas', icon: '⏺️' },
    { key: 'quebrada', label: 'Quebradas', icon: '💧' },
    { key: 'barrio', label: 'Barrios', icon: '🏘️' },
    { key: 'aeropuerto', label: 'Aeropuerto', icon: '✈️' },
    { key: 'terminal', label: 'Terminales', icon: '🚌' },
    { key: 'banco', label: 'Bancos', icon: '🏦' },
    { key: 'colegio', label: 'Colegios', icon: '🎓' },
    { key: 'centro', label: 'Centros', icon: '🏢' },
    { key: 'publico', label: 'Públicos', icon: '🏛️' },
    { key: 'otros', label: 'Otros', icon: '📍' }
  ]

  useEffect(() => {
    setVisible(true)
    
    const hasSeenModal = localStorage.getItem('ibago_notification_seen')
    if (!hasSeenModal) {
      setTimeout(() => setShowNotificationModal(true), 1000)
    }
    
    const fetchPlaces = async () => {
      try {
        const data = await getPlaces()
        setLugares(data)
        
        const newStats = { total: data.length }
        data.forEach(place => {
          const type = place.type?.toLowerCase() || 'otros'
          newStats[type] = (newStats[type] || 0) + 1
        })
        setStats(newStats)
        setFilteredLugares(data.slice(0, 8))
        
      } catch (error) {
        console.error("Error cargando lugares:", error)
      }
      setLoading(false)
    }
    fetchPlaces()

  }, [])

  const handleNotificationSubmit = async (e) => {
    e.preventDefault()
    if (email) {
      try {
        await saveEmail(email)
        localStorage.setItem('ibago_notification_seen', 'true')
        localStorage.setItem('ibago_user_email', email)
        setEmailSubmitted(true)
        setTimeout(() => {
          setShowNotificationModal(false)
          setEmailSubmitted(false)
          setEmail('')
        }, 2000)
      } catch (error) {
        console.error("Error al guardar email:", error)
      }
    }
  }

  const closeNotificationModal = () => {
    localStorage.setItem('ibago_notification_seen', 'true')
    setShowNotificationModal(false)
  }

  const filterPlaces = (type) => {
    setActiveFilter(type)
    setShowAll(false)
    if (type === 'all') {
      setFilteredLugares(lugares.slice(0, 8))
    } else {
      const filtered = lugares.filter(p => p.type?.toLowerCase() === type)
      setFilteredLugares(filtered.slice(0, 8))
    }
  }

  const getRemainingCount = () => {
    if (activeFilter === 'all') {
      return lugares.length - filteredLugares.length
    }
    const filteredTotal = lugares.filter(p => p.type?.toLowerCase() === activeFilter).length
    return filteredTotal - filteredLugares.length
  }

  const handleShowMore = () => {
    if (showAll) {
      setFilteredLugares(prev => prev.slice(0, 8))
      setShowAll(false)
    } else {
      const allFiltered = activeFilter === 'all' 
        ? lugares 
        : lugares.filter(p => p.type?.toLowerCase() === activeFilter)
      setFilteredLugares(allFiltered)
      setShowAll(true)
    }
  }

  const openPlaceDetail = (place) => {
    setSelectedPlace(place)
    setMainImage(place.imagenUrl || place.images?.[0] || null)
  }

  const closeDetail = () => {
    setSelectedPlace(null)
    setMainImage(null)
  }

  const getTypeConfig = (type) => {
    return typesConfig[type?.toLowerCase()] || typesConfig['otros']
  }

  const scrollToContent = () => {
    const statsSection = document.querySelector('.stats-section')
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div style={{ 
      opacity: visible ? 1 : 0, 
      transition: 'opacity 0.5s ease',
      paddingTop: '20px',
      paddingBottom: '100px'
    }}>
<style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatIn {
          from { opacity: 0; transform: scale(0.8) translateY(-20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes textGlow {
          0% { filter: drop-shadow(0 0 5px rgba(243, 201, 156, 0.5)); }
          100% { filter: drop-shadow(0 0 20px rgba(243, 201, 156, 0.8)); }
        }
        @keyframes slideRight {
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes popIn {
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          50% { border-color: transparent; }
        }
        @keyframes scaleIn {
          0% { transform: scale(0); opacity: 0; }
          80% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes textReveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalLogoBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.02); }
        }
        @keyframes logoPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>

      {/* Hero Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        padding: '30px 20px 40px'
      }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #fef9f3 0%, #fff5eb 50%, #f3c99c15 100%)',
          borderRadius: '30px', 
          position: 'relative', 
          width: '100%',
          maxWidth: '850px',
          minHeight: '550px',
          padding: '50px 30px',
          boxShadow: '0 20px 60px rgba(243, 201, 156, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          overflow: 'hidden',
          border: '2px solid rgba(243, 201, 156, 0.3)'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(243, 201, 156, 0.15) 0%, transparent 50%)',
            animation: 'pulse 8s ease-in-out infinite'
          }} />
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            position: 'relative',
            zIndex: 2
          }}>
            <img 
              src="/images/index.png" 
              alt="IbaGO Logo"
              style={{
                width: '180px',
                height: '180px',
                objectFit: 'contain',
                animation: 'scaleIn 0.8s ease-out forwards, logoFloat 3s ease-in-out infinite 0.8s',
                animationDelay: '0.2s',
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))'
              }}
            />
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px'
            }}>
              <h1 style={{ 
                fontSize: 'clamp(32px, 6vw, 56px)', 
                fontWeight: 900, 
                fontFamily: 'Manrope, sans-serif',
                background: 'linear-gradient(135deg, #f3c99c 0%, #e8a86a 50%, #d4954a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-1px',
                margin: 0,
                animation: 'textReveal 1.5s ease-out forwards',
                animationDelay: '0.5s',
                opacity: 0
              }}>
                Bienvenido a IbaGO
                </h1>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '15px'
          }}>
            <div style={{
              width: '40px',
              height: '3px',
              backgroundColor: '#f3c99c',
              borderRadius: '2px',
              animation: 'slideRight 1s ease-out forwards',
              animationDelay: '1.8s',
              opacity: 0
            }} />
            <span style={{
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              fontWeight: 500,
              color: '#888',
              fontFamily: 'Manrope, sans-serif',
              animation: 'fadeInUp 0.8s ease-out forwards',
              animationDelay: '2s',
              opacity: 0
            }}>
              Explora Ibagué y descubre
            </span>
            <div style={{
              width: '40px',
              height: '3px',
              backgroundColor: '#f3c99c',
              borderRadius: '2px',
              animation: 'slideLeft 1s ease-out forwards',
              animationDelay: '1.8s',
              opacity: 0
            }} />
          </div>

          <div style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '25px',
            position: 'relative',
            zIndex: 2
          }}>
            {lugares.slice(0, 4).map((place, i) => (
              <div key={place.id} style={{
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '55px',
                height: '55px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                animation: `popIn 0.5s ease-out forwards`,
                animationDelay: `${2.2 + i * 0.1}s`,
                opacity: 0,
                transform: 'scale(0)',
                border: '3px solid #fff'
              }}>
                <ImageWithFallback
                  src={place.imagenUrl}
                  alt={place.name}
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            ))}
            <div style={{
              backgroundColor: '#e8a86a',
              borderRadius: '50%',
              width: '55px',
              height: '55px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 5px 15px rgba(232, 168, 106, 0.4)',
              animation: `popIn 0.5s ease-out forwards`,
              animationDelay: `${2.6}s`,
              opacity: 0,
              transform: 'scale(0)'
            }}>
              <span style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'white'
              }}>
                +150
              </span>
            </div>
          </div>
          
          <button 
            onClick={scrollToContent}
            style={{
              backgroundColor: '#e8a86a',
              border: 'none',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 700,
              fontFamily: 'Manrope, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              animation: 'fadeInUp 0.8s ease-out forwards',
              animationDelay: '2.8s',
              opacity: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 10px 30px rgba(232, 168, 106, 0.4)',
              marginTop: '10px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05) translateY(-3px)'
              e.target.style.boxShadow = '0 15px 40px rgba(232, 168, 106, 0.5)'
              e.target.style.backgroundColor = '#d4954a'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) translateY(0)'
              e.target.style.boxShadow = '0 10px 30px rgba(232, 168, 106, 0.4)'
              e.target.style.backgroundColor = '#e8a86a'
            }}
          >
            Explorar lugares
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'bounce 1s ease-in-out infinite' }}>
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section" style={{ 
        display: 'flex', 
        justifyContent: 'center',
        padding: '30px 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '12px',
          width: '100%',
          maxWidth: '900px',
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '20px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
        }}>
          {[
            { key: 'total', label: 'Total', color: '#f3c99c' },
            { key: 'parque', label: 'Parques', color: '#4CAF50' },
            { key: 'iglesia', label: 'Iglesias', color: '#1E88E5' },
            { key: 'museo', label: 'Museos', color: '#EF6C00' },
            { key: 'teatro', label: 'Teatros', color: '#7E57C2' },
            { key: 'monumento', label: 'Monumentos', color: '#FFC107' }
          ].map((stat, index) => (
            <div key={index} style={{
              backgroundColor: '#faf3eb',
              borderRadius: '12px',
              padding: '15px 10px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: activeFilter === stat.key ? `2px solid ${stat.color}` : '2px solid transparent'
            }}
            onClick={() => filterPlaces(stat.key)}
            onMouseEnter={(e) => {
              if (activeFilter !== stat.key) {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = `0 5px 15px ${stat.color}40`
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              if (activeFilter !== stat.key) {
                e.currentTarget.style.boxShadow = 'none'
              }
            }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 800, 
                color: stat.color,
                marginBottom: '3px',
                fontFamily: 'Manrope, sans-serif'
              }}>
                {stats[stat.key] || 0}
              </h2>
              <p style={{ 
                fontSize: '11px', 
                color: '#666',
                fontFamily: 'Manrope, sans-serif',
                margin: 0,
                fontWeight: 500
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Categories */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        padding: '15px 20px',
        gap: '8px',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {categories.map((cat) => {
          const typeConfig = getTypeConfig(cat.key)
          const count = cat.key === 'all' ? stats.total : (stats[cat.key] || 0)
          return (
            <button
              key={cat.key}
              onClick={() => filterPlaces(cat.key)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: activeFilter === cat.key ? 'none' : '2px solid #e0e0e0',
                backgroundColor: activeFilter === cat.key ? typeConfig.color : 'white',
                color: activeFilter === cat.key ? 'white' : '#666',
                fontWeight: 600,
                fontFamily: 'Manrope, sans-serif',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== cat.key) {
                  e.target.style.borderColor = typeConfig.color
                  e.target.style.color = typeConfig.color
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== cat.key) {
                  e.target.style.borderColor = '#e0e0e0'
                  e.target.style.color = '#666'
                }
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
              {count > 0 && (
                <span style={{
                  backgroundColor: activeFilter === cat.key ? 'rgba(255,255,255,0.3)' : '#f0f0f0',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  fontSize: '11px'
                }}>
                  {count}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Places Grid */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        padding: '10px 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          width: '100%',
          maxWidth: '1200px'
        }}>
          {filteredLugares.map((place, index) => {
            const typeConfig = getTypeConfig(place.type)
            return (
              <div
                key={place.id}
                onClick={() => openPlaceDetail(place)}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  animation: `cardFadeIn 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = `0 15px 50px rgba(0,0,0,0.12)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <ImageWithFallback
                    src={place.imagenUrl}
                    alt={place.name}
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: typeConfig.color,
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    fontWeight: 600,
                    fontFamily: 'Manrope, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    {typeConfig.icon} {typeConfig.label}
                  </div>
                </div>
                <div style={{ padding: '15px' }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    fontFamily: 'Manrope, sans-serif',
                    color: '#222',
                    marginBottom: '8px'
                  }}>
                    {place.name}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: '#888',
                    fontFamily: 'Manrope, sans-serif',
                    marginBottom: '10px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {place.descripcionCorta || 'Sin descripción'}
                  </p>
                  {place.rating && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ color: '#FFC107', fontSize: '14px' }}>⭐</span>
                      <span style={{ fontSize: '13px', color: '#666', fontFamily: 'Manrope, sans-serif' }}>{place.rating}</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Show More Button */}
      {filteredLugares.length > 0 && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          padding: '30px 20px'
        }}>
          <button 
            onClick={handleShowMore}
            style={{
              backgroundColor: '#f3c99c',
              border: 'none',
              color: '#000',
              padding: '12px 30px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'Manrope, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)'
              e.target.style.boxShadow = '0 5px 20px rgba(243, 201, 156, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)'
              e.target.style.boxShadow = 'none'
            }}
          >
            {showAll ? 'Mostrar menos' : `Ver más (${getRemainingCount()} más)`}
          </button>
        </div>
      )}

      {/* Place Detail Modal */}
      {selectedPlace && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '0',
          animation: 'fadeInUp 0.3s ease-out'
        }} onClick={closeDetail}>
          <div style={{
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '600px',
            maxHeight: '90vh',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
            overflow: 'auto',
            animation: 'slideUp 0.3s ease-out'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{
              position: 'sticky',
              top: 0,
              backgroundColor: 'white',
              zIndex: 10,
              padding: '15px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #f0f0f0'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                fontFamily: 'Manrope, sans-serif',
                color: '#333',
                margin: 0
              }}>
                Detalles
              </h3>
              <button 
                onClick={closeDetail}
                style={{
                  backgroundColor: '#f5f5f5',
                  border: 'none',
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e0e0e0'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f5f5f5'
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: '0 0 40px 0' }}>
              <div style={{ position: 'relative' }}>
                <ImageWithFallback
                  src={mainImage || selectedPlace.imagenUrl || selectedPlace.images?.[0]}
                  alt={selectedPlace.name}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '25px',
                    borderTopRightRadius: '25px'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '15px',
                  left: '15px',
                  right: '15px',
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(10px)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'Manrope, sans-serif',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    {selectedPlace.rating ? `⭐ ${selectedPlace.rating}` : 'Sin rating'}
                  </div>
                </div>
              </div>

              {selectedPlace.images && selectedPlace.images.length > 1 && (
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  padding: '15px 30px',
                  overflowX: 'auto',
                  backgroundColor: '#fafafa'
                }}>
                  {selectedPlace.images.map((img, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setMainImage(img)}
                      style={{
                        cursor: 'pointer',
                        borderRadius: '10px',
                        border: mainImage === img ? `3px solid ${getTypeConfig(selectedPlace.type).color}` : '3px solid transparent',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        flexShrink: 0
                      }}
                    >
                      <ImageWithFallback 
                        src={img}
                        alt={`${selectedPlace.name} ${idx + 1}`}
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div style={{ padding: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <span style={{
                    backgroundColor: getTypeConfig(selectedPlace.type).color,
                    padding: '6px 14px',
                    borderRadius: '15px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'white',
                    fontFamily: 'Manrope, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    {getTypeConfig(selectedPlace.type).icon} {getTypeConfig(selectedPlace.type).label}
                  </span>
                </div>

                <h2 style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  fontFamily: 'Manrope, sans-serif',
                  color: '#222',
                  marginBottom: '15px'
                }}>
                  {selectedPlace.name}
                </h2>

                {selectedPlace.address && (
                  <p style={{
                    fontSize: '14px',
                    color: '#888',
                    fontFamily: 'Manrope, sans-serif',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    📍 {selectedPlace.address}
                  </p>
                )}

                <p style={{
                  fontSize: '16px',
                  fontFamily: 'Manrope, sans-serif',
                  color: '#555',
                  lineHeight: '1.8',
                  marginBottom: '25px'
                }}>
                  {selectedPlace.descripcionLarga || selectedPlace.descripcionCorta}
                </p>

                {selectedPlace.razonDeSer && (
                  <div style={{
                    backgroundColor: '#faf3eb',
                    padding: '20px',
                    borderRadius: '15px',
                    marginBottom: '25px',
                    borderLeft: `4px solid ${getTypeConfig(selectedPlace.type).color}`
                  }}>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      fontFamily: 'Manrope, sans-serif',
                      color: getTypeConfig(selectedPlace.type).color,
                      marginBottom: '10px'
                    }}>
                      💡 ¿Por qué es importante?
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      fontFamily: 'Manrope, sans-serif',
                      color: '#666',
                      lineHeight: '1.7'
                    }}>
                      {selectedPlace.razonDeSer}
                    </p>
                  </div>
                )}

                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '15px',
                  marginTop: '20px',
                  marginBottom: '25px'
                }}>
                  {selectedPlace.address && (
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedPlace.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 15px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#333',
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '13px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#eee'
                        e.target.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#f5f5f5'
                        e.target.style.transform = 'translateY(0)'
                      }}
                    >
                      📍 <span>{selectedPlace.address}</span>
                    </a>
                  )}
                  
                  {(selectedPlace.latitude && selectedPlace.longitude) && (
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${selectedPlace.latitude},${selectedPlace.longitude}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 15px',
                        backgroundColor: getTypeConfig(selectedPlace.type).color,
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: 'white',
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)'
                        e.target.style.boxShadow = `0 5px 15px ${getTypeConfig(selectedPlace.type).color}50`
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)'
                        e.target.style.boxShadow = 'none'
                      }}
                    >
                      🗺️ Cómo llegar
                    </a>
                  )}
                </div>

                {selectedPlace.fechaInauguracion && !selectedPlace.fechaInauguracion.includes('No se ha podido') && (
                  <p style={{
                    fontSize: '14px',
                    fontFamily: 'Manrope, sans-serif',
                    color: '#888',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    🏛️ {selectedPlace.fechaInauguracion}
                  </p>
                )}

                {selectedPlace.reviews && selectedPlace.reviews.length > 0 && (
                  <div style={{ marginTop: '25px' }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      fontFamily: 'Manrope, sans-serif',
                      color: '#333',
                      marginBottom: '15px'
                    }}>
                      ⭐ Reseñas ({selectedPlace.reviews.length})
                    </h3>
                    <div style={{ maxHeight: '300px', overflow: 'auto' }}>
                      {selectedPlace.reviews.slice(0, 5).map((review, idx) => (
                        <div key={idx} style={{
                          padding: '15px',
                          backgroundColor: '#f9f9f9',
                          borderRadius: '12px',
                          marginBottom: '10px'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                            <ImageWithFallback
                              src={review.foto}
                              alt={review.autor}
                              style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%'
                              }}
                            />
                            <div>
                              <p style={{
                                fontSize: '14px',
                                fontWeight: 600,
                                fontFamily: 'Manrope, sans-serif',
                                color: '#333',
                                margin: 0
                              }}>
                                {review.autor}
                              </p>
                              <p style={{
                                fontSize: '12px',
                                color: '#FFC107',
                                margin: 0
                              }}>
                                {'⭐'.repeat(review.estrellas || 5)}
                              </p>
                            </div>
                          </div>
                          <p style={{
                            fontSize: '13px',
                            fontFamily: 'Manrope, sans-serif',
                            color: '#666',
                            lineHeight: '1.5',
                            margin: 0
                          }}>
                            {review.comentario}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ 
                  display: 'flex', 
                  gap: '15px', 
                  marginTop: '25px',
                  flexWrap: 'wrap'
                }}>
                  {selectedPlace.website && (
                    <a 
                      href={selectedPlace.website} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        flex: 1,
                        padding: '12px 25px',
                        backgroundColor: getTypeConfig(selectedPlace.type).color,
                        borderRadius: '25px',
                        textDecoration: 'none',
                        color: 'white',
                        fontWeight: 600,
                        fontFamily: 'Manrope, sans-serif',
                        textAlign: 'center',
                        minWidth: '150px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.02)'
                        e.target.style.boxShadow = `0 5px 15px ${getTypeConfig(selectedPlace.type).color}60`
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)'
                        e.target.style.boxShadow = 'none'
                      }}
                    >
                      🌐 Visitar web
                    </a>
                  )}
                  {selectedPlace.phoneNumber && (
                    <a 
                      href={`tel:${selectedPlace.phoneNumber}`}
                      style={{
                        flex: 1,
                        padding: '12px 25px',
                        backgroundColor: 'transparent',
                        border: `2px solid ${getTypeConfig(selectedPlace.type).color}`,
                        borderRadius: '25px',
                        textDecoration: 'none',
                        color: getTypeConfig(selectedPlace.type).color,
                        fontWeight: 600,
                        fontFamily: 'Manrope, sans-serif',
                        textAlign: 'center',
                        minWidth: '150px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = getTypeConfig(selectedPlace.type).color
                        e.target.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.style.color = getTypeConfig(selectedPlace.type).color
                      }}
                    >
                      📞 Llamar
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notification Modal */}
      {showNotificationModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          animation: 'fadeIn 0.3s ease-out'
        }} onClick={(e) => {
          if (e.target === e.currentTarget) closeNotificationModal()
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '30px',
            padding: '40px 35px',
            maxWidth: '450px',
            width: '90%',
            textAlign: 'center',
            boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
            animation: 'scaleIn 0.4s ease-out',
            position: 'relative'
          }}>
            <button 
              onClick={closeNotificationModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                backgroundColor: '#f5f5f5',
                border: 'none',
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              ✕
            </button>
            
            <div style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'white',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px',
              boxShadow: '0 10px 30px rgba(232, 168, 106, 0.3)',
              animation: 'modalLogoBounce 2s ease-in-out infinite',
              overflow: 'hidden',
              border: '3px solid #e8a86a',
              padding: '8px',
              boxSizing: 'border-box'
            }}>
              <img 
                src="/images/icono.png" 
                alt="IbaGO Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
              />
            </div>
            
            <h2 style={{
              fontSize: '26px',
              fontWeight: 800,
              fontFamily: 'Manrope, sans-serif',
              color: '#1a1a1a',
              marginBottom: '15px'
            }}>
              ¡Estate atento!
            </h2>
            
            <p style={{
              fontSize: '15px',
              color: '#666',
              fontFamily: 'Manrope, sans-serif',
              lineHeight: '1.7',
              marginBottom: '25px'
            }}>
              Nuestra aplicación está en desarrollo. 
              <strong style={{ color: '#e8a86a' }}> Te avisaremos cuando salga </strong> 
              para que seas el primero en probarla.
            </p>
            
            {!emailSubmitted ? (
              <form onSubmit={handleNotificationSubmit}>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '15px',
                    border: '2px solid #e0e0e0',
                    fontSize: '15px',
                    fontFamily: 'Manrope, sans-serif',
                    marginBottom: '15px',
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
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '14px',
                    backgroundColor: '#e8a86a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '15px',
                    fontSize: '16px',
                    fontWeight: 700,
                    fontFamily: 'Manrope, sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)'
                    e.target.style.boxShadow = '0 10px 30px rgba(232, 168, 106, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)'
                    e.target.style.boxShadow = 'none'
                  }}
                >
                  Notificarme
                </button>
              </form>
            ) : (
              <div style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '15px',
                borderRadius: '15px',
                fontSize: '15px',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
                animation: 'fadeInUp 0.5s ease-out'
              }}>
                ✓ ¡Gracias! Te avisaremos cuando lancemos
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home