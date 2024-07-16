import "./App.css";
import {Route, Routes} from 'react-router-dom'
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import ContactForm from "./components/Form/ContactForm"

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies/>
      <Value/>
      <Contact/>
      <Routes>
        <Route path="/residencies" element ={<Residencies/>}></Route>
        <Route path="/value" element ={<Value/>}></Route>
        <Route path="/contact-us" element ={<Contact/>}></Route>
        <Route path="/get-started" element ={<GetStarted/>}></Route>
      </Routes>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
