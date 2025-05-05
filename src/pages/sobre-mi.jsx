import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitSquare, FaGithub } from 'react-icons/fa';
import '../styles/Sobre-mi.css'

function SobreMi() {
    return (
        <section id="sobre-mi" >
            <div className='sobre-mi-info'>
                <h2 className='sobre-mi-title'>Sobre Mi</h2>
                <div className='sobre-mi-content'>
                    <div className='sobre-mi-txt'>
                        <p> 
                            ¡Hola! Soy Juan Ignacio Liberto, estudiante de Ingeniería en Informática con muchas ganas de crecer como desarrollador. <br></br><br></br>
                            Mi camino hacia la programación no fue directo, pero sí muy claro una vez que lo descubrí. Empecé estudiando otra ingeniería, pero fue una materia de programación la que realmente me atrapó. A partir de ahí, entendí que lo mío era crear, resolver y desarrollar soluciones usando la lógica y la tecnología. <br></br><br></br>
                            Desde entonces, no paré. Hice una pasantía de un año y medio en el área de ciberseguridad, donde trabajé automatizando tareas y resolviendo problemas reales con código. Esa experiencia reforzó aún más mi decisión: quiero dedicarme a programar.<br></br><br></br>
                            Me apasiona tanto el desarrollo web como la resolución de problemas en back-end. Lo que más disfruto es pensar cómo hacer algo funcionar, y ver el resultado de lo que construyo. Aprendo mucho por mi cuenta: viendo videos, probando cosas, equivocándome y volviendo a intentar. También me apoyo en herramientas como la inteligencia artificial para mejorar mi práctica y seguir avanzando.<br></br><br></br>
                            Aunque estoy comenzando mi carrera, me entusiasma mucho la idea de trabajar en equipo, aportar ideas, seguir aprendiendo y desarrollarme profesionalmente dentro de una empresa.    
                        </p>
                    </div>
                    <div className='sobre-mi-habilidades'>
                        <h3 className='habilidades-title'>Habilidades</h3>
                        <div className='iconos-habilidades'>
                            <FaPython className='habilidad'></FaPython>
                            <FaJava className='habilidad'></FaJava>
                            <FaReact className='habilidad'></FaReact>
                            <FaHtml5 className='habilidad'></FaHtml5>
                            <FaCss3Alt className='habilidad'></FaCss3Alt>
                            <FaJs className='habilidad'></FaJs>
                            <FaGitSquare className='habilidad'></FaGitSquare>
                            <FaGithub className='habilidad'></FaGithub>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SobreMi;
