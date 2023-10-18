import React from "react";
import { Route, Routes, useHistory } from 'react-router-dom';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import Components
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/home/Home";
import HowToOrder from "./pages/how_to_order/HowToOrder";
import ReferYourFriends from "./pages/refer_your_friends/ReferYourFriends";
import GetPhoneNumber from "./pages/get_phone_number/GetPhoneNumber";
import OurTeam from "./pages/our_team/OurTeam"

import "./styles.scss"

function App() {
  // animate on scroll initialization
  Aos.init({
    duration: 450,
    offset: 0,
  });
  return (
      <div className='overflow-hidden'>
        <Routes>
          <Route exact path="/how-to-order" element={<HowToOrder/>}/>
          <Route exact path="/refer-your-friends" element={<ReferYourFriends/>}/>
          <Route exact path="/get-phone-number" element={<GetPhoneNumber/>}/>
          <Route exact path="/our-team" element={<OurTeam/>}/>
          <Route exact path="/" element={<Home/>} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
