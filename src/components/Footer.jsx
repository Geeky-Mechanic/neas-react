/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function Footer() {
    return(
        <section className="contact-me background-style-2" id="contact-me">
  <div className="container text-center">
    <h1 className="section-title">Contact-Me!</h1>
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 contact-section-text">
        Suivez-moi sur les resaux sociaux pour avoir les dernières nouvelles
        sur mes chansons ainsi que des extraits avant leur publication officielle!
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
      <div class="social-network">
            <a class="fab fa-instagram social-image-link fa-3x" href="https://www.facebook.com/gaming/neas.dot" target="_blank" rel="noopener noreferrer"></a>
            <a class="fab fa-facebook social-image-link fa-3x" href="https://www.instagram.com/neas.dot/?hl=fr" target="_blank" rel="noopener noreferrer"></a>
            <a class="fab fa-soundcloud social-image-link fa-3x" href="https://soundcloud.com/neasam" target="_blank" rel="noopener noreferrer"></a>
            <a class="fab fa-twitch social-image-link fa-3x" href="https://www.twitch.com/neas_tv" target="_blank" rel="noopener noreferrer"></a>
            <a class="fab fa-youtube social-image-link fa-3x" href="https://www.youtube.com/channel/UCOFP_ANJIVrGAvum33Qx-UQ" target="_blank" rel="noopener noreferrer"></a>
          </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 contact-section-text">
      <p>Pour plus d'informations ou pour un partenariat écrivez moi à cette address <br /> <a href="mailto:neas@neas-prod.space">neas@neas-prod.space</a>!</p>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 copyright-text opacity-50">
        <p><i className="far fa-copyright"></i> neas Productions</p>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 author-text">
        <p>Made with <i className="fas fa-heart"></i> by <a class="author-text" href="http://jeremychampagne.xyz/">Jeremy Champagne</a></p>
        <p hidden>AKA Farty McFartface</p>
      </div>


    </div>

  </div>
</section>
    );
}

export default Footer;