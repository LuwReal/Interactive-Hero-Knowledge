import styles from './personagem3.module.css'

function Personagem3({botaoMargarita, botaoCalabresa, botaoFrangoCy, botao4Queijo, botaoPortuguesa, textoInformativoPizza
}){


    return(
        <div className={styles.container}>
            <div className={styles.botao1}>{botaoCalabresa}</div>
            <div className={styles.botao2}>{botaoMargarita}</div>
            <div className={styles.botao3}>{botaoFrangoCy}</div>
            <div className={styles.botao4}>{botao4Queijo}</div>
            <div className={styles.botao5}>{botaoPortuguesa}</div>
           {textoInformativoPizza}

        </div>
    )
}
export default Personagem3