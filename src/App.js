import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Homepage} from './components/Homepage'
import {Cryptocurrencies} from './components/Cryptocurrencies'
import {Header} from './components/Navbar'
import {News} from './components/News'

function App() {

  return (
  <>
  <BrowserRouter>
  <Header />

    <Routes>
      <Route  path='/' element={<Homepage />} />
      <Route exact path='/homepage' element={<Homepage />} />
      <Route exact path='/cryptocurrencies'element={<Cryptocurrencies />} />
      <Route exact path='/news' element = {<News />}/>
    
    </Routes>

  </BrowserRouter>
  
  
  </>
  );
}

export default App;
