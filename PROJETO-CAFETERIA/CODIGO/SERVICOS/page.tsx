import React from 'react';

/* Importação do CSS */
import './style.css'

/* Importação das imagens */
import imagem1 from '../Servicos/assets/Rectangle 40.png'
import imagem2 from '../Servicos/assets/Rectangle 42.png'
import imagem3 from '../Servicos/assets/Rectangle 44.png'
import imagem4 from '../Servicos/assets/Rectangle 48.png'
import imagem5 from '../Servicos/assets/Rectangle 49.png'
import imagem6 from '../Servicos/assets/Rectangle 50.png'

/* Definir tipos das minhas váriaveis */
interface Service {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }

/* Informações dos meus card, aqui vou deixar como json  para facilitar o entendimento*/
const servicesData: Service[] = [
    {
      id: 1,
      title: 'Espaço para Trabalho Remoto',
      description: 'Disponível mesas espaçosas, tomadas elétricas acessíveis e Wi-Fi de alta velocidade para clientes que desejam trabalhar em um ambiente tranquilo e confortável.',
      imageUrl: imagem1.src
    },
    {
      id: 2,
      title: 'Entrega e Takeaway',
      description: 'Serviços de entrega para clientes que desejam desfrutar de seus produtos favoritos em casa ou no escritório. Além disso, tenha opções de takeaway rápidas e convenientes para clientes que estão com pressa.',
      imageUrl: imagem2.src
    },
    {
        id: 3,
        title: 'Programa de Fidelidade:',
        description: 'Um programa de fidelidade para recompensar clientes frequentes, oferecendo descontos, brindes ou ofertas especiais em troca de sua lealdade.',
        imageUrl: imagem3.src
      },
      {
        id: 4,
        title: 'Eventos e Workshops',
        description: 'Eventos regulares, como degustações de café, workshops de preparo de café, noites de música ao vivo e lançamentos de novos produtos.',
        imageUrl: imagem4.src
      },
      {
        id: 5,
        title: 'Reservas de Mesas',
        description: 'Façam reservas de mesas, especialmente durante horários de pico ou para eventos especiais, garantindo que tenham um lugar garantido quando chegarem.',
        imageUrl: imagem5.src
      },
      {
        id: 6,
        title: 'Serviço de Catering',
        description: 'Serviços de catering para eventos privados, reuniões de negócios ou festas, fornecendo uma variedade de opções de alimentos e bebidas para atender às necessidades de todos os clientes e seus convidados.',
        imageUrl: imagem6.src
      }
    
  ];
  
  function ServiceCard({ service }: { service: Service }) {
    return (
      <div className="service-card">
        <img className='imagem-cards-servico' src={service.imageUrl} alt={service.title} /> {/* Use a URL da imagem do serviço */}
        <h3 className='titulos-cards-servicos'>{service.title}</h3>
        <p className='descricao-cards-servicos'>{service.description}</p>
      </div>
    );
  }

export default function Servicos() {

    return (

        <div className='container-servicos'>

            <div className='box-titulo-pagina-servicos'>
                <h1 className='titulo-pagina-servicos'>Nossos serviços</h1>
            </div> {/* Fim div box-titulo-pagina-servicos */}
            
            <div className="cards-servicos">
                {servicesData.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div> {/* Fim div cards-servicos */}

        </div> // Fim div container-servicos
    );
}