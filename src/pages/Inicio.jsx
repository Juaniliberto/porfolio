import '../styles/Inicio.css';
import perfil from "../assets/mi-foto.jpg";

function Inicio() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const sectionPosition = section.offsetTop - 150;
            window.scrollTo({ top: sectionPosition, behavior: "smooth" });
            setMenuAbierto(false);
        }
    };

    return (
        <section id = "inicio" className="home-section">
            <div className="home-content">
                <h1>Hola, soy Juan Ignacio Liberto</h1>
                <h2>Desarrollador Frontend con React y Backend con Java y Python</h2>
                <p>Estudiante de Ingenieria en Informatica, apasionado por la programacion y el desarrollo, la creacion de soluciones simples y funcionales, y en constante aprendizaje.</p>
                <button className="home-btn" onClick={() => scrollToSection("proyecto")}>Ver mis proyectos</button>
            </div>
            <div className="home-img-container">
                <img className="home-img" src={perfil} alt="perfil"/>
            </div>
        </section>
    )
}

export default Inicio;