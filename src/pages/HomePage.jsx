import React from 'react';
import './HomePage.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const HomePage = () => {
    return (
        <div  style={{ color: "white" }}>
            <video id="background-video" loop autoPlay muted>
        <source src={require("./img_pages/video.mp4")} type="video/mp4" />
      </video>
      <div className='Home'>
      <PlayCircleIcon width="896" height="504" src="https://www.youtube.com/embed/oTIHLsa0bj0"
      title="Genshin Impact | Трейлер версии 3.3 - Всё зримое - явь, всё сущее - тлен"
       frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen onClick={() => window.open("https://www.youtube.com/embed/oTIHLsa0bj0")} className='play1'></PlayCircleIcon>
        
        <h1>Загрузка для этих платформ уже доступна!</h1>
        <div className='apple'>
        <img onClick={() => window.open("https://apps.apple.com/app/id1517783697")} src={require("./img_pages/app.jpeg")} alt="" />
      <img onClick={() => window.open("https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact")} src={require("./img_pages/google.jpeg")} alt="" />
        </div>
      </div>

      <div>
      <img className='ramka' id='ramka' src={require("./img_pages/ramka.jpeg")} alt="" />
      <h1 className='Game'>Genshin Impact – приключенческая игра с открытым миром.
             Это означает, что на той стороне реки или горы вас ожидает новый,
              восхитительный пейзаж, нужно лишь разумно расходовать силы.
               Если вам повстречается блуждающая фея или странный механизм,
                дерзните и попробуйте разгадать их тайну.</h1>
      </div>

      <div className='hero_one'>
            <img src={require("./img_pages/pers1.jpeg")} alt="" />
      </div>
      <div className='info_hero'>
            <img src={require("./img_pages/wanderer.jpeg")} alt="" />
            <h2>Если мерилом человечности является наличие сердца,то он не может считаться таковым.
            Если кукла без сердца испыттвает радость и печаль,то она будет наиболее похожей на человека. </h2>
        </div>

        <div className='hero_two'>
        <img src={require("./img_pages/pers2.jpeg")} alt="" />
        </div >
        <div className='info_hero2'>
            <img src={require("./img_pages/faruzan.jpeg")} alt="" />
            <h2>Выдающийся учёный Академии, пришедший к нам «из прошлого века», и одна из основоположников древней механики как области исследования. Будучи выходцем из Хараватата, она прославилась своими познаниями в механике на весь Сумеру..
                Однако эти заслуги со временем были преданы забвению,как и она сама.</h2>
        </div>

{/* 
      <div className='pers1'>
      <img src={require("./img_pages/pers1.jpeg")} alt="" />
      </div>
      <div className='pers2'>
      <img src={require("./img_pages/pers2.jpeg")} alt="" />
      </div>
      <div className='term'>
        <h1>Genshin Impact – приключенческая игра с открытым миром.
             Это означает, что на той стороне реки или горы вас ожидает новый,
              восхитительный пейзаж, нужно лишь разумно расходовать силы.
               Если вам повстречается блуждающая фея или странный механизм,
                дерзните и попробуйте разгадать их тайну.</h1>
      </div>
      <div className='wanderer'>
      <img src={require("./img_pages/wanderer.jpeg")} alt="" />
      </div>
      <div className='faruzan'>
      <img src={require("./img_pages/faruzan.jpeg")} alt="" />
      </div>
      <div className='wanderer1'>
        <h2>Если мерилом человечности является наличие сердца,то он не может считаться таковым.
            Если кукла без сердца испыттвает радость и печаль,то она будет наиболее похожей на человека. </h2>
      </div>
      <div className='faruzan1'>
        <h3>Выдающийся учёный Академии, пришедший к нам «из прошлого века», и одна из основоположников древней механики как области исследования. Будучи выходцем из Хараватата, она прославилась своими познаниями в механике на весь Сумеру..
Однако эти заслуги со временем были преданы забвению,как и она сама.</h3>
      </div>  */}

        </div>
    );
};

export default HomePage;