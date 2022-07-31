import * as React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect, useState } from "react";

/* Component
---------------------------- */
import Logo1 from './logo1';

/* Image
---------------------------- */
import toTop from '../../img/common/to_top.png';



const Footer: React.FC = () => {

  /* Footerまでスクロールすると画像が飛び出る
  --------------------------------------------- */
  const [viewToTop, setViewToTop] = useState<boolean>(false);

  useEffect(() => {
    window.onscroll = function () {
      const check = window.pageYOffset;
      const docHeight = document.body.clientHeight;
      const dispHeight = window.innerHeight;
      let distance = 0;
      if(check >= docHeight - dispHeight + distance){
        setViewToTop(true);
      }else{
        setViewToTop(false);
      }
    };
  }, []);

  
  /* トップへ戻るを押したときの処理
  --------------------------------------------- */
  const [isClick, setisClick] = useState<boolean>(false);

  useEffect(() => {
    const pagetopBtn = document.querySelector('.toTop');
    pagetopBtn.addEventListener('click', () => {

      /* アニメーションを開始しつつimgタグの"click"クラスを付与 */
      setisClick(true);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 600);

      /* アニメーションが終わった後にimgタグの"click"クラスを外す */
      setTimeout(() => {
        setisClick(false);
      }, 1000);
    });
  }, []);
  
  return(
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo"><Link to="/"><Logo1 /></Link></div>
        <p className="footer__credit">BGM提供：甘茶の音楽工房<br className="br" /> <a href="https://amachamusic.chagasi.com/" target="_blank">https://amachamusic.chagasi.com/</a> </p>
        <div className={`toTop ${viewToTop ? "active":""}`}>
          <img className={`${isClick ? "click":""}`} src={toTop} />
          <p>上ニ<br className="br"/>戻ル<br className="br"/>怪？</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;