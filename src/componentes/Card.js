import './Card.css';

export default function Card ({producto}) {
    return (
        <div className="card">
            <img src={producto.imagen} alt="" />
            <div className="card-info">
                <h2>{producto.titulo}</h2>
                <p className='descripcion'>
                    {producto.descripcion}
                </p>
                <div className="card-info-detalles">
                    <p className='precio'>${producto.precio}</p>
                    {/* Si el envío es true se muestra el párrafo */}
                    {producto.envio &&
                        <p className='envio'>Envío gratis</p>
                    }
                </div>
            </div>             
        </div>
    )
}