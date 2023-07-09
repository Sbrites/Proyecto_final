import './App.css';
// 1. Importamos el componente
// Si lo tenemos abierto en otra pestaña VSCode nos ayuda a completarlo
import Title from './componentes/Title';
import CardWrapper from './componentes/CardWrapper';
import EjemploEventos from './componentes/EjemploEventos';
import Contador from './componentes/Contador';
import Pokemon from './componentes/Pokemon';
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react';
function App() {
  const [AppOpen, setAppOpen] = useState(false)
  const numeros = [45, 76, 23, 670, 3, 78, 23];

  // JSX
  return (
    <div className="App">
       <Title/>
       <AiOutlineMenu onClick={() => setAppOpen (!AppOpen)} size={25}/>
      
       {/* 2. Lo usamos */}

       <CardWrapper />
       <Pokemon />
       <br />
       <EjemploEventos />
       <Contador/>
       {numeros.map(numero => {
        // Procesamos el número antes de mostrar el dato
        const precio = numero * 0.9;
        const id = Math.random();

        return (
          <p key={id}>El precio con 10% off es: {precio}</p>
        )
      })}
      
      Hola mundo  
    </div>
  );
}

export default App;
