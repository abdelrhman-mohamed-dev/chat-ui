import './App.css'
import Header from './components/header/Header'
import GlowingDiv from './components/glowingDiv/GlowingDiv'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './pages/chat/Chat'
import ActiveChat from './pages/activeChat/ActiveChat';

function App() {

  return (
    <Router>
      <Header />
      <div className='screen'>
        <GlowingDiv />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:id" element={<ActiveChat />} />
          {/* <Route path="/laptops" element={<Laptops />} />
          <Route path="/mobiles" element={<Mobiles />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
