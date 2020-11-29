import Listings from './components/listings.js';
import data from './reducers/listingsDataReducer.js';
import Filter from './components/filter.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Modal from './components/modal.js';
import ReactDOM from 'react-dom';
import React from 'react';
import  './sass/app.scss';
import allReducers from './reducers/allreducers.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import MobilNav from './components/mobilNav.js'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      populateFormsData: '',
      finished_basement: false,
      max_floor_space: 8000 ,
      swimming_pool: false,
      max_price: 10000000,
      filteredData: data,
      min_floor_space: 0,
      min_price:   0 ,
      State: 'All',
      HomeType: 'All',
      bedrooms: 0,
      bathrooms: 0,
      sortby: 'price-dsc',
      data: data,
      view: 'box',
      search: '',
      Gym: false,
      Elevator: false,

  
      
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    // this.changeView = this.changeView.bind(this)
    
    
  }

  componentDidMount(){

    let data = this.state.data.sort((a,b) => {
      return a.price - b.price


    })
    this.setState({
      data
    })

  }


 


  

  change(event){
    const value =(event.target.type === "checkbox")? event.target.checked : event.target.value
    const name = event.target.name

    this.setState({
      [name] : value

    }, () => {
      console.log(this.state)
      this.filteredData()
     
     
    
     
    })


  }

  // changeView(viewName) {
      
  //   this.setState({
  //     view: viewName
  //   })
  // }

  filteredData(){
    let newData = this.state.data.filter((item) => {
      return item.price >= this.state.min_price && 
      item.price <= this.state.max_price && 
      item.floorSpace  >= this.state.min_floor_space && 
      item.floorSpace <= this.state.max_floor_space  &&
      item.bedrooms >= this.state.bedrooms &&
      item.bathrooms >= this.state.bathrooms

  
    })
    
    if(this.state.HomeType !== "All") {
        newData = newData.filter((item) => {
        return item.homeType === this.state.HomeType
      })
    } 
    

    if(this.state.State !== "All") {
      newData =  this.state.data.filter((item) => {
        return item.state === this.state.State
      })

    }

    if(this.state.sortby === 'price-dsc'){

      newData = newData.sort((a,b) => {
        return a.price - b.price

      })
     
    }

    if(this.state.sortby === 'price-asc'){

      newData = newData.sort((a,b) => {
        return b.price - a.price

      })

     
    }

    if(this.state.search !==  ''){
      console.log('hello')
      newData = newData.filter((item) => {
        let state = item.state.toLowerCase()
        let searchText = this.state.search.toLowerCase()
        let n = state.match(searchText)

        if(n !== null) {
          return true
        }

      })
    }
  

    if(this.state.Gym === true){
      newData = newData.filter((item) => {
        return item.extras[0] == 'Gym'
       

      })

     
    }

    
    if(this.state.swimming_pool === true){
      newData = newData.filter((item) => {
        return item.extras[1] == 'swimming_pool'
       

      })

     
    }
  

    if(this.state.finished_basement === true){
      newData = newData.filter((item) => {
        return item.extras[2] == 'finished_basement'
       

      })

     
    }

    
    if(this.state.Elevator == true){
      newData = newData.filter((item) => {
        // console.log(item.extras[3] == 'Elevator')
        return item.extras[3] == 'Elevator'
       

      })

     
    }




    this.setState({
      filteredData: newData


    })

   

  }

  populateForms(){

    // State
    let states = this.state.data.map((item) => {
      return item.state

    })

    states = new Set(states)
    states = [...states]

   states = states.sort()
    

    // homeType

    let  homeTypes = this.state.data.map((item) => {
      return item.homeType

    })
    

    homeTypes = new Set(homeTypes)

    homeTypes = [...homeTypes]

    homeTypes = homeTypes.sort()


    // bedrooms
    let bedrooms = this.state.data.map((item) => {
      return item.bedrooms

    })

    bedrooms = new Set(bedrooms)

    bedrooms = [...bedrooms]

    // bathrooms
    

    let bathrooms = this.state.data.map((item) => {
      return item.bathrooms

    })

    bathrooms = new Set(bathrooms)

    bathrooms = [...bathrooms]


    
    
    this.setState({

      populateFormsData: {

      bathrooms,
      states,
      homeTypes,
      bedrooms,
      
   
      }
    }, () => {
        // console.log( this.state.populateFormsData)
   
    })

  
 
  }

  
  


  render() {
    return (
      <div>
         <Header /> 
         <section className="group" id="content-area">
           <Filter Change = {this.change} globalState= {this.state} poulateAction= {this.populateForms} />
           <Listings changeView = {this.changeView} data = {this.state.filteredData} Change = {this.change}   globalState= {this.state} />
         </section>
      <MobilNav />
      <Footer />
      </div>
    )
  }
}

const store = createStore(allReducers)


ReactDOM.render(<Provider store={store}><Modal/></Provider> , document.getElementById('modal'));
ReactDOM.render(<Provider store={store}><App/></Provider> , document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));


