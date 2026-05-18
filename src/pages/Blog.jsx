import { useState, useEffect } from 'react'

const blogs = [
  {
    id: 1,
    title: '🎉 IbaGO quedó de segundo lugar en el Encuentro Regional de Semilleros 2026',
    shortDesc: 'Felicitaciones a todos los estudiantes del Encuentro Regional de Semilleros de Investigación 2026. Su compromiso y pasión por la investigación destacan el talento de nuestra comunidad académica.',
    content: `Nos llena de orgullo anunciar que el proyecto IbaGO ha obtenu un meresido segundo lugar en el Encuentro Regional de Semilleros de Investigación 2026, celebrado en la Sede Tolima Huila con el lema "Investigar desde el territorio: conocimiento con sentido regional".

Este logro representa mucho más que un premio; es el reconocimiento al esfuerzo, la dedicación y la pasión que todo nuestro equipo ha invertido durante meses de trabajo incansable. Cada línea de código, cada diseño, cada investigación y cada documento presentado fue pensado con el objetivo de contribuir al desarrollo turístico y cultural de nuestra querida ciudad de Ibagué.

El evento reunió a los mejores semilleros de investigación de la región, donde equipos de diferentes instituciones académicas presentaron proyectos innovadores orientados a resolver problemas locales y regionales. Nuestro equipo demostró que la tecnología puede ser una herramienta poderosa para preservar y promover el patrimonio cultural.

"La investigación es el puente entre el conocimiento y la transformación social. IbaGO representa ese puente que conecta la tradición con la innovación tecnológica." - Equipo IbaGO.

Agradecemos a todas las instituciones que creyeron en nosotros, a nuestros mentores por su guía invaluable, y especialmente a la comunidad de Ibagué que inspira nuestro trabajo diario. Este segundo lugar nos motiva a seguir adelante con más fuerza y determinación.

¡Esto apenas comienza! Tenemos grandes planes para el futuro de IbaGO.`,
    image: '/images/blog4.jpg',
    date: '18 Mayo 2026',
    tag: 'Logro',
    author: 'Equipo IbaGO',
    readTime: '5 min'
  },
  {
    id: 2,
    title: '🤖 Inteligencia Artificial: El Futuro del Turismo en Ibagué',
    shortDesc: 'Cómo la IA está transformando la experiencia de los viajeros y optimizando los destinos turísticos.',
    content: `La inteligencia artificial está revolucionando la manera en que interactuamos con el mundo, y el sector turístico no es la excepción. En IbaGO, estamos a la vanguardia de esta transformación, implementando tecnologías de IA que prometen cambiar completamente la forma en que experimentamos los lugares turísticos.

Imagina caminar por las calles de Ibagué y, a través de tu smartphone, recibir información contextualizada sobre cada lugar que visitas. No estamos hablando de simple texto descriptivo, sino de experiencias inmersivas generadas por algoritmos inteligentes que aprenden de tus preferencias e intereses.

Nuestro sistema de IA analiza patrones de comportamiento de los turistas, identificando qué lugares generan mayor interés, cuáles son los horarios pico de visitación, y qué tipo de experiencias buscan los visitantes. Esta información permite a los gestores turísticos tomar decisiones basadas en datos reales, optimizando recursos y mejorando la calidad de la experiencia turística.

Pero eso no es todo. Estamos desarrollando chatbots inteligentes capaces de responder preguntas en tiempo real, sistemas de recomendación personalizados que sugieren rutas turísticas basadas en el perfil del usuario, y herramientas de traducción automática que eliminan las barreras idiomáticas para turistas internacionales.

"La IA no reemplaza la calidez del contacto humano con el turismo; la amplifica, haciendo que cada experiencia sea más significativa y memorable."

Uno de nuestros proyectos más ambiciosos es el desarrollo de un asistente virtual capaz de responder preguntas sobre lugares turísticos en múltiples idiomas, proporcionando información histórica, cultural y práctica de manera instantánea. Este asistente aprende de cada interacción, volviéndose más inteligente y útil con el tiempo.

Estamos también explorando el uso de visión artificial para identificar puntos de interés automáticamente, permitiendo que los usuarios simplemente apunten su cámara a un lugar y reciban información detallada al instante.

El futuro del turismo en Ibagué es brillante, y la inteligencia artificial será nuestra compañera de viaje en este emocionante recorrido.`,
    image: '/images/blog.jpg',
    date: '15 Mayo 2026',
    tag: 'Tecnología',
    author: 'Duvan Camilo Rodriguez',
    readTime: '8 min'
  },
  {
    id: 3,
    title: '🎵 Ibagué: Donde la Música Tradicional Encuentra la Tecnología Moderna',
    shortDesc: 'Una mirada al equilibrio entre la tradición cultural y la innovación tecnológica de la ciudad.',
    content: `Ibagué, conocida como la "Ciudad Musical de Colombia", representa un fascinante contraste entre sus ricas tradiciones culturales y el avance tecnológico. En IbaGO, hemos descubierto que estos dos mundos no solo pueden coexistir, sino que se potencian mutuamente de maneras extraordinarias.

La ciudad ha sido cuna de artistas, músicos y creadores que han dado forma a la identidad cultural de Colombia. Desde los ritmos ancestrales de la región tillero hasta las composiciones contemporáneas que llenan sus calles, Ibagué vibra con una energía musical única. Sin embargo, ¿cómo llevamos esta riqueza cultural a las nuevas generaciones y a los visitantes que buscan experiencias auténticas?

Aquí es donde entra la tecnología. A través de realidad aumentada y aplicaciones interactivas, estamos creando puentes entre el patrimonio musical tradicional y las herramientas digitales que dominan nuestro presente. Imagina apuntar tu teléfono a un acordeón tradicional en el Parque Lineal y ver una presentación holográfica del maestro que lo fabricó, escuchar la historia de la canción que se compose en ese instrumento, o participar en un taller virtual de танano.

Pero el equilibrio va más allá de la tecnología. Estamos trabajando directamente con los artistas locales, documentando sus historias, preservando sus técnicas y creando archivos digitales que aseguren que esta riqueza cultural no se pierda con el tiempo. Cada entrevista grabada, cada partitura digitalizada, cada testimonio preservado es un tesoro que construimos para las futuras generaciones.

"La tecnología más poderosa no es aquella que reemplaza nuestras tradiciones, sino aquella que las amplifica y las hace accesibles a todos."

Nuestro equipo ha tenido el privilegio de colaborar con familias de músicos tradicionales que han dedicado sus vidas a preservar estos conocimientos. A través de nuestras herramientas, estamos creando un archivo vivo de la tradición musical ibaguereña, accesible para investigadores, turistas y locales por igual.

También estamos implementando sistemas de realidad aumentada en los principales escenarios musicales de la ciudad, permitiendo que los visitantes experimenten performances históricas, ensayos de orquesta y sesiones de música en vivo desde cualquier ángulo, como si estuvieran ahí en persona.

El desafío más grande ha sido respetar la autenticidad mientras innovamos. Cada elemento tecnológico que introducimos pasa por un riguroso proceso de validación cultural, asegurando que represente fielmente la esencia de lo que significa ser parte de la escena musical ibaguereña.

Ibagué nos enseña que el progreso y la tradición no son opuestos; son compañeros de baile en una coreografía que nunca termina.`,
    image: '/images/blog1.jpeg',
    date: '10 Mayo 2026',
    tag: 'Cultura',
    author: 'John Anderson Lozada',
    readTime: '7 min'
  },
  {
    id: 4,
    title: '📊 Big Data: Transformando el Turismo Cultural con Decisiones Inteligentes',
    shortDesc: 'Estamos integrando Big Data para analizar el impacto del turismo en la economía cultural.',
    content: `En la era de la información, los datos son el nuevo oro. Para el turismo cultural, esto significa tener la capacidad de comprender verdaderamente el comportamiento de los visitantes, identificar oportunidades de mejora y medir el impacto real de las iniciativas turísticas en la economía local.

En IbaGO, estamos construyendo un ecosistema de Big Data que captura, analiza y transforma millones de puntos de datos en información accionable. Desde el momento en que un turista abre nuestra aplicación, comenzamos a construir un perfil comprensivo de sus intereses, preferencias y comportamientos de navegación.

Pero no se trata solo de recopilar datos; se trata de extraer conocimiento significativo. Nuestro equipo ha desarrollado algoritmos propietarios que pueden identificar patrones que serían invisibles para el ojo humano. ¿Sabías que descubrimos que los turistas que visitan el centro histórico en las mañanas tienden a explorar más lugares gastronómicos al mediodía? Este tipo de insights nos permite crear recomendaciones verdaderamente personalizadas.

La magia sucede cuando combinamos datos internos con fuentes externas. Estamos integrando información meteorológica, eventos locales, calendarios culturales y tendencias de redes sociales para crear un sistema predictivo que anticipe las necesidades de los visitantes antes de que ellos mismos las identifiquen.

"Un tourist informado es un tourist encantado. Y un tourist encantado es el mejor embajador de una ciudad."

También estamos transformando la manera en que los gestores turísticos toman decisiones. A través de dashboards interactivos, los administradores de lugares culturales pueden ver en tiempo real cuántos visitantes tienen, de dónde vienen, cuánto tiempo permanecen, y qué áreas generan mayor interés. Esta información les permite optimizar horarios, mejorar la distribución del personal y planificar inversiones con confianza.

Pero hay un aspecto que nos importa especialmente: el bienestar de la comunidad local. Nuestros análisis incluyen métricas de impacto comunitario, asegurando que el turismo beneficie realmente a los residentes de Ibagué. Estamos identificando oportunidades para distribuir el flujo turístico de manera más equitativa, reduciendo la masificación en puntos populares mientras revitalizamos zonas que merecen ser descubiertas.

El proyecto también incluye sensores IoT (Internet de las Cosas) estratégicamente ubicados que capturan datos ambientales, calidad del aire y niveles de ruido, información crucial para mantener la sostenibilidad de nuestros espacios culturales.

Estamos también trabajando en colaboración con la Universidad Minuto de Dios para desarrollar modelos predictivos que ayuden a anticipar demanda turística durante eventos especiales, festividades y temporadas altas, permitiendo una preparación óptima de los servicios turísticos.

Los datos que recopilamos no son solo nuestros; son de la comunidad. Por eso hemos implementado un programa de transparencia donde публично compartimos métricas agregadas sobre el turismo en Ibagué, empoderando a los ciudadanos con información sobre cómo el turismo está moldeando su ciudad.

El futuro del turismo inteligente está aquí, y está siendo construido con datos, pasión y el compromiso de crear experiencias que realmente transformen la vida de las personas.`,
    image: '/images/blog3.jpg',
    date: '5 Mayo 2026',
    tag: 'Innovación',
    author: 'Jonatan Stiven Fernández',
    readTime: '10 min'
  }
]

