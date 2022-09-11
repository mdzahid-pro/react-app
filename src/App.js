import React from 'react';
import './App.css';
import './assets/css/bootstrap.min-v4.6.0.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main-style.css';
import './assets/css/fontawesome.all.min-v5.15.3.css';
import './assets/css/flaticon.css'
import './assets/css/line-awesome.min-v1.0.3.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
// import './assets/js/main'
import TopHeader from './components/header/top-header/top-header';
import HeaderNavbar from './components/header/navbar/navbar';
import HeaderSlider from './components/header/Slider/header-slider';
import SupportAreaIndexOne from './components/support/index-one/index-one-support-area';
import ProductFilterOne from './components/product/filter-one/filter-one'

function App() {
  return (
    <div className="App">
      <TopHeader /> 
      <HeaderNavbar />
      <HeaderSlider />
      <SupportAreaIndexOne />
      <ProductFilterOne />
    </div>
  );
}

export default App;
