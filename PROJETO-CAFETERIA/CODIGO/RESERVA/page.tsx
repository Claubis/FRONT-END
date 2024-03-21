'use client'

/* Importação do CSS */
import './style.css'

import React, { useState } from 'react';

export default function Reservas() {

    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSubmit = (event:any) => {
        event.preventDefault();
        
        console.log('Dados da reserva:', { data, horario, nome, email, telefone });

        // Exibe um alerta após o envio do formulário
        alert(nome + '\nSua reserva foi feita com sucesso!\n' + 'Dados da reserva:\n' + 'Data:' + data + '\nHorário:' + horario);
    
        // Limpa os campos após o envio
        setData('');
        setHorario('');
        setNome('');
        setEmail('');
        setTelefone('');
    };

  return (
    <div className='container-reserva'>
        
        <div className='container-info-reserva'>

            <div className='box-principal-reserva'>

                <div className='box-conteudo-info-reserva'>

                    <div className='box-titulo-pagina-principal-reserva'>
                        <h1 className='titulo-pagina-principal-reserva'>Faça sua reserva</h1>
                    </div>  


                    <div className='descricoes-reservas'>

                        <p className='descricao-reservas'>Desfrute de uma experiência única em nosso café e garanta seu lugar hoje mesmo. Reserve uma mesa para você e seus amigos e mergulhe no aroma envolvente de nossos cafés premium, enquanto desfruta de momentos inesquecíveis.</p>
                        
                        <p className='descricao-reservas'>Nossa equipe está ansiosa para recebê-lo e proporcionar momentos memoráveis em nosso espaço. Reserve agora e venha se deliciar com nossas irresistíveis bebidas e deliciosos acompanhamentos.</p>

                    </div>
                </div>

                <div>
                    <form className='reservas-form' onSubmit={handleSubmit}>
                        
                        <div>

                            <label>Data:</label>
                            <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />

                        </div>

                        <div>

                            <label>Horário:</label>
                            <input type="time" value={horario} onChange={(e) => setHorario(e.target.value)} required />

                        </div>

                        <div>

                            <label>Nome:</label>
                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />

                        </div>

                        <div>

                            <label>Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        </div>

                        <div>

                            <label>Telefone:</label>
                            <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />

                        </div>
                        <button type="submit">Reservar</button>

                    </form>
                </div>
            </div>
        </div>

    </div>
  );
}