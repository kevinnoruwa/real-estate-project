import React from 'react'
import data from '../reducers/listingsDataReducer.js';



class Filter extends React.Component {
    constructor(){
      super()
      this.state = {
       
       data,
       
      }
      this.states = this.states.bind(this)
      this.homeTypes = this.homeTypes.bind(this)
     
   
    }
 
    componentDidMount(){
        this.props.poulateAction()
        console.log(this.props.globalState.min_price)
       
    }


    states() {
        
        if(this.props.globalState.populateFormsData.states !== undefined){
         
        return this.props.globalState.populateFormsData.states.map((item) => {
            return (
            <option key={item} value={item}>{item}</option>
            )
           
        })

    }
     
    }


   

    homeTypes() {

        if(this.props.globalState.populateFormsData.homeTypes !== undefined){


            return this.props.globalState.populateFormsData.homeTypes.map((item) => {
                return (
                <option key={item} value={item}>{item}</option>
                )
               
            })
           
         
         
    
        }


    }

 


    render(){
      return (
          <section id="filter">
              <div className="inside">
                <h4>Filter</h4>
                <div className='label' >State:</div>
                <select name="State" className="State" onChange={this.props.Change}>
                    <option value="All">All types</option>
                
                    {this.states()}
                    
                 
                </select>
                <div className='label' >Home Selection:</div>
                <select name="HomeType" className="homeType" onChange={this.props.Change}>
                    <option value="All">All types</option>
                    {this.homeTypes()}
                  
                </select>
                <select name="bedrooms" className="bedrooms"  onChange={this.props.Change}>
                    <option value= {0}>0+ Bedrooms</option>
                    <option value= {1}>1+ Bedrooms</option>
                    <option value= {2}>2+ Bedrooms</option>
                    <option value= {3}>3+ Bedrooms</option>
                    <option value= {4}>4+ Bedrooms</option>      
                </select>
                <select name="bathrooms" className="filters bathrooms"  onChange={this.props.Change}>
                    <option value= {0}>0+ Bathrooms</option>
                    <option value= {1}>1+ Bathrooms</option>
                    <option value= {2}>2+ Bathrooms</option>
                    <option value= {3}>3+ Bathrooms</option>
                    <option value= {4}>4+ Bathrooms</option>
                   
                </select>
                <div className="filters price">
                    <span className="title">Price</span>
                    <input  onChange={this.props.Change} value={this.props.globalState.min_price} type="text"className="min-price" name="min_price"/>
                    <input  onChange={this.props.Change} value={this.props.globalState.max_price} type="text" className="max-price" name="max_price"/>
                </div>
                <div className="filters floor-space">
                    <span className="title">Floor space</span>
                    <input  onChange={this.props.Change} type="text"className="min-floor-space" value={this.props.globalState.min_floor_space}  name="min_floor_space"/>
                    <input  onChange={this.props.Change}type="text" className="max-floor-space" value={this.props.globalState.max_floor_space}  name="max_floor_space"/>
                </div> 
                <div  onChange={this.props.Change} className="extras filters">
                    <span className="title">Extras</span>
                    <div className='label-container group'> 
                        <div className='label-name'>Elevators</div> 
                        <input name="Elevator" type="checkbox"  onChange={this.props.Change}/> 
                    </div>
                    <div  className='label-container group' > 
                        <div className='label-name'>Swimming pool</div> 
                        <input name="swimming_pool" type="checkbox"  onChange={this.props.Change}/> 
                    </div>
                    <div  className='label-container group' > 
                        <div className='label-name'>Finished basement</div> 
                        <input name="finished_basement" type="checkbox"  onChange={this.props.Change}/> 
                    </div>
                    <div  className='label-container group'  > 
                        <div className='label-name'>Gym</div> 
                        <input  name="Gym" type="checkbox" onChange={this.props.Change}/> 
                    </div>
                </div>   
                <div className='border-design'></div>
                <div className='border-design'></div>
                <div className='border-design'></div>
                <div className='border-design'></div>
                <div className='border-design'></div>
                <div className='border-design'></div>
                <div className='border-design'></div>
                <div className='border-design'></div>
                <div className='border-design'></div>
                <div className='border-design'></div>
              </div>  
            
          </section>
       
      )
    }

  }

  export  default Filter