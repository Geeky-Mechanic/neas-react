/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function RecentSection(){
    return (
        <section class="recent-section text-center" id="recent-section">
        <h1 class="section-title">Last Realease</h1>
        <div class="card text-center">
          <div class="card-body">
            <div class="container ">
              <div class="row">
                <div class="col">
                  <img src="images/album-picture.png" class="card-img-bottom album-picture-recent" alt="album-picture" />
                </div>
                <div class="col">
                  <h3 class="card-title">Album/Song Title</h3>
                  <p class="card-text">
                    This space will be used to insert a quote or any relevant information related
                    to the song that will attract people
                  </p>
                  <div class="row">
                    <div class="col">
                      <a class="fab fa-soundcloud soundcloud fa-7x" href="https://soundcloud.com/neasam/amnesie-prod-ysos-maquette"></a>
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