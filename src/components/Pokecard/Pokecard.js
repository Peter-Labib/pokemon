import React from 'react'
import style from './Pokecard.module.scss'

const Pokecard = (props) => {
    const padToThree = (num) => num <= 999 ? `00${num}`.slice(-3) : num
    let imgApi = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(props.id)}.png`
    return (
        <div className={style.Pokecard}>
            <h2 className={style.Pokecard__title}>{props.name}</h2>
            <img className={style.Pokecard__img} src={imgApi} alt={props.name} />
            <p>Type: {props.type}</p>
            <p>EXP: {props.experience}</p>
        </div>
    )
}

export default Pokecard
