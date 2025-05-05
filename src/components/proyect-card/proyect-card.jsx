import './proyect-card.css';

function ProyectCard({img, titulo, descrip, link}) {
    return (
        <a href={link} target='_blank' rel='noopener noreferrer' className='card-link'>
            <div className="card-proyecto">
                <div className="card-imagen">
                    <img src={img} alt={`Imagen del proyecto ${titulo}`} />
                </div>
                <div className="card-contenido">
                    <h2 className="card-titulo">{titulo}</h2>
                    <p className="card-descripcion">{descrip}</p>
                </div>
            </div>
        </a>
    )
}

export default ProyectCard;