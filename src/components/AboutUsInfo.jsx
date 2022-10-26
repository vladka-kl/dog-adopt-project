export { AboutUsInfo };

function AboutUsInfo ({text, title}) {
    return (
      <section className='about-us'>
        <h2>{title}</h2>
        <p>{text}</p>
      </section>
    )
  }