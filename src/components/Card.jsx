/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function Card(props){
    console.log(props);
    return (
    <div className={`carousel-item ${props.active}`}>
        <div className="container ">
          <div className="row">
            <div className="col">
              <img src={props.img} className="card-img-bottom album-picture-recent" alt={props.alt} />
            </div>
            <div className="col">
              <h3 className="card-title">{props.title}</h3>
              <p className="card-text">
                {props.text}
              </p>
              <div className="row">
                <div className="col">
                  <a className="fab fa-soundcloud soundcloud fa-7x" href={props.link}></a>
                </div>

              </div>
            </div>
          </div>
        </div>
    </div>
    );
}

export default Card;