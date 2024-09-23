import './App.css'
import './styles.css'
import Header from './components/Header'
import Status from './components/Status'
import NavList from './components/NavList'

function App() {

  return (
    <>
    <div className='flex-grow app-container'>
    <Header />
    <Status />
    <NavList />

    </div>
    </>
    
  )
}

export default App
