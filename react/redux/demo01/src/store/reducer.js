const defaultState = {
    inputValue: "Write Something",
    list: [
        '这是第一段',
        '这是第二段',
        '这是第三段',
        '这是第四段',
    ],
}
export default (state = defaultState,action) => {
    console.log(state,action);
    let newState = JSON.parse(JSON.stringify(state));
    // Reducer 里只能接受state,不能改变state
    switch (action.type) {
        case "changeInput":
            return{
                ...state,
                inputValue: action.value
            }
            // newState.inputValue = action.value;
            // return newState;
        case "addItem":
            newState.list.push(newState.inputValue);
            newState.inputValue = ''
            return newState
        default:
            return state;
    }
}