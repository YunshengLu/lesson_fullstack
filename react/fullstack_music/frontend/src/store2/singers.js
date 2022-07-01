let defaultState = {
    singersList: [],
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_SINGER': 
        return {
            ...state,
            singersList: action.data
        }
    }
    return state
}

export default reducer