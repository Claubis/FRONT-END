'use client'
/* Importação do CSS */
import './style.css'

/* Importação das imagens */
import imagem from './assets/comida3.png'
import imagem2 from './assets/comida2.png'
import imagem3 from './assets/comida1.png'
import imagem4 from './assets/comida5.png'
import imagem5 from './assets/comida9.png'
import imagem6 from './assets/comida8.png'
import imagem7 from './assets/comida7.png'
import imagem8 from './assets/comida6.png'

import React, { useState } from 'react';

export default function Produtos() {

    // Array de imagens correspondentes a cada card - Estava padronizando todas antes
    const imagens = [imagem, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8];

    // Definir contagem dos meus produtos
    const [contadores, setContadores] = useState(Array(imagens.length).fill(0));

    // Nomes dos produtos
    const nomesProdutos = ["irish coffee", "capuccino", "café mocha", "conhaque", "café cubano", "sanduíche", "croissant", "bolo de matchá"];

    const valores = ["R$34,99", "R$14,99", "R$19,99", "R$24,99", "R$34,99", "R$29,99", "R$14,99", "R$24,99"]

    // Função para incrementar o contador de um card específico
    const incrementarContador = (index:any) => {
        const newContadores = [...contadores];
        newContadores[index] += 1;
        setContadores(newContadores);
    };

    // Função para decrementar o contador de um card específico
    const decrementarContador = (index:any) => {
        if (contadores[index] > 0) {
            const newContadores = [...contadores];
            newContadores[index] -= 1;
            setContadores(newContadores);
        }
    };
    return (

        <section className="produtos">
            <div className="container-produto">

                <div>
                    <h1 className='titulo-pagina-produto'>cardápio</h1>
                </div> { /* Fim div titulo-pagina-produto */}

                <div className='container-box-card-produtos'>
                {imagens.map((imagem, index) => (
                    <div key={index} className="card">
                        <div className="card__wrapper">
                            <div className="card__menu">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" viewBox="0 0 29 14" height="14" fill="none">
                                    <path fill="#000" d="m16.5714 9.16667h10.3572c.5493 0 1.0762.22827 1.4647.6346s.6067.95743.6067 1.53203c0 .5747-.2182 1.1258-.6067 1.5321s-.9154.6346-1.4647.6346h-10.3572c-.5493 0-1.0762-.2283-1.4647-.6346s-.6067-.9574-.6067-1.5321c0-.5746.2182-1.1257.6067-1.53203s.9154-.6346 1.4647-.6346zm-14.49997-8.66667h24.85717c.5493 0 1.0762.228273 1.4647.6346.3885.40633.6067.95743.6067 1.53207 0 .57463-.2182 1.12573-.6067 1.53206s-.9154.6346-1.4647.6346h-24.85717c-.54938 0-1.076254-.22827-1.464722-.6346s-.606708-.95743-.606708-1.53206c0-.57464.21824-1.12574.606708-1.53207.388468-.406327.915342-.6346 1.464722-.6346z" />
                                </svg>
                            </div>
                        </div>
                        <div className="card__img">
                            <img className='imagem-produto-pagina-produto' src={imagem.src} alt={`imagem do produto ${index + 1}`} />
                        </div>
                        <div className="card__title">{nomesProdutos[index]}</div>
                        <div className="card__wrapper">
                            <div className="card__price">{valores[index]}</div>
                            <div className="card__counter">
                                <button className="card__btn" onClick={() => decrementarContador(index)}>-</button>
                                <div className="card__counter-score">{contadores[index]}</div>
                                <button className="card__btn card__btn-plus" onClick={() => incrementarContador(index)}>+</button>
                            </div>
                        </div>
                    </div> 
                ))}
                </div> { /* Fim div container-box-card-produtos */}
                </div> { /* Fim div container-box-card-produtos */}
        </section>

    );
}