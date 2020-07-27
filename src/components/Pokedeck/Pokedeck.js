import React from 'react'
import style from './Pokedeck.module.scss'

import Pokecard from '../Pokecard/Pokecard'

const Pokedeck = (props) => {
    return (
        <div className={style.Pokedeck}>
            <h2
                className={props.isWinner ? style.Pokedeck__status_winner : style.Pokedeck__status_loser}
            >{props.isWinner ? 'you Winner' : 'you lose'}</h2>
            <p>total experience: {props.experience}</p>
            <div className={style.Pokedeck__deck}>
                {props.pokemon.map(pok =>
                    <Pokecard
                        key={pok.id}
                        id={pok.id}
                        name={pok.name}
                        type={pok.type}
                        experience={pok.base_experience} />)}
            </div>
        </div>
    )
}

export default Pokedeck
