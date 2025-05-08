import '../styles/Navbar.css'
import { useState } from 'react';

function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const sectionPosition = section.offsetTop - 110;
            window.scrollTo({ top: sectionPosition, behavior: "smooth" });
            setMenuAbierto(false);
        }
    };
    
    return(
        <nav className='navbar'>
            <span className='nav-name'>Juan Ignacio <span>Liberto</span></span>
            <button 
                className='boton-hamburguesa' 
                onClick={() => setMenuAbierto(!menuAbierto)}
            >
                ☰
            </button>
            <div className= {`nav-links ${menuAbierto ? 'mostrar' : ''}`}>
                <button className='nav-btn' onClick={() => scrollToSection("inicio")}>Inicio</button>
                <button className='nav-btn' onClick={() => scrollToSection("sobre-mi")}>Sobre Mi</button>
                <button className='nav-btn' onClick={() => scrollToSection("proyecto")}>Proyectos</button>
                <button className='nav-btn' onClick={() => scrollToSection("contacto")}>Contacto</button>
            </div>
        </nav>
    )
}

export default Navbar;