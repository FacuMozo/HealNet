import React from 'react';
import Header from './components/Header/Header';
import BannerSection from './components/BannerSection/BannerSection';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';
import ServicesSection from './components/ServicesSection/ServicesSection';
import AboutUsCard from './components/AboutUsCard/AboutUsCard';
import PlatformFunctionality from './components/PlatformFunctionality/PlatformFunctionality';
import Testimonials from './components/Testimonials/Testimonials';
import StaffSection from './components/StaffSection/StaffSection';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.scss';
import './App.scss';
import Vector1 from'./images/Vector1.png'

function App() {
  return (
    <div className="App">
      <img className="vector" src={Vector1} alt="" />
      <Header />
      <BannerSection />
      <AppointmentForm />
      <ServicesSection />
      <AboutUsCard />
      <PlatformFunctionality />
      <Testimonials />
      <StaffSection />
      <ContactUs />
      <Footer />
      
    </div>
  );
}

export default App;