const BlogCard = ({ blog, onReadMore }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200 + blog.id * 150)
    return () => clearTimeout(timer)
  }, [blog.id])

  const getTagColor = (tag) => {
    const colors = {
      'Logro': '#4CAF50',
      'Tecnología': '#7E57C2',
      'Cultura': '#e8a86a',
      'Innovación': '#1E88E5'
    }
    return colors[tag] || '#e8a86a'
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'white',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: isHovered 
          ? '0 25px 60px rgba(232, 168, 106, 0.3)' 
          : '0 15px 40px rgba(0,0,0,0.08)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        opacity: isVisible ? 1 : 0,
        border: isHovered ? '2px solid #e8a86a' : '2px solid transparent',
        maxWidth: '400px',
        width: '100%'
      }}
    >
      <div style={{
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img 
          src={blog.image} 
          alt={blog.title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.5s ease'
          }}
        />
        
        <div style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          display: 'flex',
          gap: '8px'
        }}>
          <span style={{
            backgroundColor: getTagColor(blog.tag),
            color: 'white',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 600,
            fontFamily: 'Manrope, sans-serif'
          }}>
            {blog.tag}
          </span>
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.6))'
        }} />
      </div>
      
      <div style={{ padding: '25px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span style={{
              fontSize: '12px',
              color: '#888',
              fontFamily: 'Manrope, sans-serif'
            }}>
              {blog.date}
            </span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span style={{
              fontSize: '12px',
              color: '#888',
              fontFamily: 'Manrope, sans-serif'
            }}>
              {blog.readTime}
            </span>
          </div>
        </div>
        
        <h3 style={{
          fontSize: '18px',
          fontWeight: 700,
          fontFamily: 'Manrope, sans-serif',
          color: '#1a1a1a',
          marginBottom: '12px',
          lineHeight: '1.4'
        }}>
          {blog.title}
        </h3>
        
        <p style={{
          fontSize: '14px',
          color: '#666',
          fontFamily: 'Manrope, sans-serif',
          lineHeight: '1.6',
          marginBottom: '20px'
        }}>
          {blog.shortDesc}
        </p>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <span style={{
            fontSize: '12px',
            color: '#999',
            fontFamily: 'Manrope, sans-serif'
          }}>
            Por {blog.author}
          </span>
          
          <button
            onClick={() => onReadMore(blog)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#e8a86a',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: 'Manrope, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)'
              e.target.style.boxShadow = '0 5px 15px rgba(232, 168, 106, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)'
              e.target.style.boxShadow = 'none'
            }}
          >
            Leer más
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

