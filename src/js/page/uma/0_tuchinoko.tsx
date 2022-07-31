import * as React   from 'react';
import IconToNext from '../../component/iconToNext';
import { useState, useEffect, useMemo } from 'react';

/* Swiper設定
---------------------------- */
import swiperConfig from '../../module/swiperConfig';


type articleType = {
  anime:boolean,
}

const Tuchinoko: React.FC<articleType> = React.memo(({ anime }) => {

  /* Swiperの設定
  ---------------------------- */
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    swiperConfig(setPage);
  },[]);


  /* Page数の設定
  ---------------------------- */
  const [pages, setPages] = useState<number>();
  useEffect(() => {
    const count = document.querySelectorAll('.swiper-slide').length;
    setPages(count);
  },[]);

  return(
    <>
      <div className={`animate__animated ${anime ? "animate__fadeIn":""}`}>
        <div className="swiper-container">
          <div id="SW" className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="row">
                <div className="col12-lg col12-md">
                  <div className="borderBox">
                    <h2 className="h2">coming soon</h2>
                    <p className="text">coming soon</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="row">
                <div className="col12-lg col12-md">
                  <div className="borderBox">
                    <h2 className="h2">coming soon</h2>
                    <p className="text">coming soon</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="row">
                <div className="col12-lg col12-md">
                  <div className="borderBox">
                    <h2 className="h2">coming soon</h2>
                    <p className="text">coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-buttons">
          <div className="swiper-buttons-inner">
            <div className="swiper-button -prev"><IconToNext /></div>
            <div className="swiper-current">{page}/{pages} <span>Page</span></div>
            <div className="swiper-button -next"><IconToNext /></div>
          </div>
        </div>
      </div>
    </>
  )
})

export default Tuchinoko;