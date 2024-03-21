
/* Importação do CSS */
import './style.css'

/* Importação das imagens */
import imagem1 from './assets/ligacao.png' /* Ligação */
import imagem2 from './assets/chat.png' /* SMS */
import imagem3 from './assets/mail.png' /* E-mail */
import imagem4 from './assets/whats.png' /* Whats */
import imagem5 from './assets/instagram.png' /* Instagram */
import imagem6 from './assets/facebook.png' /* Facebook */


import Link from 'next/link';

export default function Rodape(){

    return (

        <footer className="footer">
            
            <div className="container-footer">

                <div className="info-footer-contato">

                    <div className='textos-contato-footer'>
                        
                        <h3 className='titulo-contato-footer'>Contato</h3>
                        <p className='texto-descritivo-footer'>Endereço: Av. Paulista, 1106</p>
                        <p className='texto-descritivo-footer'>Telefone: (11) 3385-8010</p>
                        <p className='texto-descritivo-footer'>Email: fiap@fiap.com.br</p>

                    </div> { /* Fim div textos-contato-footer */}

                    <div className='icones-contato-footer'>
                        <ul className='lista-icones-footer'>
                            <li>
                                <a className="rede-social-telefone" href="tel:+11958757740"><img className='icones-rede-social-font' src={imagem1.src} alt="Imagem de ligação" /></a>
                            </li>

                            <li>
                                <a className="rede-social-sms" href="sms:+11958757740"> <img className='icones-rede-social-font' src={imagem2.src} alt="Imagem do SMS" /></a>
                            </li>

                            <li>
                                <a className="rede-social-email" href="mailto:rm553472@fiap.com.br"><img className='icones-rede-social-font' src={imagem3.src} alt="Imagem do e-mail" /></a>
                            </li>

                            <li>
                                <a className="rede-social-whatsapp" href="https://wa.me/11958757740"> <img className='icones-rede-social-font' src={imagem4.src} alt="Imagem do WhatsApp" /></a>
                            </li>
                        </ul>
                    </div> { /* Fim div icones-contato-footer */}

                </div> { /* Fim div info-footer-contato */}

                <div className="info-footer-atendimento">

                    <div className='textos-atendimento-footer'>
                        
                        <h3 className='titulo-atendimento-footer'>Horário de Funcionamento</h3>
                        <p className='texto-descritivo-footer'>Segunda a Sexta: 6:00 - 22:00</p>
                        <p className='texto-descritivo-footer'>Sábado e Domingo: 6:00 - 16:00</p>

                    </div> { /* Fim div textos-atendimento-footer */}

                </div> { /* Fim div info-footer-atendimento */}
    
                <div className="info-footer-redes-sociais">
                    
                    <h3 className='titulo-redes-sociais-footer'>Siga-nos</h3>
                
                    <div className="social-icons">
                        
                        <ul className='lista-icones-footer'>
                            <li>
                                <a className="rede-social-instagram" href="#" target="_blank"><img className='icones-rede-social-font' src={imagem5.src} alt="Imagem do Instagram" /></a>
                            </li>
                            <li>
                                <a className="rede-social-facebook" href="#" target="_blank"> <img className='icones-rede-social-font' src={imagem6.src} alt="Imagem do Facebook" /></a>
                            </li>
                        </ul>

                    </div>

                </div>  { /* Fim div info-footer-redes-sociais */}

                <div className='nosso-time-footer'>

                    <h3 className='titulo-nosso-time-footer'>Nosso time</h3>
                    <p className='texto-descritivo-footer'>Claudio Bispo - Rm 553472</p>
                    <p className='texto-descritivo-footer'>Sara Ingrid - Rm 554021</p>
                    <p className='texto-descritivo-footer'>Patricia Naomi - Rm 552981</p>
                    <p className='texto-descritivo-footer'>Leonardo Gaspar - Rm 553383</p>
                    
                    <Link href="/pages/Time">
                        <button className='botao-pagina-time'>Conheça mais!</button>
                    </Link>
                    
                </div>   {/* Fim div nosso-time-footer */}

            </div> { /* Fim div container-footer */}

            <div className="footer-bottom">
                <p>&copy; 2024 Wiskafé. Todos os direitos reservados.</p>
            </div>  { /* Fim div footer-bottom */}    
        </footer>

    );
}