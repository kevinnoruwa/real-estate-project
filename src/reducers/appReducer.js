const intialState =  {
    showHouse: false,
    closeHouse: true,
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
        default:
           
            return state
            break;
    }
}



export default appReducer