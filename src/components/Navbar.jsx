import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  
  const getLinkStyle = (path) => {
    const isActive = location.pathname === path
    return {
      color: isActive ? '#f3c99c' : '#000',
      textDecoration: 'none',
      fontFamily: 'Manrope, sans-serif',
      fontWeight: 600,
      fontSize: '16px',
      padding: '8px 16px',
      borderRadius: '6px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backgroundColor: isActive ? 'rgba(243, 201, 156, 0.15)' : 'transparent',
      position: 'relative'
    }
  }

  return (
    <div style={{ 
      backgroundColor: '#faf3eb', 
      padding: '12px 20px', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      width: '100%',
      boxSizing: 'border-box',
      zIndex: 9999,
      boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/images/index.png" alt="logo" width="42" height="42" style={{ borderRadius: '10px', transition: 'transform 0.3s ease' }} 
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <span style={{ 
            marginLeft: '12px', 
            fontSize: '22px', 
            fontWeight: 800, 
            color: '#000', 
            fontFamily: 'Manrope, sans-serif',
            letterSpacing: '-0.5px'
          }}>IbaGO</span>
        </Link>
        
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          alignItems: 'center',
          marginLeft: '30px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Link to="/" style={getLinkStyle('/')} onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(243, 201, 156, 0.25)'
            e.target.style.color = '#f3c99c'
            e.target.style.transform = 'translateY(-2px)'
          }} onMouseLeave={(e) => {
            const isActive = location.pathname === '/'
            e.target.style.backgroundColor = isActive ? 'rgba(243, 201, 156, 0.15)' : 'transparent'
            e.target.style.color = isActive ? '#f3c99c' : '#000'
            e.target.style.transform = 'translateY(0)'
          }}>Inicio</Link>
          
          <Link to="/about" style={getLinkStyle('/about')} onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(243, 201, 156, 0.25)'
            e.target.style.color = '#f3c99c'
            e.target.style.transform = 'translateY(-2px)'
          }} onMouseLeave={(e) => {
            const isActive = location.pathname === '/about'
            e.target.style.backgroundColor = isActive ? 'rgba(243, 201, 156, 0.15)' : 'transparent'
            e.target.style.color = isActive ? '#f3c99c' : '#000'
            e.target.style.transform = 'translateY(0)'
          }}>Quienes somos</Link>
          
          <Link to="/blog" style={getLinkStyle('/blog')} onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(243, 201, 156, 0.25)'
            e.target.style.color = '#f3c99c'
            e.target.style.transform = 'translateY(-2px)'
          }} onMouseLeave={(e) => {
            const isActive = location.pathname === '/blog'
            e.target.style.backgroundColor = isActive ? 'rgba(243, 201, 156, 0.15)' : 'transparent'
            e.target.style.color = isActive ? '#f3c99c' : '#000'
            e.target.style.transform = 'translateY(0)'
          }}>Blog</Link>
          
          <Link to="/contact" style={{ 
            border: '2px solid #000', 
            padding: '10px 24px', 
            borderRadius: '25px', 
            color: '#000', 
            textDecoration: 'none',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            marginLeft: '10px'
          }} onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f3c99c'
            e.target.style.borderColor = '#f3c99c'
            e.target.style.transform = 'scale(1.05)'
            e.target.style.boxShadow = '0 4px 15px rgba(243, 201, 156, 0.4)'
          }} onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent'
            e.target.style.borderColor = '#000'
            e.target.style.transform = 'scale(1)'
            e.target.style.boxShadow = 'none'
          }}>Contáctanos</Link>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .navbar-container {
            flex-direction: column !important;
            gap: 15px !important;
          }
          .navbar-container > div:last-child {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}