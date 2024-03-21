
/* Importação do CSS */
import './style.css'

/* Importação da imagem  que será utilizada como fundo */
import imagem from './assets/imagem.jpg'

export default function MarketingTerceiro() {

    return (

        <div className='container-marketing-tres'>

            <div className='container-info-marketing-tres'>

                <div className='container-info-box-tres'>
                    <img className='imagem-irish-coffe' src={imagem.src}alt="Produto Irish Coffe" />
                </div> {/* Fim div container-info-marketing-tres */}

                <div className='box-titulo-marketing-tres'>
                    <h1 className='titulo-marketing-tres'>Descubra algo</h1>
                    <p className='frase-um-marketing-tres'>único</p>
                    <p className='frase-dois-marketing-tres'>Sinta a sensação e</p>
                    <p className='frase-tres-marketing-tres'>experimente</p>
                    <p className='frase-quatro-marketing-tres'>um novo sabor com o</p>
                    <p className='nome-efeito-produto-tres'>Irish Coffe</p>
                </div>
            </div> {/* Fim div box-titulo-marketing-tres */}
            
        </div> // Fim div container-marketing-tres'
    );
}