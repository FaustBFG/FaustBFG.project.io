import React from 'react';
import office1 from '../../assets/images/office1.jpg';
import office2 from '../../assets/images/office2.jpg';
import office3 from '../../assets/images/office3.jpg';
import zTowers from '../../assets/images/z-towers.jpg';
import office4 from '../../assets/images/office4.jpg';
import office5 from '../../assets/images/office5.jpg';
import office6 from '../../assets/images/office6.jpg';
import office7 from '../../assets/images/office7.jpg';
import Card from '../Card/Card';
import './CardGrid.css';

const cardsDataBest = [
  { title: 'Audeju Office Space', price: 'EUR 19 per Hour', address: 'Audeju iela 15, Riga', image: office1 },
  { title: 'Terbatas Office Space', price: 'EUR 30 per Hour', address: 'Terbatas iela 16, Riga', image: office2 },
  { title: 'Z-Towers Office Space', price: 'EUR 45 per Hour', address: 'Z-Towers, Riga', image: zTowers },
  { title: 'Jurmala Office Space', price: 'EUR 25 per Hour', address: 'Jurmala, Latvia', image: office3 },
  { title: 'Blaumaņa Office Space', price: 'EUR 18 per Hour', address: 'Blaumaņa iela 5, Riga', image: office4 },
  { title: 'Jaunā Teika Office Space', price: 'EUR 22 per Hour', address: 'Gustava Zemgala gatve 74, Riga', image: office5 },
  { title: 'Lāčplēša Office Space', price: 'EUR 35 per Hour', address: 'Lāčplēša iela 20, Riga', image: office6 },
  { title: 'Riga Technology Park', price: 'EUR 29 per Hour', address: 'Zemgales priekšpilsēta, Riga', image: office7 }
];

const cardsDataNear = [
  { title: 'Z-Towers', distance: '1.1 km', image: zTowers },
  { title: 'NOVIRA PLAZA', distance: '1.9 km', image: office4 },
  { title: 'Jaunā Teika', distance: '2.0 km', image: office5 },
  { title: 'Jurmala Plaza', distance: '3.2 km', image: office3 }
];

function CardGrid({ title }) {
  const data = title === 'Best for you' ? cardsDataBest : cardsDataNear;

  return (
    <section className="card-grid container">
      <h2 className="text-center my-4">{title}</h2>
      <div className="row">
        {data.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-success">See more</button>
      </div>
    </section>
  );
}

export default CardGrid;
