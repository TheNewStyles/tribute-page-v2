import React, { Component } from 'react';

export class Image extends Component {  
    render() {
      return (        
        <article>
            <div id="img-div" className="flex-container">
                <img id="image" className="flex-item" src="./images/BillMelinda1.jpg" alt="Bill and Melinda Gates in Africa"/>
                <div id="img-caption" className="flex-item">
                    <p>
                    Gates and his wife combined three family foundations and Gates donated stock valued at $5 billion to create the charitable Bill & Melinda Gates Foundation, which was identified by the Funds for NGOs company in 2013, as the world's wealthiest charitable foundation, with assets reportedly valued at more than $34.6 billion.
                    </p>                   
                </div>
            </div>
        </article>       
      );
    }
}

export default Image;