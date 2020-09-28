const intialState =  {
    showHouse: false,
    closeHouse: true,
    openMenu: false,
    house: {},
}
let newState;

 const appReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'SHOW_HOUSE':
            newState = Object.assign({}, state, {
                house: action.payload,
                showHouse: true,

            })
            return newState

        case 'CLOSE_HOUSE':
                newState = Object.assign({}, state, {
                   
                    showHouse: false,
    
                })
          
            return newState
            break;
        case 'OPEN_MENU':
                newState = Object.assign({}, state, {
                   openMenu: true
                    
    
                })
               
           
            return newState
            break;
        case 'CLOSE_MENU':
                newState = Object.assign({}, state, {
                    openMenu: false
    
                })
               
            return newState
            break;
        default:
           
            return state
            break;
    }
}



export default appReducer