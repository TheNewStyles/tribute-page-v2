import React, { Component } from 'react';

export class Main extends Component {  
    render() {
      return (
        <div id="main">
          <header>
            <h1 id="title">Title Goes Here</h1>
          </header>
          <section>
            <h2>Section</h2>
            <article>
              <div id="img-div">
                <img id="img-caption" src="pic_trulli.jpg" alt="Pic Goes Here"/>
              </div>
            </article>
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
            <article>
              <a href="google.com" id="tribute-link" target="_blank">Tribute link goes here</a>
            </article>
          </section>
        </div>
       
      );
    }
  }