import React from 'react'


class Header extends React.Component {
    constructor(){
      super()
      this.state = {
        name: "joe"
      }
    }
    render(){
      return (
        <header className="group">
            <div className="logo">
              <a href="http://127.0.0.1:5500/public/home.html"> 
              Ready Homes
              <i className="fa fa-key" aria-hidden="true"></i>

              </a>
             
              </div>
            <nav>
                <a href="localhost:300">Create ads</a>
                <a href="localhost:300">About us</a>
                <a href="localhost:300">Log in</a>
                <a href="localhost:300" className="register-btn">Register</a>
            </nav>
        </header>
      )
    }
  
  }

  export  default Header