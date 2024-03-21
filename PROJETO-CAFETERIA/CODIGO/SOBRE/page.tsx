/* Importação do CSS */
import './style.css'

export default function Sobre() {
    return (

        <div className='container-sobre'>

            <div className='container-info-sobre'>

                <div className='box-titulo-pagina-sobre'>
                    <h1 className='titulo-pagina-sobre'>sobre nós</h1>
                </div> {/* Fim div box-titulo-pagina-sobre */}

                <div className='box-descricao-pagina-sobre'>
                    <p className='descricao-pagina-sobre'>Somos um pequeno grupo familiar apaixonado pelo café e pela busca incessante por novas experiências sensoriais.  Nossa missão é explorar as mais ricas combinações de sabores, e é com essa paixão que nos aventuramos na busca pelo produto perfeito que harmonize o delicioso aroma do café com a sutileza e complexidade do whisky.</p>
                </div> {/* Fim div box-descricao-pagina-sobre */}

            </div> {/* Fim div container-info-sobre */}

            <div>
                <button className='botao-pagina-sobre'>entre em contato</button>
            </div> {/* Fim div botao-pagina-sobre */}

        </div> // Fim div container-sobr
    );
}