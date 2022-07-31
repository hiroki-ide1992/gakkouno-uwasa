import * as React   from 'react';
import IconToNext from '../../component/iconToNext';
import { useState, useEffect, useMemo } from 'react';

/* Swiper設定
---------------------------- */
import swiperConfig from '../../module/swiperConfig';

type articleType = {
  anime:boolean,
}

const Senen: React.FC<articleType> = React.memo(({ anime }) => {

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
                    <h2 className="h2">お札に隠された秘密</h2>
                    <p className="text">
                      我々が普段から使用するお札には、様々な秘密が隠されていることはご存知だろうか？<br/><br/>
                      有名な所で言うと「ニ・ホ・ン」の３文字が、各お札の表と裏にそれぞれ小さく印字されていることだが、
                      その他にも、肉眼ではほぼ読めない"マイクロ文字"や、紙の表面にわずかな凹凸を施すことで文字を浮かび上がらせる"潜像"などがある。<br/><br/>
                      そして特筆すべきが"肖像画"だ、この肖像画は何と"点"と"線"を組み合わせて表現されており、専門家が手で1本1本彫ったものを印刷している。<br/><br/>
                      ここまでの手間をかける理由は言うまでもなく偽札の製造防止であるが、実はお札にはこういった表の秘密とは違う<span className="-colorRed">裏の秘密</span>も存在するらしい…つづく
                    </p>
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

export default Senen;