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
import './styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSection />
      <hr className='border-5 border-primary'/>
      <AppointmentForm />
      <hr className='border-5 border-primary'/>
      <ServicesSection />
      <hr className='border-5 border-primary'/>
      <AboutUsCard />
      <hr className='border-5 border-primary'/>
      <PlatformFunctionality />
      <hr className='border-5 border-primary'/>
      <Testimonials />
      <hr className='border-5 border-primary' />
      <StaffSection />
      <hr className='border-5 border-primary' />
      <ContactUs />
      <hr className='border-5 border-primary' />
      <Footer />
      
    </div>
  );
}

export default App;
