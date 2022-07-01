let defaultState = {
    rankList: [],
};
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_RANKLIST':
            // console.log('||||||||||||||||||||');
            return {
                ...state,
                rankList: action.data,
            };
            break;
    }
    return state;
};

export default reducer;
