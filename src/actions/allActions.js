



export const showHouse = (house) => {
    return  {
        type: 'SHOW_HOUSE',
        payload: house
    }
}


export const closeHouse = (house) => {
    return  {
        type: 'CLOSE_HOUSE',
        payload: house
    }
}



export const openMenu = () => {
    return  {
        type: 'OPEN_MENU',
        
    }
}


export const closeMenu = () => {
    return  {
        type: 'CLOSE_MENU',
        
    }
}