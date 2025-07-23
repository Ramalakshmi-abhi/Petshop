import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Delivery from './Components/Delivery/Delivery';
import Categories from './Components/Categories/Categories';
import Offers from './Components/Offers/Offers';
import Trending from './Components/Trending/Trending';
import Sellingfordogs from './Components/Sellingfordogs/Sellingfordogs';
import Sellingforfish from './Components/Sellingforfish/Sellingforfish';
import Recentlyview from './Components/Recentlyview/Recentlyview';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <>
    <div>
      <Header/>
      <Home/>
      <Delivery/>
      <Categories/>
      <Offers/>
      <Trending/>
      <Sellingfordogs/>
      <Sellingforfish/>
      <Recentlyview/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
