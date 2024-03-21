
/* Importação do CSS */
import './style.css'

import Link from 'next/link';

export default function Menu() {

    return (

        <div className='container-menu'>

            <div className='logo-pagina-menu'>
                <h1 className='logo-projeto'><Link className='logo-projeto' href="/">Wiskafé</Link></h1>
            </div> {/* Fim div logo-pagina-menu */}

            <div className='box-opcoes-menu'>
                <nav className='nav-menu'>
                    <ul className='lista-opcoes-menu'>
                        <li className='opcao-sobre'>
                            <Link className='lista-titulos-menu' href="/">Sobre</Link>
                        </li>

                        <li className='opcao-servicos'>
                            <Link className='lista-titulos-menu' href="/Servicos">Serviços</Link>
                        </li>

                        <li className='opcao-produtos'>
                            <Link className='lista-titulos-menu' href="/Produtos">Produtos</Link>
                        </li>
                        <li className='opcao-reserva'>
                            <Link className='lista-titulos-menu' href="/Reserva">Reserva</Link>
                        </li>
                        {/*
                        <li className='opcao-orcamento'>
                            <Link href="/pages/Orcamento">Orcamento</Link>
                        </li>*/}
                        <li className='opcao-pesquisa'>
                            <Link className='lista-titulos-menu' href="./pages/PesquisaSatisfacao">Pesquisa Satisfação</Link>
                        </li>
                        <li className='opcao-contato'>
                            <Link className='lista-titulos-menu' href="/pages/FormularioContato">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div> {/* Fim div lbox-opcoes-menu */}
        
        </div> // Fim div container-menu
    );
}