import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Filters from './Components/Filters';
import Banner from './Components/Banner';
import Slide from './Components/Slide';
import Cart from './Components/Cart';
import PartyInvitation from './Components/PartyInvitation';
import CustomInvite from './Components/CustomInvite';
import CustomerOrder from './Components/CustomerOrder';
import Questions from './Components/Questions';
import { Footer } from './Components/Footer';


function App() {
  return (
    <div className="App">
     <Header/>
     <Filters/>
     <Banner/>
     <Slide/>
     <Cart/>
     <PartyInvitation/>
     <CustomInvite/>
     <CustomerOrder/>
     <PartyInvitation/>
     <Questions/>
     <Footer/>

    </div>
  );
}

export default App;
