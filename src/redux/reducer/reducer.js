let initialState = {
    count: 0,
    id: "",
    password: "",
    admin: false
}

/* state를 initialState 객체로 초기화 해주기 */
function reducer(state = initialState, action) {
    console.log(action);
    if(action.type === "INCREMENT") {
        return {
            ...state, count: state.count + action.payload.num
        };
    }
    if(action.type === "DECREMENT") {
        return {
            ...state, count: state.count - 1
        };
    }
    if(action.type === "MULTIPLI") {
        return {
            ...state, count: state.count * action.payload.num
        };
    }
    if(action.type === "DIVISION") {
        return {
            ...state, count: state.count / action.payload.num
        };
    }
    if(action.type === "LOGIN") {
        return {
                ...state, id: action.payload.id, password: action.payload.password, admin: action.payload.admin
        };
    }
    return { ...state };
}

/* reducer를 내보내주기 */
export default reducer;