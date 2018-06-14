import React, { Component } from 'react';

export class Image extends Component {  
    render() {
      return (        
        <article>
            <div id="img-div">
                <img id="img-caption" src="pic_trulli.jpg" alt="Pic Goes Here"/>
            </div>
        </article>       
      );
    }
  }