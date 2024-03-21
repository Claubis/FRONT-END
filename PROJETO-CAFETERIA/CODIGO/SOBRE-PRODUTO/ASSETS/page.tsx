
/* Importação do CSS */
import './style.css'

/* Importação da imagem  que será utilizada como fundo */
import imagem from './assets/Rectangle 60.png'

export default function Marketing() {

    return (

        <div className='container-marketing'>

            <div className='container-info-primeiro-box-marketing'>

                <div className='box-titulo-marketing'>
                    <h1 className='titulo-marketing'>Nosso produto</h1>
                </div> {/* Fim div box-titulo-marketing*/}

                <div className="linha">
                </div> {/* Fim div linha*/}

            </div> {/* Fim div container-info-primeiro-box-marketing */}

            <div className='container-info-segundo-box-marketing'>
                <img className='imagem-produto-principal-marketing' src={imagem.src} alt="" />
            </div> {/* Fim div container-info-segundo-box-marketing */}

            <div className='container-info-terceiro-box-marketing'>

                <div className='texto-descritivo-produto'>
                    <h1 className='titulo-descrito-produto'>café com whisky</h1>
                    <p className='paragrafo-descritivo-produto'>Além dos cafés tradicionais que já ganharam nossos corações, trouxemos uma nova experiência combinando dois sabores potentes e inesquecíveis: Café e whisky. confira já nosso cardápio e apaixone-se!</p>
                </div> {/* Fim div texto-descritivo-produto */}

                <div className='texto-descritivo-produto'>
                    <h1 className='titulo-descrito-produto'>formação de barista</h1>
                    <p className='paragrafo-descritivo-produto'>Workshops disponíveis para a formação de barista, para aqueles que são tão apaixonados pelo café que desejam conhecer  a história, preparo e diversas combinações incríveis do café, Confira nossa agenda de cursos.</p>
                </div> {/* Fim div texto-descritivo-produto */}

                <div className='texto-descritivo-produto'>
                    <h1 className='titulo-descrito-produto'>cowork</h1>
                    <p className='paragrafo-descritivo-produto'>O coworking é uma ótima opção para quem está cansado de ficar sozinho em home office e precisa de uma estrutura maior para seu trabalho, como uma internet de mais qualidade e salas de reunião.</p>
                </div>{/* Fim div texto-descritivo-produto */}
                
            </div>  {/* Fim div container-info-terceiro-box-marketing'*/}

        </div> // Fim div container-marketing
    );
}
