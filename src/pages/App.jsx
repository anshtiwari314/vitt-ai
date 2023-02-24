//import Carousal from '../components/Carousal';
import Header from '../components/Header'
import UseCase1 from '../components/UseCase1';
import UseCase2 from '../components/UseCase2';
import MyCarousel from '../components/MyCarousel';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import TeamSection from '../components/TeamSection';
import './All.css'
import About from '../components/About';
import Offerings from '../components/Offerings';
import Awards from '../components/Awards'
import Features from '../components/Features';
import Expertise from '../components/Expertise';
import Faq from '../components/Faq';

function App() {

  return (
    <div>
      <Header />
      {/* {number ===1 ? <UseCase1/>:<UseCase2/>} */}
      <About/>
      <Features/>
      {/* <Offerings/> */}
      
      {/* <Carousal/> */}
      {/* <MyCarousel/> */}
      <Expertise/>
      {/* <Faq/> */}
      <TeamSection/>
      
      <Awards/>
      {/* <Blog/> */}

      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
