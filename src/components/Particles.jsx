const Particles = () => {
  return (
    <div className="particles-bg">
      {[...Array(16)].map((_, i) => (
        <div key={i} className="particle"></div>
      ))}
    </div>
  )
}

export default Particles