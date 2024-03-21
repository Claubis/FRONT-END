
/* Importação do CSS */
import './style.css'

/* Importação da imagem  que será utilizada como fundo */
import imagem from './assets/image 2.png'

export default function HomePage() {

    return (

        <div className='container-home-page'>

            <div className='container-info-primeiro-box'>

                <div className='box-titulo-home-page'>
                    <h1 className='titulo-home-page'>Onde o café <br /> encontra o whisky</h1>
                </div>  {/* Fim div box-titulo-home-page*/}

                <div className='box-frase-home-page'>
                    <p className='frase-home-page'>Entre, sinta o aroma acolhedor e permita que cada página deste site seja uma jornada deliciosa pelo mundo do café. Seja muito bem-vindo ao nosso espaço virtual, onde cada clique é um convite para saborear experiências únicas e repletas de sabor!</p>
                </div> {/* Fim div box-frase-home-page*/}

            </div> {/* Fim div container-info-primeiro-box*/}

            <div className='container-info-segundo-box'>
                <img className='imagem-seja-bem-vindo' src={imagem.src} alt="Imagem das nuvens" />
            </div> {/* Fim div container-info-segundo-box*/}

        </div> // Fim div container-home-pag
    );
}