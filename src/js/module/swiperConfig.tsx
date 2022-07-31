import Swiper   from 'swiper';

const swiperConfig = (setPage) => {
  const swiper = new Swiper('.swiper-container',{
    slidesPerGroup: 1,
    speed: 500,
    autoHeight: true
  });

  /* スワイプした時に現在のページを書き換える */
  swiper.on('slideChange', () => {
    setPage(swiper.activeIndex + 1);
  });

  /* 初期表示設定 何故か一度0から移動しないと初期スライドを0番目に設定できない */
  swiper.slideTo(1);
  swiper.slideTo(0);
  setPage(1);

  /* 送りボタンを押したときの挙動 */
  const prevBtn = document.querySelector('.-prev');
  const nextBtn = document.querySelector('.-next');
  prevBtn.addEventListener('click', (e) => {swiper.slidePrev();});
  nextBtn.addEventListener('click', (e) => {swiper.slideNext();});
}
export default swiperConfig;