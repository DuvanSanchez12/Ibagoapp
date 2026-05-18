export default function Footer() {
  return (
    <footer style={{ 
      textAlign: 'center', 
      padding: '40px 20px', 
      marginTop: '60px',
      borderTop: '1px solid #e0e0e0',
      backgroundColor: '#fafafafa'
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        <a href="https://isumdev.com/semillero.html" target="_blank" rel="noreferrer">
          <img 
            src="/images/quatum2.jpg" 
            width="80" 
            height="80" 
            alt="Quantum"
            style={{ 
              borderRadius: '15px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.25) rotate(5deg)'
              e.target.style.filter = 'brightness(1.2) saturate(1.2)'
              e.target.style.boxShadow = '0 8px 30px rgba(243, 201, 156, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotate(0deg)'
              e.target.style.filter = 'brightness(1) saturate(1)'
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
            }}
          />
        </a>
        <a href="https://isumdev.com/" target="_blank" rel="noreferrer">
          <img 
            src="/images/quantum.jpg" 
            width="80" 
            height="80" 
            alt="iSum Dev"
            style={{ 
              borderRadius: '15px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.25) rotate(-5deg)'
              e.target.style.filter = 'brightness(1.2) saturate(1.2)'
              e.target.style.boxShadow = '0 8px 30px rgba(243, 201, 156, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotate(0deg)'
              e.target.style.filter = 'brightness(1) saturate(1)'
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
            }}
          />
        </a>
      </div>
      <p style={{ 
        marginTop: '25px', 
        marginBottom: '0', 
        color: '#888', 
        fontSize: '14px', 
        fontFamily: 'Manrope, sans-serif'
      }}>
        © 2025 Quantum — Todos los derechos reservados.
      </p>
    </footer>
  )
}