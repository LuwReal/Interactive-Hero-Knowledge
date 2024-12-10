import styles from './personagem2.module.css'

function Personagem2({botaoReal, botaoDolar, botaoEuro, botaoIene, botaoBitcoin, textoInformativoMoedas
}){


    return(
        <div className={styles.container}>
            <div className={styles.botao1}>{botaoReal}</div>
            <div className={styles.botao2}>{botaoDolar}</div>
            <div className={styles.botao3}>{botaoEuro}</div>
            <div className={styles.botao4}>{botaoIene}</div>
            <div className={styles.botao5}>{botaoBitcoin}</div>
            {textoInformativoMoedas}
        </div>
    )
}
export default Personagem2