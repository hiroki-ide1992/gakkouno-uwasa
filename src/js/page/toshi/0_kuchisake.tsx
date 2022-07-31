import * as React   from 'react';
import IconToNext from '../../component/iconToNext';
import { useState, useEffect, useMemo } from 'react';

import swiperConfig from '../../module/swiperConfig';

type articleType = {
  anime:boolean,
}

const Kuchisake: React.FC<articleType> = React.memo(({ anime }) => {

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
                    <h2 className="h2"><span className="-font20-lg -font14-md">事件ファイル 1</span><br/>口が裂けた小学生の死体</h2>
                    <p className="text">
                      1984年6月22日、住宅街の路地で小学5年生の男児の遺体が発見された。<br/>
                      死因は出血多量によるショック死で、遺体の様子は、無残にも口が刃物によって耳元まで裂かれていたという。<br/>
                      <br/>
                      また奇妙なことに、死亡推定時刻は下校時間の16時前後と人気の多い時間帯であったにも関わらず目撃者は０だった。<br/>
                      <br/>
                      それどころか現場からは犯人の痕跡が何も発見されなかったのだ<br/>
                      ただ一つ、血に染まった大ばさみを除いて…。<br/>
                      <br/>
                      <br/>
                      …<br/>
                      同年7月6日、また同様の事件が起きた。<br/>
                      今度の被害者は小学6年生の女児で、死亡時刻も同じ16時前後であり、死因も同じく口を引き裂かれたことによる出血死だった。<br/>
                      <br/>
                      この短期間での惨い殺人事件は社会的に大きな反響を呼び、各地のメディアからは、一連の犯行はシリアルキラーのものとして大々的に報道され、全国の小中学校では集団下校が実施された。<br/>
                      <br/>
                      しかしその反響とは裏腹に、警察の捜査は一向に進展していない様子
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="row">
                <div className="col12-lg col12-md">
                  <div className="borderBox">
                    <h2 className="h2"><span className="-font20-lg -font14-md">事件ファイル 2</span><br/>考察・検証</h2>
                    <p className="text">
                      私はそれぞれの小学生が殺害された現場に、殺害時刻と同じ時間に行ってみた。<br/>
                      <br/>
                      どちらも閑静な住宅地だったが、夕方の時間には買い物帰りの主婦や、暇を持て余した大学生などが歩いており、とても殺人事件が起きるような雰囲気ではない。<br/>
                      不謹慎ではあるが、もし私が犯行を行うとしたら、間違いなくこの場所、この時間を選んだりはしないだろう。<br/>
                      <br/>
                      それにもう一つ不可解なことがある。<br/>
                      <br/>
                      相手が小学生とはいえ、はさみで人の口を切り裂くのは容易なことではない。<br/>
                      切り裂かれた本人は奇声を上げ抵抗するだろうし、何より時間が掛かるだろう…<br/>
                      <br/>
                      いったいこの状況の中、どうやってあんな惨い殺人を人知れず行うことが出来たのだろうか？<br/>
                      調べれば調べるほど、謎が深まるばかりである。<br/>
                      私は一通り辺りを調べた後、路地に置かれた献花に手を添え、帰宅した。<br/>
                      <br/>
                      <br/>
                      私はこの一連の事件は”人”の仕業でなく、何かもっと不気味で、大きな力による者の仕業に感じてならない。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="row">
                <div className="col12-lg col12-md">
                  <div className="borderBox">
                    <h2 className="h2"><span className="-font20-lg -font14-md">事件ファイル 3</span><br/>生存者</h2>
                    <p className="text mb30-lg mb30-md">
                      同年8月19日、事件は大きく動いた。<br/>
                      なんと犯人の目撃者が現れたのだ。<br/>
                      <br/>
                      いや、正確に言うと”目撃者”ではなく”生存者”という表現が正しいだろう。<br/>
                      そう、目撃者は小学生５年生の男児だ。<br/>
                      <br/>
                      精神的なショックが大きく、彼は事件後からずっと入院しているそうなのだが、私からの事件当時に関する質問に勇気をもって答えてくれた<br/>
                      その内容はこうだ<br/>
                      <br/>
                      彼は夏休み中に小学校のPTA主導による特別授業に参加した<br/>
                      授業の内容は「砂糖を溶かしてべっこう飴を作ろう♪」<br/>
                      <br/>
                      その後、授業を終えた彼は一緒に参加していた友人とそのまま校庭で遊び、夕方になって帰宅することとなった<br/>
                      道すがら遊び疲れていた彼はお腹がすいたので、昼間の授業で作った”べっこう飴”の余りをほおばりながら歩ていたそう<br/>
                      <br/>
                      すると夏の夕方だと言うのに、突然あたりが暗くなり、不思議に思って空を見上げていたら、後ろから声を掛けられた<br/>
                      <br/>
                      振り返るとそこには、真っ赤なロングコートと大きなマスクをした、髪の長い女が立っており、突然こう尋ねてきた…<br/>
                    </p>
                    <p className="text -colorRed -font30-lg -font25-md mt20-lg mb20-lg mt20-md mb20-md">
                      私…きれい？
                    </p>
                    <p className="text">
                      彼はその姿、言動に不気味さを感じつつも適当に「キレイ」と答えた<br/>
                      すると女の人は何も言わずただ顔を俯き<br/>
                      ゆっくりと両手を耳に添えてマスク外したかと思うと突然顔を上げ
                    </p>
                    <p className="text -colorRed -font30-lg -font25-md mt20-lg mb20-lg mt20-md mb20-md">
                      コレデモ、キレイ？
                    </p>
                    <p className="text">
                      …その時彼が見た女の顔は、耳元まで口が裂けており、人の物とは思えない鋭い歯がびっしりと生えていたそう<br/>
                      身の危険を察知した彼は、すぐにその場から全速力で逃げ出したのだが、女はその華奢な見た目とは裏腹に物凄い速さで追いかけてきて、彼は物の数秒足らずで回り込まれてしまった<br/>
                      <br/>
                      そして恐怖で固まる彼に、女が何処からともなく大ばさみを取り出してにじり寄ってきた<br/>
                      <br/>
                      彼は何とか最後の力を振り絞り、全身を奮い立たせて「助けてー！」と大きな声で助けを呼んだ<br/>
                      すると不思議なことが起きた<br/>
                      <br/>
                      さっきまでこちらに迫っていた女の足が止まり、下を向いて何かを見つめている<br/>
                      その視線の先を追うと、地面に落ちている食べ掛けの“べっこう飴”が見えた<br/>
                      <br/>
                      恐らく叫んだ際に、口に入っていたものが飛び出していたのだろう<br/>
                      <br/>
                      女はそのべっこう飴をしばらく見ていたかと思うと、突然地べたに這いつくばりその飴を無我夢中で食べ始めた<br/>
                      <br/>
                      突然の状況に困惑した彼だったが、女がべっこう飴に気を取られているその隙に、這いつくばりながらも何とか近くのコンビニへ駈け込み助かったそうだ<br/>
                      <br/>
                      …どうだろう？ <br/>
                      <br/>
                      とてもにわかには信じられない話で、医者や親御さんの話では、恐怖によるパニックであらぬ妄想を抱いているのだろう…と言っていた。<br/>
                      <br/>
                      しかし私はそうは思えなかった、根拠は無いが、私にはわかるのだ<br/>
                      <br/>
                      彼は本当にあったことを話している。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="row">
                <div className="col12-lg col12-md">
                  <div className="borderBox">
                    <h2 className="h2"><span className="-font20-lg -font14-md">事件ファイル 4</span><br/>終息</h2>
                    <p className="text">
                      目撃者の報告から1年ほど経過した。<br/>
                      警察の捜査は相変わらず進展はないが、続いている。<br/>
                      <br/>
                      そして例の目撃者以降、事件がピタリと止んだ。<br/>
                      <br/>
                      犯人が警戒しているのか？<br/>
                      或いは何かしらの目的が達成されたのか？<br/>
                      真相は定かではないが、兎も角あの惨い殺人の被害者が出ていないのは幸いである。<br/>
                      <br/>
                      世間の人々は、この一連の事件に対し、当初は恐怖や哀れみを抱いていたが、その感覚は時と共に薄れ、感興だけが一部の人々の中に残った。<br/>
                      <br/>
                      噂や憶測が交差し、事件の闇はより深く混沌を増していく中、今犯人の女はこう呼ばれ、受け継がれている
                    </p>
                    <p className="text -colorRed -font30-lg -font25-md mt20-lg mb20-lg mt20-md mb20-md">
                      口裂け女
                    </p>
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

export default Kuchisake;