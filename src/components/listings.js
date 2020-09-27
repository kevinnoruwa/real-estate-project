import React from 'react'
import { connect } from 'react-redux'
import{ showHouse } from '../actions/allActions.js'



class Listings extends React.Component {
    constructor(){
      super()
      this.state = {
        
        
      }
    
     

    }

    loopListings()  {
     

      if(this.props.data === undefined || this.props.data.length === 0) {
        

        return "Sorry your filter did not match any listing"
      
      }

      const dataListings = this.props.data

      return dataListings.map((listings, index) => {
        if(this.props.globalState.view === "box") {
        return (
          <div className="col-md-3" key={index}>
          <div className="house">
            <div onClick={this.props.showHouse.bind(null, listings)} className="listing-img" style={{background:`url(${listings.image}) no-repeat center center`}}>
        <span className="address">{listings.address}</span>
              <div className="details">
                <div className="user-img"></div>
                <div className="user-details">
                  <span className="user-name">{listings.name}</span>
                  <span className="post-date">05/05/2020</span>
                </div>
                <div className="listing-details">
                
                  <div className="floor-space">
                    <i className="fa fa-square-o"></i>
                    <span>{listings.floorSpace} sqft</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed"></i>
                    <span>{listings.bedrooms} bedrooms</span>
                  </div> 
                  <div className="bathrooms">
                    <i className="fa fa-bath"></i>
                    <span>{listings.bathrooms} bathrooms</span>
                  </div> 
                </div>
              </div>
            </div>    
            <div className="bottom-info">
              <span className="price">${listings.price}</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>{listings.city} {listings.state} </span>
              </span>
            </div>
          </div>
        </div>
        )


        } else {
        // this is when the view is long
        return (
          <div className="col-md-3" key={index}>
          <div onClick={this.props.showHouse.bind(null, listings)} className="listings">
            <div className="listing-img" style={{background:`url(${listings.image}) no-repeat center center`}}>
              <span className="address">{listings.address}</span>
              <div className="details">
                <div className="user-img"></div>
                <div className="user-details">
                  <span className="user-name">{listings.name}</span>
                  <span className="post-date">05/05/2020</span>
                </div>
                <div className="listing-details">
                
                  <div className="floor-space">
                    <i className="fa fa-square-o"></i>
                    <span>{listings.floorSpace} sqft</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed"></i>
                    <span>{listings.bedrooms} bedrooms</span>
                  </div> 
                  <div className="bathrooms">
                    <i className="fa fa-bath"></i>
                    <span>{listings.bathrooms} bathrooms</span>
                  </div> 
                </div>
              </div>
            </div>    
            <div className="bottom-info">
              <span className="price">${listings.price}
                <span className='month-label'>{listings.month}</span> 
              </span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>{listings.city}, {listings.state} </span>
              </span>
            </div>
          </div>
        </div>
        )
       

        }
      })
      
    }
    render(){
      return (
          <div id="listings" className="listings">
            <div className="search-area">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="text" name="search"  onChange={this.props.Change}/>
            </div>
            <div className="sortby-area">
              <div className="results">{this.props.data.length} listings found</div>
              <div className='sort-options'>
                <select name="sortby" className="sortby" onChange={this.props.Change}>
                  <option name="sortby" value="price-dsc">Lowest price</option>
                  <option name="sortby" value="price-asc">Highest price</option>   
                </select>
                <div className="view">
                  <i className="fa fa-list" aria-hidden="true" ></i>
                  <i className="fa fa-th" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <section className="listings-results">
              {this.loopListings()} 
            </section>
            <section className="pagination">
              <ul className="pages">
                <li>Prev</li>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>Next</li>
              </ul>
            </section>
             
          </div> 
       
      )
    }
  
  }

  const mapStateToProps = (state) => {
    console.log(state)
    return state
  }
  


  export  default connect(mapStateToProps, {
    showHouse

  })(Listings)