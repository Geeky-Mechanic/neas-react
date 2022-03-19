/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import RecentSection from './RecentSection';
import Footer from './Footer';
import FirstSection from './FirstSection';
import PopularSection from './PopularSection';


function App(){
    return (
<div>
  <FirstSection />
  <RecentSection />
  <PopularSection />
  <Footer />
</div>
    );
}

export default App;