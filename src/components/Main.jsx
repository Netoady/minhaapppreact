import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import './Main.css';
import dados from '../datasets/top3_paraiba.json';

function Main() {
  const [quantidade, setQuantidade] = useState(3);

  const ranking = [...dados].sort(
    (a, b) => b.TOTAL_MATRICULAS - a.TOTAL_MATRICULAS,
  );

  // Pega apenas os N primeiros conforme o estado
  const topN = ranking.slice(0, quantidade);

  const imagens = {
    'IFPB - CAMPUS JOAO PESSOA': img8,
    'CENTRO PESSOENSE DE EDUCACAO LTDA - AMBIENTAL': img9,
    'EM PROFESSORA ANAYDE BEIRIZ': img10,
  };

  return (
    <div className="page-container">
      <Carousel data-bs-theme="white" className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Primeiro slide" />
          <Carousel.Caption>
            <h5>POLÊMICA</h5>
            <p>
              Decidir se foi o ovo ou a galinha quem veio primeiro causa
              discussão
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img5} alt="Segundo slide" />
          <Carousel.Caption>
            <h5>TENSÃO</h5>
            <p>Sumiço do polimorfismo gera preocupação</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img7} alt="Terceiro slide" />
          <Carousel.Caption>
            <h5>APROVADO</h5>
            <p>Conheça o selecionado para estágio na Granja ProgramEgg</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Botões para mudar a quantidade exibida */}
      <div className="d-flex justify-content-center my-3">
        <Button variant="secondary" onClick={() => setQuantidade(3)}>
          Top 3
        </Button>
        <Button
          variant="secondary"
          className="mx-2"
          onClick={() => setQuantidade(5)}
        >
          Top 5
        </Button>
        <Button
          variant="secondary"
          onClick={() => setQuantidade(ranking.length)}
        >
          Todos
        </Button>
      </div>

      <div className="cards-container">
        {topN.map((ie, index) => (
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={imagens[ie.NO_ENTIDADE]} />
            <Card.Body>
              <Card.Title>{ie.NO_ENTIDADE}</Card.Title>
              <Card.Text>
                Matrículas: {ie.TOTAL_MATRICULAS} <br />
                Município: {ie.NO_MUNICIPIO} <br />
                UF: {ie.SG_UF}
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="primary">Saiba Mais</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Main;
