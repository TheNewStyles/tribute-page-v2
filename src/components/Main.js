import React, { Component } from 'react';
import Image from './Image';
import Header  from './Header';
import TributeInfo from './TributeInfo';
import TributeLink from './TributeLink';

export class Main extends Component {  
  render() {
    return (
      <div className="background-green" id="main">
        <Header/>
        <section>            
          <Image/>
          <TributeInfo/>
          <TributeLink/>
        </section>
      </div>       
    );
  }
}

export default Main;