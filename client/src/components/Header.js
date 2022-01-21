import React, { Component } from 'react';
class Header extends Component {
    logo=require("../images/chadopt-text-white.png")
    
    render() {
        return (
        <header>
            <img src={this.logo}/>
      <nav>
          <ul>
              <li><a href="/">ACCUEIL</a></li>
              <li> <a href="Admin">ADMIN</a></li>

              </ul>
              </nav>
              </header>
        );
    }
}

export default Header;