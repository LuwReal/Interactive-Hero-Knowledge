import styles from './personagem4.module.css'

function Personagem4({botaoEmpatia, botaoHonestidade, botaoResiliencia, botaoGenerosidade, botaoPaciencia, textoInformativoVirtudes
}){


    return(
        <div className={styles.container}>
            <div className={styles.botao1}>{botaoEmpatia}</div>
            <div className={styles.botao2}>{botaoHonestidade}</div>
            <div className={styles.botao3}>{botaoResiliencia}</div>
            <div className={styles.botao4}>{botaoGenerosidade}</div>
            <div className={styles.botao5}>{botaoPaciencia}</div>
           {textoInformativoVirtudes}

        </div>
    )
}
export default Personagem4