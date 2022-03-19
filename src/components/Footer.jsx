/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function Footer() {
    return(
        <section className="contact-me" id="contact-me">
  <div className="container text-center">
    <h1 className="section-title">Contact-Me!</h1>
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 contact-section-text">
        Suivez-moi sur les resaux sociaux pour avoir les dernières nouvelles
        sur mes chansons ainsi que des extraits avant leur publication officielle!
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="social-network">
          <a className="fab fa-instagram image-link-1 fa-3x" href=""></a>
          <a className="fab fa-facebook image-link-2 fa-3x" href=""></a>
          <a className="fab fa-soundcloud image-link-3 fa-3x" href="https://soundcloud.com/neasam"></a>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 contact-section-text">
        For info or a partnership email me at <a href="mailto:email@email.com">email@email.com</a>!
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 copyright-text opacity-50">
        <p><i className="far fa-copyright"></i> neas Productions</p>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 author-text">
        <p>Made with <i className="fas fa-heart"></i> by Jeremy Champagne</p>
        <p hidden>AKA Farty McFartface</p>
      </div>


    </div>

  </div>
</section>
    );
}

export default Footer;