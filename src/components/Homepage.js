import Cards from './Cards'
import Header from './Header'
import Welcome from './Welcome'
import Footer from './Footer'
const Homepage = ()=> {
  return (
    <div>
        <Header/>
        <Welcome/>
        <Cards/>
        <Footer/>
    </div>
  )
}
export {Homepage};