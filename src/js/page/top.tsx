import * as React   from 'react';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DocumentMeta from 'react-document-meta';

/* Data
---------------------------- */
import CategoryData from '../../api/top/topCategory';


/* Image
---------------------------- */
import step1 from '../../img/top/step1.png';
import step2 from '../../img/top/step2.png';
import step3 from '../../img/top/step3.png';
import bridge2 from '../../img/top/bridge2.png';


/* Component
---------------------------- */
import Logo1 from '../component/logo1';
import IconToNext from '../component/iconToNext';
import Audio from '../component/audio';
import Footer from '../component/fooger';


/* Module
---------------------------- */
import ChangeTop from '../module/changeTop';



const Top: React.FC = () => {

  const [isSP, setIsSP] = useState<boolean>(false);


  useEffect(() => {
    
    window.addEventListener('resize', () =>{
      let width = window.innerWidth;
      width < 768 ? setIsSP(true):setIsSP(false);
    });

  });

  /* 手のアニメーション
  ------------------------------------------ */
  useEffect(() => {
    /* 要素取得 */
    const steps   = document.querySelectorAll('.hero__step > .step');
    const stepBox = document.querySelector('.hero__step');
    let count = 0;

    /* 1秒毎に手を表示 */
    const interval = setInterval(() => {
      if(count <= 2){
        stepBox.classList.remove('animate__fadeOutDown');
        steps[count].classList.add('active');
        count += 1;
      }else if (count === 3){
        stepBox.classList.add('animate__fadeOutDown');
        for(let i = 0; i < count; i++){
          steps[i].classList.remove('active');
        }
        count = 0;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  /* ページを読み込み時にトップへ
  ------------------------- */
  ChangeTop();


  /* meta情報
  ------------------------- */
  const meta = {
    title: '学校のうわさ',
    meta: {
      property: {
        'og:title': '学校のうわさ',
        'og:site_name': '学校のうわさ',
        'twitter:title': '学校のうわさ',
      }
    }
  };

  return(
    <>
    <DocumentMeta {...meta}>
    <header className="hero">
      <h1 className="hero__heading animate__animated animate__rubberBand"><Logo1 /></h1>
      <div className="hero__step">
        <img id="step1" className={`step`} src={step1} alt="" />
        <img id="step2" className={`step`} src={step2} alt="" />
        <img id="step3" className={`step`} src={step3} alt="" />
      </div>
    </header>
    <main>
    {
      /* メインのテンプレート
      "api/top/topCategory.ts" のデータを基にそれぞれのセクションを生成している
      --------------------------------------------- */
      CategoryData.map((data:any, index:number) => {
        let count = index + 1;
        return(
          count % 2 == 0 ?
          /* 右側テンプレート */
          <section key={index} className="section">
            <div className="section__inner">
              <Link to={`${data.link}#0`} className="topCategoryLink">
              <div className="row row--spColumnReverse">
                <div className="col7-lg col12-md">
                  <div className="topLead" data-aos="fade-up-right" data-aos-duration="2000" data-aos-once="true" data-aos-anchor-placement="top-bottom">
                      <h2 className="topLead__title"><img src={require(`../../img/top/${data.title}`)} alt={data.alt} /></h2>
                      <p className="text" dangerouslySetInnerHTML={{ __html: data.text }}></p>
                      <div className="topLead__toPage">一覧ヲ見ル<IconToNext/></div>
                  </div>
                </div>
                <div className="col5-lg">
                  <div className="topThumb" data-aos="flip-right" data-aos-duration="1500" data-aos-once="true" data-aos-anchor-placement="top-center">
                    <div className="topThumb__back">
                      <img src={require(`../../img/top/${data.frame}`)} alt="" />
                    </div>
                    <div className={`topThumb__front topThumb__front--right topThumb__front--${data.border}`}>
                      <img src={require(`../../img/top/${data.thumb}`)} alt={data.alt} />
                    </div>
                  </div>
                </div>
              </div>
              </Link>
              <div className="topBridge">
                <img className="topBridge__left" src={bridge2} alt="" />
              </div>
            </div>
          </section>
          :
          /* 左側テンプレート */
          <section key={index} className="section">
            <div className="section__inner">
              <Link to={`${data.link}#0`} className="topCategoryLink">
                <div className="row row--spColumn">
                  <div className="col5-lg col12-md">
                    <div className="topThumb" data-aos="flip-left" data-aos-duration="1500" data-aos-once="true" data-aos-anchor-placement="top-center">
                      <div className="topThumb__back">
                        <img src={require(`../../img/top/${data.frame}`)} alt="" />
                      </div>
                      <div className={`topThumb__front topThumb__front--${data.border}`}>
                        <img src={require(`../../img/top/${data.thumb}`)} alt={data.alt} />
                      </div>
                    </div>
                  </div>
                  <div className="col7-lg col12-md">
                    <div className="topLead" data-aos="fade-up-left" data-aos-duration="2000" data-aos-once="true" data-aos-anchor-placement="top-bottom">
                      <h2 className="topLead__title"><img src={require(`../../img/top/${data.title}`)} alt={data.alt} /></h2>
                      <p className="text" dangerouslySetInnerHTML={{ __html: data.text }}></p>
                      <div className="topLead__toPage">一覧ヲ見ル<IconToNext/></div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="topBridge">
                <img className="topBridge__right" src="/img/bridge1.png" alt="" />
              </div>
            </div>
          </section>
        )
      })
    }
    </main>
    <Audio />
    <Footer />
    </DocumentMeta>
    </>
  )
}

export default Top;