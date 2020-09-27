import React, { Component } from 'react'
import {connect} from 'react-redux'
import {closeHouse} from '../actions/allActions'
import {Data} from '../reducers/listingsDataReducer'

 class Modal extends Component {
    render() {
        return (
            <section id="modal-section" className={this.props.globalState.showHouse === true ? 'active': ''}>
                <div className="modal">
                    <div onClick={this.props.closeHouse} className="close-modal">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div className="modal-grid">
                        <div className='image-container'>
                            <div style= {{backgroundImage:`url(${this.props.globalState.house.image})`}} className="image"></div>
                        </div>
                        <div className="info">
                            <div className="info-line">
                               <h2>{this.props.globalState.house.city}, {this.props.globalState.house.state}</h2>                      
                            </div>
                            <div className="info-line">
                                <span>{this.props.globalState.house.address}</span>                       
                            </div>
                            <p>{this.props.globalState.house.description} </p> 
                            
                        </div>
                    </div>
                </div>
            </section>
          
        )
    }
}

const mapStateToProps = (state) => {
    return state


}


  


  export  default connect(mapStateToProps, {
      closeHouse,
      Data
  })(Modal)


