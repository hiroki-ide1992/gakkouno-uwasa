import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* Content
---------------------------- */
import Logo1 from '../component/logo1';

/* Image
---------------------------- */
import closeFront from '../../img/common/nav_close_front.png';
import closeBack from '../../img/common/nav_close_back.png';
import openFront from '../../img/common/nav_open_front.png';
import openBack from '../../img/common/nav_open_back.png';


type Menu = {
  page: string,
  menuLogo: string,
  id: number,
  list:{ index: string; title: string; }[]
};

const AtMenu: React.FC<Menu> = ({ page, list, menuLogo, id}) => {

  const [open, setOpen] = useState<boolean>(false);

  return(
    <>
      <nav className={`atMenu ${open ? "active":""} ${page}`}>

        <div className="atMenu__trigger" id="Menu" onClick={() => setOpen(!open)}>
          <div className="close">
            <img className="atMenu__front" src={closeFront} alt="一覧" />
            <img className="atMenu__back" src={closeBack} alt="" />
          </div>
          <div className="open">
            <img className="atMenu__front" src={openFront} alt="閉じる" />
            <img className="atMenu__back" src={openBack} alt="" />
          </div>
        </div>
        <div className="atMenu__cover">
          <div className="atMenu__cover2">
            <h2 className="atMenu__category"><img src={require(`../../img/top/${menuLogo}`)} alt="" /></h2>
            <ul className="atMenu__list">
              {
                list.map((data:any, index:number) => {
                  return(
                    <li key={index} className="atMenu__item">
                      <Link to={page + data.index} className={`atMenu__link ${index ===  id ? "active":"" }`} onClick={() => setOpen(!open)}>{data.title}</Link>
                    </li>
                  )
                })
              }
            </ul>
            <div className="atMenu__logo"><Link to="/"><Logo1 /></Link></div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default AtMenu;