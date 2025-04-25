import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Foooter';

function App() {

  return (
    <>
      <Header />
      <main className='min-h-screen w-full overflow-x-hidden'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App;
