import React, { Component } from 'react';

export class TributeLink extends Component {     
    render() {
      return (        
        <article>
          <div className="flex-container" >
            <p className="flex-item margin-bottom">If you have time, you should read more about this incredible human being on his <a href="https://en.wikipedia.org/wiki/Bill_Gates" id="tribute-link">Wikipedia entry.</a></p>
          </div>        
        </article>
      );
    }
}