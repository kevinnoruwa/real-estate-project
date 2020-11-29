import React from 'react'
import {connect} from 'react-redux'
import  {openMenu} from '../actions/allActions.js'


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
              <a href="/public/home.html"> 
              Ready Homes
              <i className="fa fa-key" aria-hidden="true"></i>

              </a>
             
              </div>
            <nav>
                <a href="">Create ads</a>
                <a href="">About us</a>
                <a href="">Log in</a>
                <a href="" className="register-btn">Register</a>
            </nav>
          <div onClick={this.props.openMenu} className='menu-logo'>
            <i className='fa fa-bars' aria-hidden='true'></i>
          </div>
        </header>
      )
    }
  
  }


  

  const mapStateToProps = (state) => {
    
    return state
  }
  


  export  default connect(mapStateToProps, {
    openMenu

  })(Header)

  