import React from 'react';
import Card from './Card';
import cards from './cards';

function createCard(info) {
    return (<Card
    key= {info.id}
    img= {info.img}
    alt= {info.alt}
    title= {info.title}
    text= {info.text}
    link= {info.link}
    active={info.active}
    />);
}

function PopularSection (){
    return (
<section className="background-style-1 text-center" id="most-popular-section">

  <h1 className="section-title">Les plus écoutées</h1>

  <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">

      {cards.map(createCard)}

    </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Précédent</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Prochain</span>
      </button>
  </div>
</section>
    );
}

export default PopularSection;

