import StarsDiv from "../../components/stars/StarsDiv"
import "./home.css"

const Home = () => {
    return (
        <div className='home'>
            <StarsDiv />
            <h1 className='home-title relative'>انا اسمي تِكّي و انا هنا موجود علشان اساعدك</h1>
            <h2 className='home-subTitle relative'>انك تلاقي الحاجه اللي بتدور عليها</h2>
            <p className='home-desc relative'>
                {`انا هنا موجود لمساعدتك ف انك تدور علي مةاصافات او اي حاجه جوا المتجر عندنا و ارشحلك افضل`}
                <br />
                {`الاسعار و اعرفك اي اكتر جهاز مناسب ليك`}
            </p>
            <div className='home-buttons-groub relative'>
                <a className='home-button relative' href="/chat/accessories">
                    <span className='home-button-text'>{`اكسسوارات`}</span>
                    <img src="/imgs/keyboard.png" alt="" />
                </a>
                <a className='home-button relative' href="/chat">
                    <span className='home-button-text'>{`لابـــتـــوب`}</span>
                    <img src="/imgs/laptop.png" alt="" />
                </a>
                <a className='home-button relative' href="/chat/mobile">
                    <span className='home-button-text'>{`موبـــيـــلات`}</span>
                    <img src="/imgs/mobile.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Home