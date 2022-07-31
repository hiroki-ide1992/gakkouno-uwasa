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
import Tuchinoko from './0_tuchinoko';
import Bigfood  from './1_bigfood';


/* Module
---------------------------- */
import ChangeTop from '../../module/changeTop';




const Uma: React.FC = () => {

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
      title: "ツチノコ"
    },
    {
      index: "#1",
      title: "ビッグフッド"
    }
  ];

  /* meta情報
  ------------------------- */
  const meta = {
    title: 'UMA｜学校のうわさ',
    description: 'TEST',
    meta: {
      property: {
        'og:title': 'UMA｜学校のうわさ',
        'og:site_name': 'UMA｜学校のうわさ',
        'twitter:title': 'UMA｜学校のうわさ',
      }
    }
  };

  return(
    <>
    <DocumentMeta {...meta}>
    <div className={`atCover atCover--uma`}>
    <AtMenu
        page={`uma`}
        menuLogo={`h2_title2.svg`}
        list={MenuData}
        id={id}
    />
    <header className={`atHero atHero--uma animate__animated ${anime ? "animate__flipInX":""}`}>
      <div className="atHero__inner">

        {/* MenuDataのタイトルが差し込まれる */}
        <h1 className="atHero__h1">{MenuData[id].title}</h1>
      </div>
    </header>
    <main>
      <section className="section">
        <div className="section__inner">
          {id === 0 ? <Tuchinoko anime={anime} />:""}
          {id === 1 ? <Bigfood anime={anime} />:""}
        </div>
      </section>
    </main>
    </div>
    <Footer />
    </DocumentMeta>
    </>
  )
}

export default Uma;