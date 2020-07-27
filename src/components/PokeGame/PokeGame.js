import React from 'react'
import Pokedeck from '../Pokedeck/Pokedeck'

const PokeGame = () => {
    const cards = [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]

    const hand1 = [...cards]
    const hand2 = []
    while (hand1.length > hand2.length) {
        const randomIndex = Math.floor(Math.random() * hand1.length)
        const randomCard = hand1.splice(randomIndex, 1)[0]
        hand2.push(randomCard)
    }

    const exp1 = hand1.reduce((acc, curr) => acc + curr.base_experience, 0)
    const exp2 = hand2.reduce((acc, curr) => acc + curr.base_experience, 0)
    return (
        <React.Fragment>
            <Pokedeck pokemon={hand1} isWinner={exp1 > exp2} experience={exp1} />
            <Pokedeck pokemon={hand2} isWinner={exp2 > exp1} experience={exp2} />
        </React.Fragment>
    )
}

export default PokeGame
