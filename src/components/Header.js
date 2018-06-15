import React, { Component } from 'react';

export class Header extends Component {  
    render() {
      return (        
        <header className="flex-container">
            <h1 id="title" className="flex-item">Bill Gates</h1>
            <div className="flex-item"><p> Business Leader, Entrepreneur, Philanthropist</p></div>
        </header>  
      );
    }
}