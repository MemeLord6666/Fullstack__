import React from 'react';
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_block'>
                <img className='logo_foot' src="https://uploadstatic-sea.mihoyo.com/hk4e/upload/officialsites/202004/GIEN_1587984203_6764.png" alt="" />
                <div >
                    <a target={'_blank'} href="https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Fgenshinimpact.ru%2F"><FacebookIcon className='l'/></a>
                    <a target={'_blank'} href="https://twitter.com/RUGenshinimpact"><TwitterIcon className='l'/></a>
                    <a target={'_blank'} href="https://www.youtube.com/c/GenshinImpact"><YouTubeIcon className='l'/></a>
                    <a target={'_blank'} href="https://www.instagram.com/genshinimpact/"><InstagramIcon className='l'/></a>
                </div>
                
                    <span className='span'>"PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc. <br />  
                    Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. <br /> All other trademarks are the property of their respective owners.</span>
                    <img className='logo2_foot' src="https://webstatic.hoyoverse.com/upload/event/2021/12/29/eaa64d81ae6a7318a6afb91cbffd83a4_118924438105936743.png" alt="" />
                    <p className=''>Copyright © COGNOSPHERE. All Rights Reserved.</p>
            </div>
        </div>
        
    );
};

export default Footer;