const ArticleModal = ({ blog, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const getTagColor = (tag) => {
    const colors = {
      'Logro': '#4CAF50',
      'Tecnología': '#7E57C2',
      'Cultura': '#e8a86a',
      'Innovación': '#1E88E5'
    }
    return colors[tag] || '#e8a86a'
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '20px',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.3s ease'
    }} onClick={(e) => {
      if (e.target === e.currentTarget) onClose()
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '30px',
        maxWidth: '800px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'all 0.4s ease'
      }}>
        {/* Header Image */}
        <div style={{
          position: 'relative',
          height: '300px'
        }}>
          <img 
            src={blog.image} 
            alt={blog.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)'
          }} />
          
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(255,255,255,0.9)',
              border: 'none',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
            }}
          >
            ✕
          </button>
          
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '30px',
            right: '30px'
          }}>
            <span style={{
              backgroundColor: getTagColor(blog.tag),
              color: 'white',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
              fontFamily: 'Manrope, sans-serif',
              display: 'inline-block',
              marginBottom: '10px'
            }}>
              {blog.tag}
            </span>
            
            <h1 style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 800,
              fontFamily: 'Manrope, sans-serif',
              color: 'white',
              margin: 0,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              {blog.title}
            </h1>
          </div>
        </div>
        
        {/* Article Content */}
        <div style={{ padding: '40px 35px' }}>
          {/* Meta Info */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '25px',
            marginBottom: '30px',
            paddingBottom: '20px',
            borderBottom: '2px solid #f0f0f0'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#e8a86a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '18px' }}>👤</span>
              </div>
              <span style={{
                fontSize: '14px',
                color: '#666',
                fontFamily: 'Manrope, sans-serif'
              }}>
                {blog.author}
              </span>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span style={{
                fontSize: '14px',
                color: '#888',
                fontFamily: 'Manrope, sans-serif'
              }}>
                {blog.date}
              </span>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span style={{
                fontSize: '14px',
                color: '#888',
                fontFamily: 'Manrope, sans-serif'
              }}>
                {blog.readTime} de lectura
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div style={{
            fontSize: '16px',
            fontFamily: 'Manrope, sans-serif',
            lineHeight: '1.9',
            color: '#444'
          }}>
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} style={{
                marginBottom: '20px',
                textAlign: 'justify'
              }}>
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Share Section */}
          <div style={{
            marginTop: '40px',
            paddingTop: '25px',
            borderTop: '2px solid #f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <span style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#666',
              fontFamily: 'Manrope, sans-serif'
            }}>
              Comparte este artículo:
            </span>
            
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <button style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#1877F2',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              
              <button style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#1DA1F2',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              
              <button style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#25D366',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 16l2.098-.312a11.836 11.836 0 0012.014 0c.168-.019.335-.021.503-.021.168 0 .335.002.503.021.463.03.918.143 1.33.403.412.26.76.607 1.035 1.005a11.842 11.842 0 011.945 2.695c.164.425.243.868.243 1.32 0 6.557-5.335 11.892-11.893 11.892-6.557 0-11.892-5.335-11.892-11.893 0-6.557 5.335-11.892 11.892-11.892 1.655 0 3.243.341 4.689.98.712.318 1.361.746 1.935 1.266.583.524 1.08 1.132 1.471 1.802.392.67.671 1.424.839 2.237.168.813.253 1.667.255 2.536.002.869-.07 1.738-.214 2.597a11.807 11.807 0 002.043 5.684c.28.557.616 1.087.999 1.581a11.85 11.85 0 003.17 2.332c.671.419 1.409.752 2.201.992.792.24 1.628.36 2.484.36.855 0 1.692-.12 2.484-.36.792-.24 1.53-.573 2.201-.992.671-.419 1.25-.951 1.697-1.47.446-.519.809-1.104 1.088-1.746.279-.642.472-1.326.581-2.043a11.857 11.857 0 00-.581-3.068 11.825 11.825 0 00-1.088-1.746"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Blog = () => {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState(null)

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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes celebrate {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.1) rotate(-3deg); }
          75% { transform: scale(1.1) rotate(3deg); }
        }
      `}</style>

      {/* Decorative Elements */}
      <div style={{
        position: 'fixed',
        top: '30%',
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
        bottom: '20%',
        right: '-30px',
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #e8a86a30 0%, transparent 100%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite 1s',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #fef9f3 0%, #fff5eb 100%)',
        padding: '60px 20px 50px',
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
            NUESTRAS NOTICIAS
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
            Blog de IbaGO
          </h1>
          
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#e8a86a',
            borderRadius: '2px',
            margin: '0 auto 20px'
          }} />
          
          <p style={{
            fontSize: 'clamp(14px, 2vw, 17px)',
            color: '#666',
            fontFamily: 'Manrope, sans-serif',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto',
            animation: 'fadeInUp 0.8s ease-out forwards',
            animationDelay: '0.6s',
            opacity: headerVisible ? 1 : 0
          }}>
            Descubre las últimas noticias, avances tecnológicos y reflexiones sobre el futuro del turismo en Ibagué. Cada artículo es una ventana a nuestro proceso de innovación.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '30px',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease-out forwards',
            animationDelay: '0.8s',
            opacity: headerVisible ? 1 : 0
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '15px 25px',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '28px' }}>📰</span>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a1a', display: 'block' }}>{blogs.length}</span>
                <span style={{ fontSize: '12px', color: '#888', fontFamily: 'Manrope, sans-serif' }}>Artículos</span>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '15px 25px',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '28px' }}>🏆</span>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a1a', display: 'block' }}>2do</span>
                <span style={{ fontSize: '12px', color: '#888', fontFamily: 'Manrope, sans-serif' }}>Premio Regional</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article - News */}
      <div style={{
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '30px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(76, 175, 80, 0.2)',
          border: '3px solid #4CAF50',
          marginBottom: '50px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }
          }}>
            <div style={{
              flex: '1',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img 
                src={blogs[0].image} 
                alt="Premio IbaGO"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px'
              }}>
                <span style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  padding: '8px 18px',
                  borderRadius: '25px',
                  fontSize: '13px',
                  fontWeight: 700,
                  fontFamily: 'Manrope, sans-serif',
                  display: 'inline-block'
                }}>
                  🎉 SEGUNDO LUGAR
                </span>
              </div>
            </div>
            
            <div style={{
              flex: '1',
              padding: '35px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '15px'
              }}>
                <span style={{ fontSize: '30px' }}>🏆</span>
                <span style={{
                  fontSize: '12px',
                  color: '#4CAF50',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '1px'
                }}>
                  NOTICIA DESTACADA
                </span>
              </div>
              
              <h2 style={{
                fontSize: 'clamp(22px, 3vw, 28px)',
                fontWeight: 800,
                fontFamily: 'Manrope, sans-serif',
                color: '#1a1a1a',
                marginBottom: '15px',
                lineHeight: '1.3'
              }}>
                {blogs[0].title}
              </h2>
              
              <p style={{
                fontSize: '14px',
                color: '#666',
                fontFamily: 'Manrope, sans-serif',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}>
                {blogs[0].shortDesc}
              </p>
              
              <button
                onClick={() => setSelectedBlog(blogs[0])}
                style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  padding: '12px 25px',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Manrope, sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Leer artículo completo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div style={{
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(26px, 4vw, 36px)',
          fontWeight: 800,
          fontFamily: 'Manrope, sans-serif',
          color: '#1a1a1a',
          textAlign: 'center',
          marginBottom: '50px'
        }}>
          Últimos Artículos
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          justifyItems: 'center'
        }}>
          {blogs.slice(1).map((blog) => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              onReadMore={setSelectedBlog}
            />
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedBlog && (
        <ArticleModal 
          blog={selectedBlog} 
          onClose={() => setSelectedBlog(null)} 
        />
      )}
    </div>
  )
}

export default Blog