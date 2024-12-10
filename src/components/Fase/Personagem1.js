import styles from './personagem1.module.css'

function Personagem1({botaoMaca, botaoPera, botaoManga, botaoUva, botaoGoiaba, textoInformativoFruta
}){


    return(
        <div className={styles.container}>
            <div className={styles.botao1}>{botaoGoiaba}</div>
            <div className={styles.botao2}>{botaoMaca}</div>
            <div className={styles.botao3}>{botaoManga}</div>
            <div className={styles.botao4}>{botaoPera}</div>
            <div className={styles.botao5}>{botaoUva}</div>
           {textoInformativoFruta}

        </div>
    )
}
export default Personagem1