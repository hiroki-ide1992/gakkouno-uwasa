import * as React from 'react';
import logo       from '../../img/common/logo1.png';
import logoLight  from '../../img/common/logo1-light.png';

/* Component
---------------------------- */

const Logo1: React.FC = () => {


  return(
    <>
      <div className="logo1">
        <img className="logo1__front" src={logo} alt="" />
        <img className="logo1__back" src={logoLight} alt="" />
      </div>
    </>
  )
}

export default Logo1;