'use client'
/* Importação do CSS */
import './style.css'

import React, { useState, useEffect } from 'react';

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
  telefone: string;
  melhorHorario: string;
  melhorData: string;
}

const FormularioContato: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [envio, setEnvio] = useState(false);
  const [melhorHorario, setMelhorHorario] = useState('');
  const[melhorData, setMelhorData] = useState('');

  useEffect(() => {
    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validateForm = () => {
      const errors: { [key: string]: string } = {};

      // Validar o campo de nome
      if (!nome.trim()) {
        errors.nome = 'Por favor, insira seu nome.';
      }

      // Validar o campo de e-mail
      if (!email.trim()) {
        errors.email = 'Por favor, insira seu e-mail.';
      } else if (!validateEmail(email)) {
        errors.email = 'Por favor, insira um e-mail válido.';
      }

      if (!telefone.trim()) {
        errors.telefone = 'Por favor, insira seu telefone.';
      }

      // Validar o campo de mensagem
      if (!mensagem.trim()) {
        errors.mensagem = 'Por favor, insira sua mensagem.';
      }

      setErrors(errors);
    };

    validateForm();
  }, [nome, email, mensagem, telefone]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (Object.keys(errors).length === 0) {
      const formData: FormData = {
        nome,
        email,
        telefone,
        mensagem,
        melhorHorario,
        melhorData,
      };

      setEnvio(true);
      console.log(formData); // Apenas para mostrar os dados no console
    }

    // Exibe um alerta personalizado após o envio do formulário
    alert(nome + ' sua solicitação foi processada e logo entraremos em contato!\n' + '\nDados da solicitação: \n' + '\nE-mail: ' + email + '\nTelefone: ' + telefone + '\nData de retorno: ' + melhorData + '\nHora preferida: ' + melhorHorario + '\nMensagem: ' + mensagem );

    // Limpar o formulário após o envio
    setNome('');
    setEmail('');
    setTelefone('');
    setMensagem('');
    setMelhorHorario('');
    setMelhorData('');

  };

  return (
    
    <div className='container-form-contato'>

        <div className='form-pagina-contato'>
            <form className='form-contato' onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                    type="text"
                    id="name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    placeholder='Insira seu nome'
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='exemplo@email.com'
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div>
                    <label htmlFor="phone">Telefone:</label>
                    <input
                    type="tel"
                    id="phone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                    placeholder='(XX)  XXXXX-XXXX'
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>

                <div>
                    <label htmlFor="bestDate">Melhor Data para retorno:</label>
                    <input
                    type="date"
                    id="bestTime"
                    value={melhorData}
                    onChange={(e) => setMelhorData(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="bestTime">Melhor horário para retorno:</label>
                    <input
                    type="time"
                    id="bestTime"
                    value={melhorHorario}
                    onChange={(e) => setMelhorHorario(e.target.value)}
                    />
                </div>

                <div className='mensagem-campo-preenchido'>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea
                    id="message"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    required
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <div className='box-botao-form-contato'>
                  <button className='botao-form-contato' type="submit">Enviar</button>
                </div>
            </form>
        </div>
        <div className='box-texto-imagem-contato'>

            <div className='box-imagem-texto-contato'>
                <h1 className='titulo-direito-contato'>Contato</h1>

                <h2 className='subtitulo-direito-contato'>se você tem dúvidas, comentários, estamos aqui para ouvir!</h2>

                <p className='descrito-direito-contato'>Nossa equipe está pronta para atender suas perguntas sobre nossos serviços, produtos, workshops, opções de catering e nosso amado delivery. Seja para organizar um evento especial conosco ou para saber mais sobre nossas exclusivas misturas de café, sua mensagem é sempre bem-vinda.</p>
            </div>

            
        </div>

  
    </div>
  );
};

export default FormularioContato;
