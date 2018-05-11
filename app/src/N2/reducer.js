const DEFAULT_STATE =
    {
        page: 1
    }
;

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "PREVIOUS":
            if (action.payload) {
                let _newPage = state.page - 1;
                return {...state, page: _newPage}
            }
            return state;
        case "NEXT":
            if (action.payload) {
                let _newPage = state.page + 1;
                return {...state, page: _newPage}
            }
            return state;
        default:
            return state;
    }

}