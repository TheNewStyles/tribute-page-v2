import React, { Component } from 'react';

export class TributeInfo extends Component {  
    render() {
      return (        
        <article>
              <div id="tribute-info">
                <header>
                  <h2>tribute info title</h2>
                </header>
                <p>
                  Tribute info paragraph
                </p> 
                <aside>
                  tribute info aside. More info or picture
                </aside>
                <footer>
                  tribute info footer
                </footer>
              </div>
        </article>    
      );
    }
}