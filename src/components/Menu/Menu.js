import Personagem1 from '../Fase/Personagem1';
import Personagem2 from '../Fase/Personagem2';
import Personagem3 from '../Fase/Personagem3';
import Personagem4 from '../Fase/Personagem4';
import styles from './menu.module.css';
import React, {useState} from 'react';


function Menu(){


    function Volta(){
        setContainerFruta(null)
        setContainerMoeda(null)
        setContainerPizza(null)
        setContainerVirtude(null)
    };
    let BotaoVolta = <button className={styles.botaoVolta} onClick={Volta}>Volta</button>
    
    let listTranslate = ['38%', '12.5%', '-12.5%', '-35%']
    let [translateValue, setTranslateValue] = useState (listTranslate[0])
    let [contador, setContador] = useState(1)
    let listPersonagem = ['url("/img/proximoPersonagem2.png")', 'url("/img/proximoPersonagem3.png")', 'url("/img/proximoPersonagem4.png")', 'url("/img/proximoPersonagem1.png")']
    let [personagensNext, setPersonagemNext] = useState(listPersonagem[0])

    function ProximoPersonagem(){
        setContador(contador + 1)
        if(contador === 3){
            setContador(0)
        }else{}
        setTranslateValue(listTranslate[contador])
        setPersonagemNext(listPersonagem[contador])
    }
    let styleButtonNextPersonagem = {
        marginTop: '0.5rem',
        width: '7rem',
        height: '3rem',
        backgroundImage: personagensNext,
        transition: 'background-image 0.8s ease',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    let scrollRollPersonagem = {
        transform: `translate(${translateValue}, 0)`,
        transition: 'transform 2s ease, transform 2s ease' 
    }
    
/*Frutas */
    let frutas = [
        <div className={styles.containerGoiaba}>
            <div className={styles.containerGoiabaText}>
                <h1>Goiaba</h1>
                <h2>Saude</h2>
                <p>Rica em vitamina C, a goiaba fortalece a imunidade, combate os radicais livres e auxilia na saúde digestiva com suas fibras, além de ser ideal para diabéticos.</p>
                <h2>História</h2>
                <p>Nativa das Américas, a goiaba era usada pelos maias e astecas, sendo difundida pelos colonizadores para regiões tropicais e subtropicais do mundo. </p>
                <h2>Curiosidade</h2>
                <p>Além de ser mais rica em vitamina C que a laranja, as folhas da goiabeira têm usos medicinais, como tratar problemas estomacais em forma de chá.</p>
                {BotaoVolta}
            </div>
        </div>,

        <div className={styles.containerPera}>
            <div className={styles.containerPeraText}>
                <h1>Pera</h1>
                <h2>Saude</h2>
                <p>Rica em fibras e água, a pera ajuda na hidratação, melhora a digestão e é uma fruta leve para dietas saudáveis.</p>
                <h2>História</h2>
                <p>A pera é cultivada desde a antiguidade, com registros em civilizações como egípcios e gregos, e hoje tem grande variedade.</p>
                <h2>Curiosidade</h2>
                <p>A pera chinesa, chamada nashi, combina textura crocante com suculência e é considerada símbolo de longevidade.</p>
                {BotaoVolta}
            </div>
        </div>,

        <div className={styles.containerManga}>
            <div className={styles.containerMangaText}>
                <h1>Manga</h1>
                <h2>Saude</h2>
                <p>Fonte de vitaminas A e C, a manga melhora a saúde da pele, fortalece a imunidade e promove boa visão, além de ter propriedades antioxidantes.</p>
                <h2>História</h2>
                <p>Nativa do sul da Ásia, a manga foi cultivada há mais de 4.000 anos e é conhecida como o 'rei das frutas' em países como a Índia.</p>
                <h2>Curiosidade</h2>
                <p>Uma única manga pode conter até 20% da necessidade diária de vitamina A, sendo ideal para manter a saúde ocular.</p>
                {BotaoVolta}
            </div>
        </div>, 

        <div className={styles.containerUva}>
            <div className={styles.containerUvaText}>
                <h1>Uva</h1>
                <h2>Saude</h2>
                <p>Com antioxidantes como o resveratrol, a uva protege o coração, reduz inflamações e melhora a circulação sanguínea.</p>
                <h2>História</h2>
                <p>Cultivada há mais de 8.000 anos, a uva tem suas raízes no Oriente Médio e foi essencial para a criação do vinho.</p>
                <h2>Curiosidade</h2>
                <p>Existem uvas que explodem na boca por sua crocância, como a variedade Cotton Candy, famosa por seu sabor doce e único.</p>
                {BotaoVolta}
            </div>
        </div>, 

        <div className={styles.containerMaca}>
            <div className={styles.containerMaçaText}>
                <h1>Maçã</h1>
                <h2>Saude</h2>
                <p>Rica em fibras e antioxidantes, a maçã auxilia na digestão, combate o colesterol ruim e contribui para a saúde cardiovascular.</p>
                <h2>História</h2>
                <p>Originária da Ásia Central, a maçã foi cultivada por civilizações antigas e é hoje uma das frutas mais populares no mundo.</p>
                <h2>Curiosidade</h2>
                <p>Com mais de 7.500 variedades, a maçã é símbolo de mitos e histórias, como a maçã de Newton ou a maçã da Branca de Neve.</p>
                {BotaoVolta}
            </div>
        </div>
    ]
    let [containerFruta, setContainerFruta] = useState(null)
    let fruta = (a) =>{
        setContainerFruta(a)
    }
/*Final Frutas*/
/*Moedas*/
    let moedas = [
        <div className={styles.containerIene}>
        <div className={styles.containerIeneText}>
            <h1>Iene (Japão)</h1>
            <h2>O que é</h2>
            <p>O iene (¥) é a moeda oficial do Japão, emitido pelo Banco do Japão, e desempenha um papel fundamental na economia japonesa</p>
            <h2>História</h2>
            <p>O iene foi introduzido em 1871 durante a era Meiji para modernizar a economia do Japão e substituir moedas de prata e ouro.</p>
            <h2>Quando foi criada</h2>
            <p>Criado em 1871, o iene marcou a transição do Japão para uma economia moderna e unificada.</p>
            {BotaoVolta}
        </div>
        </div>,

        <div className={styles.containerBitcoin}>
            <div className={styles.containerBitcoinText}>
                <h1>Bitcoin</h1>
                <h2>O que é</h2>
                <p>O Bitcoin (BTC) é a primeira criptomoeda, não controlada por nenhum banco central, usando blockchain para transações seguras.</p>
                <h2>História</h2>
                <p>O Bitcoin foi criado em 2009 por Satoshi Nakamoto como uma moeda digital descentralizada, baseada em tecnologia blockchain.</p>
                <h2>Quando foi criada</h2>
                <p>Criado em 2009, o Bitcoin foi resultado do white paper 'Bitcoin: A Peer-to-Peer Electronic Cash System' e revolucionou a finança.</p>
                {BotaoVolta}
            </div>
        </div>,

        <div className={styles.containerReal}>
            <div className={styles.containerRealText}>
                <h1>Real (Brasil)</h1>
                <h2>O que é</h2>
                <p>O Real é a moeda nacional do Brasil, representando a unidade monetária do país e é emitido pelo Banco Central do Brasil.</p>
                <h2>História</h2>
                <p>O Real foi introduzido como moeda oficial do Brasil em 1994, substituindo o Cruzeiro Real e parte do Plano Real para estabilizar a economia.</p>
                <h2>Quando foi criada</h2>
                <p>Criado em 1994 como parte do Plano Real, o Real substituiu o Cruzeiro Real, marcando a estabilização econômica do Brasil.</p>
                {BotaoVolta}
            </div>
        </div>, 

        <div className={styles.containerEuro}>
            <div className={styles.containerEuroText}>
                <h1>Euro (UE)</h1>
                <h2>O que é</h2>
                <p>O euro (€), ou EUR, é a moeda oficial da zona do euro, usada por 20 dos 27 países da UE, administrada pelo Banco Central Europeu.</p>
                <h2>História</h2>
                <p>O euro foi criado em 1999 como moeda oficial da União Europeia, substituindo moedas de 11 países e simbolizando a integração econômica.</p>
                <h2>Quando foi criada</h2>
                <p>Criado em 1999, o euro começou a circular em 2002, marcando o início de uma moeda única para a zona do euro.</p>
                {BotaoVolta}
            </div>
        </div>, 

        <div className={styles.containerDolar}>
            <div className={styles.containerDolarText}>
                <h1>Dólar (EUA)</h1>
                <h2>O que é</h2>
                <p>O dólar dos EUA, com símbolo '$' e código 'USD', é a moeda oficial dos EUA e uma das mais influentes e fortes do mundo.</p>
                <h2>História</h2>
                <p>O dólar dos EUA foi criado em 1792 pelo Congresso dos EUA e passou a ser emitido pelo Banco dos EUA, tornando-se uma moeda global.</p>
                <h2>Quando foi criada</h2>
                <p>Criado em 1792, o dólar dos EUA tornou-se uma moeda de reserva mundial e símbolo de força econômica internacional.</p>
                {BotaoVolta}
            </div>
        </div>
    ]
    let [containerMoeda, setContainerMoeda] = useState(null)
    let moeda = (a) =>{
        setContainerMoeda(a)
    }
/*Final Moedas */
/*Pizzas*/
    let pizzas = [
        <div className={styles.containerCalabresa}>
            <div className={styles.containerCalabresaText}>
                <h1>Pizza de Calabresa</h1>
                <p>A pizza de Calabresa combina a intensidade do sabor da linguiça calabresa com cebola, queijo e molho de tomate, trazendo um toque picante e saboroso.</p>
                <h2>Principais gradientes</h2>
                <p>Um contraste de sabores entre a calabresa temperada e a suavidade do queijo, com cebolas caramelizadas. </p>
                <h2>Historia da Pizza</h2>
                <p>A pizza tem origens na Antiga Grécia e Roma, mas foi em Nápoles, na Itália, que se popularizou como a conhecemos hoje, com massa, molho e queijo.</p>
                {BotaoVolta}
            </div>
        </div>,
        <div className={styles.containerFrangoComCatupiry}>
            <div className={styles.containerFrangoComCatupiryText}>
                <h1>Pizza de Frango com Catupiry</h1>
                <p>A pizza de Frango com Catupiry é uma mistura de frango desfiado e o cremoso catupiry, resultando em uma combinação saborosa e envolvente.</p>
                <h2>Principais gradientes</h2>
                <p>A suavidade do catupiry equilibra o sabor do frango, criando uma textura cremosa e um sabor marcante.</p>
                <h2>Historia da Pizza</h2>
                <p>A pizza tem origens na Antiga Grécia e Roma, mas foi em Nápoles, na Itália, que se popularizou como a conhecemos hoje, com massa, molho e queijo.</p>
                {BotaoVolta}
            </div>
        </div>,

        <div className={styles.containerPortuguesa}>
            <div className={styles.containerPortuguesaText}>
                <h1>Pizza Portuguesa</h1>
                <p>A pizza Portuguesa é famosa por seu sabor robusto, com presunto, cebola, ovos, azeitonas e queijo, proporcionando uma experiência completa.</p>
                <h2>Principais gradientes</h2>
                <p>Uma combinação de sabores salgados e levemente doces, com a textura das azeitonas e ovos cozidos.</p>
                <h2>Historia da Pizza</h2>
                <p>A pizza tem origens na Antiga Grécia e Roma, mas foi em Nápoles, na Itália, que se popularizou como a conhecemos hoje, com massa, molho e queijo.</p>
                {BotaoVolta}
            </div>
        </div>, 

        <div className={styles.container4Queijos}>
            <div className={styles.container4QueijosText}>
                <h1>Pizza 4 Queijos</h1>
                <p>A pizza 4 Queijos é um prato indulgente com uma mistura de queijos como mozzarella, gorgonzola, parmesão e provolone, criando um sabor intenso.</p>
                <h2>Principais gradientes</h2>
                <p>A mistura de queijos oferece um perfil de sabor profundo e complexo, com toques salgados e cremosos.</p>
                <h2>Historia da Pizza</h2>
                <p>A pizza tem origens na Antiga Grécia e Roma, mas foi em Nápoles, na Itália, que se popularizou como a conhecemos hoje, com massa, molho e queijo.</p>
                {BotaoVolta}
            </div>
        </div>, 

        <div className={styles.containerMargarita}>
            <div className={styles.containerMargaritaText}>
                <h1>Pizza Margarita</h1>
                <p>A clássica pizza Margarita é a escolha dos amantes da simplicidade, com molho de tomate, mozzarella, manjericão e um toque de azeite.</p>
                <h2>Principais gradientes</h2>
                <p>Uma combinação leve entre o sabor do tomate, a cremosidade da mozzarella e o aroma fresco do manjericão.</p>
                <h2>Historia da Pizza</h2>
                <p>A pizza tem origens na Antiga Grécia e Roma, mas foi em Nápoles, na Itália, que se popularizou como a conhecemos hoje, com massa, molho e queijo.</p>
                {BotaoVolta}
            </div>
        </div>
    ]
    let [containerPizza, setContainerPizza] = useState(null)
    let pizza = (a) =>{
        setContainerPizza(a)
    }
/*Final Pizza*/
/*Virtudes*/
    let virtudes = [
        <div className={styles.containerEmpatia}>
            <div className={styles.containerEmpatiaText}>
                <h1>Empatia</h1>
                <h2>O que significa o nome?</h2>
                <p>Empatia é a habilidade de compreender e compartilhar os sentimentos de outra pessoa, colocando-se no lugar dela.</p>
                <h2>História</h2>
                <p>O conceito moderno de empatia surgiu no século XX, baseado em estudos psicológicos e filosóficos da Alemanha.</p>
                <h2>Curiosidade</h2>
                <p>Pessoas empáticas têm maior probabilidade de formar laços sociais fortes e reduzir conflitos interpessoais.</p>
                {BotaoVolta}
            </div>
        </div>,

        <div className={styles.containerGenerosidade}>
            <div className={styles.containerGenerosidadeText}>
                <h1>Generosidade</h1>
                <h2>O que significa o nome?</h2>
                <p>Generosidade é o ato de dar de forma altruísta, sem esperar algo em troca, promovendo bondade.</p>
                <h2>História</h2>
                <p>Na Idade Média, generosidade era vista como um valor da nobreza, associada à distribuição de recursos.</p>
                <h2>Curiosidade</h2>
                <p>Estudos mostram que atos generosos aumentam a felicidade e o bem-estar do doador e do receptor.</p>
                {BotaoVolta}
            </div>
        </div>,

        <div className={styles.containerResiliencia}>
        <div className={styles.containerResilienciaText}>
            <h1>Resiliência</h1>
            <h2>O que significa o nome?</h2>
            <p>Resiliência é a capacidade de superar adversidades, adaptando-se e crescendo com desafios enfrentados.</p>
            <h2>História</h2>
            <p>Originada na física, a palavra "resiliência" foi adaptada ao campo psicológico na década de 1970.</p>
            <h2>Curiosidade</h2>
            <p>A resiliência é considerada essencial no sucesso profissional, sendo estudada por empresas e educadores.</p>
            {BotaoVolta}
        </div>
        </div>, 

        <div className={styles.containerPaciencia}>
            <div className={styles.containerPacienciaText}>
                <h1>Paciência</h1>
                <h2>O que significa o nome?</h2>
                <p>Paciência é a habilidade de tolerar dificuldades e esperar com calma por resultados ou soluções.</p>
                <h2>História</h2>
                <p>Religiões como o budismo e o cristianismo pregam a paciência como uma virtude espiritual essencial.</p>
                <h2>Curiosidade</h2>
                <p>Exercitar a paciência pode aumentar a resiliência emocional e melhorar as relações interpessoais.</p>
                {BotaoVolta}
            </div>
        </div>, 

        <div className={styles.containerHonestidade}>
            <div className={styles.containerHonestidadeText}>
                <h1>Honestidade</h1>
                <h2>O que significa o nome?</h2>
                <p>Honestidade é a virtude de ser verdadeiro, confiável e transparente em ações e palavras.</p>
                <h2>História</h2>
                <p>Culturas antigas, como a romana, consideravam a honestidade um pilar fundamental para a harmonia social.</p>
                <h2>Curiosidade</h2>
                <p>Ser honesto é associado à liberação de estresse, pois evita o desgaste emocional de manter mentiras.</p>
                {BotaoVolta}
            </div>
        </div>
    ]
    let [containerVirtude, setContainerVirtude] = useState(null)
    let virtude = (a) =>{
        setContainerVirtude(a)
    }
/*Final Virtudes*/
/*Roll Personagens*/


    return(
        <div className={styles.container} >
            <h2>TEssssssss</h2>
            <img className={styles.banner} src="./img/banner.png" alt='Banner Gamer123' title='Interactive Hero Knowledge'/>
            <div className={styles.containerRoll} style={scrollRollPersonagem}>
                    <Personagem1 
                    botaoMaca={<img className={styles.frutas} onClick={() => fruta(frutas[0])} src='./img/goiaba.png' alt='Fruta Goiaba' title='Goiaba'/>}
                    botaoPera={<img className={styles.frutas} onClick={() => fruta(frutas[1])} src='./img/pera.png' alt='Fruta Pera' title='Pera'/>}
                    botaoManga={<img className={styles.frutas} onClick={() => fruta(frutas[2])} src='./img/manga.png' alt='Fruta Manga' title='Manga'/>}
                    botaoUva={<img className={styles.frutas} onClick={() => fruta(frutas[3])} src='./img/uva.png' alt='Fruta Uva' title='Uva'/>}
                    botaoGoiaba={<img className={styles.frutas} onClick={() => fruta(frutas[4])} src='./img/maça.png' alt='Fruta Maça' title='Maça'/>}
                    textoInformativoFruta={containerFruta}
                    />
                    <Personagem2 
                    botaoIene={<img className={styles.moedas} onClick={() => moeda(moedas[0])} src='./img/iene.png' alt='Moeda Iene' title='Iene'/>}
                    botaoBitcoin={<img className={styles.moedas} onClick={() => moeda(moedas[1])} src='./img/bitcoin.png' alt='Moeda Bitcoin' title='Bitcoin'/>}
                    botaoReal={<img className={styles.moedas} onClick={() => moeda(moedas[2])} src='./img/real.png' alt='Moeda Real' title='Real'/>}
                    botaoEuro={<img className={styles.moedas} onClick={() => moeda(moedas[3])} src='./img/euro.png' alt='Moeda Euro' title='Euro'/>}
                    botaoDolar={<img className={styles.moedas} onClick={() => moeda(moedas[4])} src='./img/dolar.png' alt='Moeda Dolar' title='Dolar'/>}
                    textoInformativoMoedas={containerMoeda}
                    />
                    <Personagem3 
                    botaoCalabresa={<img className={styles.pizzas} onClick={() => pizza(pizzas[0])} src='./img/pizzaCalabresa.jpg' alt='Pizza de Calabresa' title='Pizza De Calabresa'/>}
                    botaoFrangoCy={<img className={styles.pizzas} onClick={() => pizza(pizzas[1])} src='./img/pizzaFrangoCatupiry.jpg' alt='Pizza de Frango com Catupity' title='Pizza De Frango com Catupiry'/>}
                    botaoPortuguesa={<img className={styles.pizzas} onClick={() => pizza(pizzas[2])} src='./img/pizzaPortuguesa.jpg' alt='Pizza de Portuguesa' title='Pizza De Portuguesa'/>}
                    botao4Queijo={<img className={styles.pizzas} onClick={() => pizza(pizzas[3])} src='./img/pizza4Queijos.jpg' alt='Pizza de 4 Queijos' title='Pizza De 4 Queijos'/>}
                    botaoMargarita={<img className={styles.pizzas} onClick={() => pizza(pizzas[4])} src='./img/pizzaMargarita.jpg' alt='Pizza de Margarita' title='Pizza De Margarita'/>}
                    textoInformativoPizza={containerPizza}
                    />
                    <Personagem4 
                    botaoEmpatia={<img className={styles.virtudes} onClick={() => virtude(virtudes[0])} src='./img/empatia.png' alt='Empatia' title='Empatia'/>}
                    botaoGenerosidade={<img className={styles.virtudes} onClick={() => virtude(virtudes[1])} src='./img/generosidade.png' alt='Generosidade' title='Generosidade'/>}
                    botaoResiliencia={<img className={styles.virtudes} onClick={() => virtude(virtudes[2])} src='./img/resiliencia.png' alt='Resiliência' title='Resiliência'/>}
                    botaoPaciencia={<img className={styles.virtudes} onClick={() => virtude(virtudes[3])} src='./img/paciencia.png' alt='Paciencia' title='Paciencia'/>}
                    botaoHonestidade={<img className={styles.virtudes} onClick={() => virtude(virtudes[4])} src='./img/honestidade.png' alt='Honestidade' title='Honestidade'/>}
                    textoInformativoVirtudes={containerVirtude}
                    />
            </div>
            <button style={styleButtonNextPersonagem} onClick={ProximoPersonagem}></button>
        </div>
    )
}
export default Menu