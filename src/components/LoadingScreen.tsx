import React from 'react'
import Pokedex from '../assets/pokedex.png'
import styles from './loadingScreen.module.css'

export const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
        <img className={styles.loadingScreenIcon} src={Pokedex} alt='Pokedex'/>
    </div>
  )
}
