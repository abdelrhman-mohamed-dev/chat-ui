import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GlowingMovingDiv from './components/GlowingMovingDiv'
import GlowingMovingDiv2 from './components/GlowingMovingDiv2'
import GlowingMovingDiv3 from './components/GlowingMovingDiv3'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='screen'>
        <GlowingMovingDiv />
        <GlowingMovingDiv2 />
        <GlowingMovingDiv3 />

        <h1 className='home-title relative'>انا اسمي تِكّي و انا هنا موجود علشان اساعدك</h1>
        <h2 className='home-subTitle relative'>انك تلاقي الحاجه اللي بتدور عليها</h2>
        <p className='home-desc relative'>
          {`انا هنا موجود لمساعدتك ف انك تدور علي مةاصافات او اي حاجه جوا المتجر عندنا و ارشحلك افضل`}
          <br />
          {`الاسعار و اعرفك اي اكتر جهاز مناسب ليك`}
        </p>
        <div className='home-buttons-groub relative'>
          <a className='home-button relative' href="/">
            <span className='home-button-text'>{`اكسسوارات`}</span>
            <img src="/imgs/keyboard.png" alt="" />
          </a>
          <a className='home-button relative' href="/">
            <span className='home-button-text'>{`لابـــتـــوب`}</span>
            <img src="/imgs/laptop.png" alt="" />
          </a>
          <a className='home-button relative' href="/">
            <span className='home-button-text'>{`موبـــيـــلات`}</span>
            <img src="/imgs/mobile.png" alt="" />
          </a>
        </div>
      </div>
    </>
  )
}

export default App
