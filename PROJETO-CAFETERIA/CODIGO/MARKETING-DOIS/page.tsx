
/* Importação do CSS */
import './style.css'

/* Importação da imagem  que será utilizada como fundo */
import imagem1 from './assets/Rectangle 55.png'
import imagem2 from './assets/Rectangle 56.png'
import imagem3 from './assets/Line 3.png'
import imagem4 from './assets/Star.png'

export default function MarketingSegundo() {

    return (

        <div className='container-marketing-segunda-pagina'>

            <div className='container-info-segundo-box-marketing-segunda-pagina'>
                <img className='imagem-produto-principal-marketing-segunda-pagina' src={imagem1.src} alt="" />
            </div> {/* Fim div container-info-segundo-box-marketing-segunda-pagina */}
            
            <div className='container-info-primeiro-box-marketing-segunda-pagina'>

                <div className='box-linha-marketing'>
                    <img className='linha-marketing' src={imagem3.src} alt="linha" />
                </div> {/* Fim div box-linha-marketing */}

                <div>
                    <img className='estrela-marketing' src={imagem4.src} alt="linha" />
                </div> {/* Fim div sem nome */}

                <div className='box-titulo-marketing-segunda-pagina'>
                    <h1 className='titulo-marketing-segunda-pagina'>Respire fundo, <br /> sorria e <br /> mergulhe <br /> nesta nova <br /> experiência </h1>
                </div> {/* Fim div box-titulo-marketing-segunda-pagina */}

                <div>
                    <img className='estrela-marketing' src={imagem4.src} alt="linha" />
                </div> {/* Fim div sem nome */}

            </div> {/* Fim div container-info-primeiro-box-marketing-segunda-pagina */}

            <div className='container-info-terceiro-box-marketing-segunda-pagina'>
                <img className='imagem-produto-principal-marketing-segunda-pagina' src={imagem2.src} alt="" />
            </div> {/* Fim div container-info-terceiro-box-marketing-segunda-pagina */}

        </div> // Fim div container-marketing-segunda-pagina
    );
}