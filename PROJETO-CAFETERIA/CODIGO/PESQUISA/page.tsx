
/* Importação do CSS */
import './style.css'

import Link from 'next/link';

/* Importação da imagem  que será utilizada como fundo */
import imagem from '../Pesquisa/assets/imagem4.png'
import imagem2 from './assets/Star.png'


export default function Pesquisa() {

    return (

        <div className='container-pesquisa'>

            <div className='container-info-primeiro-box-pesquisa'>

            <div className='box-estrela'>

                <div>
                    <img src={imagem2.src} alt="estrela" />
                </div>

                <div className='box-titulo-pesquisa'>
                    <h1 className='titulo-pesquisa'>Avalie sua Experiência</h1>
                </div>

                <div>
                    <img src={imagem2.src} alt="estrela" />
                </div>

            </div> { /* Fim div box-estrela */}

            <div className='box-frase-pesquisa'>
                <h2 className='subtitulo-pesquisa'>Se você já nos visitou, não se esqueça de fazer sua avaliação</h2>
            </div> { /* Fim div box-frase-pesquisa */}

            <div className='box-descritivo-pesquisa'>
                <p className='texto-descritivo-pesquisa'>Como foi sua experiência com nosso café com uísque personalizável? Seu feedback é essencial para nós, pois nos ajuda a aprimorar nossos produtos e serviços para atender melhor às suas preferências.</p>
            </div> { /* Fim div box-descritivo-pesquisa */}

            <div className='box-descritivo-pesquisa'>
                <p className='texto-descritivo-pesquisa'>Reserve alguns minutos do seu tempo para completar nossa pesquisa de satisfação abaixo e nos ajude a garantir que cada gole do nosso café com uísque seja verdadeiramente memorável. Obrigado por compartilhar sua opinião conosco!</p>
            </div> { /* Fim div box-descritivo-pesquisa */}

            <div>
                <button className='botao-pesquisa-satisfacao'>
                    <Link className='texto-botao-pesquisa-satisfacao' href="./pages/PesquisaSatisfacao">Responda agora</Link>
                </button>
            </div> { /* Fim div sem nome */}

            </div> { /* Fim div container-info-primeiro-box-pesquis */}

        </div> // Fim div container-pesquis
    );
}