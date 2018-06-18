import React, { Component } from 'react';

export class TributeInfo extends Component {  
  render() {
      return (        
        <article>
              <div id="tribute-info" className="flex-container">
                <header className="flex-item">
                  <h2>Here's a time line of Bill Gate's life:</h2>
                </header>
                <ul className="flex-item">
                  <li>Born October 28, 1955 in Seattle, Washington</li>
                  <li>When Gates was in the eighth grade, the Mothers' Club at the school used proceeds from Lakeside School's rummage sale to buy a Teletype Model 33 ASR terminal and a block of computer time on a General Electric (GE) computer for the school's students</li>
                  <li>He scored 1590 out of 1600 on the Scholastic Aptitude Tests (SAT) and enrolled at Harvard College in the autumn of 1973.</li>
                  <li>In 1974 Gates drops out of Harvard to start Microsoft.</li>
                  <li>In the first five years, according to Bill Gates' own claims, he personally reviewed every line of code the company shipped.</li>
                  <li>Microsoft launched its first retail version of Microsoft Windows on November 20, 1985.</li>
                  <li>On June 15, 2006, Gates announced that over the next two years he would transition out of his day-to-day role to dedicate more time to philanthropy.</li>
                  <li>Gates was the world's highest-earning billionaire in 2013, as his net worth increased by US$15.8 billion to US$78.5 billion.</li>
                </ul>
                <footer className="flex-item">
                  <blockquote>
                    <p>
                    <i>"Bill Gates ran one of the most mission-driven companies I can think of. Microsoft had a great mission. To put a computer on every desktop and in every home."</i>
                    <span>- Mark Zuckerberg Founder of Facebook</span>  
                    </p>                  
                  </blockquote>                
                </footer>
              </div>
        </article>    
      );
    }
}

export default TributeInfo;