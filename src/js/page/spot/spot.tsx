import * as React   from 'react';
import { BrowserRouter as Router, Route, useLocation, Link } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import DocumentMeta from 'react-document-meta';


/* Component
---------------------------- */
import AtMenu from '../../component/atMenu';
import Footer from '../../component/fooger';



/* Page
---------------------------- */
import Hachioji from './0_hachioji';


/* Module
---------------------------- */
import ChangeTop from '../../module/changeTop';




const Spot: React.FC = () => {

  /* ページのID生成
  ---------------------------- */
  const location = useLocation();
  const param    = location.hash;
  const string   = param.replace("#","");
  const id       = Number(string);

  /* ページを切り替えるたびにアニメーションを発動
  ------------------------- */
  const [anime, setAnime] = useState<boolean>(false);
  useEffect(() => {
    setAnime(true);
    const interval = setTimeout(() => {
      setAnime(false);
    }, 900);
  },[param]);


  /* ページを読み込み時にトップへ
  ------------------------- */
  useEffect(() => {
    ChangeTop();
  },[param]);


  /* メニューリスト
  ------------------------- */
  const MenuData = [
    {
      index: "#0",
      title: "八王子城"
    }
  ];

  /* meta情報
  ------------------------- */
  const meta = {
    title: '心霊スポット｜学校のうわさ',
    description: 'TEST',
    meta: {
      property: {
        'og:title': '心霊スポット｜学校のうわさ',
        'og:site_name': '心霊スポット｜学校のうわさ',
        'twitter:title': '心霊スポット｜学校のうわさ',
      }
    }
  };

  return(
    <>
    <DocumentMeta {...meta}>
    <div className={`atCover atCover--spot`}>
    <AtMenu
        page={`spot`}
        menuLogo={`h2_title3.svg`}
        list={MenuData}
        id={id}
    />
    <header className={`atHero atHero--spot animate__animated ${anime ? "animate__flipInX":""}`}>
      <div className="atHero__inner">

        {/* MenuDataのタイトルが差し込まれる */}
        <h1 className="atHero__h1">{MenuData[id].title}</h1>
      </div>
    </header>
    <main>
      <section className="section">
        <div className="section__inner">
          {id === 0 ? <Hachioji anime={anime} />:""}
        </div>
      </section>
    </main>
    </div>
    <Footer />
    </DocumentMeta>
    </>
  )
}

export default Spot;