import Card from "./Card";
import data from './data_tarjetas.json';
import './CardWrapper.css';

export default function CardWrapper () {
    return (
        <div className="wrapper">
            <h2>💣¡FIN DE SEMANA DE OFERTAS BOMBA!💣
            </h2>

            <div className="grilla">
                {/* Recorremos el array y por cada elemento creamos una Card */}
                {data.map(elemento => (
                    <Card key={elemento.id} producto={elemento} />
                ))}
            </div>
        </div>
    )
}
