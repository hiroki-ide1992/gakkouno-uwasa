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
import Kuchisake from './0_kuchisake';
import Senen  from './1_senen';


/* Module
---------------------------- */
import ChangeTop from '../../module/changeTop';


const Toshi: React.FC = () => {

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
      title: "口裂け女"
    },
    {
      index: "#1",
      title: "千円札の謎"
    }
  ];

  /* meta情報
  ------------------------- */
  const meta = {
    title: '都市伝説｜学校のうわさ',
    description: 'TEST',
    meta: {
      property: {
        'og:title': '都市伝説｜学校のうわさ',
        'og:site_name': '都市伝説｜学校のうわさ',
        'twitter:title': '都市伝説｜学校のうわさ',
      }
    }
  };

  return(
    <>
    <DocumentMeta {...meta}>
    <div className={`atCover atCover--toshi`}>
    <AtMenu
        page={`toshi`}
        menuLogo={`h2_title1.svg`}
        list={MenuData}
        id={id}
    />
    <header className={`atHero atHero--toshi animate__animated ${anime ? "animate__flipInX":""}`}>
      <div className="atHero__inner">
        <h1 className="atHero__h1">{MenuData[id].title}</h1>
      </div>
    </header>
    <main>
      <section className="section">
        <div className="section__inner">
          {id === 0 ? <Kuchisake anime={anime} />:""}
          {id === 1 ? <Senen anime={anime} />:""}
        </div>
      </section>
    </main>
    </div>
    <Footer />
    </DocumentMeta>
    </>
  )
}

export default Toshi;