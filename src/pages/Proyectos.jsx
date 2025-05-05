import ProyectCard from '../components/proyect-card/proyect-card'
import taller from '../assets/taller-mecanico.png'
import '../styles/Proyectos.css'

function Proyectos() {
    const proyectos = [
      {
        img: taller,
        titulo: 'Taller Mecánico',
        descrip: 'Página informativa sobre los servicios que brinda un taller mecánico',
        link: 'https://taller-mecanico-alpha.vercel.app/',
      },
      // Acá podés agregar más proyectos
    ];
  
    return (
      <section id='proyecto'>
          <div className='proyectos'>
            <div className='proyectos-titulo'>
              <h2 className='proyectos-title'>Mis Proyectos</h2>
              <p className='proyectos-subtitulo'>
                Algunos de los proyectos que he creado recientemente:
              </p>
            </div>
      
            <div className='mis-proyectos'>
              {proyectos.map((proyecto, index) => (
                <ProyectCard
                  key={index}
                  img={proyecto.img}
                  titulo={proyecto.titulo}
                  descrip={proyecto.descrip}
                  link={proyecto.link}
                />
              ))}
            </div>
          </div>
      </section>
    );
  }
  
  export default Proyectos;