import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Homepage} from './components/Homepage'
import {Cryptocurrencies} from './components/Cryptocurrencies'
import {News} from './components/News'
function App() {
  
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/'>{<Homepage />}</Route>
      <Route path='/'>{<Cryptocurrencies />}</Route>
      <Route path='/'>{<News />}</Route>
    </Routes>
  </BrowserRouter>
  
  
  </>
  );
}

export default App;
