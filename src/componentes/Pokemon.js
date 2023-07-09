import { useState, useEffect } from "react";

export default function Pokemon () {
    const [loading, setLoading] = useState(true);
    // Ya sabemos que va a ser un objeto, así que de manera predeterminada usamos {}
    const [pokemon, setPokemon] = useState({});

    // Los hooks siempre antes del return
    useEffect(() => {

        // Sacado de MDN! Número entero aleatorio entre X e Y
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        const random = getRandomIntInclusive(1, 1000);
        const endpoint = `https://pokeapi.co/api/v2/pokemon/${random}`;

        // con async habilitamos el uso de promesas
        const fetchPokemon = async () => {
            // fetch(endpoint).then((res) => {
            const res = await fetch(endpoint);
            console.log(res);
            if (res.ok) {
                // res.json().then((data) => {
                const data = await res.json();
                setPokemon(data);
                setLoading(false);
            } else {
                console.error("Oops,", res.statusText);
            }
        }

        // Llamar a la función
        fetchPokemon();

    }, []);

    if (loading === true) {
        return (
            <h1>Cargando Pokemones...</h1>
        )
    }

    // Mostrar el nombre del pokemon!
    // Mostrar también un párrafo que diga "El peso de NOMBRE es Xkg"
    return (
        <>
            <h1>{pokemon.name}</h1>
            <p>El peso de {pokemon.name} es {pokemon.weight}kg.</p>
            {/* A veces no hay imágenes, entonces hago un condicional
            para evitar que se rompa cuando no hay ninguna */}
            {pokemon.sprites &&
                <img src={pokemon.sprites.front_default} alt="" />
            }
        </>
    )
}
