/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function RecentSection(){
    return (
        <section class="recent-section text-center background-style-2" id="recent-section">
        <h1 class="section-title">Dernière Publication</h1>
        <div class="card text-center background-style-2">
          <div class="card-body">
            <div class="container ">
              <div class="row align-items-center">
                <div class="col">
                  <img src="./images/oh-putain-quelle-est-belle.jpg" class="card-img-bottom album-picture-recent" alt="album-picture" />
                </div>
                <div class="col">
                <h3 class="card-title">Oh putain qu'elle est belle <br /> (prod. heydium)</h3>
              <p class="card-text">
                « Je penses à elle à chaque seconde. Je suis fou d'elle donc fuck le monde. »
              </p>
                  <div class="row">
                    <div class="col">
                      <a class="fab fa-soundcloud soundcloud fa-7x" href="https://soundcloud.com/neasam/oh-putain-quelle-est-belle" target="_blank" rel="noopener noreferrer"></a>
                    </div>
                </div>
    
              </div>
    
            </div>
          </div>
          </div>
    
        </div>
      </section>
    );
}

export default RecentSection;