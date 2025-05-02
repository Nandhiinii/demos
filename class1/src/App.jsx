import './App.css'
import Condition from './components/Condition'
import Footer from './components/Footer'
import Header from './components/Header'
import Password from './components/Password'
import Practice from './components/Practice'
import Weather from './components/Weather'
import Content from './components/content'



function App() {

 let user="Nandhini"

  return (
  <>
  
   <Header/>
   <Content />
   <Footer user =  "valliammal"/>
   <Practice/>
   <Condition/>
   <Weather/>
   <Password/>
   
  </>
  )
}

export default App
