import React, { Component } from 'react'
import {connect} from 'react-redux'
import {closeMenu} from '../actions/allActions.js'

 class MobilNav extends Component {
    render() {
        return (
            <section className={this.props.globalState.openMenu === true ? 'active' : ''} id='mobil-nav'>
                <div className='inside'>
                    <div className='header-title'>
                        <span>Ready homes</span>
                    </div>
                    <div onClick={this.props.closeMenu} className='close-nav'>
                        <i className='fa fa-times' aria-hidden="true"></i>

                    </div>
                    <nav>
                        <div onClick={this.props.closeMenu}>
                            <i className="fa fa-home" aria-hidden="true"></i>
                            <a href='#'>Create Ads</a>
                        </div>
                        <div onClick={this.props.closeMenu}>
                            <i className="fa fa-key" aria-hidden="true"></i>
                            <a href='#'>About us </a>
                        </div >
                        <div onClick={this.props.closeMenu}>
                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                            <a href='#'>log in</a>
                        </div>
                        <div onClick={this.props.closeMenu}> 
                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                            <a href="#">register</a>
                        </div>  
                    </nav>
                    <div className='logo'>
                        <i className="fa fa-key" aria-hidden="true"></i>
                    </div>
                </div>
            </section>
          
        )
    }
}




const mapStateToProps = (state) => {
   
    
    return state
  }

  export default connect(mapStateToProps, {
    closeMenu

  })(MobilNav)

  
